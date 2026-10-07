import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcon from '@/components/ui/SvgIcon';
import CompanyMotion from '@/components/company/CompanyMotion';
import { EM, H2 } from '@/components/company/styles';
import FinalCTA from '@/components/sections/FinalCTA';
import { TRUST_ITEMS, WHATSAPP_URL } from '@/lib/constants';
import { SERVICE_CATALOG, STEPS, servicePath } from '@/lib/services';

export const metadata: Metadata = {
  title: 'About Us | TaxwiseIndia',
  description: 'A clearer way to manage the details of business. Discover the approach behind TaxwiseIndia and our registration, tax and compliance services.',
};

const VALUES = [
  { icon: 'i-eye', title: 'Clarity, from the start.', text: 'Understand what your business needs, which documents matter and what happens next. We believe good guidance should be easy to follow.' },
  { icon: 'i-shield', title: 'Care in the details.', text: 'A registration, a return, a business agreement. Each deserves thoughtful preparation and a clear process, from the first conversation to completion.' },
  { icon: 'i-layers', title: 'Support that connects.', text: 'Business decisions rarely stand alone. Bring your registration, tax, accounting and compliance needs together, with a wider view of your business.' },
];

const STEP_ICONS = ['i-card', 'i-play', 'i-work', 'i-bell', 'i-check'];
const TILE = 'grid aspect-square w-full place-items-center rounded-[22px] border border-mint-line bg-mint-soft text-emerald-ink shadow-[0_5px_0_#C2EEDC] [&_.i]:size-[38%] [&_.i]:stroke-[1.6]';

