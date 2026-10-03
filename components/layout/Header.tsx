'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '@/hooks/useLenis';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate(self) {
          const y = self.scroll();
          nav.classList.toggle(styles.isScrolled, y > 24);
          if (!isOpen) {
            nav.classList.toggle(styles.isHidden, self.direction > 0 && y > 480);
          }
        }
      });
    });

    return () => ctx.revert();
  }, [isOpen]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (lenis) {
      if (nextState) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      if (lenis) lenis.start();
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    closeMenu();
    // If we're on the home page, smoothly glide to section with offset
    if (pathname === '/') {
      const rawEl = targetId === 'top' ? document.getElementById('top') || 0 : document.getElementById(targetId);
      if (rawEl || targetId === 'top') {
        e.preventDefault();
        // If element is wrapped inside a GSAP .pin-spacer, target the spacer to start at section beginning
        const target = (typeof rawEl === 'object' && rawEl !== null)
          ? ((rawEl as HTMLElement).closest('.pin-spacer') as HTMLElement || rawEl)
          : rawEl;

        if (lenis?.scrollTo) {
          lenis.scrollTo(targetId === 'top' ? 0 : (target as HTMLElement), { offset: 0, duration: 1.2 });
        } else if (typeof target === 'object' && target !== null) {
          (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.history.pushState(null, '', targetId === 'top' ? '/' : `/#${targetId}`);
      }
    }
  };

  return (
    <header ref={navRef} className={`${styles.nav} ${isOpen ? styles.menuOpen : ''}`} data-intro>
      <div className={styles.navIn}>
        <Link 
          href="/#top" 
          className={styles.brand} 
          aria-label="TaxwiseIndia — home" 
          onClick={(e) => handleAnchorClick(e, 'top')}
        >
          <Image className={styles.mk} src="/assets/tw-mark.png" alt="" width={326} height={256} priority />
          <Image className={styles.wm} src="/assets/tw-wordmark-dark.png" alt="TaxwiseIndia" width={803} height={96} priority />
        </Link>
        
        <nav className={styles.navLinks} aria-label="Primary">
          <Link href="/#services" onClick={(e) => handleAnchorClick(e, 'services')}>Services</Link>
          <Link href="/#how" onClick={(e) => handleAnchorClick(e, 'how')}>How it works</Link>
          <Link href="/#why" onClick={(e) => handleAnchorClick(e, 'why')}>Why TaxwiseIndia</Link>
          <Link href="/#faq" onClick={(e) => handleAnchorClick(e, 'faq')}>FAQ</Link>
        </nav>
        
        <div className={styles.navCta}>
          <a className="btn btn-ghost btn-sm" href="https://wa.me/910000000000" target="_blank" rel="noopener">Talk to an Expert</a>
          <Link 
            className="btn btn-primary btn-sm" 
            href="/#get-started" 
            data-magnetic
            onClick={(e) => handleAnchorClick(e, 'get-started')}
          >
            Get Started <svg className="i arr"><use href="#i-arrow"/></svg>
          </Link>
        </div>
        
        <button 
          className={styles.navToggle} 
          type="button" 
          aria-expanded={isOpen} 
          aria-controls="mobile-menu" 
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span></span><span></span>
        </button>
      </div>

      <div className={styles.mMenu} id="mobile-menu">
        <nav aria-label="Mobile">
          <Link href="/#services" onClick={(e) => handleAnchorClick(e, 'services')}>Services</Link>
          <Link href="/#how" onClick={(e) => handleAnchorClick(e, 'how')}>How it works</Link>
          <Link href="/#why" onClick={(e) => handleAnchorClick(e, 'why')}>Why TaxwiseIndia</Link>
          <Link href="/#faq" onClick={(e) => handleAnchorClick(e, 'faq')}>FAQ</Link>
        </nav>
        <div className={styles.mCta}>
          <Link 
            className="btn btn-primary" 
            href="/#get-started" 
            onClick={(e) => handleAnchorClick(e, 'get-started')}
          >
            Get Started <svg className="i arr"><use href="#i-arrow"/></svg>
          </Link>
          <a className="btn btn-ghost" href="https://wa.me/910000000000" target="_blank" rel="noopener">
            <svg className="i"><use href="#i-phone"/></svg>Talk to an Expert
          </a>
        </div>
      </div>
    </header>
  );
}
