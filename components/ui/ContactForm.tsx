'use client';

import { useState } from 'react';
import SvgIcon from '@/components/ui/SvgIcon';
import { WHATSAPP_URL } from '@/lib/constants';
import { SERVICE_CATALOG, slugify } from '@/lib/services';
import { SERVICE_PRICING, type PricingPlan } from '@/lib/pricing-data';
import { inr } from '@/components/ui/pricing';
import { cn } from '@/lib/utils';

const FIELD = 'w-full min-w-0 rounded-[9px] border border-line bg-off px-[13px] font-sans text-[13px] leading-normal text-navy transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus:border-emerald focus:outline-none focus:shadow-[0_0_0_3px_#EAFAF4] max-[460px]:text-base';
const LABEL = 'mb-2 block font-display text-[11px] font-semibold text-navy-2 [&_span]:font-normal [&_span]:text-muted';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'da45cd85-68cc-4b20-b1d1-44b9223b4e86';

export interface ContactFormProps {
  initialService?: string; // category slug, e.g. 'gst-tax'
  initialItem?: string;    // item slug, e.g. 'gst-registration'
  initialPlan?: string;    // plan name, e.g. 'Standard'
  initialMessage?: string;
}

interface SubmittedDetails {
  name: string;
  phone: string;
  email: string;
  categoryName: string;
  serviceName: string;
  planName?: string;
  planPrice?: string;
  message: string;
  whatsappUrl: string;
}

/**
 * Plan-aware consultation contact form:
 * Dynamically binds Category -> Specific Service Item -> Selected Pricing Tier (e.g., GST Registration ₹599/₹1,999/₹4,999)
 * and dispatches lead details to Web3Forms and WhatsApp.
 */
