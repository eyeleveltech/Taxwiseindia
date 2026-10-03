import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'Cloud Bookkeeping & Accounting Services | TaxwiseIndia',
  description: 'Monthly bookkeeping, bank reconciliation, and audit-ready financial statements in Tally, Zoho Books, or QuickBooks.',
};

export default function AccountingPage() {
  const service = SERVICE_DETAILS['accounting'];
  return <ServiceDetail service={service} />;
}
