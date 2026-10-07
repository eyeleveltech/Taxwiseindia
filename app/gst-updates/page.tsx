import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';
import { CardGrid, ContentPage, CtaPanel, InfoCard, Tag } from '@/components/content/ContentPage';

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
    <ContentPage
      eyebrow="Statutory Feed"
      title="GST Notifications & Compliance Updates"
      lead="Stay ahead of shifting GST rules, e-invoice mandates, and portal changes without wading through complex gazette notifications."
    >
      <CardGrid>
        {UPDATES.map((u) => (
          <InfoCard
            key={u.title}
            meta={<><Tag>{u.tag}</Tag><span>{u.date}</span></>}
            title={u.title}
            text={u.summary}
            action={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Verify Your Business Impact &rarr;</a>}
          />
        ))}
      </CardGrid>

      <CtaPanel title="Need automated GST compliance for your company?" text="Let our specialists handle your monthly reconciliation and filings with zero friction.">
        <Link href="/services/gst-tax" className="btn btn-primary btn-lg">Explore GST Services</Link>
      </CtaPanel>
    </ContentPage>
  );
}
