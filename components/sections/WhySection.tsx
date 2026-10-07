'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import { WHY_CARDS } from '@/lib/constants';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import SvgIcon from '@/components/ui/SvgIcon';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

/** Three cards that stack as you scroll; each draws its check mark when it arrives. */
export default function WhySection() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const cards = gsap.utils.toArray<HTMLElement>('[data-why-card]');
    gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: section.current, start: 'top 80%', once: true } });
    const mm = gsap.matchMedia();
    cards.forEach((card, i) => {
      const strokes = card.querySelectorAll('[data-draw]');
      gsap.set(strokes, { drawSVG: '0%' });
      ScrollTrigger.create({ trigger: card, start: 'top 70%', once: true, onEnter: () => gsap.to(strokes, { drawSVG: '100%', duration: 0.9, ease: 'power2.inOut', stagger: 0.3 }) });
      gsap.from(card.querySelector('.key'), { scale: 0.5, rotation: -20, autoAlpha: 0, duration: 1, ease: 'back.out(1.7)', scrollTrigger: { trigger: card, start: 'top 75%', once: true } });
      mm.add('(min-width: 1024px)', () => {
        if (i < cards.length - 1) gsap.to(card, { scale: 0.94, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: true } });
      });
    });
  }, { scope: section });

  return (
    <section className="sec sec-off" id="why" aria-labelledby="why-title" ref={section}>
      <div className="wrap grid grid-cols-1 items-start gap-[clamp(32px,6vw,96px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div className="lg:sticky lg:top-[140px]">
          <p className="eyebrow" data-reveal><i className="dot"></i>Why TaxwiseIndia</p>
          <h2 className="h2" id="why-title" data-reveal>More Than Filing. We&apos;re Here for the Follow-Through.</h2>
        </div>
        <div className="flex flex-col gap-7">
          {WHY_CARDS.map((card, idx) => (
            <article
              key={idx}
              data-why-card
              className="relative origin-top rounded-[28px] border border-line bg-white p-[clamp(28px,3vw,40px)] shadow-[0_1px_2px_rgba(7,26,43,.04),0_30px_60px_-36px_rgba(7,26,43,.32)] lg:sticky lg:min-h-[250px] lg:top-[calc(128px+var(--i)*26px)]"
              style={{ '--i': idx } as React.CSSProperties}
            >
              <div className="flex items-start justify-between">
                <span className="key key-lg"><SvgIcon id={card.icon} /></span>
                <svg className="size-12 fill-none stroke-emerald stroke-[2.6] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 48 48" aria-hidden="true">
                  <circle className="stroke-mint-line" data-draw cx="24" cy="24" r="21" />
                  <path data-draw d="M15 24.5l6 6 12-13" />
                </svg>
              </div>
              <h3 className="mt-8 font-display text-[clamp(20px,1.8vw,24px)] font-semibold leading-[1.25] tracking-[-.02em] text-navy lg:mt-10">{card.title}</h3>
              <p className="mt-2.5 text-[16px]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
