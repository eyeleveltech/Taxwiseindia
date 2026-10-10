'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SvgIcon from '@/components/ui/SvgIcon';
import { useLenis } from '@/hooks/useLenis';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { SERVICE_CATALOG, servicePath } from '@/lib/services';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LINK =
  'relative py-2 font-sans text-[14px] font-medium text-navy after:absolute after:inset-x-0 after:bottom-px after:h-0.5 after:origin-right after:scale-x-0 after:rounded-sm after:bg-emerald after:transition-transform after:duration-[.45s] after:ease-out-expo hover:after:origin-left hover:after:scale-x-100 aria-[current=page]:after:scale-x-100';
const MOBILE_LINK = 'font-display text-[16px] font-semibold leading-tight tracking-[-.01em] text-navy';
const DROP_LINK = 'block rounded-lg px-2.5 py-1.75 text-[14px] leading-[1.4] text-body transition-colors hover:bg-off hover:text-emerald-ink aria-[current=page]:font-medium aria-[current=page]:text-emerald-ink';
const SUB_LINK = 'block py-2 text-[15px] leading-[1.35] text-body transition-colors hover:text-emerald-ink aria-[current=page]:font-medium aria-[current=page]:text-emerald-ink';

/**
 * Floating glass nav. Hides on the way down, returns on the way up.
 * Desktop: the seven services, each opening its own dropdown on hover or focus. Smaller screens: a menu with
 * one expandable section per service.
 */
