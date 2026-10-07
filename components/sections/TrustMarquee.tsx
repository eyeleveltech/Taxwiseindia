'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TRUST_ITEMS } from '@/lib/constants';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The four trust points on an endless band. It speeds up and leans with the scroll, and pauses on hover. */
export default function TrustMarquee() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = track.current, sec = section.current;
    if (!el || !sec || prefersReducedMotion()) return;
    const tw = gsap.fromTo(el, { xPercent: 0 }, { xPercent: -50, ease: 'none', duration: el.scrollWidth / 2 / 45, repeat: -1 });
    const skewTo = gsap.quickTo(el, 'skewX', { duration: 0.6, ease: 'power3.out' });
    let paused = false;
    let idle: ReturnType<typeof setTimeout>;

    ScrollTrigger.create({
      trigger: sec, start: 'top bottom', end: 'bottom top',
      onUpdate(self) {
        const v = self.getVelocity();
        skewTo(gsap.utils.clamp(-7, 7, -v / 260));
        if (!paused) gsap.to(tw, { timeScale: gsap.utils.clamp(1, 5, 1 + Math.abs(v) / 400), duration: 0.2, overwrite: true });
        clearTimeout(idle);
        idle = setTimeout(() => {
          skewTo(0);
          if (!paused) gsap.to(tw, { timeScale: 1, duration: 0.9, ease: 'power2.out', overwrite: true });
        }, 120);
      },
    });
    const enter = () => { paused = true; gsap.to(tw, { timeScale: 0, duration: 0.6, overwrite: true }); };
    const leave = () => { paused = false; gsap.to(tw, { timeScale: 1, duration: 0.6, overwrite: true }); };
    sec.addEventListener('pointerenter', enter);
    sec.addEventListener('pointerleave', leave);
    return () => { sec.removeEventListener('pointerenter', enter); sec.removeEventListener('pointerleave', leave); clearTimeout(idle); };
  }, { scope: section });

  const items = (prefix: string, hidden = false) => TRUST_ITEMS.map((item, i) => (
    <li key={`${prefix}-${i}`} aria-hidden={hidden || undefined} className="flex items-center gap-3 whitespace-nowrap px-7 font-display text-[clamp(16px,1.3vw,19px)] font-semibold leading-[1.2] tracking-[-.01em] text-navy max-sm:px-[22px]">
      <span className="key key-xs"><svg className="i"><use href="#i-check" /></svg></span>
      {item.bold ? <span><b className="font-bold text-emerald-ink">{item.bold}</b> {item.text.replace(item.bold, '').trim()}</span> : item.text}
    </li>
  ));

  return (
    <section ref={section} className="overflow-hidden border-y border-line bg-white py-6" aria-label="Why businesses trust TaxwiseIndia">
      <div className="overflow-hidden motion-reduce:overflow-x-auto">
        <div ref={track} className="flex w-max">
          <ul className="m-0 flex flex-none p-0">{items('a')}{items('b', true)}</ul>
          <ul className="m-0 flex flex-none p-0" aria-hidden="true">{items('c')}{items('d')}</ul>
        </div>
      </div>
    </section>
  );
}
