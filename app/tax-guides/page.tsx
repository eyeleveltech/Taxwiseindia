import { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';
import { CardGrid, ContentPage, CtaPanel, InfoCard, Tag } from '@/components/content/ContentPage';

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
    <ContentPage
      eyebrow="Knowledge Base"
      title="Practical Tax Guides & Checklists"
      lead="Clear, actionable tax insights written by Chartered Accountants to help you navigate Indian tax regulations with total confidence."
    >
      <CardGrid>
        {GUIDES.map((g) => (
          <InfoCard
            key={g.title}
            meta={<><Tag>{g.category}</Tag><span>{g.readTime}</span></>}
            title={g.title}
            text={g.description}
            action={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Ask CA About This Topic &rarr;</a>}
          />
        ))}
      </CardGrid>

      <CtaPanel tone="emerald" title="Have a specific tax question not covered here?" text="Chat with our tax team directly on WhatsApp for prompt clarification.">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy btn-lg">Chat with a Tax Specialist</a>
      </CtaPanel>
    </ContentPage>
  );
}
