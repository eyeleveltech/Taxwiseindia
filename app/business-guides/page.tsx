import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Business Guides & Incorporation Roadmaps | TaxwiseIndia',
  description: 'Startup guides, corporate structuring manuals, MSME benefits, and compliance checklists for Indian founders.',
};

const BIZ_GUIDES = [
  {
    title: 'Private Limited Company vs LLP: Which Structure Is Right for Your Indian Startup?',
    category: 'Incorporation',
    desc: 'Compare tax rates, investor readiness, annual compliance burdens, audit requirements, and liability protection.',
  },
  {
    title: 'The First 90 Days After Incorporating: Essential ROC & Tax Checklist',
    category: 'Statutory Compliance',
    desc: 'Commencement of business (INC-20A), auditor appointment (ADT-1), opening bank account, and GST registration requirements.',
  },
  {
    title: 'How MSME Udyam Registration Protects Small Businesses Against 45-Day Payment Delays',
    category: 'MSME Growth',
    desc: 'Leverage Section 43B(h) of the Income Tax Act and the MSME Samadhaan portal to recover unpaid buyer dues with compounding interest.',
  },
  {
    title: 'Statutory Registers & Board Meetings: Maintaining MCA V3 Compliance for Founders',
    category: 'Corporate Governance',
    desc: 'A founder-friendly guide on minute books, pass-through resolutions, DIR-3 KYC, and preparing for your annual general meeting.',
  },
];

export default function BusinessGuidesPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Founder Toolkit</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>Business & Incorporation Guides</h1>
          <p className="lead">
            Everything entrepreneurs need to know about registering, structuring, and operating legally compliant businesses in India.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {BIZ_GUIDES.map((g, idx) => (
            <article key={idx} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--emerald-ink)', background: 'var(--mint-soft)', padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase' }}>
                  {g.category}
                </span>
              </div>
              <h2 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.35, margin: '0 0 12px' }}>
                {g.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>
                {g.desc}
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Discuss With Incorporation Advisor &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ background: 'var(--emerald)', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
            Ready to register your company?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--navy)', margin: '0 0 20px' }}>
            We handle name reservation, DSC, MOA/AOA drafting, and MCA incorporation end-to-end.
          </p>
          <Link href="/company-registration" className="btn btn-navy btn-lg">
            Start Business Registration
          </Link>
        </div>
      </div>
    </main>
  );
}