export default function ContactForm({
  initialService = 'general',
  initialItem = '',
  initialPlan = '',
  initialMessage = '',
}: ContactFormProps) {
  // Find initial matching category and item
  const foundCategory = SERVICE_CATALOG.find((s) => s.slug === initialService);
  const foundItemName = foundCategory?.items.find((x) => slugify(x) === initialItem) ?? (initialItem ? initialItem : '');
  const foundItemSlug = foundItemName ? slugify(foundItemName) : '';

  const [category, setCategory] = useState<string>(initialService);
  const [item, setItem] = useState<string>(foundItemSlug);
  const [plan, setPlan] = useState<string>(initialPlan);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: initialMessage,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedDetails, setSubmittedDetails] = useState<SubmittedDetails | null>(null);

  // Category and sub-services resolution
  const activeCategory = SERVICE_CATALOG.find((s) => s.slug === category);
  const availableItems = activeCategory ? activeCategory.items : [];

  // Current item and plans resolution
  const currentItemName = availableItems.find((x) => slugify(x) === item) ?? (item || '');
  const currentItemSlug = currentItemName ? slugify(currentItemName) : '';
  const availablePlans: PricingPlan[] = currentItemSlug ? (SERVICE_PRICING[currentItemSlug] ?? []) : [];
  const activePlan = availablePlans.find((p) => p.name.toLowerCase() === plan.toLowerCase()) ?? (plan ? availablePlans[0] : null);

  const update = (field: keyof typeof formData, value: string) =>
    setFormData((previous) => ({ ...previous, [field]: value }));

  const handleCategoryChange = (newCategorySlug: string) => {
    setCategory(newCategorySlug);
    if (newCategorySlug === 'general') {
      setItem('');
      setPlan('');
    } else {
      const cat = SERVICE_CATALOG.find((s) => s.slug === newCategorySlug);
      if (cat && cat.items.length > 0) {
        const firstItem = cat.items[0];
        const firstSlug = slugify(firstItem);
        setItem(firstSlug);
        const plans = SERVICE_PRICING[firstSlug] ?? [];
        setPlan(plans.length > 0 ? (plans.find((p) => p.popular)?.name ?? plans[0].name) : '');
      } else {
        setItem('');
        setPlan('');
      }
    }
  };

  const handleItemChange = (newItemSlug: string) => {
    setItem(newItemSlug);
    const plans = newItemSlug ? (SERVICE_PRICING[newItemSlug] ?? []) : [];
    if (plans.length > 0) {
      setPlan(plans.find((p) => p.popular)?.name ?? plans[0].name);
    } else {
      setPlan('');
    }
  };

  const handlePlanSelect = (selectedPlan: PricingPlan) => {
    setPlan(selectedPlan.name);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    // Check honeypot spam protection
    const botcheck = (formElement.elements.namedItem('botcheck') as HTMLInputElement)?.checked;
    if (botcheck) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const categoryName = activeCategory?.name ?? 'General Consultation';
    const serviceName = currentItemName || categoryName;

    // WhatsApp drafted text
    const textLines = [
      `Hello TaxwiseIndia, I would like to discuss ${serviceName}${activePlan ? ` (${activePlan.name} plan - ${inr(activePlan.price)})` : ''}.`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      activePlan ? `Selected Plan: ${activePlan.name} (${inr(activePlan.price)})` : '',
      `Message: ${formData.message || 'Please help me with the next steps.'}`,
    ].filter(Boolean);

    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(textLines.join('\n'))}`;

    try {
      const payload = new FormData(formElement);
      payload.set('access_key', WEB3FORMS_ACCESS_KEY);
      payload.set(
        'subject',
        activePlan
          ? `New Inquiry: ${formData.name} - ${serviceName} [${activePlan.name} - ${inr(activePlan.price)}]`
          : `New Inquiry: ${formData.name} - ${serviceName}`
      );
      payload.set('from_name', 'TaxwiseIndia Website');
      payload.set('service_category', categoryName);
      payload.set('service_item', serviceName);
      if (activePlan) {
        payload.set('selected_plan', activePlan.name);
        payload.set('plan_price', inr(activePlan.price));
      }
      if (formData.email) {
        payload.set('replyto', formData.email);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedDetails({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          categoryName,
          serviceName,
          planName: activePlan?.name,
          planPrice: activePlan ? inr(activePlan.price) : undefined,
          message: formData.message,
          whatsappUrl,
        });
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Unable to submit your inquiry. Please try again or reach out on WhatsApp.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred while submitting. Please check your connection or contact us via WhatsApp.');
    }
  };

  const handleEditDetails = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div id="contact-form" className="rounded-[18px] border border-line bg-white p-5 scroll-mt-25 shadow-[0_1px_2px_rgba(7,26,43,.04),0_30px_60px_-30px_rgba(7,26,43,.3)] sm:rounded-[23px] sm:p-7 lg:p-9">
      <div className="mb-5.75 flex items-center justify-between">
        <span className="eyebrow">
          <i className="dot"></i>
          {activePlan ? `${currentItemName} · ${activePlan.name} Plan` : 'Your next step'}
        </span>
        <SvgIcon id="i-arrow" className="i size-5 -rotate-45 text-emerald-ink" />
      </div>

      <h2 className="m-0 font-display text-2xl font-bold tracking-[-.03em] text-navy sm:text-[26px]">
        {currentItemName ? `Get started with ${currentItemName}` : 'What can we help you with?'}
      </h2>
      <p className="mb-6.5 mt-2.5 text-xs text-muted">
        {activePlan
          ? `Fill in your details to start your ${activePlan.name} plan (${inr(activePlan.price)}).`
          : 'A few details to start a more useful conversation.'}
      </p>

      {status === 'success' && submittedDetails ? (
        <div className="py-5" role="status" aria-live="polite">
          <div className="flex items-center gap-3">
            <span className="key key-sm bg-emerald text-navy">
              <SvgIcon id="i-check" className="size-5" />
            </span>
            <div>
              <span className="eyebrow text-[11px]"><i className="dot"></i>Inquiry Received</span>
              <h3 className="m-0 font-display text-xl font-bold tracking-[-.03em] text-navy sm:text-2xl">
                Your message is ready &amp; sent.
              </h3>
            </div>
          </div>

          <p className="mt-3.5 text-sm leading-[1.8] text-muted">
            Thank you, <strong className="font-semibold text-navy">{submittedDetails.name}</strong>. We have received your inquiry. A TaxwiseIndia expert will review your requirements and reach out to you.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-off p-4 text-xs leading-[1.8] text-navy-2">
            <div className="grid grid-cols-[85px_1fr] gap-1.5 sm:grid-cols-[120px_1fr]">
              <span className="font-medium text-muted">Category:</span>
              <span className="font-semibold text-navy">{submittedDetails.categoryName}</span>

              <span className="font-medium text-muted">Service:</span>
              <span className="font-semibold text-navy">{submittedDetails.serviceName}</span>

              {submittedDetails.planName && (
                <>
                  <span className="font-medium text-muted">Selected Plan:</span>
                  <span className="font-bold text-emerald-ink">
                    {submittedDetails.planName} {submittedDetails.planPrice ? `(${submittedDetails.planPrice})` : ''}
                  </span>
                </>
              )}

              <span className="font-medium text-muted">Phone:</span>
              <span className="font-semibold text-navy">{submittedDetails.phone}</span>

              {submittedDetails.email && (
                <>
                  <span className="font-medium text-muted">Email:</span>
                  <span className="font-semibold text-navy">{submittedDetails.email}</span>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            {submittedDetails.whatsappUrl && (
              <a
                href={submittedDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy flex-1 justify-center gap-2"
              >
                <SvgIcon id="i-send" className="i size-4" />
                Continue on WhatsApp
              </a>
            )}
            <button
              type="button"
              className="btn btn-outline border-line text-xs font-semibold text-navy hover:bg-off"
              onClick={handleEditDetails}
            >
              Edit your details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4.75">
          {/* Web3Forms Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          {status === 'error' && (
            <div className="rounded-[10px] border border-red-200 bg-red-50 p-3.5 text-xs text-red-800" role="alert">
              <p className="font-medium leading-relaxed">{errorMessage}</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello TaxwiseIndia, I had an issue submitting the contact form on your website. My inquiry is regarding ${currentItemName || 'Taxwise services'}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 font-semibold text-red-900 underline"
              >
                Click here to chat directly on WhatsApp &rarr;
              </a>
            </div>
          )}

          <div>
            <label htmlFor="contact-name" className={LABEL}>Your name <span>*</span></label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              placeholder="e.g. Rahul Sharma"
              className={`${FIELD} h-11.5`}
              value={formData.name}
              onChange={(event) => update('name', event.target.value)}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="grid grid-cols-1 gap-4.75 sm:grid-cols-2 sm:gap-4">
            <div>
              <label htmlFor="contact-phone" className={LABEL}>Phone number <span>*</span></label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+91 98765 43210"
                className={`${FIELD} h-11.5`}
                value={formData.phone}
                onChange={(event) => update('phone', event.target.value)}
                disabled={status === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={LABEL}>Email <span>(optional)</span></label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={`${FIELD} h-11.5`}
                value={formData.email}
                onChange={(event) => update('email', event.target.value)}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          {/* Service Category Selector */}
          <div>
            <label htmlFor="contact-service" className={LABEL}>I&apos;m interested in</label>
            <select
              id="contact-service"
              name="service"
              className={`${FIELD} h-11.5`}
              value={category}
              onChange={(event) => handleCategoryChange(event.target.value)}
              disabled={status === 'submitting'}
            >
              <option value="general">A little guidance / Not sure yet</option>
              {SERVICE_CATALOG.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sub-Service Selector if category is selected */}
          {category !== 'general' && availableItems.length > 0 && (
            <div>
              <label htmlFor="contact-subservice" className={LABEL}>
                Specific service in {activeCategory?.name}
              </label>
              <select
                id="contact-subservice"
                name="subservice"
                className={`${FIELD} h-11.5`}
                value={item}
                onChange={(event) => handleItemChange(event.target.value)}
                disabled={status === 'submitting'}
              >
                {availableItems.map((svcItem) => (
                  <option key={svcItem} value={slugify(svcItem)}>
                    {svcItem}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Interactive Pricing Plan Selector if plans exist */}
          {availablePlans.length > 0 && (
            <div className="rounded-[14px] border border-line bg-off/70 p-3.5">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="font-display text-[11px] font-semibold text-navy-2">
                  Choose a Plan for {currentItemName}
                </span>
                <span className="text-[10px] text-muted">Click to select plan</span>
              </div>

              {/* Plan Choice Pills */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {availablePlans.map((p) => {
                  const isSelected = activePlan?.name.toLowerCase() === p.name.toLowerCase();
                  return (
                    <button
                      key={p.name}
                      type="button"
                      data-plan-pill={p.name.toLowerCase()}
                      onClick={() => handlePlanSelect(p)}
                      disabled={status === 'submitting'}
                      className={cn(
                        'relative flex flex-col items-start rounded-[10px] border p-2.5 text-left transition-all duration-200 cursor-pointer',
                        isSelected
                          ? 'border-emerald bg-white shadow-[0_0_0_2px_#16B878]'
                          : 'border-line bg-white/70 hover:border-emerald-ink/30 hover:bg-white'
                      )}
                    >
                      {p.popular && (
                        <span className="mb-1 rounded bg-emerald px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-navy">
                          Popular
                        </span>
                      )}
                      <div className="flex w-full items-center justify-between">
                        <span className="font-display text-xs font-bold text-navy">{p.name}</span>
                        {isSelected && <SvgIcon id="i-check" className="size-3.5 text-emerald stroke-3" />}
                      </div>
                      <span className="mt-1 font-display text-[14px] font-bold tracking-tight text-navy">
                        {inr(p.price)}
                        {p.govtFee && <span className="text-[9.5px] font-medium text-navy-2"> + Govt. Fee</span>}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Plan Detail Highlight Card */}
              {activePlan && (
                <div className="mt-3 rounded-[9px] border border-line bg-white p-3 text-xs">
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-display font-semibold text-navy">
                      {activePlan.name} Plan Scope:
                    </span>
                    <span className="font-display font-bold text-emerald-ink">
                      {inr(activePlan.price)}
                      {activePlan.govtFee && <span className="text-[10px] font-normal text-muted"> + Govt. Fee</span>}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">
                    <strong className="font-medium text-navy-2">Best for:</strong> {activePlan.bestFor}
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-1 text-[11px] text-navy-2 sm:grid-cols-2">
                    {activePlan.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <SvgIcon id="i-check" className="size-3 text-emerald stroke-[2.5] flex-none" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div>
            <label htmlFor="contact-message" className={LABEL}>A little about what you need <span>(optional)</span></label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              placeholder="Tell us about your business or the question you have..."
              className={`${FIELD} min-h-22.5 resize-y py-3`}
              value={formData.message}
              onChange={(event) => update('message', event.target.value)}
              disabled={status === 'submitting'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn btn-navy mt-0.5 w-full justify-between disabled:cursor-not-allowed disabled:opacity-75"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg className="size-4 animate-spin text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting your inquiry...
              </span>
            ) : (
              <>
                {activePlan
                  ? `Submit Consultation Request (${activePlan.name} Plan)`
                  : 'Submit Consultation Request'}
                <SvgIcon id="i-arrow" className="i arr" />
              </>
            )}
          </button>

          <p className="-mt-1.5 text-center text-[10px] leading-[1.7] text-muted">
            Details are sent securely to our tax team. We respond within 2–4 business hours.
          </p>
        </form>
      )}
    </div>
  );
}
