import Link from 'next/link';
import { ServiceDetailData, WHATSAPP_URL, CONTACT_INFO } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail({ service }: { service: ServiceDetailData }) {
  return (
    <main id="main" className={`sec sec-off ${styles.servicePage}`}>
      <div className="wrap">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/services">Services</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span>{service.badge}</span>
        </nav>

        {/* Hero Card */}
        <div className={styles.heroCard}>
          <div className={styles.heroHead}>
            <div className={styles.heroLeft}>
              <span className={styles.badge}>{service.badge}</span>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroSubtitle}>{service.subtitle}</p>
              <div className={styles.heroActions}>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-lg"
                >
                  <SvgIcon id="i-send" className="i" />
                  Get Started on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  <SvgIcon id="i-phone" className="i" />
                  Request Callback
                </Link>
              </div>
            </div>

            <div className="key key-xl">
              <SvgIcon id={service.icon} />
            </div>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <b>Average Turnaround</b>
              <span>{service.turnaround}</span>
            </div>
            <div className={styles.metaItem}>
              <b>Dedicated Support</b>
              <span>CA & Compliance Specialist</span>
            </div>
            <div className={styles.metaItem}>
              <b>Status Tracking</b>
              <span>Proactive Updates via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Documents Grid */}
        <div className={styles.gridTwo}>
          <section className={styles.panel}>
            <h2>
              <span className="key key-sm"><SvgIcon id="i-check" /></span>
              What We Deliver
            </h2>
            <ul className={styles.checkList}>
              {service.deliverables.map((item, idx) => (
                <li key={idx}>
                  <SvgIcon id="i-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel}>
            <h2>
              <span className="key key-sm"><SvgIcon id="i-itr" /></span>
              Required Documents
            </h2>
            <ul className={styles.checkList}>
              {service.documentsRequired.map((doc, idx) => (
                <li key={idx}>
                  <SvgIcon id="i-arrow" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 3-Step Process */}
        <section className={styles.processSection}>
          <h2>How We Handle Your {service.badge}</h2>
          <div className={styles.stepsGrid}>
            {service.process.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {service.faqs.map((f, idx) => (
                <article key={idx} className={styles.faqCard}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <div className={styles.ctaBanner}>
          <h2>Ready to get this off your desk?</h2>
          <p>
            Connect with our compliance team directly. We review your requirements and get started immediately without back-and-forth delays.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
            >
              Start on WhatsApp <SvgIcon id="i-arrow" className="i arr" />
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="btn btn-light btn-lg"
            >
              Call {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

