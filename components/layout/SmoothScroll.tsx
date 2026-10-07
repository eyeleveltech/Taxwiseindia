'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis, getLenis, scrollToTarget } from '@/hooks/useLenis';

const NAV_OFFSET = -84;

/**
 * One smooth-scroll setup for every page:
 * - a single Lenis instance synced with ScrollTrigger (see hooks/useLenis.ts)
 * - same-page anchor links glide to their target (pinned sections included)
 * - on route change the page starts at the top and ScrollTrigger re-measures
 * - fonts and images arriving later also trigger a re-measure
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => initLenis(), []);

  useEffect(() => {
    // pins, lazy images, fonts and open accordions all change the page height after ScrollTrigger measured it;
    // re-measure (debounced) whenever the document grows or shrinks so no reveal is left with stale positions
    let t: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => { clearTimeout(t); t = setTimeout(() => ScrollTrigger.refresh(), 150); });
    ro.observe(document.body);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, []);

  useEffect(() => {
    getLenis()?.start();   // a route change always lands on a scrollable page
    const hash = window.location.hash.slice(1);
    const el = hash ? document.getElementById(hash) : null;
    if (el) {
      const t = setTimeout(() => scrollToTarget((el.closest('.pin-spacer') as HTMLElement) || el, { offset: NAV_OFFSET }), 350);
      return () => clearTimeout(t);
    }
    scrollToTarget(0, { immediate: true });
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null;
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const href = a.getAttribute('href') || '';
      const samePage = href.startsWith('#') || href.startsWith(`${pathname}#`) || (pathname === '/' && href.startsWith('/#'));
      if (!samePage) return;
      const id = href.slice(href.indexOf('#') + 1);
      const el = id === 'top' ? document.body : document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      scrollToTarget(id === 'top' ? 0 : ((el.closest('.pin-spacer') as HTMLElement) || el), { offset: id === 'top' ? 0 : NAV_OFFSET });
      window.history.replaceState(null, '', id === 'top' ? pathname : `#${id}`);
    };
    document.addEventListener('click', onClick);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('load', refresh); };
  }, [pathname]);

  useEffect(() => {
    // keep Lenis from fighting the browser when the tab is restored
    const onVisible = () => { if (!document.hidden) getLenis()?.start(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  return null;
}
