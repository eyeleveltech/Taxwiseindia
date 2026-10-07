'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import { SERVICE_CATALOG, servicePath } from '@/lib/services';

gsap.registerPlugin(useGSAP);

const RADIUS = 43;   // tile orbit, as % of the stage

/** All seven services on one ring. The active one is lit on the ring and shown large in the centre; every tile links to its page. */
export default function ServicesOrbit({ active, onHover, onLeave }: { active: number; onHover: (i: number) => void; onLeave: () => void }) {
  const stage = useRef<HTMLDivElement>(null);
  const service = SERVICE_CATALOG[active];

  useGSAP(() => {
    gsap.to('[data-orbit-ring]', { rotation: 360, duration: 80, ease: 'none', repeat: -1 });
    gsap.to('[data-orbit-disc]', { scale: 1.06, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }, { scope: stage });

  // the centre swaps to the active service
  useGSAP(() => {
    gsap.fromTo('[data-orbit-key]', { scale: 0.55, rotation: -18, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.7, ease: 'back.out(1.7)' });
    gsap.fromTo('[data-orbit-name]', { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'expo.out', delay: 0.08 });
  }, { scope: stage, dependencies: [active] });

  return (
    <div ref={stage} className="relative mx-auto aspect-square w-full max-w-[460px]" data-preview-service={service.slug} onPointerLeave={onLeave}>
      <i className="absolute inset-[8%] rounded-full border-[1.5px] border-dashed border-emerald/40" data-orbit-ring aria-hidden="true">
        <i className="absolute -top-[7px] left-1/2 -ml-[6.5px] size-[13px] rounded-full bg-emerald shadow-[0_0_0_5px_rgba(22,184,120,.18)]" />
      </i>
      <i className="absolute inset-[24%] rounded-full bg-mint/30" data-orbit-disc aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden="true">
        <div className="flex flex-col items-center">
          <span className="key key-xl transition-none" data-orbit-key><SvgIcon id={service.icon} /></span>
          <b className="mt-4 max-w-[11em] text-center font-display text-[clamp(15px,1.25vw,18px)] font-bold leading-[1.25] tracking-[-.02em] text-navy" data-orbit-name>{service.name}</b>
          <span className="mt-2 rounded-full border border-mint-line bg-mint-soft px-2.5 py-1 font-display text-[10px] font-bold tracking-[.12em] text-emerald-ink">{service.items.length} SERVICES</span>
        </div>
      </div>

      {SERVICE_CATALOG.map((s, i) => {
        const a = ((-90 + (i * 360) / SERVICE_CATALOG.length) * Math.PI) / 180;
        return (
          <Link
            key={s.slug}
            href={servicePath(s)}
            aria-label={s.name}
            title={s.name}
            data-tile={s.slug}
            data-active={i === active ? '' : undefined}
            onPointerEnter={() => onHover(i)}
            onFocus={() => onHover(i)}
            style={{ left: `${50 + RADIUS * Math.cos(a)}%`, top: `${50 + RADIUS * Math.sin(a)}%` }}
            className="key key-sm absolute -ml-5 -mt-5 transition-[background-color,border-color,color,box-shadow,scale] duration-500 ease-out-expo after:absolute after:inset-0 after:rounded-[inherit] hover:scale-110 data-active:scale-115 data-active:border-emerald data-active:bg-emerald data-active:text-navy data-active:shadow-[0_4px_0_#0E9E68,0_18px_26px_-12px_rgba(10,124,82,.6)] data-active:after:animate-[pulse_2s_var(--ease)_infinite] sm:-ml-6 sm:-mt-6 sm:[--k:48px]"
          >
            <SvgIcon id={s.icon} />
          </Link>
        );
      })}
    </div>
  );
}
