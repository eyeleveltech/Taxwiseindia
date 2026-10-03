'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TRUST_ITEMS } from '@/lib/constants';
import styles from './TrustMarquee.module.css';

export default function TrustMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      // Need to calculate scrollWidth properly after render
      const duration = track.scrollWidth / 2 / 45;
      
      const tw = gsap.fromTo(track,
        { xPercent: 0 },
        { xPercent: -50, ease: 'none', duration: duration, repeat: -1 }
      );
      
      const skewTo = gsap.quickTo(track, 'skewX', { duration: 0.6, ease: 'power3.out' });
      let paused = false;
      let idle: NodeJS.Timeout;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate(self) {
          const v = self.getVelocity();
          skewTo(gsap.utils.clamp(-7, 7, -v / 260));
          if (!paused) gsap.to(tw, { timeScale: gsap.utils.clamp(1, 5, 1 + Math.abs(v) / 400), duration: 0.2, overwrite: true });
          clearTimeout(idle);
          idle = setTimeout(() => {
            skewTo(0);
            if (!paused) gsap.to(tw, { timeScale: 1, duration: 0.9, ease: 'power2.out', overwrite: true });
          }, 120);
        }
      });

      const handleEnter = () => { paused = true; gsap.to(tw, { timeScale: 0, duration: 0.6, overwrite: true }); };
      const handleLeave = () => { paused = false; gsap.to(tw, { timeScale: 1, duration: 0.6, overwrite: true }); };

      sectionRef.current!.addEventListener('pointerenter', handleEnter);
      sectionRef.current!.addEventListener('pointerleave', handleLeave);

      return () => {
        sectionRef.current?.removeEventListener('pointerenter', handleEnter);
        sectionRef.current?.removeEventListener('pointerleave', handleLeave);
        clearTimeout(idle);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.trust} aria-label="Why businesses trust TaxwiseIndia">
      <div className={styles.marquee} data-marquee="trust">
        <div ref={trackRef} className={styles.mqTrack}>
          <ul className={styles.mqGroup}>
            {TRUST_ITEMS?.map((item, i) => (
              <li key={i}>
                <span className="key key-xs"><svg className="i"><use href="#i-check"/></svg></span>
                {item.bold ? <span><b>{item.bold}</b> {item.text.replace(item.bold, '').trim()}</span> : item.text}
              </li>
            ))}
            {TRUST_ITEMS?.map((item, i) => (
              <li key={`dup1-${i}`} aria-hidden="true">
                <span className="key key-xs"><svg className="i"><use href="#i-check"/></svg></span>
                {item.bold ? <span><b>{item.bold}</b> {item.text.replace(item.bold, '').trim()}</span> : item.text}
              </li>
            ))}
          </ul>
          <ul className={styles.mqGroup} aria-hidden="true">
            {TRUST_ITEMS?.map((item, i) => (
              <li key={`dup2-${i}`}>
                <span className="key key-xs"><svg className="i"><use href="#i-check"/></svg></span>
                {item.bold ? <span><b>{item.bold}</b> {item.text.replace(item.bold, '').trim()}</span> : item.text}
              </li>
            ))}
            {TRUST_ITEMS?.map((item, i) => (
              <li key={`dup3-${i}`}>
                <span className="key key-xs"><svg className="i"><use href="#i-check"/></svg></span>
                {item.bold ? <span><b>{item.bold}</b> {item.text.replace(item.bold, '').trim()}</span> : item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
