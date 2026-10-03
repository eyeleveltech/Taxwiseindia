'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/ui/SvgIcon';
import { WHATSAPP_URL } from '@/lib/constants';
import styles from './FinalCTA.module.css';

// Ensure plugins are registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    
    // Smooth heading reveal on scroll
    gsap.fromTo(`.${styles.ctaH}`,
      { opacity: 0.2, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.${styles.ctaH}`,
          start: 'top 85%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(`.${styles.ctaPanel}`, 
      { scale: 0.92, y: 40 }, 
      {
        scale: 1, 
        y: 0, 
        ease: 'none',
        scrollTrigger: { 
          trigger: container.current, 
          start: 'top bottom', 
          end: 'top 35%', 
          scrub: true 
        }
      }
    );
    
    // Rotating decoration animation if needed (from main.js if it was there)
    gsap.to(`.${styles.r1}`, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none'
    });
    
  }, { scope: container });

  return (
    <section 
      ref={container}
      className={styles.cta} 
      id="get-started" 
      aria-labelledby="cta-title"
    >
      <div className="wrap">
        <div className={styles.ctaPanel}>
          <div className={styles.ctaDeco} aria-hidden="true">
            <i className={`${styles.cdRing} ${styles.r1}`}><i></i></i>
            <i className={`${styles.cdRing} ${styles.r2}`}></i>
            <span className={`${styles.cdBadge} glass`}>
              <SvgIcon id="i-check" className="i" />
            </span>
          </div>
          <h2 className={styles.ctaH} id="cta-title">Your Taxes Shouldn&apos;t Take Over Your Business.</h2>
          <p className={styles.ctaSub} data-reveal>
            Let TaxwiseIndia handle the compliance work while you focus on building what&apos;s next.
          </p>
          <div className={styles.ctaBtns} data-reveal>
            <Link href="#get-started" className="btn btn-navy btn-lg" data-magnetic>
              Get Started <SvgIcon id="i-arrow" className="i arr" />
            </Link>
            <a 
              className="btn btn-light btn-lg" 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              data-magnetic
            >
              <SvgIcon id="i-phone" className="i" />
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
