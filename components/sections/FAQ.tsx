'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FAQ_ITEMS } from '@/lib/constants';
import styles from './FAQ.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const container = useRef<HTMLElement>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 540);
  };

  useGSAP(() => {
    // Check if we are mounted/have elements
    if (!container.current) return;
    
    // Animate items in
    gsap.from(`.${styles.faqItem}`, {
      y: 24,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.07,
      scrollTrigger: {
        trigger: `.${styles.faqList}`,
        start: 'top 85%',
        once: true,
      }
    });

  }, { scope: container });

  return (
    <section 
      ref={container}
      className={`sec ${styles.faq}`} 
      id="faq" 
      aria-labelledby="faq-title"
    >
      <div className={`wrap ${styles.faqGrid}`}>
        <div className={styles.faqHead}>
          <p className="eyebrow" data-reveal><i className="dot"></i>FAQ</p>
          <h2 className="h2 split" id="faq-title">Questions? We&apos;ve Got Answers.</h2>
        </div>
        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, index) => {
            const id = `fq${index + 1}`;
            const panelId = `fa${index + 1}`;
            const isOpen = openId === id;
            
            return (
              <div 
                key={id} 
                className={`${styles.faqItem} ${isOpen ? styles.isOpen : ''}`}
              >
                <h3>
                  <button 
                    className={styles.faqQ} 
                    type="button" 
                    aria-expanded={isOpen} 
                    aria-controls={panelId} 
                    id={id}
                    onClick={() => toggle(id)}
                  >
                    {item.question}
                    <span className={styles.faqIc} aria-hidden="true"></span>
                  </button>
                </h3>
                <div 
                  className={styles.faqA} 
                  id={panelId} 
                  role="region" 
                  aria-labelledby={id}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
