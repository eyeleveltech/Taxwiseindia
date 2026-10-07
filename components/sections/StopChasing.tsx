'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const NOTES = ['Your GST filing has been initiated.', 'Documents reviewed successfully.', 'Your filing has been completed.'];

/** Pinned on desktop: three notifications drop onto the phone as you scroll, then the tick draws. */
export default function StopChasing() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sec = section.current;
    if (!sec) return;
    const notes = gsap.utils.toArray<HTMLElement>('[data-ph-note]');
    const dots = gsap.utils.toArray<HTMLElement>('[data-dots] i');
    const phone = sec.querySelector<HTMLElement>('[data-phone]');

    const reduced = prefersReducedMotion();
    if (!reduced) gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: sec, start: 'top 75%', once: true } });

    const mm = gsap.matchMedia();
    mm.add({ desk: '(min-width: 1024px)', mob: '(max-width: 1023.98px)' }, (ctx) => {
      const { desk } = ctx.conditions as { desk: boolean };
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'back.out(1.5)' } });

      notes.forEach((n, i) => {
        const at = i * 1.25;
        tl.fromTo(n, { y: -36, scale: 0.9, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1 }, at)
          .to(phone, { keyframes: { x: [-5, 5, -4, 4, 0] }, duration: 0.5, ease: 'none' }, at + 0.05)
          .to(dots[i], { backgroundColor: '#16B878', width: 54, duration: 0.5, ease: 'power2.out' }, at);
      });
      tl.to(dots[3], { backgroundColor: '#16B878', width: 54, duration: 0.5, ease: 'power2.out' }, '+=0.2')
        .fromTo('[data-ph-done]', { autoAlpha: 0, y: 30, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'expo.out' }, '<')
        .fromTo('[data-ph-tick]', { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, ease: 'power2.out' }, '<0.25')
        .to({}, { duration: 0.6 });   // brief hold before the pin releases

      if (reduced) tl.progress(1);   // static: the phone shows the finished state, no pin
      else if (desk) ScrollTrigger.create({ trigger: sec, start: 'top top', end: '+=190%', pin: true, scrub: 0.6, anticipatePin: 1, animation: tl });
      else ScrollTrigger.create({ trigger: phone, start: 'top 72%', animation: tl, toggleActions: 'play none none none' });
    });
  }, { scope: section });

  return (
    <section className="relative flex items-center overflow-clip bg-white py-[clamp(88px,11vw,120px)] lg:min-h-screen lg:pb-14 lg:pt-[104px]" id="updates" aria-labelledby="stop-title" ref={section}>
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-2">
        <div>
          <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] font-bold leading-[1.04] tracking-[-.035em] text-navy text-balance" id="stop-title" data-reveal>Stop Chasing Updates.</h2>
          <p className="mt-[26px] flex items-center gap-3.5 font-display text-[clamp(16px,1.3vw,18px)] font-semibold leading-[1.4] tracking-[-.015em] text-navy" data-reveal>
            <span className="key key-sm"><SvgIcon id="i-check" /></span>
            We keep you posted with every move.
          </p>
          <div className="mt-[34px] flex gap-2 [&>i]:h-[5px] [&>i]:w-[34px] [&>i]:rounded-[5px] [&>i]:bg-line-2" data-dots aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className="relative mt-3 grid min-h-[calc(var(--ph)+20px)] place-items-center [--ph:clamp(440px,120vw,580px)] [perspective:1600px] lg:mt-0 lg:[--ph:clamp(460px,calc(100vh-170px),620px)]">
          <i className="absolute inset-0 m-auto aspect-square w-[calc(var(--ph)*.92)] rounded-full bg-mint/30" aria-hidden="true"></i>
          <i className="absolute inset-0 m-auto aspect-square w-[calc(var(--ph)*1.08)] rounded-full border-[1.5px] border-dashed border-emerald/40" aria-hidden="true">
            <i className="absolute -top-[7px] left-1/2 -ml-[6.5px] size-[13px] rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]"></i>
          </i>

          <div
            className="relative h-(--ph) w-[calc(var(--ph)*.484)] rounded-[3em] bg-navy p-[.7em] text-[calc(var(--ph)/620*16)] shadow-[inset_0_0_0_.14em_#1d3852,0_3em_5em_-2.2em_rgba(7,26,43,.55),0_1em_2em_-1em_rgba(7,26,43,.3)] before:absolute before:-right-[.28em] before:top-[7.5em] before:h-[3.4em] before:w-[.28em] before:rounded-r-[.2em] before:bg-[#0d2539] after:absolute after:-right-[.28em] after:top-[11.8em] after:h-[5.6em] after:w-[.28em] after:rounded-r-[.2em] after:bg-[#0d2539]"
            data-phone
          >
            <div className="relative h-full overflow-hidden rounded-[2.35em] bg-mint-soft">
              <span className="absolute left-1/2 top-[.7em] z-2 h-[1.65em] w-[5.8em] -ml-[2.9em] rounded-[1em] bg-navy" aria-hidden="true"></span>
              <i className="absolute -left-[30%] top-[30%] aspect-square w-[160%] rounded-full bg-mint/50 after:absolute after:left-[18%] after:-top-[12%] after:aspect-square after:w-[34%] after:rounded-full after:bg-emerald" aria-hidden="true"></i>
              <ul className="absolute inset-x-[.7em] top-[3.4em] z-1 m-0 flex list-none flex-col gap-[.55em] p-0">
                {NOTES.map((text) => (
                  <li key={text} className="glass flex items-center gap-[.7em] rounded-[1.2em] px-[.8em] py-[.75em] [&_.note-ic]:size-[2.5em] [&_.note-ic]:rounded-[.8em] [&_.note-ic_img]:w-[1.6em] [&_.note-b_b]:text-[.82em] [&_.note-b_p]:mt-[.2em] [&_.note-b_p]:text-[.84em]" data-ph-note>
                    <span className="note-ic"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>
                    <div className="note-b"><b>TaxwiseIndia</b><p>{text}</p></div>
                  </li>
                ))}
              </ul>
              <div className="absolute inset-x-0 bottom-[2.6em] z-1 flex flex-col items-center" data-ph-done>
                <span className="grid size-[5.2em] place-items-center rounded-full bg-emerald shadow-[inset_0_.14em_0_rgba(255,255,255,.35),0_.4em_0_#0E9E68,0_1.4em_2em_-1em_rgba(10,124,82,.7)]">
                  <svg className="size-[3em] fill-none stroke-navy stroke-[4] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 48 48" aria-hidden="true">
                    <path data-ph-tick d="M14 24.5l7 7 13-14" />
                  </svg>
                </span>
                <p className="mt-[.9em] rounded-full bg-white px-[.9em] py-[.45em] font-display text-[1.05em] font-bold leading-[1.2] tracking-[-.01em] text-navy shadow-[0_1px_2px_rgba(7,26,43,.05),0_10px_24px_-14px_rgba(7,26,43,.16)]">You&apos;re all set.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
