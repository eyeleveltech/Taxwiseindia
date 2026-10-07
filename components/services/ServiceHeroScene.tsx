'use client';

import { useEffect, useRef, useState } from 'react';
import SvgIcon from '@/components/ui/SvgIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ServiceCategory } from '@/lib/services';
import type { SculptureControls } from '@/lib/service-sculpture';

/** The WebGL service sculpture (lazy-loaded), with an icon fallback while it loads or if WebGL is unavailable. */
export default function ServiceHeroScene({ service, message, variant = 'detail' }: {
  service: ServiceCategory;
  message: string;
  variant?: 'detail' | 'preview';
}) {
  const host = useRef<HTMLDivElement>(null);
  const controls = useRef<SculptureControls | null>(null);
  const reduce = useReducedMotion();
  const preference = useRef({ paused: false, reduced: false, slug: service.slug });
  const [paused, setPaused] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>('loading');
  const preview = variant === 'preview';

  useEffect(() => {
    let cancelled = false;
    let sculpture: SculptureControls | undefined;
    import('@/lib/service-sculpture').then(({ createServiceSculpture }) => {
      if (cancelled || !host.current) return;
      sculpture = createServiceSculpture(host.current, preference.current.slug, preference.current.reduced);
      sculpture.setMotion(!preference.current.paused && !preference.current.reduced);
      controls.current = sculpture;
      setStatus('ready');
    }).catch(() => { if (!cancelled) setStatus('fallback'); });
    return () => { cancelled = true; controls.current = null; sculpture?.dispose(); };
  }, []);

  useEffect(() => {
    preference.current = { paused, reduced: reduce, slug: service.slug };
    controls.current?.setReduced(reduce);
    controls.current?.setService(service.slug);
    controls.current?.setMotion(!paused && !reduce);
  }, [paused, reduce, status, service.slug]);

  return (
    <div className="relative mx-auto w-full max-w-[580px]" data-sculpture={service.slug}>
      <div className={`relative isolate ${preview ? 'h-[240px] sm:h-[270px] lg:h-[330px]' : 'h-[345px] sm:h-[450px] lg:h-[clamp(360px,33vw,470px)]'}`}>
        <div className={`absolute inset-x-[3%] bottom-[4%] top-[9%] -z-1 ${preview ? 'bg-[radial-gradient(ellipse,rgba(234,250,244,.9),transparent_70%)]' : 'bg-[radial-gradient(ellipse_at_50%_52%,#EAFAF4_0%,#F6F8FA_40%,transparent_70%)]'}`} aria-hidden="true" />
        <div
          ref={host}
          className="size-full cursor-grab touch-pan-y rounded-3xl data-[dragging=true]:cursor-grabbing focus-visible:outline-emerald-ink [&_canvas]:block [&_canvas]:max-w-full"
          data-scene-status={status}
          role="img"
          tabIndex={status === 'ready' ? 0 : undefined}
          aria-label={`Interactive ${service.name} sculpture. Drag or use arrow keys to rotate. Press Space to pause or resume motion.`}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); controls.current?.rotate(event.key === 'ArrowLeft' ? -1 : 1); }
            if (event.key === ' ') { event.preventDefault(); setPaused((value) => !value); }
          }}
        />
        {status !== 'ready' && (
          <div className="coin coin-lg pointer-events-none absolute left-1/2 top-[48%] size-[150px] -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] border-[7px] border-mint-line [&_.i]:size-[70px] [&_.i]:stroke-[1.6]" aria-hidden="true">
            <SvgIcon id={service.icon} />
          </div>
        )}
      </div>

      {preview && <p className="-mt-1.5 text-center font-display text-[12px] font-medium tracking-[-.01em] text-muted sm:-mt-2 sm:text-[13px]">{message}</p>}
    </div>
  );
}
