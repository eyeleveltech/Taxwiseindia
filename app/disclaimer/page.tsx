import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | TaxwiseIndia',
  description: 'Legal disclaimer and regulatory clarifications for TaxwiseIndia.',
};

export default function DisclaimerPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow"><i className="dot"></i>Legal Information</p>
        <h1 className="h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Legal Disclaimer</h1>
        <p style={{ fontSize: '14px', color: 'var(--navy-2)', marginBottom: '36px' }}>Last updated: October 2026</p>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 48px)', lineHeight: 1.7, color: 'var(--navy-2)', fontSize: '15.5px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: 0 }}>1. Nature of Website Content</h2>
          <p>
            The explanations, blog posts, calculators, and tax summaries published on TaxwiseIndia are provided solely for general educational and informational awareness. Nothing on this website constitutes formal legal, judicial, or certified audit opinions until a formalized client agreement is executed.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>2. Independent Private Facilitator</h2>
          <p>
            TaxwiseIndia is an independent private consultancy firm and is neither affiliated with nor endorsed by the Government of India, the Central Board of Direct Taxes (CBDT), the Ministry of Corporate Affairs (MCA), or the Goods and Services Tax Network (GSTN). All government portal names, acronyms, and registered trademarks belong to their respective authorities.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>3. Dynamic Nature of Indian Tax Law</h2>
          <p>
            Indian taxation, GST notifications, and corporate laws undergo frequent amendments, circulars, and judicial rulings. While we make every endeavor to maintain current information, taxpayers should consult our professionals directly for tailored evaluations regarding current provisions applicable to their specific facts.
          </p>

          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
            <Link href="/" className="btn btn-ghost btn-sm">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
