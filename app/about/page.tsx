import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SvgIcon from '@/components/ui/SvgIcon';
import AsciiFluid from '@/components/ui/ascii-fluid';
import Interactive3DCard from '@/components/ui/interactive-3d-card';
import CompanyMotion from '@/components/company/CompanyMotion';
import { EM, H2 } from '@/components/company/styles';
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
const TILE = 'grid aspect-square w-full place-items-center rounded-[22px] border border-mint-line bg-mint-soft text-emerald-ink shadow-[0_5px_0_#C2EEDC] [&_.i]:size-[38%] [&_.i]:stroke-[1.6]';

/** About: a centred editorial hero with the trust strip, a split story with the "one place" tile board, the promise rail, a ledger of values and a services index. */
export default function AboutPage() {
  return (
    <CompanyMotion>
      {/* ============ hero ============ */}
      <section className="relative overflow-hidden bg-white pb-[clamp(40px,5vw,64px)] pt-32 lg:pt-40" aria-labelledby="page-title">
        <AsciiFluid theme="light" color="#16B878" className="opacity-40" />
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-215 text-left">
              <p className="eyebrow" data-intro><i className="dot"></i>About TaxwiseIndia</p>
              <h1 id="page-title" className="mt-6 font-display text-[clamp(38px,5.2vw,72px)] font-bold leading-[1.04] tracking-[-.04em] text-navy text-balance" data-intro>
                We didn&apos;t start with a service.<br /><span className="text-emerald-ink font-bold">We started with a problem.</span>
              </h1>
              <div className="mt-6 max-w-[42em] text-[clamp(16px,1.25vw,19px)] leading-[1.7]" data-intro>
                <p>For years, we watched businesses struggle with something that should have been simple. Tax. Accounting. Compliance. Legal processes. Registrations.</p>
                <p className="mt-4">The problem was rarely the service itself. It was everything around it: <strong>Unclear communication. Slow processes. Lack of ownership. Repeated follow-ups. And customers being left to navigate the process on their own.</strong></p>
                <p className="mt-4">We saw these challenges from close range — not from a boardroom, but through years of working within the industry and understanding how businesses and customers actually experience these services. That experience became the foundation for <strong>TaxwiseIndia.</strong></p>
              </div>
              <div className="mt-9 flex flex-wrap justify-start gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro>
                <Link href="/contact#contact-form" className="btn btn-primary btn-lg">Get Started <SvgIcon id="i-arrow" className="i arr" /></Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg border-2 border-mint-line bg-mint-soft text-navy hover:bg-mint"><SvgIcon id="i-phone" className="i" />Talk to an Expert</a>
              </div>
            </div>
            
            <div className="relative w-full aspect-square max-w-125 mx-auto lg:mx-0 lg:ml-auto perspective-distant" data-intro>
              <Interactive3DCard className="w-full h-full" maxRotation={15} scaleOnHover={1.03}>
                <div className="absolute inset-0 rounded-4xl overflow-hidden shadow-[0_12px_40px_-12px_rgba(7,26,43,.15)] border border-line">
                  <Image 
                    src="/assets/about-hero.jpg" 
                    alt="Modern abstract illustration" 
                    fill 
                    className="object-cover"
                    priority 
                  />
                </div>
              </Interactive3DCard>
              {/* decorative blur element behind the image */}
              <div className="absolute -inset-4 bg-emerald/20 blur-[60px] -z-10 rounded-full" />
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
            <p className="eyebrow" data-company-reveal><i className="dot"></i>The Foundation</p>
            <h2 id="story-title" className={`${H2} mt-5`} data-company-reveal>Two Perspectives.<br /><em className={EM}>One Purpose.</em></h2>
            <div className="mt-8 grid gap-6" data-company-reveal>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75]">TaxwiseIndia is founded by <strong>Basheer A and Manzoor Rahman</strong>, two professionals bringing different areas of experience together with one shared objective:</p>
              <p className="m-0 border-l-2 border-emerald pl-5 text-[16.5px] leading-[1.75] font-semibold text-navy">To build a more transparent, responsive and modern way for businesses to manage their tax and compliance requirements.</p>
            </div>
          </div>

          {/* everything in one place: the seven services around the mark */}
          <div className="relative mx-auto w-full max-w-130" aria-hidden="true" data-company-reveal>
            <i className="pointer-events-none absolute inset-0 m-auto aspect-square w-[82%] rounded-full bg-mint/30" />
            <i className="pointer-events-none absolute inset-0 m-auto aspect-square w-[104%] rounded-full border-[1.5px] border-dashed border-emerald/35" data-company-ring>
              <i className="absolute -top-1.75 left-1/2 ml-[-6.5px] size-3.25 rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]" />
            </i>
            <div className="relative grid grid-cols-4 gap-3 rounded-4xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_40px_70px_-40px_rgba(7,26,43,.35)] sm:gap-4 sm:p-7">
              {SERVICE_CATALOG.slice(0, 3).map((s) => <span key={s.slug} className={TILE}><SvgIcon id={s.icon} /></span>)}
              <span className="grid aspect-square w-full place-items-center rounded-[22px] border border-emerald bg-white shadow-[0_5px_0_#16B878]" data-company-float>
                <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-1/2" />
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
          <h2 id="promise-title" className={`${H2} mt-5 max-w-[16em]`} data-company-reveal>We believe the relationship shouldn&apos;t end after payment.</h2>
          <div className="mt-6 max-w-[44em] text-[16px] leading-[1.7]" data-company-reveal>
            <p>One of the biggest gaps we identified in the industry was simple: <strong>Customers shouldn&apos;t have to chase their service provider for every update.</strong></p>
            <p className="mt-4">When you choose TaxwiseIndia, our responsibility doesn&apos;t end when the payment is made. We believe it begins there. We aim to keep you informed, follow up on your requirements, communicate progress and help you understand what is happening at every important stage.</p>
            <p className="mt-4 text-emerald-ink font-medium">Because professional service shouldn&apos;t feel like: &ldquo;I paid. Now I have to follow up.&rdquo;<br/>It should feel like: &ldquo;They&apos;re handling it. They&apos;ll keep me informed.&rdquo;</p>
          </div>
          <ol className="relative mt-12 grid list-none grid-cols-2 gap-x-4 gap-y-10 rounded-[28px] border border-line bg-white p-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:p-10 lg:before:absolute lg:before:left-10 lg:before:right-10 lg:before:top-15 lg:before:h-0.5 lg:before:bg-line" data-company-reveal>
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
          <div className="lg:sticky lg:top-35">
            <p className="eyebrow" data-company-reveal><i className="dot"></i>Leadership</p>
            <h2 id="approach-title" className={`${H2} mt-5`} data-company-reveal>Experience built the foundation.<br /><em className={EM}>Vision builds what comes next.</em></h2>
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
            <h2 id="glance-title" className={`${H2} mt-5`} data-company-reveal>Fixing the parts that shouldn&apos;t have been broken.</h2>
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
