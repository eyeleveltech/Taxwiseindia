'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The giant wordmark at the foot of every page, rising into view the first time it is reached. */
export default function FooterGiant() {
  const giant = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(giant.current, { yPercent: 40, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: giant.current, start: 'top 98%', once: true } });
  }, { scope: giant });

  return (
    <div ref={giant} className="-mt-[.12em] flex select-none justify-center overflow-hidden whitespace-nowrap px-3 font-display text-[13.4vw] font-bold leading-none tracking-[-.045em] text-navy" aria-hidden="true">
      <span>TAXWISE</span><span className="text-emerald">INDIA</span>
    </div>
  );
}
