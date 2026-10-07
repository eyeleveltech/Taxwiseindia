import { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';
import { LegalPage } from '@/components/content/ContentPage';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | TaxwiseIndia',
  description: 'Refund, cancellation, and fee terms for TaxwiseIndia professional services.',
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="October 2026">
      <h2>1. Satisfaction Commitment</h2>
      <p>
        At TaxwiseIndia, our operational motto is &quot;Without the Chase&quot;. We stand firmly behind the quality, timeliness, and diligence of our chartered accountants and compliance experts.
      </p>

      <h2>2. Cancellation Prior to Processing</h2>
      <p>
        If you decide to cancel an order before document verification and draft preparation have commenced, we offer a 100% refund of the professional fee. Notice of cancellation must be communicated in writing via email or WhatsApp within 24 hours of payment.
      </p>

      <h2>3. Non-Refundable Statutory Fees</h2>
      <p>
        Government filing fees, Digital Signature Certificate (DSC) generation costs, stamp duties, and challans once remitted to the government Treasury or certification authorities cannot be refunded, as these charges are non-retrievable from official portals.
      </p>

      <h2>4. Deficiencies in Service</h2>
      <p>
        In the rare event that an error is attributable directly to negligence by TaxwiseIndia, we will re-file the return or application at zero additional professional charge, or issue a prorated refund if rectification is impossible.
      </p>

      <h2>5. How to Request a Refund</h2>
      <p>
        To initiate a review, please email{' '}
        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>{' '}
        with your Service Reference Number and reason for cancellation. Approved refunds are credited to the source payment method within 5–7 banking days.
      </p>
    </LegalPage>
  );
}
