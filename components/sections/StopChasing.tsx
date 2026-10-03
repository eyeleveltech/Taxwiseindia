'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './StopChasing.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StopChasing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    
    const sec = sectionRef.current;
    const notes = gsap.utils.toArray(`.${styles.phNote}`) as HTMLElement[];
    const dots = gsap.utils.toArray(`.${styles.stopDots} i`) as HTMLElement[];
    const phone = sec.querySelector(`.${styles.phone}`) as HTMLElement;
    
    const mm = gsap.matchMedia();
    
    mm.add({ desk: '(min-width: 992px)', mob: '(max-width: 991.98px)' }, (ctx) => {
      const { desk } = ctx.conditions as { desk: boolean };
      
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'back.out(1.5)' } });

      notes.forEach((n, i) => {
        const at = i * 1.25;
        tl.fromTo(n, { y: -36, scale: 0.9, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1 }, at)
          .to(phone, { keyframes: { x: [-5, 5, -4, 4, 0] }, duration: 0.5, ease: 'none' }, at + 0.05)
          .to(dots[i], { backgroundColor: '#16B878', width: 54, duration: 0.5, ease: 'power2.out' }, at);
      });
      
      if (dots[3]) {
        tl.to(dots[3], { backgroundColor: '#16B878', width: 54, duration: 0.5, ease: 'power2.out' }, '+=0.2');
      }
      
      tl.fromTo(`.${styles.phDone}`, { autoAlpha: 0, y: 30, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, ease: 'expo.out' }, '<');
      
      tl.fromTo(`.${styles.phTick}`, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, ease: 'power2.out' }, '<0.25');
      
      tl.to({}, { duration: 0.6 }); // brief hold before the pin releases

      if (desk) {
        ScrollTrigger.create({ 
          trigger: sec, 
          start: 'top top', 
          end: '+=190%', 
          pin: true, 
          scrub: 0.6, 
          anticipatePin: 1, 
          animation: tl 
        });
      } else {
        ScrollTrigger.create({ 
          trigger: phone, 
          start: 'top 72%', 
          animation: tl, 
          toggleActions: 'play none none none' 
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.stop} id="updates" aria-labelledby="stop-title" ref={sectionRef}>
      <div className={`wrap ${styles.stopGrid}`}>
        <div className={styles.stopCopy}>
          <h2 className={`${styles.stopH} split`} id="stop-title">Stop Chasing Updates.</h2>
          <p className={styles.stopTag} data-reveal>
            <span className="key key-sm"><SvgIcon id="i-check" /></span>
            We keep you posted with every move.
          </p>
          <div className={styles.stopDots} aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className={styles.phoneStage}>
          <i className={styles.psDisc} aria-hidden="true"></i>
          <i className={styles.psRing} aria-hidden="true"><i></i></i>
          <div className={styles.phone}>
            <div className={styles.phScreen}>
              <span className={styles.phIsland} aria-hidden="true"></span>
              <i className={styles.phWall} aria-hidden="true"></i>
              <ul className={styles.phNotes}>
                <li className={`${styles.phNote} glass`}>
                  <span className="note-ic">
                    <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                  </span>
                  <div className="note-b">
                    <b>TaxwiseIndia</b>
                    <p>Your GST filing has been initiated.</p>
                  </div>
                </li>
                <li className={`${styles.phNote} glass`}>
                  <span className="note-ic">
                    <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                  </span>
                  <div className="note-b">
                    <b>TaxwiseIndia</b>
                    <p>Documents reviewed successfully.</p>
                  </div>
                </li>
                <li className={`${styles.phNote} glass`}>
                  <span className="note-ic">
                    <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                  </span>
                  <div className="note-b">
                    <b>TaxwiseIndia</b>
                    <p>Your filing has been completed.</p>
                  </div>
                </li>
              </ul>
              <div className={styles.phDone}>
                <span className={styles.phCoin}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path className={styles.phTick} d="M14 24.5l7 7 13-14" />
                  </svg>
                </span>
                <p>You&apos;re all set.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
