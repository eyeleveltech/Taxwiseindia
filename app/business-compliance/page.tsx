import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Annual ROC Compliance & Corporate Secretarial | TaxwiseIndia',
  description: 'Annual ROC return filing (AOC-4, MGT-7), DIR-3 KYC, board resolutions, and statutory registers maintenance for Indian companies.',
};

export default function BusinessCompliancePage() {
  const service = SERVICE_DETAILS['business-compliance'];
  return <ServiceDetail service={service} />;
}
