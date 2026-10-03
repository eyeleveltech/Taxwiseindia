import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog & Tax Insights | TaxwiseIndia',
  description: 'Analysis and commentary on Indian taxation, corporate law amendments, and CFO insights for growing businesses.',
};

const POSTS = [
  {
    title: 'Why Most Startups Struggle with GST Input Credit and How to Fix It',
    date: '12 Oct 2026',
    author: 'TaxwiseIndia Editorial',
    snippet: 'Discover the most common causes of blocked ITC under Section 17(5), vendor reconciliation errors, and strategies to recover stuck credits.',
  },
  {
    title: 'The Hidden Costs of Procrastinating Annual ROC Filings (AOC-4 & MGT-7)',
    date: '28 Sep 2026',
    author: 'Corporate Advisory Team',
    snippet: 'With daily statutory penalties compounding relentlessly, here is how early financial finalization protects founders from personal director liability.',
  },
  {
    title: 'Navigating Cross-Border Software Payments and TDS Withholding under DTAA',
    date: '15 Sep 2026',
    author: 'International Tax Desk',
    snippet: 'A deep dive into Section 195, Equalisation Levy changes, and obtaining Form 15CA/15CB for overseas SaaS subscriptions and remittances.',
  },
];

export default function BlogPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Insights & Analysis</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>The TaxwiseIndia Blog</h1>
          <p className="lead">
            Expert analysis, CFO best practices, and regulatory breakdowns tailored for Indian enterprises and entrepreneurs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {POSTS.map((p, idx) => (
            <article key={idx} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--navy-2)', marginBottom: '14px' }}>
                <span>{p.author}</span>
                <span>{p.date}</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 12px' }}>
                {p.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                {p.snippet}
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Discuss This Topic on WhatsApp &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
            Want tailored advice for your company?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: '0 0 20px' }}>
            Connect with our Chartered Accountants today.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
