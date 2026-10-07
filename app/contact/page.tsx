import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants';
import { SERVICE_CATALOG } from '@/lib/services';
import SvgIcon from '@/components/ui/SvgIcon';
import ContactForm from '@/components/ui/ContactForm';
import CompanyMotion from '@/components/company/CompanyMotion';
import { EM, H1, H2, LEAD, TEXT_LINK } from '@/components/company/styles';

export const metadata: Metadata = {
  title: 'Contact Us | TaxwiseIndia',
  description: 'Tell TaxwiseIndia about your business. Start a conversation about registration, taxes, accounting, compliance and more.',
};

const METHOD = 'group flex items-center gap-3 border-b border-line py-5 sm:gap-4';
const METHOD_ICON = 'grid size-[43px] flex-none place-items-center rounded-full border border-line-2 text-emerald-ink transition-colors group-hover:border-emerald group-hover:bg-emerald group-hover:text-navy [&_.i]:size-5';
const LABEL = 'mb-1.5 block font-display text-[9px] font-semibold tracking-[.13em] text-muted';

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const { service } = await searchParams;
  const initialService = SERVICE_CATALOG.some((item) => item.slug === service) ? service as string : 'general';

  return (
    <CompanyMotion>
      <section className="bg-[radial-gradient(ellipse_at_10%_10%,#EAFAF4,#FFFFFF_70%)] pb-[50px] pt-[110px] lg:pb-[85px] lg:pt-[150px]">
        <div className="wrap grid grid-cols-1 items-start gap-9 lg:grid-cols-[1fr_1.05fr] lg:gap-[clamp(40px,6vw,90px)]">
          <div className="lg:pt-5">
            <p className="eyebrow" data-intro><i className="dot"></i>Let&apos;s make the next step simple</p>
            <h1 className={`${H1} text-[clamp(36px,4.1vw,56px)]`} data-intro>Good things start<br /><em className={EM}>with a conversation.</em></h1>
            <p className={LEAD} data-intro>A new business, a pending task or just a question. Tell us what&apos;s on your mind. We&apos;ll help you find a place to start.</p>

            <div className="mb-5 mt-9" data-intro>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={METHOD}>
                <span className={METHOD_ICON}><SvgIcon id="i-send" /></span>
                <span><small className={LABEL}>PREFER A CHAT?</small><strong className="font-display text-sm font-semibold tracking-[-.02em] text-navy sm:text-base">Say hello on WhatsApp</strong></span>
                <SvgIcon id="i-arrow" className="i ml-auto size-4 text-emerald-ink" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className={METHOD}>
                <span className={METHOD_ICON}><SvgIcon id="i-mail" /></span>
                <span><small className={LABEL}>DROP US A LINE</small><strong className="font-display text-sm font-semibold tracking-[-.02em] text-navy sm:text-base">{CONTACT_INFO.email}</strong></span>
                <SvgIcon id="i-arrow" className="i ml-auto size-4 text-emerald-ink" />
              </a>
            </div>
            <p className="m-0 flex items-center gap-2 text-[11px] text-muted" data-intro><span className="size-[5px] rounded-full bg-emerald" /> {CONTACT_INFO.hours}</p>

            <div className="mt-6 flex items-center gap-4 lg:mt-12" data-intro>
              <SvgIcon id="i-layers" className="i size-[25px] text-emerald-ink" />
              <p className="m-0 text-xs leading-[1.8] text-muted">
                Not sure which service fits?<br />
                <Link href="/services" className={TEXT_LINK}>Explore what we can help with <SvgIcon id="i-arrow" /></Link>
              </p>
            </div>
          </div>

          <div data-intro><ContactForm key={initialService} initialService={initialService} /></div>
        </div>
      </section>

      <section className="border-t border-line py-[45px] lg:pb-[80px] lg:pt-[65px]">
        <div className="wrap grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-[55px]" data-company-reveal>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="eyebrow"><i className="dot"></i>A more personal connection</p>
            <h2 className={`${H2} mt-4 text-[35px]`}>Here for your<br /><em className={EM}>next step.</em></h2>
          </div>
          <div>
            <span className={`${LABEL} mb-5 mt-3`}>CALL US</span>
            <a href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`} className="font-display text-[19px] font-semibold tracking-[-.03em] text-navy">{CONTACT_INFO.phone}</a>
            <p className="mt-2 text-[13px] leading-[1.8] text-muted">{CONTACT_INFO.hours}</p>
          </div>
          <div>
            <span className={`${LABEL} mb-5 mt-3`}>FIND US</span>
            <p className="m-0 text-[13px] leading-[1.8] text-muted">{CONTACT_INFO.address}</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className={`${TEXT_LINK} mt-2.5`}>Email us before visiting <SvgIcon id="i-arrow" /></a>
          </div>
        </div>
      </section>
    </CompanyMotion>
  );
}
