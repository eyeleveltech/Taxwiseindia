'use client';
import { useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

type ScrollTarget = string | number | HTMLElement;
type ScrollOptions = { offset?: number; duration?: number; immediate?: boolean };

/**
 * Creates the one Lenis instance for the whole app (called once from <SmoothScroll /> in the layout)
 * and keeps it in step with GSAP's ticker and ScrollTrigger. Returns a destroy function.
 */
export function initLenis() {
  if (lenisInstance || typeof window === 'undefined') return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
  lenisInstance = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (t: number) => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenisInstance = null;
  };
}

export function getLenis() {
  return lenisInstance;
}

/** Scroll to an element, selector or position — through Lenis when it is running, natively otherwise. */
export function scrollToTarget(target: ScrollTarget, options: ScrollOptions = {}) {
  const el = typeof target === 'string' ? (document.querySelector(target) as HTMLElement | null) : target;
  if (el === null) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { duration: 1.2, ...options });
    return;
  }
  if (typeof el === 'number') window.scrollTo({ top: el, behavior: options.immediate ? 'auto' : 'smooth' });
  else el.scrollIntoView({ behavior: options.immediate ? 'auto' : 'smooth', block: 'start' });
}

/** Helpers around the shared instance. Does not create one — <SmoothScroll /> does. */
export function useLenis() {
  const scrollTo = useCallback((target: ScrollTarget, options?: ScrollOptions) => scrollToTarget(target, options), []);
  const stop = useCallback(() => lenisInstance?.stop(), []);
  const start = useCallback(() => lenisInstance?.start(), []);
  return { lenis: lenisInstance, scrollTo, stop, start };
}
