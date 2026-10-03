import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'MSME & Udyam Registration Certificate | TaxwiseIndia',
  description: 'Obtain your official Udyam Registration Certificate in 24 hours. Avail government subsidies, loan benefits, and delayed payment protection.',
};

export default function MsmeRegistrationPage() {
  const service = SERVICE_DETAILS['msme-registration'];
  return <ServiceDetail service={service} />;
}
