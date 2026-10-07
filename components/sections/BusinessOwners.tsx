'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { OWNER_CARDS } from '@/lib/constants';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import SvgIcon from '@/components/ui/SvgIcon';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Three panels; the one under the cursor widens and turns emerald. */
export default function BusinessOwners() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: section.current, start: 'top 80%', once: true } });
    gsap.from('[data-own]', {
      y: 90, rotationX: -16, transformPerspective: 1200, transformOrigin: '50% 100%', autoAlpha: 0,
      duration: 1.3, ease: 'expo.out', stagger: 0.12, clearProps: 'transform',
      scrollTrigger: { trigger: '[data-own-row]', start: 'top 82%', once: true },
    });
  }, { scope: section });

  return (
    <section className="sec" id="owners" aria-labelledby="owners-title" ref={section}>
      <div className="wrap">
        <div className="mx-auto mb-[clamp(36px,4.5vw,56px)] max-w-[720px] text-center">
          <p className="eyebrow" data-reveal><i className="dot"></i>For Business Owners</p>
          <h2 className="h2" id="owners-title" data-reveal>Built for People Building Businesses.</h2>
        </div>

        <div className="flex gap-4 max-lg:flex-col lg:h-[clamp(340px,30vw,400px)]" data-own-row>
          {OWNER_CARDS.map((card, idx) => (
            <article
              key={idx}
              data-own
              data-active={idx === active ? '' : undefined}
              className="group relative flex min-w-0 flex-1 basis-0 flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-off p-[clamp(24px,2.6vw,36px)] [transition:flex-grow_.8s_var(--ease),background-color_.5s,border-color_.5s] after:absolute after:-right-[90px] after:-top-[90px] after:size-[280px] after:scale-[.7] after:rounded-full after:border-[1.5px] after:border-dashed after:border-navy/[.14] after:opacity-0 after:transition-[opacity,scale] after:duration-[.5s,1s] after:ease-out-expo data-active:border-emerald data-active:bg-emerald data-active:after:scale-100 data-active:after:opacity-100 max-lg:min-h-[230px] max-lg:flex-none max-lg:gap-10 lg:data-active:grow-[1.75] focus-visible:rounded-[28px] focus-visible:outline-offset-4"
              tabIndex={0}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
            >
              <span className="key key-xl group-data-active:border-white group-data-active:bg-white group-data-active:text-navy group-data-active:shadow-[0_7px_0_#0E9E68,0_22px_30px_-14px_rgba(7,26,43,.35)]">
                <SvgIcon id={card.icon} />
              </span>
              <div className="relative min-w-[230px]">
                <h3 className="m-0 font-display text-[clamp(16px,1.3vw,18px)] font-semibold leading-[1.3] tracking-[.05em] text-navy">{card.title}</h3>
                <p className="mt-2.5 max-w-[22em] text-[15.5px] text-body transition-colors duration-500 group-data-active:text-navy">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-11 flex justify-center" data-reveal>
          <Link className="btn btn-primary btn-lg" href="/services">
            Find the Right Service <SvgIcon id="i-arrow" className="i arr" />
          </Link>
        </div>
      </div>
    </section>
  );
}
