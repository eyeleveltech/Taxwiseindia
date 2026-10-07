'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import gsap from 'gsap';
import SvgIcon from '@/components/ui/SvgIcon';

/* Sample reviews written to the brief's promise (updates at every step, no chasing). Swap in the client's real quotes when they arrive. */
const REVIEWS = [
  'Our GST returns used to be a monthly scramble. Now I get a message when the filing starts and another when it is done. I have not had to follow up once.',
  'They registered our Private Limited company in under two weeks and explained every document before asking for it. Clear, calm and quick.',
  'Payroll, PF and ESI are finally off my desk. The team runs it every month and I only hear from them when something needs my sign-off.',
  'Trademark registration felt complicated until TaxwiseIndia walked us through the search and objection stages. Our brand is protected now.',
  'Annual ROC filing, director KYC, income tax - one team handles all of it for us. The updates arrive before I even think to ask.',
];

function Card({ quote }: { quote: string }) {
  return (
    <figure className="relative m-0 flex w-[380px] flex-none flex-col rounded-3xl border border-line bg-white p-7 max-sm:w-[300px] max-sm:p-6">
      <SvgIcon id="i-quote" className="size-[30px] text-emerald" />
      <blockquote className="mt-4 font-display text-[16px] font-medium leading-[1.55] tracking-[-.01em] text-navy">{quote}</blockquote>
    </figure>
  );
}

/** One row of reviews drifting slowly to the left; it pauses on hover. */
export default function Testimonials() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;   // the row stays still and scrolls sideways by hand
    const el = container.current?.querySelector<HTMLElement>('[data-marquee]');
    const track = el?.querySelector<HTMLElement>('[data-track]');
    if (!el || !track) return;
    const t = gsap.to(track, { xPercent: -50, ease: 'none', duration: 48, repeat: -1 });
    el.addEventListener('pointerenter', () => gsap.to(t, { timeScale: 0, duration: 0.6, overwrite: true }));
    el.addEventListener('pointerleave', () => gsap.to(t, { timeScale: 1, duration: 0.6, overwrite: true }));
  }, { scope: container });

  const group = (prefix: string, hidden = false) => (
    <div className="flex flex-none items-stretch gap-4 pr-4" aria-hidden={hidden || undefined}>
      {REVIEWS.map((quote, i) => <Card key={`${prefix}-${i}`} quote={quote} />)}
    </div>
  );

  return (
    <section ref={container} className="sec sec-off overflow-hidden" id="testimonials" aria-labelledby="testi-title">
      <div className="wrap">
        <div className="mx-auto mb-[clamp(36px,4.5vw,56px)] max-w-[720px] text-center">
          <p className="eyebrow" data-reveal><i className="dot"></i>Testimonials</p>
          <h2 className="h2" id="testi-title" data-reveal>What our customers say.</h2>
        </div>
      </div>
      <div className="overflow-hidden motion-reduce:overflow-x-auto" data-marquee>
        <div className="flex w-max" data-track>{group('a')}{group('b', true)}</div>
      </div>
    </section>
  );
}
