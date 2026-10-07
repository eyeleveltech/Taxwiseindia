'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Motion wrapper for server-rendered pages.
 * `[data-intro]` children play in on load (they are CSS-hidden until then);
 * `[data-reveal]` children rise in as they scroll into view.
 */
export default function Reveal({ as = 'div', className, id, children }: {
  as?: 'div' | 'main' | 'section';
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const Tag = as as 'div';

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from('[data-intro]', { y: 22, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, delay: 0.1 });
    const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    if (!items.length) return;
    gsap.set(items, { y: 24, autoAlpha: 0 });
    ScrollTrigger.batch(items, {
      start: 'top 90%', once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
    });
  }, { scope: root });

  return <Tag ref={root} id={id} className={className}>{children}</Tag>;
}
