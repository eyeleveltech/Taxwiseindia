import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Payroll Processing & PF/ESIC Compliance Services | TaxwiseIndia',
  description: 'Monthly salary calculation, automated payslips, EPF, ESIC, and PT return filings with zero delay.',
};

export default function PayrollPage() {
  const service = SERVICE_DETAILS['payroll'];
  return <ServiceDetail service={service} />;
}
