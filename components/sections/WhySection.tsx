'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import { WHY_CARDS } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './WhySection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    
    const cards = gsap.utils.toArray(`.${styles.wcard}`) as HTMLElement[];
    const mm = gsap.matchMedia();
    
    cards.forEach((card, i) => {
      const strokes = card.querySelectorAll(`.${styles.wcCheck} .${styles.d}`);
      
      // Fallback or actual drawSVG if plugin registered
      gsap.set(strokes, { drawSVG: '0%' });
      ScrollTrigger.create({
        trigger: card, 
        start: 'top 70%', 
        once: true,
        onEnter: () => gsap.to(strokes, { 
          drawSVG: '100%', 
          duration: 0.9, 
          ease: 'power2.inOut', 
          stagger: 0.3 
        })
      });
      
      const key = card.querySelector('.key');
      if (key) {
        gsap.from(key, {
          scale: 0.5, 
          rotation: -20, 
          autoAlpha: 0, 
          duration: 1, 
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: card, start: 'top 75%', once: true }
        });
      }
      
      mm.add('(min-width: 992px)', () => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94, 
            ease: 'none',
            scrollTrigger: { 
              trigger: cards[i + 1], 
              start: 'top bottom', 
              end: 'top 30%', 
              scrub: true 
            }
          });
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section className="sec sec-off" id="why" aria-labelledby="why-title" ref={sectionRef}>
      <div className={`wrap ${styles.whyGrid}`}>
        <div className={styles.whyHead}>
          <p className="eyebrow" data-reveal><i className="dot"></i>Why TaxwiseIndia</p>
          <h2 className="h2 split" id="why-title">More Than Filing. We&apos;re Here for the Follow-Through.</h2>
        </div>
        <div className={styles.whyStack}>
          {WHY_CARDS.map((card, idx) => (
            <article 
              key={idx} 
              className={styles.wcard} 
              style={{ '--i': idx } as React.CSSProperties}
            >
              <div className={styles.wcTop}>
                <span className="key key-lg">
                  <SvgIcon id={card.icon} />
                </span>
                <svg className={styles.wcCheck} viewBox="0 0 48 48" aria-hidden="true">
                  <circle className={styles.d} cx="24" cy="24" r="21" />
                  <path className={styles.d} d="M15 24.5l6 6 12-13" />
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
