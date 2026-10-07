'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FLOW = [
  { icon: 'i-card', label: 'YOU PAY' },
  { icon: 'i-play', label: 'WE START' },
  { icon: 'i-work', label: 'WE WORK' },
  { icon: 'i-bell', label: 'WE UPDATE' },
  { icon: 'i-check', label: 'WE COMPLETE' },
];

/** The five-step promise. The emerald line fills with the scroll and each node lights as the marker passes it. */
export default function PromiseSection() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) {   // static: every step reached
      gsap.set('[data-flow-fill]', { scaleY: 1 }); gsap.set('[data-flow-dot]', { autoAlpha: 0 });
      section.current?.querySelectorAll('[data-flow-step], [data-flow-foot]').forEach((el) => el.setAttribute('data-on', ''));
      return;
    }
    gsap.from('[data-reveal]', { y: 28, autoAlpha: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: section.current, start: 'top 80%', once: true } });

    const line = section.current?.querySelector<HTMLElement>('[data-flow-line]');
    if (!line) return;
    const st = { trigger: line, start: 'top 62%', end: 'bottom 62%', scrub: 0.6 };
    gsap.fromTo('[data-flow-fill]', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: st });
    gsap.fromTo('[data-flow-dot]', { y: 0 }, { y: () => line.offsetHeight, ease: 'none', scrollTrigger: { ...st, invalidateOnRefresh: true } });

    gsap.utils.toArray<HTMLElement>('[data-flow-step]').forEach((step) => {
      ScrollTrigger.create({
        trigger: step.querySelector('[data-flow-node]'), start: 'center 62%',
        onEnter: () => step.setAttribute('data-on', ''), onLeaveBack: () => step.removeAttribute('data-on'),
      });
    });
    const steps = section.current!.querySelectorAll('[data-flow-node]');
    const foot = section.current!.querySelector('[data-flow-foot]');
    ScrollTrigger.create({
      trigger: steps[steps.length - 1], start: 'center 62%',
      onEnter: () => foot?.setAttribute('data-on', ''),   // once shown, it stays
    });
  }, { scope: section });

  return (
    <section className="sec" id="promise" aria-labelledby="promise-title" ref={section}>
      <div className="wrap grid grid-cols-1 items-start gap-[clamp(32px,6vw,96px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div className="lg:sticky lg:top-[140px]">
          <p className="eyebrow" data-reveal><i className="dot"></i>The Taxwise Promise</p>
          <h2 className="h2" id="promise-title" data-reveal>You shouldn&apos;t have to chase your tax consultant.</h2>
          <p className="lead" data-reveal>We believe once you&apos;ve trusted us with the work, staying informed should be our responsibility — not yours.</p>
        </div>

        <div className="[--node:56px] [--pad:18px] lg:[--pad:20px]">
          <ol className="relative m-0 list-none p-0">
            <li className="absolute bottom-[calc(var(--pad)+var(--node)/2)] left-[calc(var(--node)/2-1px)] top-[calc(var(--pad)+var(--node)/2)] w-0.5 rounded-sm bg-line" data-flow-line aria-hidden="true">
              <i className="absolute inset-0 origin-top rounded-sm bg-emerald" data-flow-fill></i>
              <i className="absolute left-1/2 top-0 -ml-2 -mt-2 size-4 rounded-full border-[3px] border-emerald bg-white shadow-[0_0_0_6px_rgba(99,230,190,.3)]" data-flow-dot></i>
            </li>
            {FLOW.map((step) => (
              <li key={step.label} className="group relative grid grid-cols-[var(--node)_minmax(0,1fr)] items-center gap-[clamp(18px,2.4vw,32px)] py-(--pad)" data-flow-step>
                <span className="relative z-1 grid size-(--node) place-items-center rounded-full border-[1.5px] border-line-2 bg-white text-[#97A5B3] transition-[background-color,border-color,color,box-shadow,scale] duration-[.5s,.5s,.5s,.5s,.6s] ease-out-expo group-data-on:scale-105 group-data-on:border-emerald group-data-on:bg-emerald group-data-on:text-navy group-data-on:shadow-[0_0_0_8px_rgba(99,230,190,.28)]" data-flow-node>
                  <svg className="i size-[22px]"><use href={`#${step.icon}`} /></svg>
                </span>
                <span className="font-display text-[clamp(22px,2.4vw,34px)] font-bold leading-[1.15] tracking-[-.02em] text-[#A3B0BD] transition-[color,translate] duration-[.5s,.7s] ease-out-expo group-data-on:translate-x-1.5 group-data-on:text-navy">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-[26px] flex translate-y-4 items-center gap-3.5 rounded-[18px] border border-mint-line bg-mint-soft px-5 py-4 font-display text-[clamp(15.5px,1.2vw,17px)] font-semibold leading-[1.4] tracking-[-.01em] text-navy opacity-0 transition-[opacity,translate] duration-[.6s,.7s] ease-out-expo data-on:translate-y-0 data-on:opacity-100" data-flow-foot>
            <span className="grid size-8 flex-none place-items-center rounded-[10px] border border-line bg-white shadow-[0_3px_0_#E4E9EF]">
              <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-[21px]" />
            </span>
            We keep you posted with every move.
          </p>
        </div>
      </div>
    </section>
  );
}
