'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/ui/SvgIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { WHATSAPP_URL } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The emerald closing panel: the headline fills in and the panel settles into place as it scrolls up. */
export default function FinalCTA() {
  const container = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (!container.current || reduce) return;
    gsap.from('[data-cta-h]', { y: 20, autoAlpha: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '[data-cta-h]', start: 'top 88%', once: true } });
    gsap.fromTo('[data-cta-panel]', { scale: 0.92, y: 40 }, {
      scale: 1, y: 0, ease: 'none',
      scrollTrigger: { trigger: container.current, start: 'top bottom', end: 'top 35%', scrub: true },
    });
    gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: container.current, start: 'top 70%', once: true } });
    gsap.to('[data-ring]', { rotation: 360, duration: 60, repeat: -1, ease: 'none' });
    gsap.to('[data-badge]', { y: -14, rotation: 6, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }, { scope: container, dependencies: [reduce], revertOnUpdate: true });

  return (
    <section ref={container} className="bg-white pb-[clamp(88px,10vw,130px)] pt-[clamp(24px,4vw,56px)]" id="get-started" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[clamp(28px,3vw,40px)] bg-emerald px-[clamp(24px,6vw,96px)] py-[clamp(56px,7vw,96px)] text-center" data-cta-panel>
          <div aria-hidden="true">
            <i className="absolute -left-[190px] -top-[250px] size-[560px] rounded-full border-[1.5px] border-dashed border-navy/[.13]" data-ring>
              <i className="absolute -bottom-[7px] left-1/2 -ml-[7px] size-[14px] rounded-full bg-navy"></i>
            </i>
            <i className="absolute -bottom-[230px] -right-[150px] size-[460px] rounded-full border-[1.5px] border-navy/[.13]"></i>
            <span className="glass absolute right-[9%] top-[15%] grid size-[76px] place-items-center rounded-3xl text-navy max-sm:hidden" data-badge>
              <SvgIcon id="i-check" className="size-[34px] [stroke-width:2.4]" />
            </span>
          </div>
          <h2 className="relative mx-auto max-w-[15em] font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.08] tracking-[-.035em] text-navy text-balance" id="cta-title" data-cta-h>
            Your Taxes Shouldn&apos;t Take Over Your Business.
          </h2>
          <p className="relative mx-auto mt-5 max-w-[34em] font-sans text-[clamp(16px,1.2vw,18px)] font-medium leading-[1.6] text-navy" data-reveal>
            Let TaxwiseIndia handle the compliance work while you focus on building what&apos;s next.
          </p>
          <div className="relative mt-[38px] flex flex-wrap justify-center gap-3 max-sm:[&>.btn]:flex-[1_1_100%]" data-reveal>
            <Link href="/contact#contact-form" className="btn btn-navy btn-lg">
              Get Started <SvgIcon id="i-arrow" className="i arr" />
            </Link>
            <a className="btn btn-light btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <SvgIcon id="i-phone" className="i" />
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
