'use client';

import { useState } from 'react';
import SvgIcon from '@/components/ui/SvgIcon';
import { WHATSAPP_URL } from '@/lib/constants';
import { SERVICE_CATALOG } from '@/lib/services';

const FIELD = 'w-full min-w-0 rounded-[9px] border border-line bg-off px-[13px] font-sans text-[13px] leading-normal text-navy transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus:border-emerald focus:outline-none focus:shadow-[0_0_0_3px_#EAFAF4] max-[460px]:text-base';
const LABEL = 'mb-2 block font-display text-[11px] font-semibold text-navy-2 [&_span]:font-normal [&_span]:text-muted';

/** Drafts a WhatsApp message from the form and opens it — the visitor presses Send themselves. */
export default function ContactForm({ initialService = 'general' }: { initialService?: string }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: initialService, message: '' });
  const [draftUrl, setDraftUrl] = useState('');
  const update = (field: keyof typeof formData, value: string) => setFormData((previous) => ({ ...previous, [field]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const serviceName = SERVICE_CATALOG.find((service) => service.slug === formData.service)?.name ?? 'General consultation';
    const text = `Hello TaxwiseIndia, I would like to discuss ${serviceName}.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nMessage: ${formData.message || 'Please help me with the next steps.'}`;
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
    setDraftUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact-form" className="rounded-[18px] border border-line bg-white p-5 [scroll-margin-top:100px] shadow-[0_1px_2px_rgba(7,26,43,.04),0_30px_60px_-30px_rgba(7,26,43,.3)] sm:rounded-[23px] sm:p-7 lg:p-9">
      <div className="mb-[23px] flex items-center justify-between">
        <span className="eyebrow"><i className="dot"></i>Your next step</span>
        <SvgIcon id="i-arrow" className="i size-5 -rotate-45 text-emerald-ink" />
      </div>
      <h2 className="m-0 font-display text-2xl font-bold tracking-[-.03em] text-navy sm:text-[26px]">What can we help you with?</h2>
      <p className="mb-[26px] mt-2.5 text-xs text-muted">A few details to start a more useful conversation.</p>

      {draftUrl ? (
        <div className="py-[30px]" role="status">
          <span className="key key-sm"><SvgIcon id="i-check" /></span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-.03em] text-navy">Your message is ready.</h3>
          <p className="mt-2 text-sm leading-[1.8] text-muted">Continue in WhatsApp and press Send to share your inquiry with us.</p>
          <a href={draftUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Open WhatsApp <SvgIcon id="i-arrow" className="i arr" /></a>
          <button type="button" className="mt-[22px] block cursor-pointer border-0 bg-transparent p-0 text-xs text-emerald-ink underline" onClick={() => setDraftUrl('')}>Edit your details</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-[19px]">
          <div>
            <label htmlFor="contact-name" className={LABEL}>Your name <span>*</span></label>
            <input id="contact-name" name="name" autoComplete="name" required placeholder="e.g. Rahul Sharma" className={`${FIELD} h-[46px]`} value={formData.name} onChange={(event) => update('name', event.target.value)} />
          </div>
          <div className="grid grid-cols-1 gap-[19px] sm:grid-cols-2 sm:gap-4">
            <div>
              <label htmlFor="contact-phone" className={LABEL}>Phone number <span>*</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+91 98765 43210" className={`${FIELD} h-[46px]`} value={formData.phone} onChange={(event) => update('phone', event.target.value)} />
            </div>
            <div>
              <label htmlFor="contact-email" className={LABEL}>Email <span>(optional)</span></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={`${FIELD} h-[46px]`} value={formData.email} onChange={(event) => update('email', event.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="contact-service" className={LABEL}>I&apos;m interested in</label>
            <select id="contact-service" name="service" className={`${FIELD} h-[46px]`} value={formData.service} onChange={(event) => update('service', event.target.value)}>
              <option value="general">A little guidance / Not sure yet</option>
              {SERVICE_CATALOG.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className={LABEL}>A little about what you need <span>(optional)</span></label>
            <textarea id="contact-message" name="message" rows={3} placeholder="Tell us about your business or the question you have..." className={`${FIELD} min-h-[100px] resize-y py-3`} value={formData.message} onChange={(event) => update('message', event.target.value)} />
          </div>
          <button type="submit" className="btn btn-navy mt-0.5 w-full justify-between">Continue in WhatsApp <SvgIcon id="i-arrow" className="i arr" /></button>
          <p className="-mt-1.5 text-center text-[10px] leading-[1.7] text-muted">This opens a message draft in WhatsApp. You choose when to send it.</p>
        </form>
      )}
    </div>
  );
}
