'use client';
import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

/**
 * Creates a global Lenis instance, synced with GSAP ticker + ScrollTrigger.
 * Returns `{ lenis, scrollTo, stop, start }`.
 * Only one Lenis instance is created across the entire app.
 */
export function useLenis() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return;
    initialized.current = true;

    lenisInstance = new Lenis({ lerp: 0.1 });
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenisInstance?.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const rawEl = id === 'top' ? null : document.getElementById(id);
        const target = rawEl
          ? ((rawEl.closest('.pin-spacer') as HTMLElement) || rawEl)
          : (id === 'top' ? 0 : null);
        if (target !== null) {
          lenisInstance?.scrollTo(target, { offset: 0, duration: 1.2 });
        }
      }
    };

    // Scroll to initial hash after brief layout stabilization
    const timer = setTimeout(scrollToHash, 250);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
      lenisInstance?.destroy();
      lenisInstance = null;
      initialized.current = false;
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) => {
      if (lenisInstance) {
        lenisInstance.scrollTo(target, options);
      }
    },
    []
  );

  const stop = useCallback(() => lenisInstance?.stop(), []);
  const start = useCallback(() => lenisInstance?.start(), []);

  return { lenis: lenisInstance, scrollTo, stop, start };
}

export function getLenis() {
  return lenisInstance;
}
