import type { Metadata } from 'next';
import ServicesIndex from '@/components/services/ServicesIndex';

export const metadata: Metadata = {
  title: 'Services | TaxwiseIndia',
  description: 'Explore seven areas of business support, from registration and tax to accounting, compliance and brand protection.',
};

export default function ServicesPage() {
  return <ServicesIndex />;
}
