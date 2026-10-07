import { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';
import { LegalPage } from '@/components/content/ContentPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | TaxwiseIndia',
  description: 'Privacy Policy and data confidentiality commitments of TaxwiseIndia.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <h2>1. Commitment to Data Confidentiality</h2>
      <p>
        At TaxwiseIndia (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we consider the privacy and confidentiality of your financial, corporate, and personal records of paramount importance. This Privacy Policy details how we collect, store, handle, and protect data provided by clients and visitors.
      </p>

      <h2>2. Information We Collect</h2>
      <p>To perform tax, accounting, and regulatory compliance services on your behalf, we may collect:</p>
      <ul>
        <li><strong>Identity &amp; KYC Details:</strong> PAN, Aadhaar, Passport, Voter ID, Director Identification Numbers (DIN).</li>
        <li><strong>Business &amp; Financial Records:</strong> Bank statements, GST credentials, invoices, ledgers, and profit &amp; loss statements.</li>
        <li><strong>Corporate Documents:</strong> Certificates of Incorporation, MOA, AOA, and Board Resolutions.</li>
        <li><strong>Contact Details:</strong> Full name, authorized signatory designation, phone number, email address, and registered office address.</li>
      </ul>

      <h2>3. How Your Information Is Used</h2>
      <p>
        Collected records are strictly utilized for preparing, computing, and submitting statutory filings to official Indian government portals (including the Goods and Services Tax Network [GSTN], the Income Tax Department portal, and the Ministry of Corporate Affairs [MCA]). We never sell, lease, or monetize client data under any circumstances.
      </p>

      <h2>4. Security &amp; Document Retention</h2>
      <p>
        All confidential files and credentials transmitted via email, WhatsApp, or secure portals are retained in encrypted environments accessible solely to chartered accountants and verified compliance associates assigned to your account. Records are maintained for the statutory duration required by Indian tax statutes.
      </p>

      <h2>5. Contact Our Privacy Officer</h2>
      <p>
        For any queries concerning this policy or to request data modification or deletion, please email us at{' '}
        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
      </p>
    </LegalPage>
  );
}
