import { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tax Guides & Checklists | TaxwiseIndia',
  description: 'Practical tax filing guides, deductions checklists, and tax planning strategies for Indian taxpayers.',
};

const GUIDES = [
  {
    title: 'Old vs New Tax Regime: Which Saves More Money for Salaried Employees in FY 2024-25?',
    readTime: '6 min read',
    category: 'Income Tax',
    description: 'A line-by-line comparison factoring in standard deductions, 80C, 80D health insurance, HRA, and home loan interest.',
  },
  {
    title: 'How to Respond to an Income Tax Notice Under Section 143(1) and 139(9)',
    readTime: '8 min read',
    category: 'Scrutiny & Notices',
    description: 'Step-by-step guidance on understanding defective return notices, discrepancies with AIS/26AS, and submitting online responses.',
  },
  {
    title: 'Capital Gains Tax on Stocks and Mutual Funds: 2024 Budget Amendments Explained',
    readTime: '5 min read',
    category: 'Investments',
    description: 'Everything you need to know about the revised 12.5% LTCG and 20% STCG rates, indexation withdrawal, and grandfathering clauses.',
  },
  {
    title: 'Advance Tax Calculation and Due Dates: Avoid Penalty Interest under 234B & 234C',
    readTime: '4 min read',
    category: 'Compliance',
    description: 'Who needs to pay advance tax, the 15th June, September, December, and March deadlines, and calculation formulas.',
  },
];

export default function TaxGuidesPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Knowledge Base</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>Practical Tax Guides & Checklists</h1>
          <p className="lead">
            Clear, actionable tax insights written by Chartered Accountants to help you navigate Indian tax regulations with total confidence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {GUIDES.map((g, idx) => (
            <article key={idx} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--emerald-ink)', background: 'var(--mint-soft)', padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase' }}>
                  {g.category}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--navy-2)' }}>{g.readTime}</span>
              </div>
              <h2 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 12px' }}>
                {g.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>
                {g.description}
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Ask CA About This Topic &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ background: 'var(--emerald)', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
            Have a specific tax question not covered here?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--navy)', margin: '0 0 20px' }}>
            Chat with our tax team directly on WhatsApp for prompt clarification.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy btn-lg">
            Chat with a Tax Specialist
          </a>
        </div>
      </div>
    </main>
  );
}
