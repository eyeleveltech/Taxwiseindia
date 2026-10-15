'use client';

import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ui/ContactForm';
import { SERVICE_CATALOG, slugify } from '@/lib/services';
import { SERVICE_PRICING } from '@/lib/pricing-data';

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') ?? undefined;
  const item = searchParams.get('item') ?? undefined;
  const plan = searchParams.get('plan') ?? undefined;

  const category = SERVICE_CATALOG.find((s) => s.slug === service);
  const initialService = category ? category.slug : 'general';
  const itemName = category?.items.find((x) => slugify(x) === item);
  const initialItem = itemName ? slugify(itemName) : undefined;

  const itemPlans = initialItem ? SERVICE_PRICING[initialItem] : undefined;
  const matchedPlan = itemPlans?.find((p) => p.name.toLowerCase() === plan?.toLowerCase());
  const initialPlan = matchedPlan ? matchedPlan.name : undefined;

  const initialMessage = itemName ? `I'm interested in ${itemName}${initialPlan ? ` (${initialPlan} plan)` : ''}.` : '';

  return (
    <ContactForm
      key={`${initialService}-${initialItem ?? ''}-${initialPlan ?? ''}`}
      initialService={initialService}
      initialItem={initialItem}
      initialPlan={initialPlan}
      initialMessage={initialMessage}
    />
  );
}