export default function Header() {
  // the open menus are keyed by route, so one left open closes itself on navigation
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [drop, setDrop] = useState<{ path: string; slug: string } | null>(null);
  const [section, setSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const pathname = usePathname();
  const isOpen = openPath === pathname;
  const menu = drop?.path === pathname ? drop.slug : null;

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
        if (!isOpen && !menu) nav.toggleAttribute('data-hidden', self.direction > 0 && y > 480);
      },
    });
  }, { dependencies: [isOpen, menu], revertOnUpdate: true });

  // a section stays marked on its sub-pages: /services/gst-tax/gst-lut still marks GST & Tax
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined);
  const exact = (href: string) => (pathname === href ? 'page' : undefined);

  const toggleMenu = () => {
    const next = !isOpen;
    setOpenPath(next ? pathname : null);
    // the menu opens on the section you're in
    if (next) setSection(SERVICE_CATALOG.find((s) => current(servicePath(s)))?.slug ?? null);
    if (next) lenis.stop(); else lenis.start();
  };
  const showMenu = (slug: string) => setDrop({ path: pathname, slug });
  const hideMenu = () => setDrop(null);
  const closeMenu = () => { hideMenu(); if (isOpen) { setOpenPath(null); lenis.start(); } };

  return (
    <header
      ref={navRef}
      data-open={isOpen ? '' : undefined}
      className="group fixed inset-x-0 top-3 z-60 transition-transform duration-[.6s] ease-out-expo data-hidden:-translate-y-[calc(100%+24px)]"
      onMouseLeave={hideMenu}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hideMenu(); }}
      onKeyDown={(e) => {
        if (e.key !== 'Escape') return;
        hideMenu();
        if (isOpen) { closeMenu(); toggleRef.current?.focus(); }
      }}
    >
      <div data-intro className="relative mx-auto flex h-17 w-[min(100%-24px,1320px)] items-center gap-6 rounded-[20px] border border-navy/[.07] bg-white/72 pl-4.5 pr-2.5 shadow-[0_1px_2px_rgba(7,26,43,.04),0_8px_16px_-8px_rgba(7,26,43,.12)] backdrop-blur-lg backdrop-saturate-[1.7] transition-shadow duration-[.4s] group-data-scrolled:shadow-[0_1px_2px_rgba(7,26,43,.05),0_12px_24px_-8px_rgba(7,26,43,.16)] max-sm:h-15.5 max-sm:pl-3.5 max-sm:pr-2">
        <Link href="/" className="flex flex-none items-center gap-2.5" aria-label="TaxwiseIndia home" onClick={closeMenu}>
          <Image className="h-auto w-9.5 max-sm:w-8" src="/assets/tw-mark.png" alt="" width={326} height={256} priority />
          <Image className="h-auto w-36.5 max-sm:w-30.5" src="/assets/tw-wordmark-dark.png" alt="TaxwiseIndia" width={803} height={96} priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:flex" aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-4.5 p-0">
            {SERVICE_CATALOG.map((s, i) => {
              const open = menu === s.slug;
              return (
                <li key={s.slug} className="relative" onMouseEnter={() => showMenu(s.slug)}>
                  <Link
                    href={servicePath(s)}
                    className={`${LINK} flex items-center gap-1 whitespace-nowrap`}
                    onClick={closeMenu}
                    onFocus={() => showMenu(s.slug)}
                    aria-current={current(servicePath(s))}
                    aria-expanded={open}
                    aria-controls={`menu-${s.slug}`}
                  >
                    {s.shortName ?? s.name}
                    <SvgIcon id="i-chev" className={`size-3 transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`} />
                  </Link>

                  {/* the service's own items; the right-hand services open leftwards so the panel stays on screen */}
                  <div
                    id={`menu-${s.slug}`}
                    data-menu-panel
                    data-open={open ? '' : undefined}
                    className={`pointer-events-none absolute top-full z-10 w-78 pt-3 data-open:pointer-events-auto ${i < 4 ? '-left-3' : '-right-3'}`}
                  >
                    <div data-open={open ? '' : undefined} className="invisible -translate-y-2 rounded-[20px] border border-line bg-white p-2.5 opacity-0 shadow-(--sh-2) [transition:opacity_.3s,translate_.45s_var(--ease),visibility_.3s] data-open:visible data-open:translate-y-0 data-open:opacity-100">
                      <Link href={servicePath(s)} className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-off" onClick={closeMenu} aria-current={exact(servicePath(s))}>
                        <span className="key key-xs"><SvgIcon id={s.icon} /></span>
                        <span className="min-w-0">
                          <b className="block font-display text-[15px] font-bold leading-tight tracking-[-.01em] text-navy">{s.name}</b>
                          <small className="mt-0.5 flex items-center gap-1 text-[12.5px] font-medium text-emerald-ink">View all {s.items.length} services <SvgIcon id="i-arrow" className="size-3" /></small>
                        </span>
                      </Link>
                      <ul className="m-0 mt-1.5 grid list-none border-t border-line p-0 pt-1.5">
                        {s.items.map((x) => (
                          <li key={x}><Link href={servicePath(s, x)} className={DROP_LINK} onClick={closeMenu} aria-current={exact(servicePath(s, x))}>{x}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href="/about" className={`${LINK} whitespace-nowrap`} onClick={closeMenu} onMouseEnter={hideMenu} aria-current={current('/about')}>About Us</Link>
          <Link className="btn btn-primary btn-sm" href="/contact" onClick={closeMenu} onMouseEnter={hideMenu} aria-current={current('/contact')}>
            Contact <svg className="i arr"><use href="#i-arrow" /></svg>
          </Link>
        </nav>

        <button
          ref={toggleRef}
          className="relative ml-auto size-11.5 cursor-pointer rounded-xl border border-line-2 bg-white xl:hidden [&>span]:absolute [&>span]:inset-x-3.25 [&>span]:h-0.5 [&>span]:rounded-sm [&>span]:bg-navy [&>span]:transition-transform [&>span]:duration-[.45s] [&>span]:ease-out-expo [&>span:first-child]:top-4.5 [&>span:last-child]:top-6.5 group-data-open:[&>span:first-child]:translate-y-1 group-data-open:[&>span:first-child]:rotate-45 group-data-open:[&>span:last-child]:-translate-y-1 group-data-open:[&>span:last-child]:-rotate-45"
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
        className="invisible absolute inset-x-3 top-[calc(100%+10px)] -translate-y-2 md:left-auto md:w-105 rounded-[20px] border border-line bg-white px-3.5 pb-3.5 pt-1 opacity-0 shadow-(--sh-2) [transition:opacity_.3s,transform_.45s_var(--ease),visibility_.3s] group-data-open:visible group-data-open:translate-y-0 group-data-open:opacity-100 xl:hidden"
      >
        {/* Lenis is stopped while this is open; data-lenis-prevent lets the list itself scroll on short screens */}
        <nav className="flex max-h-[calc(100svh-120px)] flex-col overflow-y-auto overscroll-contain" aria-label="Mobile" data-lenis-prevent>
          <ul className="m-0 list-none p-0">
            {SERVICE_CATALOG.map((s) => {
              const expanded = section === s.slug;
              return (
                <li key={s.slug} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-1.5 py-3 text-left"
                    aria-expanded={expanded}
                    aria-controls={`section-${s.slug}`}
                    onClick={() => setSection(expanded ? null : s.slug)}
                  >
                    <span className="key key-xs"><SvgIcon id={s.icon} /></span>
                    <span className={`${MOBILE_LINK} flex-1`}>{s.name}</span>
                    <SvgIcon id="i-chev" className={`size-4 flex-none text-navy transition-transform duration-300 ${expanded ? '-rotate-90' : 'rotate-90'}`} />
                  </button>
                  <div id={`section-${s.slug}`} className={`grid transition-[grid-template-rows] duration-[.45s] ease-out-expo ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} inert={!expanded}>
                    <ul className="m-0 min-h-0 list-none overflow-hidden p-0 pl-12 pr-1.5">
                      <li>
                        <Link href={servicePath(s)} className={`${SUB_LINK} flex items-center gap-1.5 font-medium text-emerald-ink`} onClick={closeMenu} aria-current={exact(servicePath(s))}>
                          All {s.name} services <SvgIcon id="i-arrow" className="size-3.5" />
                        </Link>
                      </li>
                      {s.items.map((x) => (
                        <li key={x}><Link href={servicePath(s, x)} className={SUB_LINK} onClick={closeMenu} aria-current={exact(servicePath(s, x))}>{x}</Link></li>
                      ))}
                      <li className="h-2.5" aria-hidden="true"></li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href="/about" className={`${MOBILE_LINK} border-b border-line px-1.5 py-[15px]`} onClick={closeMenu} aria-current={current('/about')}>About Us</Link>
          <Link className="btn btn-primary mt-3.5 shrink-0" href="/contact" onClick={closeMenu} aria-current={current('/contact')}>
            Contact <svg className="i arr"><use href="#i-arrow" /></svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
