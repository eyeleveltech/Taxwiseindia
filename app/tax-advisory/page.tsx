import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Strategic Tax Advisory & Planning | TaxwiseIndia',
  description: 'Proactive tax structuring, transaction tax advice, DTAA guidance, and dispute management by seasoned Chartered Accountants.',
};

export default function TaxAdvisoryPage() {
  const service = SERVICE_DETAILS['tax-advisory'];
  return <ServiceDetail service={service} />;
}
