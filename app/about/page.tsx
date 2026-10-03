import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL, TRUST_ITEMS } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';

export const metadata: Metadata = {
  title: 'About Us | TaxwiseIndia',
  description: 'Learn about TaxwiseIndia — professional tax and business compliance built on proactive communication and zero-chase execution.',
};

export default function AboutPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        {/* Hero */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <p className="eyebrow"><i className="dot"></i>Our Mission</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>
            We Built TaxwiseIndia Because Business Owners Deserve Better Than Chasing Their Consultants.
          </h1>
          <p className="lead">
            In standard compliance firms, clients pay up front and then spend weeks sending reminders asking if anything was done. We flipped that model on its head.
          </p>
        </div>

        {/* Narrative Card */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '28px', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '48px', boxShadow: '0 4px 24px -10px rgba(7, 26, 43, 0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '40px' }}>
            <div>
              <span className="badge" style={{ display: 'inline-block', background: 'var(--mint-soft)', color: 'var(--emerald-ink)', padding: '6px 14px', borderRadius: '99px', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                The Problem We Solve
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 700, color: 'var(--navy)', margin: '0 0 16px' }}>
                Compliance Shouldn&apos;t Be an Anxiety Machine.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--navy-2)', margin: 0 }}>
                Every founder and finance manager knows the familiar sinking feeling: tax deadlines approaching, an unacknowledged invoice, or a notice from the department, while their accountant is unreachable.
              </p>
            </div>
            <div>
              <span className="badge" style={{ display: 'inline-block', background: 'var(--mint-soft)', color: 'var(--emerald-ink)', padding: '6px 14px', borderRadius: '99px', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Our Operating Standard
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 700, color: 'var(--navy)', margin: '0 0 16px' }}>
                The Responsibility Is Ours, Not Yours.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--navy-2)', margin: 0 }}>
                At TaxwiseIndia, once you trust us with a task, we establish the milestones, keep you informed of every advancement, and deliver the final government acknowledgements right to your WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <h2 style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 700, textAlign: 'center', margin: '0 0 32px', color: 'var(--navy)' }}>
          The Three Pillars of TaxwiseIndia
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px' }}>
            <span className="key key-lg" style={{ marginBottom: '20px' }}>
              <SvgIcon id="i-eye" />
            </span>
            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 12px', color: 'var(--navy)' }}>
              1. Radical Visibility
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-2)', margin: 0 }}>
              You never have to guess whether work has started. When documents are reviewed, when filings are queued, and when receipts are issued, you get notified.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px' }}>
            <span className="key key-lg" style={{ marginBottom: '20px' }}>
              <SvgIcon id="i-bell" />
            </span>
            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 12px', color: 'var(--navy)' }}>
              2. Proactive Follow-Through
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-2)', margin: 0 }}>
              We don&apos;t wait for deadlines to reach out. We request information with comfortable lead times so you never incur emergency late fees or penalties.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px' }}>
            <span className="key key-lg" style={{ marginBottom: '20px' }}>
              <SvgIcon id="i-layers" />
            </span>
            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 12px', color: 'var(--navy)' }}>
              3. Unified Expertise
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-2)', margin: 0 }}>
              GST, ITR, Company Incorporation, Accounting, and Labor Law (PF/ESI) handled under one synchronized roof by qualified professionals.
            </p>
          </div>
        </div>

        {/* Credentials Bar */}
        <div style={{ background: 'var(--off)', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', marginBottom: '64px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '24px', textAlign: 'center' }}>
          {TRUST_ITEMS.map((item, i) => (
            <div key={i}>
              <div style={{ font: '700 clamp(28px, 3vw, 40px)/1 var(--display)', color: 'var(--emerald-ink)', marginBottom: '6px' }}>
                {item.bold || '100%'}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy-2)' }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '28px', padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
            Ready to experience compliance without the chase?
          </h2>
          <p style={{ maxWidth: '520px', margin: '0 auto 28px', color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
            Join hundreds of Indian businesses who trust TaxwiseIndia to handle their taxes cleanly and reliably.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Talk to an Expert on WhatsApp
            </a>
            <Link href="/services" className="btn btn-light btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
