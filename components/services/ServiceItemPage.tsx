'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import FinalCTA from '@/components/sections/FinalCTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { WHATSAPP_URL, TRUST_ITEMS } from '@/lib/constants';
import { ServiceCategory, servicePath, slugify } from '@/lib/services';
import type { ServiceDetail } from '@/lib/service-details';
import { Pricing } from '@/components/ui/pricing';
import { SERVICE_PRICING } from '@/lib/pricing-data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const H2 = 'mt-[18px] font-display text-[clamp(28px,2.9vw,40px)] font-bold leading-[1.12] tracking-[-.03em] text-navy text-balance';
const SEC = 'py-[clamp(72px,9vw,120px)]';

/**
 * /services/[category]/[service] — one of the 46 services: what it is, the documents it needs and how it
 * runs, with the rest of its category alongside. One template, generated from lib/service-details.ts.
 */
export default function ServiceItemPage({ service, name, detail }: { service: ServiceCategory; name: string; detail?: ServiceDetail }) {
  const reduce = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const slug = slugify(name);
  const siblings = service.items.filter((x) => x !== name);
  const ask = `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello TaxwiseIndia, I'm interested in ${name}.`)}`;
  const start = `/contact?service=${service.slug}&item=${slug}#contact-form`;

  useGSAP(() => {
    if (reduce) { gsap.set('[data-intro], [data-card]', { autoAlpha: 1 }); return; }

    // intro: copy first, then the checklist card and its ticks, one by one
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } });
    tl.from('[data-intro]', { y: 22, autoAlpha: 0, stagger: 0.1 }, 0.1)
      .from('[data-card]', { x: 40, autoAlpha: 0, duration: 1.2 }, 0.4)
      .from('[data-tick]', { scale: 0.4, autoAlpha: 0, duration: 0.5, ease: 'back.out(2)', stagger: 0.14 }, 0.9)
      .from('[data-coin]', { scale: 0.4, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.8)' }, '-=0.2');
    gsap.to('[data-card]', { y: -8, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.5 });

    // sections rise as they arrive (the final CTA animates its own [data-reveal])
    gsap.utils.toArray<HTMLElement>('[data-reveal]').filter((el) => !el.closest('#get-started')).forEach((el) => gsap.from(el, {
      y: 26, autoAlpha: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    }));
    gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((g) => {
      const els = Array.from(g.children);
      gsap.set(els, { y: 24, autoAlpha: 0 });
      ScrollTrigger.create({ trigger: g, start: 'top 88%', once: true, onEnter: () => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.9, ease: 'expo.out', stagger: 0.05, overwrite: 'auto' }) });
    });
  }, { scope: root, dependencies: [reduce, slug], revertOnUpdate: true });

  return (
    <main id="main" ref={root} className="bg-white">
      {/* ============ hero ============ */}
      <section
        className="relative overflow-clip pt-[clamp(120px,11.5vw,150px)] pb-[clamp(56px,6vw,80px)] before:absolute before:left-1/2 before:top-[-40%] before:size-300 before:-ml-35 before:rounded-full before:bg-off max-lg:before:top-[-60%] max-lg:before:-ml-150"
        aria-labelledby="page-title"
      >
        <div className="wrap relative z-10 grid grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
          <div>
            <Link href={servicePath(service)} className="eyebrow transition-colors hover:border-navy" data-intro><SvgIcon id={service.icon} className="size-3.75 text-emerald-ink" />{service.name}</Link>
            <h1 className="mt-5.5 font-display text-[clamp(34px,3.9vw,54px)] font-bold leading-[1.06] tracking-[-.035em] text-navy text-balance" id="page-title" data-intro>{name}</h1>
            {detail && <p className="mt-4.5 max-w-[32em] text-[clamp(16px,1.2vw,18px)] leading-[1.65]" data-intro>{detail.summary}</p>}
            <div className="mt-7 flex flex-wrap gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-intro>
              <Link href={start} className="btn btn-primary btn-lg">Get Started <SvgIcon id="i-arrow" className="i arr" /></Link>
              <a href={ask} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg"><SvgIcon id="i-phone" className="i" />Talk to an Expert</a>
            </div>
            {detail && (
              <ul className="mt-6.5 flex flex-wrap gap-x-6 gap-y-2.5 p-0 font-sans text-[14px] font-medium leading-[1.3] text-navy-2" data-intro>
                {detail.timeline && <li className="flex items-center gap-2"><SvgIcon id="i-play" className="size-4 text-emerald stroke-[2.4]" />{detail.timeline}</li>}
                <li className="flex items-center gap-2"><SvgIcon id="i-check" className="size-4 text-emerald stroke-[2.4]" />{detail.steps.length} steps, updates at each one</li>
                {detail.price && <li className="flex items-center gap-2"><SvgIcon id="i-card" className="size-4 text-emerald stroke-[2.4]" />{detail.price}</li>}
              </ul>
            )}
          </div>

          {/* what you'll need: the documents, ticked off */}
          <div className="relative flex justify-center max-lg:mt-2" aria-hidden="true">
            <div className="relative w-full max-w-110 rounded-3xl border border-line bg-white p-5.5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_40px_70px_-40px_rgba(7,26,43,.35)] max-sm:p-4.5" data-card>
              <div className="flex items-center gap-3.5">
                <span className="key"><SvgIcon id={service.icon} /></span>
                <div className="min-w-0">
                  <b className="block font-display text-[16px] font-bold leading-[1.2] tracking-[-.01em] text-navy">What you&apos;ll need</b>
                  <small className="mt-0.75 block text-[13px] text-muted">{detail ? `${detail.documents.length} documents for ${name}` : name}</small>
                </div>
              </div>
              <ul className="m-0 mt-5 grid list-none gap-2 p-0">
                {(detail?.documents ?? ['Details on request']).map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-[14px] border border-line bg-off px-3.25 py-2.75 text-[14px] leading-[1.45] text-navy">
                    <i className="mt-px grid size-5 flex-none place-items-center rounded-full bg-emerald text-navy" data-tick><SvgIcon id="i-check" className="size-2.75 stroke-3" /></i>{d}
                  </li>
                ))}
              </ul>
              <p className="mt-3.5 flex items-center gap-2.25 font-display text-[12.5px] font-medium leading-[1.3] text-navy-2"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-4.5" />We keep you posted with every move.</p>
              <span className="absolute -right-4.5 -top-4.5 grid size-14 place-items-center rounded-full bg-emerald text-navy shadow-[0_4px_0_#0E9E68,0_20px_30px_-14px_rgba(10,124,82,.6)] max-sm:-right-2 max-sm:-top-3.5 max-sm:size-12" data-coin>
                <SvgIcon id="i-check" className="size-6 stroke-[2.6]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ trust row ============ */}
      <section className="border-y border-line" aria-label="Trust">
        <div className="wrap">
          <ul className="m-0 flex flex-wrap gap-x-10 gap-y-4 p-0 py-6" data-rise>
            {TRUST_ITEMS.map((t) => (
              <li key={t.text} className="flex items-center gap-3 font-display text-[14.5px] font-medium leading-[1.35] text-navy">
                <SvgIcon id="i-check" className="size-4.5 text-emerald stroke-[2.4]" />
                {t.bold ? <span><b className="font-extrabold text-emerald-ink">{t.bold}</b>{t.text.slice(t.bold.length)}</span> : t.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ how it works ============ */}
      {detail && (
        <section className={SEC} id="process" aria-labelledby="process-title">
          <div className="wrap grid grid-cols-1 items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="lg:sticky lg:top-35">
              <p className="eyebrow" data-reveal><i className="dot"></i>How it works</p>
              <h2 className={H2} id="process-title" data-reveal>Simple for You. Serious About the Work.</h2>
              <p className="mt-4 max-w-[30em] text-[16px] leading-[1.7]" data-reveal>We believe once you&apos;ve trusted us with the work, staying informed should be our responsibility, not yours.</p>
            </div>
            <ol className="m-0 list-none border-t border-line p-0" data-rise>
              {detail.steps.map((s, i) => (
                <li key={s} className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-b border-line py-6 sm:gap-8">
                  <span className="font-display text-[clamp(26px,2.6vw,36px)] font-bold leading-none tracking-[-.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1.5px_#D2DBE4] group-hover:text-emerald group-hover:[-webkit-text-stroke-color:#16B878]">0{i + 1}</span>
                  <p className="m-0 pt-1 font-display text-[clamp(17px,1.4vw,20px)] font-semibold leading-[1.35] tracking-[-.015em] text-navy">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ============ the rest of the category ============ */}
      <section className={`${SEC} bg-off`} id="related" aria-labelledby="related-title">
        <div className="wrap">
          <div className="mb-[clamp(32px,4vw,48px)] flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-160">
              <p className="eyebrow" data-reveal><i className="dot"></i>{service.name}</p>
              <h2 className={H2} id="related-title" data-reveal>More in {service.name}</h2>
            </div>
            <Link href={servicePath(service)} className="btn btn-ghost" data-reveal>All {service.name} services <SvgIcon id="i-arrow" className="i arr" /></Link>
          </div>
          <ul className="m-0 list-none grid grid-cols-1 gap-x-[clamp(24px,3vw,48px)] border-t border-line p-0 sm:grid-cols-2 lg:grid-cols-3" data-rise>
            {siblings.map((x) => (
              <li key={x} className="border-b border-line">
                <Link href={servicePath(service, x)} className="group flex items-center gap-3.5 px-1 py-4.5 font-display text-[17px] font-semibold leading-[1.3] tracking-[-.015em] text-navy">
                  <i className="grid size-7 flex-none place-items-center rounded-full border border-mint-line bg-mint-soft text-emerald-ink"><SvgIcon id="i-check" className="size-3.5 stroke-[2.6]" /></i>
                  <span className="flex-1 transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">{x}</span>
                  <i className="grid size-8.5 flex-none place-items-center rounded-full border border-line-2 text-navy transition-colors duration-[.35s] group-hover:border-emerald group-hover:bg-emerald">
                    <SvgIcon id="i-arrow" className="size-3.75 -rotate-45 transition-transform duration-[.45s] ease-out-expo group-hover:rotate-0" />
                  </i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {SERVICE_PRICING[slug] && (
        <section className="border-t border-line relative overflow-hidden bg-white">
          <Pricing plans={SERVICE_PRICING[slug]} title="Clear, Predictable Pricing" />
        </section>
      )}

      <FinalCTA />
    </main>
  );
}
