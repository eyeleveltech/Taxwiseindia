'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLenis } from '@/hooks/useLenis';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LINK =
  'relative py-2 font-sans text-[14.5px] font-medium text-navy after:absolute after:inset-x-0 after:bottom-px after:h-0.5 after:origin-right after:scale-x-0 after:rounded-sm after:bg-emerald after:transition-transform after:duration-[.45s] after:ease-out-expo hover:after:origin-left hover:after:scale-x-100 aria-[current=page]:after:scale-x-100';
const MOBILE_LINK = 'border-b border-line px-1.5 py-[15px] font-display text-[17px] font-semibold leading-[1.2] tracking-[-.01em] text-navy';

/** Floating glass nav. Hides on the way down, returns on the way up; the mobile menu drops beneath it. */
export default function Header() {
  // keyed by route so a menu left open closes itself on navigation
  const [openPath, setOpenPath] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const pathname = usePathname();
  const isOpen = openPath === pathname;

  // the bar drops in once, after the page's own intro has started
  useGSAP(() => { if (prefersReducedMotion()) return; gsap.from('[data-intro]', { y: -18, autoAlpha: 0, duration: 1, ease: 'expo.out', delay: 0.15 }); }, { scope: navRef });

  useGSAP(() => {
    const nav = navRef.current;
    if (!nav) return;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate(self) {
        const y = self.scroll();
        nav.toggleAttribute('data-scrolled', y > 24);
        if (!isOpen) nav.toggleAttribute('data-hidden', self.direction > 0 && y > 480);
      },
    });
  }, { dependencies: [isOpen], revertOnUpdate: true });

  const toggleMenu = () => {
    const next = !isOpen;
    setOpenPath(next ? pathname : null);
    if (next) lenis.stop(); else lenis.start();
  };
  const closeMenu = () => { if (isOpen) { setOpenPath(null); lenis.start(); } };
  const current = (href: string) => (href === '/services' ? pathname.startsWith('/services') : pathname === href) ? 'page' : undefined;

  const links = (cls: string) => (
    <>
      <Link href="/services" className={cls} onClick={closeMenu} aria-current={current('/services')}>Services</Link>
      <Link href="/about" className={cls} onClick={closeMenu} aria-current={current('/about')}>About Us</Link>
    </>
  );

  return (
    <header
      ref={navRef}
      data-open={isOpen ? '' : undefined}
      className="group fixed inset-x-0 top-3 z-60 transition-transform duration-[.6s] ease-out-expo data-hidden:-translate-y-[calc(100%+24px)]"
    >
      <div data-intro className="relative mx-auto flex h-[68px] w-[min(100%-24px,1280px)] items-center gap-7 rounded-[20px] border border-navy/[.07] bg-white/[.72] pl-[18px] pr-2.5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_12px_32px_-20px_rgba(7,26,43,.28)] backdrop-blur-[16px] backdrop-saturate-[1.7] transition-shadow duration-[.4s] group-data-scrolled:shadow-[0_1px_2px_rgba(7,26,43,.05),0_18px_40px_-20px_rgba(7,26,43,.35)] max-sm:h-[62px] max-sm:pl-[14px] max-sm:pr-2">
        <Link href="/" className="flex flex-none items-center gap-2.5" aria-label="TaxwiseIndia — home" onClick={closeMenu}>
          <Image className="h-auto w-[38px] max-sm:w-8" src="/assets/tw-mark.png" alt="" width={326} height={256} priority />
          <Image className="h-auto w-[146px] max-sm:w-[122px]" src="/assets/tw-wordmark-dark.png" alt="TaxwiseIndia" width={803} height={96} priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-[30px] lg:flex" aria-label="Primary">
          {links(LINK)}
          <Link className="btn btn-primary btn-sm ml-1" href="/contact" onClick={closeMenu} aria-current={current('/contact')}>
            Contact <svg className="i arr"><use href="#i-arrow" /></svg>
          </Link>
        </nav>

        <button
          className="relative ml-auto size-[46px] cursor-pointer rounded-xl border border-line-2 bg-white lg:hidden [&>span]:absolute [&>span]:inset-x-[13px] [&>span]:h-0.5 [&>span]:rounded-sm [&>span]:bg-navy [&>span]:transition-transform [&>span]:duration-[.45s] [&>span]:ease-out-expo [&>span:first-child]:top-[18px] [&>span:last-child]:top-[26px] group-data-open:[&>span:first-child]:translate-y-1 group-data-open:[&>span:first-child]:rotate-45 group-data-open:[&>span:last-child]:-translate-y-1 group-data-open:[&>span:last-child]:-rotate-45"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span></span><span></span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className="invisible absolute inset-x-3 top-[calc(100%+10px)] -translate-y-2 rounded-[20px] border border-line bg-white px-[14px] pb-[14px] pt-2.5 opacity-0 shadow-[var(--sh-2)] [transition:opacity_.3s,transform_.45s_var(--ease),visibility_.3s] group-data-open:visible group-data-open:translate-y-0 group-data-open:opacity-100 lg:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {links(MOBILE_LINK)}
          <Link className="btn btn-primary mt-[14px]" href="/contact" onClick={closeMenu} aria-current={current('/contact')}>
            Contact <svg className="i arr"><use href="#i-arrow" /></svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
