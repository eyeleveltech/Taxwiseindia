'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useFinePointer } from './useFinePointer';

/**
 * Applies a magnetic pull effect to an element on pointer move.
 * Only activates on fine-pointer (desktop) devices.
 */
export function useMagnetic(ref: React.RefObject<HTMLElement | null>) {
  const finePointer = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [ref, finePointer]);
}
