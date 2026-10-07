import { Metadata } from 'next';
import { LegalPage } from '@/components/content/ContentPage';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | TaxwiseIndia',
  description: 'Legal disclaimer and regulatory clarifications for TaxwiseIndia.',
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Legal Disclaimer" updated="October 2026">
      <h2>1. Nature of Website Content</h2>
      <p>
        The explanations, blog posts, calculators, and tax summaries published on TaxwiseIndia are provided solely for general educational and informational awareness. Nothing on this website constitutes formal legal, judicial, or certified audit opinions until a formalized client agreement is executed.
      </p>

      <h2>2. Independent Private Facilitator</h2>
      <p>
        TaxwiseIndia is an independent private consultancy firm and is neither affiliated with nor endorsed by the Government of India, the Central Board of Direct Taxes (CBDT), the Ministry of Corporate Affairs (MCA), or the Goods and Services Tax Network (GSTN). All government portal names, acronyms, and registered trademarks belong to their respective authorities.
      </p>

      <h2>3. Dynamic Nature of Indian Tax Law</h2>
      <p>
        Indian taxation, GST notifications, and corporate laws undergo frequent amendments, circulars, and judicial rulings. While we make every endeavor to maintain current information, taxpayers should consult our professionals directly for tailored evaluations regarding current provisions applicable to their specific facts.
      </p>
    </LegalPage>
  );
}
