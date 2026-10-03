'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Wraps GSAP `gsap.context()` for a given scope ref.
 * All GSAP tweens/timelines/ScrollTriggers created inside `setup`
 * are automatically reverted on unmount or dependency change.
 */
type ScopeInput =
  | React.RefObject<HTMLElement | null>
  | { scope?: React.RefObject<HTMLElement | null>; dependencies?: React.DependencyList };

export function useGsap(
  setup: (ctx: gsap.Context) => void,
  scopeOrConfig?: ScopeInput,
  deps: React.DependencyList = []
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  const scopeRef =
    scopeOrConfig && 'current' in scopeOrConfig
      ? scopeOrConfig
      : scopeOrConfig && 'scope' in scopeOrConfig
      ? scopeOrConfig.scope
      : undefined;

  const actualDeps =
    scopeOrConfig && 'dependencies' in scopeOrConfig && scopeOrConfig.dependencies
      ? scopeOrConfig.dependencies
      : deps;

  useEffect(() => {
    const el = scopeRef?.current || undefined;
    ctxRef.current = gsap.context(() => {
      setup(ctxRef.current!);
    }, el);

    return () => {
      ctxRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeRef, ...actualDeps]);

  return ctxRef;
}

/**
 * Refresh all ScrollTriggers (useful after layout changes).
 */
export function refreshScrollTriggers() {
  if (typeof window !== 'undefined' && ScrollTrigger) {
    ScrollTrigger.refresh();
  }
}

export { gsap, ScrollTrigger };
