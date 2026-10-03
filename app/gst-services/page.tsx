import { Metadata } from 'next';
import { SERVICE_DETAILS } from '@/lib/constants';
import ServiceDetail from '@/components/ui/ServiceDetail';

export const metadata: Metadata = {
  title: 'GST Registration & Return Filing Services | TaxwiseIndia',
  description: 'Expert-managed GST registration, monthly GSTR-1 & GSTR-3B filings, ITC reconciliation, and GST notice resolution.',
};

export default function GstServicesPage() {
  const service = SERVICE_DETAILS['gst-services'];
  return <ServiceDetail service={service} />;
}
