'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Promise.module.css';

export default function PromiseSection() {
  const lineRef = useRef<HTMLLIElement>(null);
  const fillRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLElement>(null);
  const footRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Reveals
      gsap.from('[data-reveal]', {
        y: 28, autoAlpha: 0, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: `.${styles.promise}`, start: 'top 88%', once: true }
      });
      
      const splitEl = document.querySelector(`.${styles.promiseHead} .split`);
      if (splitEl) {
        gsap.from(splitEl, {
          y: 30, autoAlpha: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: splitEl, start: 'top 86%', once: true }
        });
      }

      // Promise specific
      const line = lineRef.current;
      if (!line) return;
      
      const st = () => ({ trigger: line, start: 'top 62%', end: 'bottom 62%', scrub: 0.6 });
      gsap.fromTo(fillRef.current, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: st() });
      gsap.fromTo(dotRef.current, { y: 0 }, { y: () => line.offsetHeight, ease: 'none', scrollTrigger: { ...st(), invalidateOnRefresh: true } });
      
      stepsRef.current.forEach((step) => {
        if (!step) return;
        const fnode = step.querySelector(`.${styles.fnode}`);
        ScrollTrigger.create({
          trigger: fnode, start: 'center 62%',
          onEnter: () => step.classList.add(styles.on), onLeaveBack: () => step.classList.remove(styles.on)
        });
      });
      
      const lastNode = stepsRef.current[stepsRef.current.length - 1]?.querySelector(`.${styles.fnode}`);
      if (lastNode && footRef.current) {
        ScrollTrigger.create({
          trigger: lastNode, start: 'center 62%',
          onEnter: () => footRef.current?.classList.add(styles.on), onLeaveBack: () => footRef.current?.classList.remove(styles.on)
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={`sec ${styles.promise}`} id="promise" aria-labelledby="promise-title">
      <div className={`wrap ${styles.promiseGrid}`}>
        <div className={styles.promiseHead}>
          <p className="eyebrow" data-reveal><i className="dot"></i>The Taxwise Promise</p>
          <h2 className="h2 split" id="promise-title">You shouldn&apos;t have to chase your tax consultant.</h2>
          <p className="lead" data-reveal>We believe once you&apos;ve trusted us with the work, staying informed should be our responsibility — not yours.</p>
        </div>

        <div className={styles.flow}>
          <ol className={styles.flowList}>
            <li ref={lineRef} className={styles.flowLine} aria-hidden="true"><i ref={fillRef} className={styles.flowFill}></i><i ref={dotRef} className={styles.flowDot}></i></li>
            <li ref={el => { stepsRef.current[0] = el; }} className={styles.flowStep}><span className={styles.fnode}><svg className="i"><use href="#i-card"/></svg></span><span className={styles.flabel}>YOU PAY</span></li>
            <li ref={el => { stepsRef.current[1] = el; }} className={styles.flowStep}><span className={styles.fnode}><svg className="i"><use href="#i-play"/></svg></span><span className={styles.flabel}>WE START</span></li>
            <li ref={el => { stepsRef.current[2] = el; }} className={styles.flowStep}><span className={styles.fnode}><svg className="i"><use href="#i-work"/></svg></span><span className={styles.flabel}>WE WORK</span></li>
            <li ref={el => { stepsRef.current[3] = el; }} className={styles.flowStep}><span className={styles.fnode}><svg className="i"><use href="#i-bell"/></svg></span><span className={styles.flabel}>WE UPDATE</span></li>
            <li ref={el => { stepsRef.current[4] = el; }} className={styles.flowStep}><span className={styles.fnode}><svg className="i"><use href="#i-check"/></svg></span><span className={styles.flabel}>WE COMPLETE</span></li>
          </ol>
          <p ref={footRef} className={styles.flowFoot}><span className={styles.tkMk}><Image src="/assets/tw-mark.png" alt="" width={326} height={256} className="mk" /></span>We keep you posted with every move.</p>
        </div>
      </div>
    </section>
  );
}
