'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import { HOW_STEPS } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './HowItWorks.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    
    const sec = sectionRef.current;
    const view = sec.querySelector(`.${styles.howView}`) as HTMLElement;
    const track = sec.querySelector(`.${styles.howTrack}`) as HTMLElement;
    const steps = gsap.utils.toArray(`.${styles.hstep}`) as HTMLElement[];
    
    const mark = (i: number) => {
      steps.forEach((s, k) => {
        s.classList.toggle(styles.isOn, k <= i);
        s.classList.toggle(styles.isCurrent, k === i);
      });
    };
    
    const mm = gsap.matchMedia();
    
    mm.add('(min-width: 992px)', () => {
      const dist = () => Math.max(0, track.scrollWidth - view.clientWidth);
      
      if (dist() > 40) {
        mark(0);
        const len = () => '+=' + dist() * 1.25;
        
        gsap.to(track, {
          x: () => -dist(), 
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top top',
            end: len,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => mark(Math.round(self.progress * (steps.length - 1)))
          }
        });
        
        gsap.fromTo(`.${styles.howBar} i`, 
          { scaleX: 0 }, 
          {
            scaleX: 1, 
            ease: 'none',
            scrollTrigger: { 
              trigger: sec, 
              start: 'top top', 
              end: len, 
              scrub: 0.8, 
              invalidateOnRefresh: true 
            }
          }
        );
      }
    });
    
    mm.add('(max-width: 991.98px)', () => {
      mark(-1);
      steps.forEach((s, i) => {
        ScrollTrigger.create({
          trigger: s, 
          start: 'top 72%', 
          onEnter: () => mark(i), 
          onLeaveBack: () => mark(i - 1)
        });
      });
    });
    
  }, { scope: sectionRef });

  return (
    <section className={styles.how} id="how" aria-labelledby="how-title" ref={sectionRef}>
      <div className={styles.howPin}>
        <div className={`wrap ${styles.howHead}`}>
          <div>
            <p className="eyebrow" data-reveal><i className="dot"></i>How TaxwiseIndia Works</p>
            <h2 className="h2 split" id="how-title">Simple for You. Serious About the Work.</h2>
          </div>
          <div className={styles.howBar} aria-hidden="true"><i></i></div>
        </div>

        <div className={styles.howView}>
          <ol className={styles.howTrack}>
            <li className={`${styles.hstep} ${styles.isOn} ${styles.isCurrent}`}>
              <div className={styles.hsTop}>
                <span className={styles.hsNum}>01</span>
                <span className="key"><SvgIcon id="i-send" /></span>
              </div>
              <div className={`${styles.hsArt} ${styles.art1}`} aria-hidden="true">
                <i className={`${styles.bub} ${styles.b1}`}><i></i><i></i></i>
                <i className={`${styles.bub} ${styles.b2}`}><i></i><i></i></i>
                <i className={styles.send}><SvgIcon id="i-send" /></i>
              </div>
              <div className={styles.hsBody}>
                <h3>{HOW_STEPS[0].title}</h3>
                <p>{HOW_STEPS[0].description}</p>
              </div>
            </li>

            <li className={styles.hstep}>
              <div className={styles.hsTop}>
                <span className={styles.hsNum}>02</span>
                <span className="key"><SvgIcon id="i-work" /></span>
              </div>
              <div className={`${styles.hsArt} ${styles.art2}`} aria-hidden="true">
                <i className={styles.doc}><i></i><i></i><i></i><i className={styles.docBar}><i></i></i></i>
                <i className={styles.gear}><SvgIcon id="i-gear" /></i>
              </div>
              <div className={styles.hsBody}>
                <h3>{HOW_STEPS[1].title}</h3>
                <p>{HOW_STEPS[1].description}</p>
              </div>
            </li>

            <li className={styles.hstep}>
              <div className={styles.hsTop}>
                <span className={styles.hsNum}>03</span>
                <span className="key"><SvgIcon id="i-bell" /></span>
              </div>
              <div className={`${styles.hsArt} ${styles.art3}`} aria-hidden="true">
                <i className={styles.bell}>
                  <i className={styles.rip}></i>
                  <i className={`${styles.rip} ${styles.r2}`}></i>
                  <SvgIcon id="i-bell" />
                </i>
                <i className={`${styles.mini} glass`}>
                  <i className={styles.miniIc}>
                    <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                  </i>
                  <i className={styles.miniL}><i></i><i></i></i>
                </i>
              </div>
              <div className={styles.hsBody}>
                <h3>{HOW_STEPS[2].title}</h3>
                <p>{HOW_STEPS[2].description}</p>
              </div>
            </li>

            <li className={styles.hstep}>
              <div className={styles.hsTop}>
                <span className={styles.hsNum}>04</span>
                <span className="key"><SvgIcon id="i-check" /></span>
              </div>
              <div className={`${styles.hsArt} ${styles.art4}`} aria-hidden="true">
                <i className={styles.doneRing}></i>
                <i className={`${styles.doneRing} ${styles.r2}`}></i>
                <i className={`coin ${styles.coinLg}`}><SvgIcon id="i-check" /></i>
              </div>
              <div className={styles.hsBody}>
                <h3>{HOW_STEPS[3].title}</h3>
                <p>{HOW_STEPS[3].description}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
