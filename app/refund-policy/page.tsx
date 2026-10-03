import { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | TaxwiseIndia',
  description: 'Refund, cancellation, and fee terms for TaxwiseIndia professional services.',
};

export default function RefundPolicyPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow"><i className="dot"></i>Legal Information</p>
        <h1 className="h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Refund & Cancellation Policy</h1>
        <p style={{ fontSize: '14px', color: 'var(--navy-2)', marginBottom: '36px' }}>Last updated: October 2026</p>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 48px)', lineHeight: 1.7, color: 'var(--navy-2)', fontSize: '15.5px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: 0 }}>1. Satisfaction Commitment</h2>
          <p>
            At TaxwiseIndia, our operational motto is &quot;Without the Chase&quot;. We stand firmly behind the quality, timeliness, and diligence of our chartered accountants and compliance experts.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>2. Cancellation Prior to Processing</h2>
          <p>
            If you decide to cancel an order before document verification and draft preparation have commenced, we offer a 100% refund of the professional fee. Notice of cancellation must be communicated in writing via email or WhatsApp within 24 hours of payment.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>3. Non-Refundable Statutory Fees</h2>
          <p>
            Government filing fees, Digital Signature Certificate (DSC) generation costs, stamp duties, and challans once remitted to the government Treasury or certification authorities cannot be refunded, as these charges are non-retrievable from official portals.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>4. Deficiencies in Service</h2>
          <p>
            In the rare event that an error is attributable directly to negligence by TaxwiseIndia, we will re-file the return or application at zero additional professional charge, or issue a prorated refund if rectification is impossible.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginTop: '28px' }}>5. How to Request a Refund</h2>
          <p>
            To initiate a review, please email{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'var(--emerald-ink)', fontWeight: 600 }}>{CONTACT_INFO.email}</a>{' '}
            with your Service Reference Number and reason for cancellation. Approved refunds are credited to the source payment method within 5–7 banking days.
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
