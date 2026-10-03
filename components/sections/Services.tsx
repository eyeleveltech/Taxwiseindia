'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsap } from '@/hooks/useGsap';
import { SERVICES } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './Services.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;
    
    const cards = gsap.utils.toArray(`.${styles.svc}`) as Element[];
    gsap.set(cards, { y: 70, autoAlpha: 0 });
    
    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      once: true,
      onEnter: batch => gsap.to(batch, {
        y: 0, autoAlpha: 1, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true, clearProps: 'transform'
      })
    });

    gsap.from(`.${styles.saNote}`, {
      y: 40, scale: 0.85, autoAlpha: 0, duration: 1, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: `.${styles.svcLg}`, start: 'top 55%', once: true }
    });
  }, { scope: containerRef });

  return (
    <section className="sec sec-off" id="services" aria-labelledby="services-title">
      <div className="wrap" ref={containerRef}>
        <div className="sec-head">
          <p className="eyebrow" data-reveal><i className="dot"></i>Services</p>
          <h2 className="h2 split" id="services-title">Everything Your Business Needs.</h2>
          <p className="lead" data-reveal>One place for tax, accounting and compliance.</p>
        </div>

        <div className={styles.svcGrid}>
          {SERVICES.map((service) => {
            const isFeatured = service.featured;
            return (
              <Link 
                key={service.slug} 
                className={`${styles.svc} ${isFeatured ? styles.svcLg : ''}`} 
                href={`/${service.slug}`}
              >
                <span className="key"><SvgIcon id={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.svcGo} aria-hidden="true">
                  <SvgIcon id="i-arrow" />
                </span>
                {isFeatured && (
                  <div className={styles.svcArt} aria-hidden="true">
                    <i className={styles.saDisc}></i>
                    <div className={`note glass ${styles.saNote}`}>
                      <span className="note-ic">
                        <Image src="/assets/tw-mark.png" alt="" width={326} height={256} />
                      </span>
                      <div className="note-b">
                        <b>TaxwiseIndia</b>
                        <p>Your GST filing has been initiated.</p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
          
          <Link className={`${styles.svc} ${styles.svcMore}`} href="/services">
            <span>More Services</span>
            <span className={styles.moreArr}><SvgIcon id="i-arrow" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
