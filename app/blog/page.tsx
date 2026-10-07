import { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';
import { CardGrid, ContentPage, CtaPanel, InfoCard } from '@/components/content/ContentPage';

export const metadata: Metadata = {
  title: 'Blog & Tax Insights | TaxwiseIndia',
  description: 'Analysis and commentary on Indian taxation, corporate law amendments, and CFO insights for growing businesses.',
};

const POSTS = [
  {
    title: 'Why Most Startups Struggle with GST Input Credit and How to Fix It',
    date: '12 Oct 2026',
    author: 'TaxwiseIndia Editorial',
    snippet: 'Discover the most common causes of blocked ITC under Section 17(5), vendor reconciliation errors, and strategies to recover stuck credits.',
  },
  {
    title: 'The Hidden Costs of Procrastinating Annual ROC Filings (AOC-4 & MGT-7)',
    date: '28 Sep 2026',
    author: 'Corporate Advisory Team',
    snippet: 'With daily statutory penalties compounding relentlessly, here is how early financial finalization protects founders from personal director liability.',
  },
  {
    title: 'Navigating Cross-Border Software Payments and TDS Withholding under DTAA',
    date: '15 Sep 2026',
    author: 'International Tax Desk',
    snippet: 'A deep dive into Section 195, Equalisation Levy changes, and obtaining Form 15CA/15CB for overseas SaaS subscriptions and remittances.',
  },
];

export default function BlogPage() {
  return (
    <ContentPage
      eyebrow="Insights & Analysis"
      title="The TaxwiseIndia Blog"
      lead="Expert analysis, CFO best practices, and regulatory breakdowns tailored for Indian enterprises and entrepreneurs."
    >
      <CardGrid>
        {POSTS.map((p) => (
          <InfoCard
            key={p.title}
            meta={<><span>{p.author}</span><span>{p.date}</span></>}
            title={p.title}
            text={p.snippet}
            action={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Discuss This Topic on WhatsApp &rarr;</a>}
          />
        ))}
      </CardGrid>

      <CtaPanel title="Want tailored advice for your company?" text="Connect with our Chartered Accountants today.">
        <Link href="/contact#contact-form" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
      </CtaPanel>
    </ContentPage>
  );
}
