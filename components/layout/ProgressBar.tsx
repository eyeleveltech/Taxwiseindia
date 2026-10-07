'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Thin emerald line along the top of the viewport that fills as the page scrolls. */
export default function ProgressBar() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(bar.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  });

  return <div ref={bar} className="pointer-events-none fixed inset-x-0 top-0 z-70 h-[3px] origin-left scale-x-0 bg-emerald" aria-hidden="true"></div>;
}
