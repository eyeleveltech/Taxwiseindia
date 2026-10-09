import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcon from '@/components/ui/SvgIcon';
import AsciiFluid from '@/components/ui/ascii-fluid';
import CompanyMotion from '@/components/company/CompanyMotion';
import FinalCTA from '@/components/sections/FinalCTA';
import { TRUST_ITEMS, WHATSAPP_URL } from '@/lib/constants';
import { SERVICE_CATALOG, STEPS, servicePath } from '@/lib/services';

export const metadata: Metadata = {
  title: 'About Us | TaxwiseIndia',
  description: 'A clearer way to manage the details of business. Discover the approach behind TaxwiseIndia and our registration, tax and compliance services.',
};

const DIRECTORS = [
  { 
    name: 'Basheer A', 
    role: 'Director | Industry & Customer Experience', 
    icon: 'i-work',
    paragraphs: [
      'Basheer brings more than <strong>12 years of experience working closely with companies and professionals across the legal, accounting, compliance and business services ecosystem.</strong>',
      'Over those years, he has been exposed to the realities behind the industry — how services are delivered, where processes break down, what customers struggle with and, most importantly, <strong>where the industry can do better.</strong>',
      'That experience gave him a first-hand understanding of the questions customers ask, the frustrations they face and the gaps that often exist between a service provider and the person depending on them.',
      'Rather than simply identifying these problems, Basheer wanted to build a solution around them. <strong>TaxwiseIndia is that next step.</strong>',
      'His focus is simple: <strong>Understand the problem. Simplify the process. Stay accountable to the customer.</strong>'
    ] 
  },
  { 
    name: 'Manzoor Rahman', 
    role: 'Director | Strategy, Research & Innovation', 
    icon: 'i-layers',
    paragraphs: [
      'Manzoor Rahman brings a strong combination of <strong>business experience, research, analysis, technology and strategic thinking</strong> to TaxwiseIndia.',
      'He is also the <strong>CEO of Zivaro Global Research</strong>, a global research company, where he leads an organisation built around research-driven insights, strategic thinking and understanding markets beyond the obvious.',
      'His experience brings a different dimension to TaxwiseIndia — looking beyond today\'s processes to understand <strong>how technology, research and changing business environments can shape the future of professional services.</strong>',
      'At TaxwiseIndia, that perspective helps us think beyond simply providing a service.',
      '<strong>We are building systems, processes and experiences designed to make professional business services easier to understand and easier to access.</strong>'
    ] 
  },
];

