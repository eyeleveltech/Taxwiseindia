'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import ServiceHeroScene from '@/components/services/ServiceHeroScene';
import FinalCTA from '@/components/sections/FinalCTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { WHATSAPP_URL, HOW_STEPS, TRUST_ITEMS } from '@/lib/constants';
import { SERVICE_CATALOG, ServiceCategory, servicePath, slugify } from '@/lib/services';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EYEBROW = 'eyebrow';
const H2 = 'mt-[18px] font-display text-[clamp(28px,2.9vw,40px)] font-bold leading-[1.12] tracking-[-.03em] text-navy text-balance';
const SEC_HEAD = 'mb-[clamp(32px,4vw,48px)] max-w-[640px]';
const SEC = 'py-[clamp(72px,9vw,120px)]';

/**
 * /services/[slug] — one service category, kept clean (reference: contiant.com): copy and the category's 3D
 * sculpture in the hero, the trust row, the services it covers (each a button to its own page), how
 * TaxwiseIndia works, the other six categories and the final CTA. Styled with Tailwind; copy from the brief.
 */
export default function ServicePage({ service }: { service: ServiceCategory }) {
  const others = SERVICE_CATALOG.filter((s) => s.slug !== service.slug);
  const reduce = useReducedMotion();
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (reduce) { gsap.set('[data-intro], [data-stage]', { autoAlpha: 1 }); return; }

    // intro: copy first, then the sculpture stage slides in and its ring starts turning
    gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } })
      .from('[data-intro]', { y: 22, autoAlpha: 0, stagger: 0.1 }, 0.1)
      .from('[data-stage]', { x: 40, autoAlpha: 0, duration: 1.2 }, 0.4)
      .from('[data-stage-ring]', { scale: 0.7, autoAlpha: 0, duration: 1.4 }, 0.5);
    gsap.to('[data-stage-ring]', { rotation: 360, duration: 70, ease: 'none', repeat: -1 });

    // sections rise as they arrive (the final CTA animates its own [data-reveal] — a second from() on the
    // same element would capture its hidden state as the end value and leave it invisible)
    gsap.utils.toArray<HTMLElement>('[data-reveal]').filter((el) => !el.closest('#get-started')).forEach((el) => gsap.from(el, {
      y: 26, autoAlpha: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    }));
    gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((g) => {
      const els = Array.from(g.children);
      gsap.set(els, { y: 24, autoAlpha: 0 });
      ScrollTrigger.create({ trigger: g, start: 'top 88%', once: true, onEnter: () => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.9, ease: 'expo.out', stagger: 0.05, overwrite: 'auto' }) });
    });
  }, { scope: root, dependencies: [reduce, service.slug], revertOnUpdate: true });

  return (
    <main id="main" ref={root} className="bg-white">
      {/* ============ hero ============ */}
      <section
        className="relative overflow-clip pt-[clamp(120px,11.5vw,150px)] pb-[clamp(56px,6vw,80px)] before:absolute before:left-1/2 before:top-[-40%] before:size-[1200px] before:-ml-[140px] before:rounded-full before:bg-off max-lg:before:top-[-60%] max-lg:before:-ml-[600px]"
        aria-labelledby="page-title"
      >
        <div className="wrap relative z-10 grid grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-2">
          <div>
            <h1 className="font-display text-[clamp(34px,3.9vw,54px)] font-bold leading-[1.06] tracking-[-.035em] text-navy text-balance" id="page-title" data-intro>{service.name}</h1>
            {service.desc && <p className="mt-[18px] max-w-[30em] text-[clamp(16px,1.2vw,18px)] leading-[1.65]" data-intro>{service.desc}</p>}
            <div className="mt-7 flex flex-wrap gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro>
              <Link href={`/contact?service=${service.slug}#contact-form`} className="btn btn-primary btn-lg">Get Started <SvgIcon id="i-arrow" className="i arr" /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg"><SvgIcon id="i-phone" className="i" />Talk to an Expert</a>
            </div>
            <ul className="mt-[26px] flex flex-wrap gap-x-6 gap-y-[10px] p-0 font-sans text-[14px] font-medium leading-[1.3] text-navy-2" data-intro>
              <li className="flex items-center gap-2"><SvgIcon id="i-check" className="size-4 text-emerald [stroke-width:2.4]" />{service.items.length} Services</li>
              <li className="flex items-center gap-2"><SvgIcon id="i-check" className="size-4 text-emerald [stroke-width:2.4]" />Proactive Customer Updates</li>
            </ul>
          </div>

          {/* the category's own sculpture (drag to rotate), on a slowly turning ring */}
          <div className="relative mx-auto w-full max-w-[560px] max-lg:mt-2" data-stage>
            <i className="pointer-events-none absolute inset-0 m-auto aspect-square w-[min(100%,520px)] rounded-full border-[1.5px] border-dashed border-emerald/35" data-stage-ring aria-hidden="true">
              <i className="absolute -top-[7px] left-1/2 -ml-[6.5px] size-[13px] rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]" />
            </i>
            <ServiceHeroScene service={service} message={service.desc ?? 'We keep you posted with every move.'} variant="detail" />
          </div>
        </div>
      </section>

      {/* ============ trust row ============ */}
      <section className="border-y border-line" aria-label="Trust">
        <div className="wrap">
          <ul className="m-0 flex flex-wrap gap-x-10 gap-y-4 p-0 py-6" data-rise>
            {TRUST_ITEMS.map((t) => (
              <li key={t.text} className="flex items-center gap-3 font-display text-[14.5px] font-medium leading-[1.35] text-navy">
                <SvgIcon id="i-check" className="size-[18px] text-emerald [stroke-width:2.4]" />
                {t.bold ? <span><b className="font-extrabold text-emerald-ink">{t.bold}</b>{t.text.slice(t.bold.length)}</span> : t.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ the services in this category; each opens its own page ============ */}
      <section className={SEC} id="list" aria-labelledby="list-title">
        <div className="wrap grid grid-cols-1 items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className={SEC_HEAD}>
              <p className={EYEBROW} data-reveal><i className="dot"></i>{service.name}</p>
              <h2 className={H2} id="list-title" data-reveal>Find the Right Service.</h2>
            </div>
            <ul className="m-0 list-none grid grid-cols-1 gap-x-[clamp(24px,3vw,48px)] border-t border-line p-0 sm:grid-cols-2" data-rise>
              {service.items.map((x) => (
                <li key={x} id={slugify(x)} className="border-b border-line">
                  <Link href={servicePath(service, x)} className="group flex items-center gap-[14px] px-1 py-[18px] font-display text-[clamp(16px,1.3vw,18px)] font-semibold leading-[1.3] tracking-[-.015em] text-navy">
                    <i className="grid size-7 flex-none place-items-center rounded-full border border-mint-line bg-mint-soft text-emerald-ink"><SvgIcon id="i-check" className="size-[14px] [stroke-width:2.6]" /></i>
                    <span className="flex-1 transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">{x}</span>
                    <i className="grid size-[34px] flex-none place-items-center rounded-full border border-line-2 text-navy transition-colors duration-[.35s] group-hover:border-emerald group-hover:bg-emerald">
                      <SvgIcon id="i-arrow" className="size-[15px] -rotate-45 transition-transform duration-[.45s] ease-out-expo group-hover:rotate-0" />
                    </i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-[22px] border border-line bg-off p-[26px] lg:sticky lg:top-[112px]" data-reveal>
            <span className="key key-lg"><SvgIcon id="i-phone" /></span>
            <h3 className="mt-[18px] font-display text-[19px] font-semibold leading-[1.3] tracking-[-.02em] text-navy">Talk to an Expert</h3>
            <p className="mt-2 text-[14.5px] leading-[1.6]">We keep you posted with every move.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-[18px] w-full">Talk to an Expert <SvgIcon id="i-arrow" className="i arr" /></a>
            <Link href={`/contact?service=${service.slug}#contact-form`} className="btn btn-ghost mt-[10px] w-full">Get Started</Link>
          </aside>
        </div>
      </section>

      {/* ============ how it works ============ */}
      <section className={`${SEC} bg-off`} id="how" aria-labelledby="how-title">
        <div className="wrap">
          <div className={SEC_HEAD}>
            <p className={EYEBROW} data-reveal><i className="dot"></i>How TaxwiseIndia Works</p>
            <h2 className={H2} id="how-title" data-reveal>Simple for You. Serious About the Work.</h2>
          </div>
          <ol className="m-0 list-none grid grid-cols-1 gap-x-[clamp(20px,3vw,40px)] gap-y-8 border-t border-line-2 p-0 pt-7 sm:grid-cols-2 lg:grid-cols-4" data-rise>
            {HOW_STEPS.map((step) => (
              <li key={step.number} className="relative">
                <span className="block font-display text-[12.5px] font-semibold tracking-[.1em] text-emerald-ink">{step.number}</span>
                <span className="key mt-[18px]"><SvgIcon id={step.icon} /></span>
                <h3 className="mt-5 font-display text-[17.5px] font-semibold leading-[1.3] tracking-[-.015em] text-navy">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ the other six ============ */}
      <section className={SEC} id="more" aria-labelledby="more-title">
        <div className="wrap">
          <div className={SEC_HEAD}>
            <p className={EYEBROW} data-reveal><i className="dot"></i>Services</p>
            <h2 className={H2} id="more-title" data-reveal>More Services</h2>
          </div>
          <ul className="m-0 list-none grid grid-cols-1 gap-x-[clamp(24px,3vw,48px)] border-t border-line p-0 sm:grid-cols-2 lg:grid-cols-3" data-rise>
            {others.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link href={servicePath(s)} className="group flex items-center gap-[14px] px-1 py-[18px] font-display text-[17px] font-semibold leading-[1.3] tracking-[-.015em] text-navy">
                  <i className="key key-sm"><SvgIcon id={s.icon} /></i>
                  <span className="flex-1 transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">{s.name}</span>
                  <i className="grid size-[34px] flex-none place-items-center rounded-full border border-line-2 text-navy transition-colors duration-[.35s] group-hover:border-emerald group-hover:bg-emerald">
                    <SvgIcon id="i-arrow" className="size-[15px] -rotate-45 transition-transform duration-[.45s] ease-out-expo group-hover:rotate-0" />
                  </i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
