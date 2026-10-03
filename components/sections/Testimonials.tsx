'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const marquees = container.current?.querySelectorAll('[data-marquee]');
    
    marquees?.forEach((el) => {
      const direction = (el as HTMLElement).dataset.marquee === 'left' ? -1 : 1;
      const track = el.querySelector(`.${styles.mqTrack}`) as HTMLElement;
      
      if (!track) return;

      const duration = 30; // 30s duration
      
      const t = gsap.to(track, {
        xPercent: direction === -1 ? -50 : 50,
        ease: 'none',
        duration: duration,
        repeat: -1,
      });

      // Start the right-moving marquee from the offset position so it flows smoothly
      if (direction === 1) {
        gsap.set(track, { xPercent: -50 });
      }

      el.addEventListener('pointerenter', () => gsap.to(t, { timeScale: 0, duration: 0.6, overwrite: true }));
      el.addEventListener('pointerleave', () => gsap.to(t, { timeScale: 1, duration: 0.6, overwrite: true }));
    });
  }, { scope: container });

  const placeholderCards = [0, 1, 2, 3];

  return (
    <section 
      ref={container}
      className={`sec sec-off ${styles.testi}`} 
      id="testimonials" 
      aria-labelledby="testi-title"
    >
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" data-reveal><i className="dot"></i>Testimonials</p>
          <h2 className="h2 split" id="testi-title">What our customers say.</h2>
        </div>
      </div>
      <div className={styles.tRows}>
        <div className={styles.marquee} data-marquee="left">
          <div className={styles.mqTrack}>
            <div className={styles.mqGroup}>
              {placeholderCards.map(i => (
                <figure key={`l1-${i}`} className={styles.tcard}>
                  <span className={styles.phTag}>Placeholder</span>
                  <SvgIcon id="i-quote" className={`i ${styles.tq}`} />
                  <blockquote>Customer testimonial to be added.</blockquote>
                  <figcaption>
                    <span className={styles.tav}></span>
                    <span>
                      <b>Customer name</b>
                      <small>Business, City</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className={styles.mqGroup} aria-hidden="true">
              {placeholderCards.map(i => (
                <figure key={`l2-${i}`} className={styles.tcard}>
                  <span className={styles.phTag}>Placeholder</span>
                  <SvgIcon id="i-quote" className={`i ${styles.tq}`} />
                  <blockquote>Customer testimonial to be added.</blockquote>
                  <figcaption>
                    <span className={styles.tav}></span>
                    <span>
                      <b>Customer name</b>
                      <small>Business, City</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.marquee} data-marquee="right" aria-hidden="true">
          <div className={styles.mqTrack}>
            <div className={styles.mqGroup}>
              {placeholderCards.map(i => (
                <figure key={`r1-${i}`} className={styles.tcard}>
                  <span className={styles.phTag}>Placeholder</span>
                  <SvgIcon id="i-quote" className={`i ${styles.tq}`} />
                  <blockquote>Customer testimonial to be added.</blockquote>
                  <figcaption>
                    <span className={styles.tav}></span>
                    <span>
                      <b>Customer name</b>
                      <small>Business, City</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className={styles.mqGroup}>
              {placeholderCards.map(i => (
                <figure key={`r2-${i}`} className={styles.tcard}>
                  <span className={styles.phTag}>Placeholder</span>
                  <SvgIcon id="i-quote" className={`i ${styles.tq}`} />
                  <blockquote>Customer testimonial to be added.</blockquote>
                  <figcaption>
                    <span className={styles.tav}></span>
                    <span>
                      <b>Customer name</b>
                      <small>Business, City</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