/** About: a centred editorial hero with the trust strip, a split story with the "one place" tile board, the promise rail, a ledger of values and a services index. */
export default function AboutPage() {
  return (
    <CompanyMotion>
      {/* ============ hero ============ */}
      <section className="bg-white pb-[clamp(40px,5vw,64px)] pt-[clamp(124px,13vw,164px)]" aria-labelledby="page-title">
        <div className="wrap">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow" data-intro><i className="dot"></i>About TaxwiseIndia</p>
            <h1 id="page-title" className="mt-6 font-display text-[clamp(38px,5.2vw,72px)] font-bold leading-[1.04] tracking-[-.04em] text-navy text-balance" data-intro>
              Behind your business.<br /><em className={EM}>Beside you, at every step.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-[36em] text-[clamp(16px,1.25vw,19px)] leading-[1.7]" data-intro>You bring the ambition. We bring clarity to the registrations, taxes and everyday responsibilities that come with building a business.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro>
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg">Get Started <SvgIcon id="i-arrow" className="i arr" /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg"><SvgIcon id="i-phone" className="i" />Talk to an Expert</a>
            </div>
          </div>

          <ul className="m-0 mt-[clamp(48px,6vw,80px)] grid list-none grid-cols-1 gap-y-5 border-y border-line p-0 py-7 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-4 lg:gap-0" data-intro>
            {TRUST_ITEMS.map((t) => (
              <li key={t.text} className="flex items-center gap-3.5 lg:border-l lg:border-line lg:px-7 lg:first:border-l-0 lg:first:pl-0">
                <span className="key key-sm"><SvgIcon id="i-check" /></span>
                <span className="font-display text-[16px] font-semibold leading-[1.3] text-navy">
                  {t.bold ? <><b className="font-extrabold text-emerald-ink">{t.bold}</b>{t.text.slice(t.bold.length)}</> : t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ why we're here ============ */}
      <section className="sec overflow-x-clip" aria-labelledby="story-title">
        <div className="wrap grid grid-cols-1 items-center gap-[clamp(32px,6vw,96px)] lg:grid-cols-2">
          <div>
            <p className="eyebrow" data-company-reveal><i className="dot"></i>Why we&apos;re here</p>
            <h2 id="story-title" className={`${H2} mt-5`} data-company-reveal>Building a business takes courage.<br /><em className={EM}>Managing it should bring clarity.</em></h2>
            <div className="mt-8 grid gap-6" data-company-reveal>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75]">There is a lot behind a good business: the idea, the people, and the everyday work that keeps it moving. Registrations and compliance are part of that story. They should have a clear place in your plans.</p>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75]">TaxwiseIndia brings business services together in one place. Whether you are getting started, organising your finances or protecting your brand, our approach begins with understanding what you need and helping you see the way forward.</p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3.5 rounded-2xl border border-mint-line bg-mint-soft py-3 pl-3 pr-5" data-company-reveal>
              <span className="key key-sm"><SvgIcon id="i-bell" /></span>
              <p className="m-0 font-display text-[16px] font-semibold tracking-[-.01em] text-navy">We keep you posted with every move.</p>
            </div>
          </div>

          {/* everything in one place: the seven services around the mark */}
          <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true" data-company-reveal>
            <i className="pointer-events-none absolute inset-0 m-auto aspect-square w-[82%] rounded-full bg-mint/30" />
            <i className="pointer-events-none absolute inset-0 m-auto aspect-square w-[104%] rounded-full border-[1.5px] border-dashed border-emerald/35" data-company-ring>
              <i className="absolute -top-[7px] left-1/2 -ml-[6.5px] size-[13px] rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]" />
            </i>
            <div className="relative grid grid-cols-4 gap-3 rounded-[32px] border border-line bg-white p-5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_40px_70px_-40px_rgba(7,26,43,.35)] sm:gap-4 sm:p-7">
              {SERVICE_CATALOG.slice(0, 3).map((s) => <span key={s.slug} className={TILE}><SvgIcon id={s.icon} /></span>)}
              <span className="grid aspect-square w-full place-items-center rounded-[22px] border border-emerald bg-white shadow-[0_5px_0_#16B878]" data-company-float>
                <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-[50%]" />
              </span>
              {SERVICE_CATALOG.slice(3).map((s) => <span key={s.slug} className={TILE}><SvgIcon id={s.icon} /></span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ============ the promise, as one rail ============ */}
      <section className="sec bg-off" aria-labelledby="promise-title">
        <div className="wrap">
          <p className="eyebrow" data-company-reveal><i className="dot"></i>The Taxwise Promise</p>
          <h2 id="promise-title" className={`${H2} mt-5 max-w-[14em]`} data-company-reveal>You shouldn&apos;t have to chase your tax consultant.</h2>
          <ol className="relative mt-12 grid list-none grid-cols-2 gap-x-4 gap-y-10 rounded-[28px] border border-line bg-white p-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:p-10 lg:before:absolute lg:before:left-10 lg:before:right-10 lg:before:top-[calc(40px+20px)] lg:before:h-0.5 lg:before:bg-line" data-company-reveal>
            {STEPS.map((step, i) => (
              <li key={step} className="relative">
                <span className="key key-sm relative z-10"><SvgIcon id={STEP_ICONS[i]} /></span>
                <span className="mt-5 block font-display text-[11px] font-bold tracking-[.14em] text-emerald-ink">STEP 0{i + 1}</span>
                <b className="mt-1.5 block font-display text-[clamp(15px,1.2vw,17px)] font-bold tracking-[.06em] text-navy">{step}</b>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ our approach, as a ledger ============ */}
      <section className="sec" aria-labelledby="approach-title">
        <div className="wrap grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[140px]">
            <p className="eyebrow" data-company-reveal><i className="dot"></i>Our approach</p>
            <h2 id="approach-title" className={`${H2} mt-5`} data-company-reveal>Good relationships.<br /><em className={EM}>Built on the everyday.</em></h2>
          </div>
          <ol className="m-0 list-none border-t border-line p-0">
            {VALUES.map((value, i) => (
              <li key={value.title} className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-b border-line py-8 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-10" data-company-reveal>
                <span className="font-display text-[clamp(30px,3.2vw,44px)] font-bold leading-none tracking-[-.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1.5px_#D2DBE4] group-hover:text-emerald group-hover:[-webkit-text-stroke-color:#16B878]">0{i + 1}</span>
                <div>
                  <h3 className="m-0 font-display text-[clamp(20px,1.8vw,26px)] font-semibold leading-[1.25] tracking-[-.02em] text-navy">{value.title}</h3>
                  <p className="mt-3 max-w-[40em] text-[16px] leading-[1.7]">{value.text}</p>
                </div>
                <span className="key key-sm max-sm:hidden"><SvgIcon id={value.icon} /></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ services, at a glance ============ */}
      <section className="sec border-t border-line bg-off" aria-labelledby="glance-title">
        <div className="wrap text-center">
          <p className="eyebrow" data-company-reveal><i className="dot"></i>Services</p>
          <h2 id="glance-title" className={`${H2} mx-auto mt-5 max-w-[14em]`} data-company-reveal>Everything Your Business Needs.</h2>
          <p className="mx-auto mt-4 max-w-[30em] text-[16px] leading-[1.7]" data-company-reveal>One place for tax, accounting and compliance.</p>
          <ul className="m-0 mt-10 flex list-none flex-wrap justify-center gap-3 p-0">
            {SERVICE_CATALOG.map((s) => (
              <li key={s.slug} data-company-reveal>
                <Link href={servicePath(s)} className="group inline-flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-5 font-display text-[15px] font-semibold text-navy transition-[border-color,box-shadow,translate] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-emerald hover:shadow-[0_18px_30px_-20px_rgba(7,26,43,.35)]">
                  <span className="key key-xs"><SvgIcon id={s.icon} /></span>
                  {s.name}
                  <SvgIcon id="i-arrow" className="size-4 -rotate-45 transition-[rotate] duration-500 ease-out-expo group-hover:rotate-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </CompanyMotion>
  );
}
