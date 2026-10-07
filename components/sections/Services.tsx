'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SERVICES } from '@/lib/constants';
import { LEGACY_SERVICE_LINKS } from '@/lib/services';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import SvgIcon from '@/components/ui/SvgIcon';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARD =
  'group relative flex min-h-0 flex-col rounded-3xl border border-line bg-white p-[26px] transition-[border-color,box-shadow,translate] duration-[.35s,.5s,.5s] ease-out-expo hover:-translate-y-1.5 hover:border-mint-line hover:shadow-[0_30px_60px_-32px_rgba(7,26,43,.32)] sm:min-h-[250px]';

/** The services bento: one featured tile, six compact tiles and the emerald "more" tile. */
export default function Services() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from('[data-reveal]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: section.current, start: 'top 80%', once: true } });

    const cards = gsap.utils.toArray<HTMLElement>('[data-svc]');
    gsap.set(cards, { y: 70, autoAlpha: 0 });
    ScrollTrigger.batch(cards, {
      start: 'top 90%', once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true, clearProps: 'transform' }),
    });
    gsap.from('[data-svc-note]', { y: 40, scale: 0.85, autoAlpha: 0, duration: 1, ease: 'back.out(1.5)', scrollTrigger: { trigger: '[data-svc-featured]', start: 'top 55%', once: true } });
  }, { scope: section });

  return (
    <section className="sec sec-off" id="services" aria-labelledby="services-title" ref={section}>
      <div className="wrap">
        <div className="mb-[clamp(36px,4.5vw,56px)] max-w-[640px]">
          <p className="eyebrow" data-reveal><i className="dot"></i>Services</p>
          <h2 className="h2" id="services-title" data-reveal>Everything Your Business Needs.</h2>
          <p className="lead" data-reveal>One place for tax, accounting and compliance.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service) => {
            const featured = service.featured;
            return (
              <Link
                key={service.slug}
                data-svc
                data-svc-featured={featured ? '' : undefined}
                className={featured ? `${CARD} overflow-hidden sm:col-span-2 lg:row-span-2 lg:min-h-[516px]` : CARD}
                href={LEGACY_SERVICE_LINKS[service.slug] ?? '/services'}
              >
                <span className="key [transform:perspective(320px)_translateY(0)_rotateY(0)] group-hover:[transform:perspective(320px)_translateY(3px)_rotateY(360deg)] group-hover:shadow-[0_2px_0_#C2EEDC,0_10px_18px_-12px_rgba(10,124,82,.5)]">
                  <SvgIcon id={service.icon} />
                </span>
                <h3 className={featured ? 'mt-[22px] text-[clamp(22px,1.9vw,27px)] leading-[1.3] tracking-[-.025em]' : 'mt-[22px] text-lg leading-[1.3] tracking-[-.015em]'}>{service.title}</h3>
                <p className={featured ? 'mt-2 max-w-[24em] text-base leading-relaxed' : 'mt-2 text-[15px] leading-relaxed'}>{service.description}</p>
                <span className="absolute right-6 top-6 grid size-10 place-items-center rounded-full border border-line text-navy transition-colors duration-[.35s] group-hover:border-emerald group-hover:bg-emerald" aria-hidden="true">
                  <SvgIcon id="i-arrow" className="size-[18px] -rotate-45 transition-transform duration-500 ease-out-expo group-hover:rotate-0" />
                </span>
                {featured && (
                  <div className="relative mt-6 min-h-[170px] flex-1 sm:min-h-[190px]" aria-hidden="true">
                    <i className="absolute -bottom-[110px] -right-[70px] size-[360px] rounded-full bg-mint/[.38] after:absolute after:-inset-[34px] after:rounded-full after:border-[1.5px] after:border-dashed after:border-emerald/[.35]"></i>
                    <div className="note glass absolute bottom-1.5 left-0 w-[min(100%,320px)]" data-svc-note>
                      <span className="note-ic">
                        <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                      </span>
                      <div className="note-b">
                        <b>TaxwiseIndia</b>
                        <p>Your GST filing has been initiated.</p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}

          <Link data-svc className={`${CARD} justify-between border-emerald bg-emerald text-navy hover:border-emerald`} href="/services">
            <span className="font-display text-[clamp(20px,1.7vw,24px)] font-bold leading-[1.2] tracking-[-.02em]">More Services</span>
            <span className="grid size-14 self-end place-items-center rounded-full bg-navy text-white transition-transform duration-500 ease-out-expo group-hover:-rotate-45">
              <SvgIcon id="i-arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
