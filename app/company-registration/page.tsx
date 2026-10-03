import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Company & Business Registration in India | TaxwiseIndia',
  description: 'Incorporate your Private Limited Company, LLP, or One Person Company with complete MCA approval, DIN, DSC, and corporate PAN/TAN.',
};

export default function CompanyRegistrationPage() {
  const service = SERVICE_DETAILS['company-registration'];
  return <ServiceDetail service={service} />;
}
