'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import { OWNER_CARDS } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './BusinessOwners.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BusinessOwners() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGsap(() => {
    if (!sectionRef.current) return;
    
    gsap.from(`.${styles.own}`, {
      y: 90, 
      rotationX: -16, 
      transformPerspective: 1200, 
      transformOrigin: '50% 100%', 
      autoAlpha: 0,
      duration: 1.3, 
      ease: 'expo.out', 
      stagger: 0.12, 
      clearProps: 'transform',
      scrollTrigger: { 
        trigger: `.${styles.ownRow}`, 
        start: 'top 82%', 
        once: true 
      }
    });
  }, { scope: sectionRef });

  return (
    <section className="owners sec" id="owners" aria-labelledby="owners-title" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" data-reveal><i className="dot"></i>For Business Owners</p>
          <h2 className="h2 split" id="owners-title">Built for People Building Businesses.</h2>
        </div>
        
        <div className={styles.ownRow}>
          {OWNER_CARDS.map((card, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article 
                key={idx}
                className={`${styles.own} ${isActive ? styles.isActive : ''}`} 
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
              >
                <span className="key key-xl">
                  <SvgIcon id={card.icon} />
                </span>
                <div className={styles.ownB}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className={styles.ownCta} data-reveal>
          <Link className="btn btn-primary btn-lg" href="#services" data-magnetic>
            Find the Right Service <SvgIcon id="i-arrow" className="i arr" />
          </Link>
        </div>
      </div>
    </section>
  );
}
