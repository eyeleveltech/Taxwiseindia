'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import FinalCTA from '@/components/sections/FinalCTA';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SERVICE_CATALOG, pad, servicePath } from '@/lib/services';
import ServicesOrbit from './ServicesOrbit';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Services index: sticky intro with the seven-service orbit on the left, the services as a list on the right. */
export default function ServicesIndex() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);   // hovering/focusing a service holds the orbit on it
  const reduce = useReducedMotion();

  // left alone, the orbit walks through all seven services
  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SERVICE_CATALOG.length), 2800);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const hold = (i: number) => { setActive(i); setPaused(true); };
  const release = () => setPaused(false);

  useGSAP(() => {
    if (reduce) { gsap.set('[data-intro]', { autoAlpha: 1 }); return; }
    gsap.from('[data-intro]', { y: 26, autoAlpha: 0, duration: 1, stagger: 0.09, ease: 'expo.out' });
    gsap.from('[data-service-row]', { y: 18, autoAlpha: 0, duration: 0.8, stagger: 0.07, delay: 0.18, ease: 'expo.out' });
    gsap.from('[data-heading-line]', { scaleX: 0, transformOrigin: 'left center', duration: 1.1, delay: 0.45, ease: 'power3.inOut' });
    gsap.from('[data-tile]', { scale: 0.4, autoAlpha: 0, duration: 0.9, stagger: 0.06, delay: 0.5, ease: 'back.out(1.6)', clearProps: 'transform' });
  }, { scope: root, dependencies: [reduce], revertOnUpdate: true });

  return (
    <main id="main" ref={root} className="bg-off text-body">
      <section id="catalog" className="overflow-x-clip pb-[50px] pt-[115px] sm:pt-[125px] lg:pb-[76px] lg:pt-[150px]" aria-labelledby="page-title">
        <div className="wrap grid grid-cols-1 items-start gap-7 sm:gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-[clamp(40px,6vw,90px)]">
          <div className="min-w-0 sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:items-start sm:max-lg:gap-x-3 lg:sticky lg:top-[105px]">
            <p className="eyebrow sm:max-lg:col-start-1" data-intro><i className="dot"></i>Our Services</p>
            <h1 className="mt-5.5 font-display text-[clamp(38px,9vw,50px)] font-bold leading-[1.08] tracking-[-.035em] text-navy sm:max-lg:col-start-1 sm:text-[46px] lg:text-[clamp(44px,4.4vw,62px)] lg:leading-[1.1]" id="page-title" data-intro>
              Everything Your<br />
              <em className="relative inline-block not-italic text-emerald-ink">
                Business Needs.
                <svg className="absolute -bottom-2.5 left-[-2%] h-3 w-[104%] fill-none stroke-mint stroke-2 [stroke-linecap:round]" data-heading-line viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 8Q135 0 297 5M48 13Q165 6 266 10" /></svg>
              </em>
            </h1>
            <p className="mt-6 max-w-[30em] text-[15px] leading-[1.7] text-body sm:text-base sm:max-lg:col-start-1" data-intro>
              One place for tax, accounting and compliance.<br />Seven services. One team that keeps you updated at every step.
            </p>
            <div className="mt-8 max-w-[340px] max-sm:mx-auto sm:max-lg:col-start-2 sm:max-lg:row-span-4 sm:max-lg:row-start-1 sm:max-lg:mt-0 sm:max-lg:self-center lg:mt-10 lg:max-w-[460px]" data-intro>
              <ServicesOrbit active={active} onHover={hold} onLeave={release} />
            </div>
          </div>

          <div className="min-w-0 lg:pt-2">
            <h2 className="mb-4.5 font-sans text-sm font-medium text-muted lg:mb-5.5" data-intro>Choose a service</h2>
            <div className="border-t border-line" onPointerLeave={release}>
              {SERVICE_CATALOG.map((item, index) => (
                <article key={item.slug} id={item.slug} className="group border-b border-line" data-service-row data-active={active === index ? '' : undefined} aria-labelledby={`title-${item.slug}`}>
                  <Link
                    href={servicePath(item)}
                    className="relative flex min-h-22 items-center gap-3 rounded-xl px-0.5 py-4 before:absolute before:-inset-x-2.25 before:inset-y-1.25 before:-z-1 before:scale-[.98] before:rounded-[13px] before:bg-mint-soft before:opacity-0 before:transition-[opacity,scale] before:duration-[.35s,.45s] before:ease-out-expo focus-visible:outline-emerald-ink group-data-active:before:scale-100 group-data-active:before:opacity-100 sm:min-h-22.5 sm:gap-4.5 sm:px-2.5 lg:py-4.5 lg:px-3"
                    onPointerEnter={() => hold(index)}
                    onFocus={() => hold(index)}
                    onBlur={release}
                  >
                    <span className="hidden w-7 flex-none font-display text-[12px] font-bold tracking-[.12em] text-muted transition-colors group-data-active:text-emerald-ink sm:block">{pad(index + 1)}</span>
                    <span className="grid h-[43px] w-[30px] flex-none place-items-center text-navy-2 transition-[translate,color] duration-[.4s] group-data-active:-translate-y-0.5 group-data-active:text-emerald-ink sm:w-[39px] [&_.i]:size-6 [&_.i]:stroke-[1.35] sm:[&_.i]:size-6.5">
                      <SvgIcon id={item.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 id={`title-${item.slug}`} className="m-0 font-display text-[20px] font-semibold leading-[1.3] tracking-[-.025em] text-navy max-[360px]:text-lg sm:text-[clamp(19px,1.62vw,23px)]">{item.name}</h3>
                      <p className="mt-1.5 text-xs leading-normal text-muted sm:text-[13px]">{item.tagline ?? `${item.items.length} services`}</p>
                    </div>
                    <span className="grid size-7.5 flex-none place-items-center rounded-full border border-line-2 text-navy transition-[background-color,border-color,color] duration-[.35s] group-data-active:border-emerald group-data-active:bg-emerald sm:size-[33px] [&_.i]:size-3.75 [&_.i]:-rotate-45 [&_.i]:transition-[rotate] [&_.i]:duration-[.4s] group-data-active:[&_.i]:rotate-0">
                      <SvgIcon id="i-arrow" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted" data-service-row>
              Not sure where to start?
              <Link href="/contact" className="inline-flex min-h-7.5 items-center gap-2 font-semibold text-emerald-ink [&_.i]:size-3.25">Talk to an Expert <SvgIcon id="i-arrow" /></Link>
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
