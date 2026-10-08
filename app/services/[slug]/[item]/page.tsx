import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceItemPage from '@/components/services/ServiceItemPage';
import { SERVICE_CATALOG, findService, slugify } from '@/lib/services';
import { SERVICE_DETAILS } from '@/lib/service-details';

type Params = Promise<{ slug: string; item: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CATALOG.flatMap((s) => s.items.map((x) => ({ slug: s.slug, item: slugify(x) })));
}

const resolve = async (params: Params) => {
  const { slug, item } = await params;
  const service = findService(slug);
  const name = service?.items.find((x) => slugify(x) === item);
  return service && name ? { service, name, detail: SERVICE_DETAILS[item] } : null;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = await resolve(params);
  if (!found) return {};
  return {
    title: `${found.name} | TaxwiseIndia`,
    description: found.detail?.summary ?? `${found.name}, part of ${found.service.name} at TaxwiseIndia. We keep you posted with every move.`,
  };
}

export default async function Page({ params }: { params: Params }) {
  const found = await resolve(params);
  if (!found) notFound();
  return <ServiceItemPage service={found.service} name={found.name} detail={found.detail} />;
}
