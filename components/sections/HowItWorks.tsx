'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HOW_STEPS } from '@/lib/constants';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import SvgIcon from '@/components/ui/SvgIcon';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Art pieces fade/slide in once their step is reached (`data-on` on the card). */
const ART = 'transition-[opacity,translate,scale,rotate] duration-[.6s,.8s,.8s,.8s] ease-out-expo';
const BAR = 'block h-[7px] rounded-[7px] bg-line';

/** Four steps on a horizontal track. Desktop pins the section and scrubs the track; mobile stacks the cards. */
export default function HowItWorks() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sec = section.current!;
    const view = sec.querySelector<HTMLElement>('[data-how-view]')!;
    const track = sec.querySelector<HTMLElement>('[data-how-track]')!;
    const steps = gsap.utils.toArray<HTMLElement>('[data-hstep]');

    const mark = (i: number) => steps.forEach((s, k) => { s.toggleAttribute('data-on', k <= i); s.toggleAttribute('data-current', k === i); });
    if (prefersReducedMotion()) { mark(steps.length - 1); return; }   // static: no pin, every step shown

    gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: sec, start: 'top 75%', once: true } });

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const dist = () => Math.max(0, track.scrollWidth - view.clientWidth);
      if (dist() <= 40) { mark(steps.length - 1); return; }
      mark(0);
      const len = () => '+=' + dist() * 1.25;
      gsap.to(track, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
          trigger: sec, start: 'top top', end: len, pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => mark(Math.round(self.progress * (steps.length - 1))),
        },
      });
      gsap.fromTo('[data-how-bar] i', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: len, scrub: 0.8, invalidateOnRefresh: true } });
    });
    mm.add('(max-width: 1023.98px)', () => {
      mark(-1);
      steps.forEach((s, i) => ScrollTrigger.create({ trigger: s, start: 'top 72%', onEnter: () => mark(i), onLeaveBack: () => mark(i - 1) }));
    });
  }, { scope: section });

  const arts = [
    // 01 — conversation
    <>
      <i className={`${ART} absolute left-[8%] top-[12%] flex w-[54%] translate-y-3.5 scale-90 flex-col gap-1.5 rounded-[14px] rounded-bl-[4px] border border-line bg-white px-[13px] py-[11px] text-line-2 opacity-0 shadow-[0_1px_2px_rgba(7,26,43,.05),0_10px_24px_-14px_rgba(7,26,43,.16)] group-data-on:translate-y-0 group-data-on:scale-100 group-data-on:opacity-100`}>
        <i className="block h-1.5 rounded-md bg-current opacity-55"></i><i className="block h-1.5 w-[62%] rounded-md bg-current opacity-55"></i>
      </i>
      <i className={`${ART} absolute right-[8%] top-[37%] flex w-[54%] translate-y-3.5 scale-90 flex-col gap-1.5 rounded-[14px] rounded-br-[4px] bg-emerald px-[13px] py-[11px] text-navy opacity-0 delay-200 group-data-on:translate-y-0 group-data-on:scale-100 group-data-on:opacity-100`}>
        <i className="block h-1.5 rounded-md bg-current opacity-40"></i><i className="block h-1.5 w-[62%] rounded-md bg-current opacity-40"></i>
      </i>
      <i className="absolute bottom-[10%] left-[8%] right-[calc(8%+44px)] h-9 rounded-[18px] border border-line bg-white"></i>
      <i className={`${ART} absolute bottom-[10%] right-[8%] grid size-9 scale-[.4] place-items-center rounded-full bg-navy text-white opacity-0 delay-[.4s] group-data-on:scale-100 group-data-on:opacity-100 [&_.i]:size-[17px]`}>
        <SvgIcon id="i-send" />
      </i>
    </>,
    // 02 — work in progress
    <>
      <i className="absolute bottom-[14%] left-[9%] top-[14%] flex w-[54%] flex-col gap-[9px] rounded-[14px] border border-line bg-white p-4 shadow-[0_1px_2px_rgba(7,26,43,.05),0_10px_24px_-14px_rgba(7,26,43,.16)]">
        <i className={BAR}></i><i className={`${BAR} w-[80%]`}></i><i className={`${BAR} w-[58%]`}></i>
        <i className="mt-auto block h-2 overflow-hidden rounded-[7px] bg-mint-soft">
          <i className="block h-full origin-left scale-x-[.12] bg-emerald transition-[scale] delay-200 duration-[1.8s] ease-out-expo group-data-on:scale-x-[.74]"></i>
        </i>
      </i>
      <i className={`${ART} absolute right-[10%] top-1/2 -mt-[38px] grid size-[76px] -rotate-[40deg] scale-50 place-items-center rounded-[22px] border border-mint-line bg-mint-soft text-emerald-ink opacity-0 shadow-[0_5px_0_#C2EEDC] group-data-on:rotate-0 group-data-on:scale-100 group-data-on:opacity-100 [&_.i]:size-10 [&_.i]:animate-[spin_7s_linear_infinite] [&_.i]:[animation-play-state:paused] group-data-on:[&_.i]:[animation-play-state:running]`}>
        <SvgIcon id="i-gear" />
      </i>
    </>,
    // 03 — update ping
    <>
      <i className="absolute -right-10 -top-[50px] size-[170px] rounded-full bg-mint/40"></i>
      <i className="absolute left-[12%] top-1/2 -mt-[33px] grid size-[66px] place-items-center rounded-full bg-emerald text-navy shadow-[0_6px_0_#0E9E68] [&_.i]:relative [&_.i]:size-[30px] [&_.i]:stroke-2">
        <i className="absolute inset-0 rounded-full border-2 border-emerald opacity-0 group-data-on:animate-[ripple_2.4s_var(--ease)_infinite]"></i>
        <i className="absolute inset-0 rounded-full border-2 border-emerald opacity-0 [animation-delay:1.2s] group-data-on:animate-[ripple_2.4s_var(--ease)_infinite]"></i>
        <SvgIcon id="i-bell" />
      </i>
      <i className={`${ART} glass absolute right-[7%] top-1/2 -mt-[29px] flex w-[52%] translate-x-[30px] items-center gap-2.5 rounded-[14px] p-3 opacity-0 group-data-on:translate-x-0 group-data-on:opacity-100`}>
        <i className="grid size-[34px] flex-none place-items-center rounded-[10px] border border-line bg-white">
          <Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="w-[22px]" />
        </i>
        <i className="flex flex-1 flex-col gap-[7px]"><i className="block h-[7px] rounded-[7px] bg-line-2"></i><i className={`${BAR} w-[62%]`}></i></i>
      </i>
    </>,
    // 04 — done
    <>
      <i className="absolute inset-0 m-auto size-[88px] rounded-full border-2 border-mint opacity-0 group-data-on:animate-[ripple_2.8s_var(--ease)_infinite]"></i>
      <i className="absolute inset-0 m-auto size-[88px] rounded-full border-2 border-mint opacity-0 [animation-delay:1.4s] group-data-on:animate-[ripple_2.8s_var(--ease)_infinite]"></i>
      <i className={`${ART} coin size-[88px] -rotate-[30deg] scale-50 opacity-0 group-data-on:rotate-0 group-data-on:scale-100 group-data-on:opacity-100 [&_.i]:size-[42px]`}>
        <SvgIcon id="i-check" />
      </i>
    </>,
  ];

  return (
    <section className="relative flex flex-col justify-center bg-white py-[clamp(88px,11vw,120px)] lg:min-h-screen lg:pb-[clamp(20px,3vh,36px)] lg:pt-[clamp(36px,5vh,60px)]" id="how" aria-labelledby="how-title" ref={section}>
      <div className="wrap mb-[clamp(14px,2vh,26px)] flex items-end justify-between gap-8">
        <div>
          <p className="eyebrow" data-reveal><i className="dot"></i>How TaxwiseIndia Works</p>
          <h2 className="h2 mt-2.5 max-w-[14em] text-[clamp(26px,2.8vw,40px)]" id="how-title" data-reveal>Simple for You. Serious About the Work.</h2>
        </div>
        <div className="mb-2.5 hidden h-1 w-[clamp(140px,18vw,240px)] flex-none overflow-hidden rounded bg-line lg:block" data-how-bar aria-hidden="true">
          <i className="block h-full origin-left scale-x-0 bg-emerald"></i>
        </div>
      </div>

      <div className="lg:overflow-hidden" data-how-view>
        <ol className="m-0 flex list-none flex-col gap-4 px-4 sm:px-5 lg:w-max lg:flex-row lg:gap-5 lg:px-[max(20px,calc((100%_-_var(--wrap))_/_2))] lg:pb-5 lg:pt-2" data-how-track>
          {HOW_STEPS.map((step, i) => (
            <li
              key={step.number}
              data-hstep
              data-on={i === 0 ? '' : undefined}
              data-current={i === 0 ? '' : undefined}
              className="group relative flex flex-col rounded-3xl border border-line bg-off p-[clamp(16px,1.8vh,22px)] transition-[background-color,border-color,box-shadow] duration-[.6s,.6s,.7s] ease-out-expo data-current:border-mint-line data-current:bg-white data-current:shadow-[0_40px_70px_-42px_rgba(7,26,43,.4)] lg:h-[clamp(280px,calc(100vh_-_210px),380px)] lg:w-[clamp(290px,28vw,400px)] lg:flex-none"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-[clamp(36px,3.2vw,50px)] font-bold leading-[.9] tracking-[-.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-[.6s] [-webkit-text-stroke:1.5px_#D2DBE4] group-data-on:text-emerald group-data-on:[-webkit-text-stroke-color:#16B878]">{step.number}</span>
                <span className="key"><SvgIcon id={step.icon} /></span>
              </div>
              <div className={`relative my-2.5 h-[190px] flex-none overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-[.6s] group-data-current:bg-off lg:h-auto lg:min-h-[75px] lg:flex-1 ${i === 3 ? 'grid place-items-center' : ''}`} aria-hidden="true">
                {arts[i]}
              </div>
              <div>
                <h3 className="m-0 text-[clamp(16px,1.3vw,19px)] leading-[1.3] tracking-[-.015em]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-normal">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
