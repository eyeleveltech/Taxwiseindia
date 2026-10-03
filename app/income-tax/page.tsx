import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Income Tax Return (ITR) Filing & Tax Advisory | TaxwiseIndia',
  description: 'Expert-assisted ITR filing for salaried, businesses, professionals, and capital gains. Maximum deductions with zero errors.',
};

export default function IncomeTaxPage() {
  const service = SERVICE_DETAILS['income-tax'];
  return <ServiceDetail service={service} />;
}
