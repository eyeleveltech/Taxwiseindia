import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | TaxwiseIndia',
  description: 'Terms of Service and professional engagement conditions for TaxwiseIndia.',
};

export default function TermsPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow"><i className="dot"></i>Legal Information</p>
        <h1 className="h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ fontSize: '14px', color: 'var(--navy-2)', marginBottom: '36px' }}>Last updated: October 2026</p>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 48px)', lineHeight: 1.7, color: 'var(--navy-2)', fontSize: '15.5px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: 0 }}>1. Acceptance of Terms</h2>
          <p>
            By engaging TaxwiseIndia for advisory, accounting, GST, income tax, or company registration services, you agree to be bound by these Terms of Service. If you do not agree with any portion, please discontinue engagement immediately.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>2. Scope of Professional Engagement</h2>
          <p>
            TaxwiseIndia acts as a specialized facilitator and professional advisor. We assist in computing tax liabilities, preparing corporate secretarial documents, and filing returns on government portals using client-provided data. Final assessment orders and approvals remain within the statutory authority of respective Indian government bodies (GSTN, CBDT, MCA).
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>3. Client Responsibility & Accuracy of Data</h2>
          <p>
            The client warrants that all documents, invoices, bank statements, and turnover details submitted are truthful, authentic, and complete. TaxwiseIndia is not liable for penalties, scrutiny, or interest arising from concealed income, falsified invoices, or undisclosed bank accounts provided by the client.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>4. Payment Terms & Government Fees</h2>
          <p>
            Professional fees must be settled according to the milestone schedule agreed upon before initiation. Statutory government fees, stamp duties, and late challans levied by authorities are payable directly by the client or reimbursed at actuals.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>5. Limitation of Liability</h2>
          <p>
            In no event shall TaxwiseIndia or its associates be liable for indirect, incidental, or consequential damages resulting from technical downtime of government portals (e.g. GSTN or MCA V3 servers) beyond our reasonable control.
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
