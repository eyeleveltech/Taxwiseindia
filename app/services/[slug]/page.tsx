import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';
import { SERVICE_CATALOG, findService } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

// the seven services are prerendered; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CATALOG.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return {
    title: `${service.name} | TaxwiseIndia`,
    description: service.desc ?? `${service.name} — ${service.items.join(', ')}.`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
