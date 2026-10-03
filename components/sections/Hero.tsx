'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHATSAPP_URL } from '@/lib/constants';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneWrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLSpanElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);
  const segsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fitScene = () => {
      if (sceneWrapRef.current && sceneRef.current) {
        sceneRef.current.style.setProperty('--s', (sceneWrapRef.current.clientWidth / 580).toFixed(4));
      }
    };
    fitScene();
    
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window && sceneWrapRef.current) {
      ro = new ResizeObserver(fitScene);
      ro.observe(sceneWrapRef.current);
    } else {
      window.addEventListener('resize', fitScene);
    }

    const ctx = gsap.context(() => {
      const setStep = (n: number) => {
        stepsRef.current.forEach((r, i) => { 
          if (!r) return;
          r.classList.toggle(styles.done, i < n); 
          r.classList.toggle(styles.active, i === n); 
        });
        segsRef.current.forEach((s, i) => {
          if (!s) return;
          s.classList.toggle(styles.on, i < n);
        });
        if (n >= stepsRef.current.length && coinRef.current) {
          gsap.fromTo(coinRef.current, { scale: 1 }, { scale: 1.18, duration: 0.35, ease: 'power2.out', yoyo: true, repeat: 1 });
        }
      };

      setStep(0);

      const h1 = heroRef.current?.querySelector('h1');
      gsap.set('[data-intro]', { autoAlpha: 1 });

      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.1 } });
      tl.from(`.${styles.hero} .eyebrow`, { y: 18, autoAlpha: 0, duration: 0.9 }, 0.1);
      
      if (h1) {
        tl.from(h1, { y: 30, autoAlpha: 0 }, 0.18);
      }

      tl.to(`.${styles.heroCopy}`, { '--hl': 1, duration: 1, ease: 'power3.inOut' }, 0.95)
        .from(`.${styles.heroSub}`, { y: 24, autoAlpha: 0 }, 0.5)
        .from(`.${styles.heroCtas}`, { y: 24, autoAlpha: 0 }, 0.62)
        .from([`.${styles.sDisc}`, `.${styles.sRing}`, `.${styles.sSph}`], { autoAlpha: 0, scale: 0.6, duration: 1.4, stagger: 0.06 }, 0.3)
        .from(`.${styles.sTracker}`, { autoAlpha: 0, y: 110, rotationX: 40, rotationY: -34, duration: 1.4 }, 0.38)
        .from([`.${styles.n1}`, `.${styles.n2}`], { y: 80, rotationX: 30, duration: 1.3, stagger: 0.25 }, 0.9)
        .from([`.${styles.n1} .note`, `.${styles.n2} .note`], { autoAlpha: 0, scale: 0.7, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.25 }, 0.9)
        .from(`.${styles.sBadge}`, { autoAlpha: 0, scale: 0.3, rotation: -60, duration: 1, ease: 'back.out(1.8)' }, 1.45)
        .add(() => setStep(1), 1.3)
        .add(() => setStep(2), 1.75)
        .add(() => { 
          startSceneLife(); 
        });

      function startSceneLife() {
        (gsap.utils.toArray(`.${styles.sFloat}`) as HTMLElement[]).forEach((el, i) => gsap.to(el, {
          y: i % 2 ? 9 : -9, duration: 2.8 + (i % 3) * 0.5, ease: 'sine.inOut', yoyo: true, repeat: -1
        }));
        gsap.to(`.${styles.sRingIn}`, { rotation: 360, duration: 48, ease: 'none', repeat: -1 });

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && heroRef.current) {
          const BASE = { rotationY: -10, rotationX: 6 };
          const layers = gsap.utils.toArray(`.${styles.sLayer}`) as HTMLElement[];
          const rigs = layers.map(el => {
            const o = { duration: 0.9, ease: 'power3.out' };
            return {
              d: parseFloat(el.dataset.depth || '0.5'),
              rx: gsap.quickTo(el, 'rotationX', o), ry: gsap.quickTo(el, 'rotationY', o),
              x: gsap.quickTo(el, 'x', o), y: gsap.quickTo(el, 'y', o)
            };
          });
          heroRef.current.addEventListener('pointermove', e => {
            const mx = e.clientX / innerWidth - 0.5, my = e.clientY / innerHeight - 0.5;
            rigs.forEach(r => { r.ry(BASE.rotationY + mx * 16); r.rx(BASE.rotationX - my * 12); r.x(mx * r.d * 44); r.y(my * r.d * 32); });
          });
          heroRef.current.addEventListener('pointerleave', () => rigs.forEach(r => { r.ry(BASE.rotationY); r.rx(BASE.rotationX); r.x(0); r.y(0); }));
        }

        let n = 2;
        const tick = () => {
          n = n >= stepsRef.current.length ? 2 : n + 1;
          setStep(n);
          gsap.delayedCall(n >= stepsRef.current.length ? 3.4 : 2.4, tick);
        };
        gsap.delayedCall(2.4, tick);
      }

      // Parallax
      const heroOut = { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to(`.${styles.heroCopy}`, { yPercent: -10, ease: 'none', scrollTrigger: { ...heroOut } });
      const layers = gsap.utils.toArray(`.${styles.sLayer}`) as HTMLElement[];
      layers.forEach((el) => gsap.to(el, {
        yPercent: -(parseFloat(el.dataset.depth || '0.5')) * 22, ease: 'none', scrollTrigger: { ...heroOut }
      }));

    }, heroRef);

    return () => {
      ctx.revert();
      if (ro) ro.disconnect();
      window.removeEventListener('resize', fitScene);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow" data-intro><i className="dot"></i>TAX &amp; BUSINESS COMPLIANCE, REIMAGINED</p>
          <h1 id="hero-title" data-intro>Tax &amp; Compliance,<br /> <span className={styles.hl}>Without the Chase.</span></h1>
          <p className={styles.heroSub} data-intro>From GST and income tax to accounting and business compliance, TaxwiseIndia handles the work — and keeps you updated at every step.</p>
          <div className={styles.heroCtas} data-intro>
            <Link className="btn btn-primary btn-lg" href="#get-started" data-magnetic>Get Started <svg className="i arr"><use href="#i-arrow"/></svg></Link>
            <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener" data-magnetic><svg className="i"><use href="#i-phone"/></svg>Talk to an Expert</a>
          </div>
        </div>

        <div ref={sceneWrapRef} className={styles.sceneWrap} aria-hidden="true" data-intro>
          <div ref={sceneRef} className={styles.scene}>
            <div className={`${styles.sLayer} ${styles.sDisc}`} data-depth=".15"></div>
            <div className={`${styles.sLayer} ${styles.sRing}`} data-depth=".3"><div className={styles.sRingIn}><i></i></div></div>
            <div className={`${styles.sLayer} ${styles.sSph} ${styles.sp1}`} data-depth="1.6"><div className={styles.sFloat}></div></div>
            <div className={`${styles.sLayer} ${styles.sSph} ${styles.sp2}`} data-depth=".7"><div className={styles.sFloat}></div></div>

            <div className={`${styles.sLayer} ${styles.sTracker}`} data-depth=".55">
              <div className={styles.sFloat}>
                <div className={styles.tk}>
                  <div className={styles.tkH}>
                    <span className={styles.tkBrand}><span className={styles.tkMk}><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>TaxwiseIndia</span>
                    <span className={styles.tkChip}>GST Services</span>
                  </div>
                  <div className={styles.tkBar}>
                    {[...Array(5)].map((_, i) => <i key={i} ref={el => { segsRef.current[i] = el; }} className={styles.tkSeg}></i>)}
                  </div>
                  <ol className={styles.tkList}>
                    <li ref={el => { stepsRef.current[0] = el; }} className={styles.tkRow}><span className={styles.tkDot}><svg className="i"><use href="#i-check"/></svg></span>YOU PAY</li>
                    <li ref={el => { stepsRef.current[1] = el; }} className={styles.tkRow}><span className={styles.tkDot}><svg className="i"><use href="#i-check"/></svg></span>WE START</li>
                    <li ref={el => { stepsRef.current[2] = el; }} className={styles.tkRow}><span className={styles.tkDot}><svg className="i"><use href="#i-check"/></svg></span>WE WORK</li>
                    <li ref={el => { stepsRef.current[3] = el; }} className={styles.tkRow}><span className={styles.tkDot}><svg className="i"><use href="#i-check"/></svg></span>WE UPDATE</li>
                    <li ref={el => { stepsRef.current[4] = el; }} className={styles.tkRow}><span className={styles.tkDot}><svg className="i"><use href="#i-check"/></svg></span>WE COMPLETE</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={`${styles.sLayer} ${styles.sNote} ${styles.n1}`} data-depth=".95">
              <div className={styles.sFloat}>
                <div className="note glass">
                  <span className="note-ic"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>
                  <div className="note-b"><b>TaxwiseIndia</b><p>Your GST filing has been initiated.</p></div>
                </div>
              </div>
            </div>

            <div className={`${styles.sLayer} ${styles.sNote} ${styles.n2}`} data-depth="1.2">
              <div className={styles.sFloat}>
                <div className="note glass">
                  <span className="note-ic"><Image src="/assets/tw-mark.png" alt="" width={326} height={256} /></span>
                  <div className="note-b"><b>TaxwiseIndia</b><p>Documents reviewed successfully.</p></div>
                </div>
              </div>
            </div>

            <div className={`${styles.sLayer} ${styles.sBadge}`} data-depth="1.45">
              <div className={styles.sFloat}><span ref={coinRef} className="coin"><svg className="i"><use href="#i-check"/></svg></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