const STEP_ICONS = ['i-card', 'i-play', 'i-work', 'i-bell', 'i-check'];
/** About: a centred editorial hero with the trust strip, a split story with the "one place" tile board, the promise rail, a ledger of values and a services index. */
export default function AboutPage() {
  return (
    <CompanyMotion>
      {/* ============ hero ============ */}
      <section className="relative overflow-hidden bg-white pb-[clamp(40px,5vw,64px)] pt-24 lg:pt-28" aria-labelledby="page-title">
        <AsciiFluid theme="light" color="#16B878" className="opacity-40" />
        <div className="wrap relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="eyebrow" data-intro><i className="dot"></i>About TaxwiseIndia</p>
            <h1 id="page-title" className="mt-6 font-display text-[clamp(38px,5.2vw,72px)] font-bold leading-[1.04] tracking-[-.04em] text-navy text-balance" data-intro>
              We didn&apos;t start with a service.<br /><span className="text-emerald-ink font-bold">We started with a problem.</span>
            </h1>
            <div className="mt-6 max-w-3xl text-[clamp(16px,1.25vw,19px)] leading-[1.7]" data-intro>
              <p>For years, we saw businesses struggle with fragmented services, unclear communication, and lack of ownership in tax and compliance.</p>
              <p className="mt-4">TaxwiseIndia was built to solve this. We combine deep industry expertise with streamlined processes to deliver a professional, accountable, and transparent experience for your business.</p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro>
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg">Get Started <SvgIcon id="i-arrow" className="i arr" /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg border-2 border-mint-line bg-mint-soft text-navy hover:bg-mint"><SvgIcon id="i-phone" className="i" />Talk to an Expert</a>
            </div>
          </div>

          <ul className="m-0 mt-12 lg:mt-16 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((t) => (
              <li key={t.text} className="flex items-start gap-4 rounded-2xl border border-line bg-off p-5 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-8px_rgba(7,26,43,.08)]" data-intro>
                <span className="key key-sm shrink-0 bg-white"><SvgIcon id="i-check" /></span>
                <span className="font-display text-[15px] font-semibold leading-snug text-navy">
                  {t.bold ? <><b className="font-extrabold text-emerald-ink block text-[16px] mb-0.5">{t.bold}</b>{t.text.slice(t.bold.length)}</> : t.text}
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
            <p className="eyebrow" data-company-reveal><i className="dot"></i>The Foundation</p>
            <h2 id="story-title" className="h2 mt-5" data-company-reveal>Two Perspectives.<br /><em className="em">One Purpose.</em></h2>
            <div className="mt-8 grid gap-6" data-company-reveal>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75]">TaxwiseIndia is founded by <strong>Basheer A and Manzoor Rahman</strong>, two professionals bringing different areas of experience together with one shared objective:</p>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75] font-semibold text-navy">To build a more transparent, responsive and modern way for businesses to manage their tax and compliance requirements.</p>
            </div>
          </div>

          {/* everything in one place: bento grid layout */}
          <div className="relative mx-auto w-full max-w-130 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4" aria-hidden="true" data-company-reveal>
            {/* Centerpiece (2x2) */}
            <div className="col-span-2 sm:col-span-2 row-span-2 flex flex-col items-center justify-center rounded-[28px] border border-emerald bg-white p-8 shadow-[0_12px_40px_-12px_rgba(22,184,120,.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-mint-soft/30 group-hover:bg-mint-soft/60 transition-colors duration-500"></div>
              <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-1/2 relative z-10" data-company-float />
              <div className="relative z-10 mt-6 text-center font-display font-bold text-emerald-ink text-[18px]">All-in-one Platform</div>
            </div>
            
            {/* Small service tiles */}
            {SERVICE_CATALOG.slice(0, 5).map((s) => (
              <div key={s.slug} className="flex flex-col items-center justify-center gap-3 rounded-[22px] border border-mint-line bg-mint-soft p-5 text-emerald-ink shadow-[0_4px_0_#C2EEDC] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_0_#C2EEDC]">
                <SvgIcon id={s.icon} className="size-8 stroke-[1.6]" />
                <span className="text-center font-display text-[13.5px] font-semibold leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ the promise, as one rail ============ */}
      <section className="sec bg-off" aria-labelledby="promise-title">
        <div className="wrap">
          <p className="eyebrow" data-company-reveal><i className="dot"></i>The Taxwise Promise</p>
          <h2 id="promise-title" className="h2 mt-5 max-w-[16em]" data-company-reveal>We believe the relationship shouldn&apos;t end after payment.</h2>
          <div className="lead mt-6 max-w-[44em]" data-company-reveal>
            <p>One of the biggest gaps we identified in the industry was simple: <strong>Customers shouldn&apos;t have to chase their service provider for every update.</strong></p>
            <p className="mt-4">When you choose TaxwiseIndia, our responsibility doesn&apos;t end when the payment is made. We believe it begins there. We aim to keep you informed, follow up on your requirements, communicate progress and help you understand what is happening at every important stage.</p>
            <p className="mt-4 text-emerald-ink font-medium">Because professional service shouldn&apos;t feel like: &ldquo;I paid. Now I have to follow up.&rdquo;<br/>It should feel like: &ldquo;They&apos;re handling it. They&apos;ll keep me informed.&rdquo;</p>
          </div>
          <div className="relative mt-12 rounded-4xl border border-line bg-white p-8 lg:p-12 shadow-[0_8px_30px_-12px_rgba(7,26,43,.05)] overflow-hidden" data-company-reveal data-company-stagger-parent>
            {/* The continuous horizontal rail */}
            <div className="absolute top-22 left-16 right-16 hidden h-0.5 bg-line lg:block" aria-hidden="true" />
            
            <ol className="relative m-0 flex list-none flex-col gap-8 p-0 lg:flex-row lg:gap-6">
              {STEPS.map((step, i) => (
                <li key={step} className="relative flex-1 group" data-company-stagger>
                  <div className="flex flex-col lg:items-center">
                    {/* Icon Node */}
                    <span className="key key-sm relative z-10 mb-6 bg-off transition-[border-color,background-color,color] duration-500 group-hover:bg-mint-soft group-hover:border-emerald group-hover:text-emerald-ink">
                      <SvgIcon id={STEP_ICONS[i]} />
                    </span>
                    {/* Content */}
                    <div className="w-full rounded-[20px] border border-line bg-off p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-emerald hover:shadow-[0_12px_24px_-16px_rgba(22,184,120,.25)] lg:text-center">
                      <span className="block font-display text-[11.5px] font-bold tracking-[.14em] text-emerald-ink">STEP 0{i + 1}</span>
                      <b className="mt-2 block font-display text-[15px] font-bold leading-[1.3] text-navy">{step}</b>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ our approach, as a ledger ============ */}
      <section className="sec" aria-labelledby="approach-title">
        <div className="wrap grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="lg:sticky lg:top-35">
            <p className="eyebrow" data-company-reveal><i className="dot"></i>Leadership</p>
            <h2 id="approach-title" className="h2 mt-5" data-company-reveal>Experience built the foundation.<br /><em className="em">Vision builds what comes next.</em></h2>
            <div className="mt-6 grid gap-4 text-[15px] leading-[1.6] max-w-[28em]" data-company-reveal>
              <p>Basheer understands the <strong>industry from the ground level.</strong></p>
              <p>Manzoor brings the <strong>strategic and research-driven perspective.</strong></p>
              <p>One understands the problems businesses face today. The other looks at how those problems can be solved better tomorrow.</p>
              <p>Together, that creates something powerful:<br/><strong>Industry experience + strategic thinking + technology + customer understanding.</strong></p>
              <p>That is the foundation on which TaxwiseIndia is being built.</p>
            </div>
          </div>
          <ol className="m-0 list-none border-t border-line p-0">
            {DIRECTORS.map((director, i) => (
              <li key={director.name} className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-b border-line py-8 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-10" data-company-reveal>
                <span className="font-display text-[clamp(30px,3.2vw,44px)] font-bold leading-none tracking-[-.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1.5px_#D2DBE4] group-hover:text-emerald group-hover:[-webkit-text-stroke-color:#16B878]">0{i + 1}</span>
                <div>
                  <h3 className="m-0 font-display text-[clamp(20px,1.8vw,26px)] font-semibold leading-tight tracking-[-.02em] text-navy">{director.name}</h3>
                  <p className="mt-1 font-display text-[14px] font-bold tracking-wider text-emerald-ink uppercase">{director.role}</p>
                  <div className="mt-4 grid gap-3 text-[15.5px] leading-[1.7]">
                    {director.paragraphs.map((p, j) => <p key={j} className="m-0" dangerouslySetInnerHTML={{__html: p}} />)}
                  </div>
                </div>
                <span className="key key-sm max-sm:hidden"><SvgIcon id={director.icon} /></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ services, at a glance ============ */}
      <section className="sec border-t border-line bg-off" aria-labelledby="glance-title">
        <div className="wrap grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Story & Promise */}
          <div className="max-w-160">
            <p className="eyebrow" data-company-reveal><i className="dot"></i>Why TaxwiseIndia?</p>
            <h2 id="glance-title" className="h2 mt-5" data-company-reveal>Fixing the parts that shouldn&apos;t have been broken.</h2>
            <div className="mt-6 text-[16px] leading-[1.7]" data-company-reveal>
              <p>Because we aren&apos;t trying to reinvent professional services for the sake of it. We&apos;re combining years of industry exposure with research, technology and a customer-first approach to create a company that businesses can rely on — not just when they need a service, but throughout the journey.</p>
            </div>
            
            <div className="mt-10 rounded-2xl border border-mint-line bg-mint-soft p-7 sm:max-w-100" data-company-reveal>
              <h3 className="font-display text-[22px] font-bold text-navy">TaxwiseIndia</h3>
              <p className="mt-2 font-display text-[16.5px] font-semibold text-emerald-ink leading-[1.6]">
                Built from experience.<br/>
                Driven by insight.<br/>
                Designed around your business.
              </p>
            </div>
          </div>

          {/* Right Column: Services Directory */}
          <div className="rounded-4xl border border-line bg-white p-8 shadow-[0_8px_30px_-12px_rgba(7,26,43,.05)] sm:p-10" data-company-reveal>
            <h3 className="font-display text-[18px] font-semibold text-navy mb-6">Our Services</h3>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {SERVICE_CATALOG.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="group inline-flex items-center gap-3 rounded-full border border-line bg-off py-2 pl-2 pr-5 font-display text-[14px] font-semibold text-navy transition-[border-color,background-color,box-shadow,translate] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-emerald hover:bg-white hover:shadow-[0_12px_24px_-16px_rgba(7,26,43,.35)]">
                    <span className="key key-xs bg-white group-hover:bg-mint-soft transition-colors duration-500"><SvgIcon id={s.icon} /></span>
                    {s.name}
                    <SvgIcon id="i-arrow" className="size-3.5 -rotate-45 text-navy/40 transition-[rotate,color] duration-500 ease-out-expo group-hover:rotate-0 group-hover:text-emerald" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
    </CompanyMotion>
  );
}
