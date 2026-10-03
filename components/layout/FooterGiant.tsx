'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

export default function FooterGiant() {
  const giantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !giantRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = giantRef.current;
    const ctx = gsap.context(() => {
      // Animate the entire giant text rising up
      gsap.from(el, {
        yPercent: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 98%', once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={giantRef} className={styles.ftrGiant} aria-hidden="true">
      <span>TAXWISE</span><span className={styles.in}>INDIA</span>
    </div>
  );
}
