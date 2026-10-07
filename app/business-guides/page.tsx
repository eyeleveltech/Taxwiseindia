import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';
import { CardGrid, ContentPage, CtaPanel, InfoCard, Tag } from '@/components/content/ContentPage';

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
    <ContentPage
      eyebrow="Founder Toolkit"
      title="Business & Incorporation Guides"
      lead="Everything entrepreneurs need to know about registering, structuring, and operating legally compliant businesses in India."
    >
      <CardGrid>
        {BIZ_GUIDES.map((g) => (
          <InfoCard
            key={g.title}
            meta={<Tag>{g.category}</Tag>}
            title={g.title}
            text={g.desc}
            action={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Discuss With Incorporation Advisor &rarr;</a>}
          />
        ))}
      </CardGrid>

      <CtaPanel tone="emerald" title="Ready to register your company?" text="We handle name reservation, DSC, MOA/AOA drafting, and MCA incorporation end-to-end.">
        <Link href="/services/business-registration" className="btn btn-navy btn-lg">Start Business Registration</Link>
      </CtaPanel>
    </ContentPage>
  );
}
