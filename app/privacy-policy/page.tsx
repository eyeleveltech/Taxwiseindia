import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | TaxwiseIndia',
  description: 'Privacy Policy and data confidentiality commitments of TaxwiseIndia.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow"><i className="dot"></i>Legal Information</p>
        <h1 className="h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: 'var(--navy-2)', marginBottom: '36px' }}>Last updated: October 2026</p>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 48px)', lineHeight: 1.7, color: 'var(--navy-2)', fontSize: '15.5px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: 0 }}>1. Commitment to Data Confidentiality</h2>
          <p>
            At TaxwiseIndia (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we consider the privacy and confidentiality of your financial, corporate, and personal records of paramount importance. This Privacy Policy details how we collect, store, handle, and protect data provided by clients and visitors.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>2. Information We Collect</h2>
          <p>To perform tax, accounting, and regulatory compliance services on your behalf, we may collect:</p>
          <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
            <li><strong>Identity & KYC Details:</strong> PAN, Aadhaar, Passport, Voter ID, Director Identification Numbers (DIN).</li>
            <li><strong>Business & Financial Records:</strong> Bank statements, GST credentials, invoices, ledgers, and profit &amp; loss statements.</li>
            <li><strong>Corporate Documents:</strong> Certificates of Incorporation, MOA, AOA, and Board Resolutions.</li>
            <li><strong>Contact Details:</strong> Full name, authorized signatory designation, phone number, email address, and registered office address.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>3. How Your Information Is Used</h2>
          <p>
            Collected records are strictly utilized for preparing, computing, and submitting statutory filings to official Indian government portals (including the Goods and Services Tax Network [GSTN], the Income Tax Department portal, and the Ministry of Corporate Affairs [MCA]). We never sell, lease, or monetize client data under any circumstances.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>4. Security & Document Retention</h2>
          <p>
            All confidential files and credentials transmitted via email, WhatsApp, or secure portals are retained in encrypted environments accessible solely to chartered accountants and verified compliance associates assigned to your account. Records are maintained for the statutory duration required by Indian tax statutes.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>5. Contact Our Privacy Officer</h2>
          <p>
            For any queries concerning this policy or to request data modification or deletion, please email us at{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'var(--emerald-ink)', fontWeight: 600 }}>{CONTACT_INFO.email}</a>.
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
