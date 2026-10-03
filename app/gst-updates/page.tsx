import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'GST Notifications & Portal Updates | TaxwiseIndia',
  description: 'Recent GST council decisions, notification circulars, e-invoicing thresholds, and compliance calendar changes.',
};

const UPDATES = [
  {
    title: 'E-Invoicing Applicability Threshold Updates for B2B Supplies',
    date: 'Updated Recently',
    tag: 'E-Invoicing',
    summary: 'Everything regarding mandatory electronic invoicing requirements, IRN generation on IRP portals, and penalties for non-compliant B2B invoices.',
  },
  {
    title: 'Automated ITC Mismatch Notices: Understanding DRC-01C & DRC-01B Filings',
    date: 'Important Circular',
    tag: 'ITC Verification',
    summary: 'How the GST portal compares GSTR-1 vs GSTR-3B and GSTR-2B vs GSTR-3B, trigger thresholds, and replying within the mandatory 7-day window.',
  },
  {
    title: 'GST Council Meeting Recommendations: Key Changes in Tax Rates and Exemptions',
    date: 'Council Circular',
    tag: 'Rate Revisions',
    summary: 'A summary of the latest rate adjustments, clarifications for accommodation services, and dispute amnesty provisions.',
  },
  {
    title: 'Biometric-Based Aadhaar Authentication for New GST Registrations',
    date: 'Registration Norms',
    tag: 'New Registration',
    summary: 'Rollout of biometric authentication at GST Suvidha Kendras to curb fake ITC syndicates and verify genuine business promoters.',
  },
];

export default function GstUpdatesPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Statutory Feed</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>GST Notifications & Compliance Updates</h1>
          <p className="lead">
            Stay ahead of shifting GST rules, e-invoice mandates, and portal changes without wading through complex gazette notifications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {UPDATES.map((u, idx) => (
            <article key={idx} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--emerald-ink)', background: 'var(--mint-soft)', padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase' }}>
                  {u.tag}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--navy-2)' }}>{u.date}</span>
              </div>
              <h2 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 12px' }}>
                {u.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>
                {u.summary}
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Verify Your Business Impact &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
            Need automated GST compliance for your company?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: '0 0 20px' }}>
            Let our specialists handle your monthly reconciliation and filings with zero friction.
          </p>
          <Link href="/gst-services" className="btn btn-primary btn-lg">
            Explore GST Services
          </Link>
        </div>
      </div>
    </main>
  );
}
