'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Motion shell for the About and Contact pages: intro stagger, scroll reveals, and the floating hero art. */
export default function CompanyMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(() => {
    if (reduce) { gsap.set('[data-intro]', { autoAlpha: 1 }); return; }
    gsap.from('[data-intro]', { y: 26, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: 'expo.out' });
    gsap.utils.toArray<HTMLElement>('[data-company-reveal]').forEach((element) => {   // the shared sections animate their own [data-reveal]
      gsap.from(element, { y: 35, autoAlpha: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } });
    });
    const has = (sel: string) => !!root.current?.querySelector(sel);   // not every page has every piece
    if (has('[data-company-art]')) gsap.to('[data-company-art]', { y: -22, rotateY: 9, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: '600 top', scrub: 1 } });
    if (has('[data-company-ring]')) gsap.to('[data-company-ring]', { rotation: 360, duration: 70, ease: 'none', repeat: -1 });
    if (has('[data-company-float]')) gsap.to('[data-company-float]', { y: -12, duration: 3, stagger: 0.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, { scope: root, dependencies: [reduce], revertOnUpdate: true });

  return <main id="main" ref={root} className="bg-white text-body">{children}</main>;
}
