import Link from 'next/link';
import SvgIcon from '@/components/ui/SvgIcon';
import { cn } from '@/lib/utils';
import type { PricingPlan } from '@/lib/pricing-data';

export const inr = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
const PERIOD = { month: 'per month', quarter: 'per quarter', year: 'per year' } as const;
// whole class names, so Tailwind sees them
const COLS = ['', 'md:grid-cols-1 max-w-110 mx-auto', 'md:grid-cols-2 max-w-230 mx-auto', 'md:grid-cols-2 lg:grid-cols-3', 'md:grid-cols-2 xl:grid-cols-4'];

/** Every plan's button opens the contact form with the service, item and plan already filled in. */
export const planHref = (service: string, item: string, plan: PricingPlan) =>
  `/contact?service=${service}&item=${item}&plan=${encodeURIComponent(plan.name.toLowerCase())}#contact-form`;

/** "₹1,499 · 33% off" over "₹999 + Govt. Fee", then the billing period. */
export function PlanPrice({ plan, compact = false }: { plan: PricingPlan; compact?: boolean }) {
  const off = plan.originalPrice && plan.originalPrice > plan.price ? Math.round((1 - plan.price / plan.originalPrice) * 100) : 0;
  return (
    <div>
      {off > 0 && (
        <p className="m-0 flex items-center gap-2 text-[14px] leading-none">
          <s className="text-muted">{inr(plan.originalPrice!)}</s>
          <span className="rounded-full bg-mint-soft px-2 py-1 text-[11.5px] font-bold tracking-[.02em] text-emerald-ink">{off}% off</span>
        </p>
      )}
      <p className={cn('m-0 flex flex-wrap items-baseline gap-x-2', off > 0 && 'mt-2')}>
        <b className={cn('font-display font-bold leading-none tracking-[-.035em] text-navy', compact ? 'text-[28px]' : 'text-[clamp(34px,3vw,42px)]')}>{inr(plan.price)}</b>
        {plan.govtFee && <span className="text-[14px] font-semibold text-navy-2">+ Govt. Fee</span>}
      </p>
      <p className="mt-1.5 text-[13px] text-muted">{plan.period ? PERIOD[plan.period] : 'One-time professional fee'}</p>
    </div>
  );
}

function PlanCard({ plan, href }: { plan: PricingPlan; href: string }) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-[22px] border p-[clamp(22px,2.4vw,30px)]',
        plan.popular ? 'border-emerald bg-mint-soft shadow-[0_5px_0_var(--mint-line),0_30px_50px_-30px_rgba(10,124,82,.45)]' : 'border-line bg-white',
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.25 left-[clamp(22px,2.4vw,30px)] rounded-full bg-emerald px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[.1em] text-navy">Most popular</span>
      )}
      <h3 className="m-0 font-display text-[21px] font-bold leading-[1.2] tracking-[-.02em] text-navy">{plan.name}</h3>
      <p className="mt-2 min-h-[2.9em] text-[14px] leading-[1.45] text-navy-2"><b className="font-semibold text-navy">Choose this if:</b> {plan.bestFor}</p>

      <div className="mt-5 border-t border-line pt-5">
        <PlanPrice plan={plan} />
      </div>

      <Link href={href} className={cn('btn mt-6 w-full', plan.popular ? 'btn-primary' : 'btn-ghost')}>
        Get Started <SvgIcon id="i-arrow" className="i arr" />
      </Link>

      <p className="mb-0 mt-7 font-display text-[12.5px] font-bold uppercase tracking-[.12em] text-navy">What you&apos;ll get</p>
      <ul className="m-0 mt-3.5 grid list-none gap-3 p-0">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-[1.45] text-navy-2">
            <SvgIcon id="i-check" className="mt-0.5 size-4 flex-none text-emerald stroke-[2.6]" />{f}
          </li>
        ))}
      </ul>
    </article>
  );
}

/** One service's entry plan on its category page, with a way through to compare all of its plans. */
export function StartingPlanCard({ title, plan, href, plansHref, planCount }: { title: string; plan: PricingPlan; href: string; plansHref: string; planCount: number }) {
  return (
    <article className="flex flex-col rounded-[22px] border border-line bg-white p-6">
      <p className="m-0 font-display text-[12px] font-bold uppercase tracking-[.12em] text-emerald-ink">{plan.name} plan</p>
      <h3 className="mt-2 font-display text-[19px] font-bold leading-tight tracking-[-.02em] text-navy">{title}</h3>
      <p className="mt-1.5 text-[14px] leading-[1.45] text-navy-2">{plan.bestFor}</p>
      <div className="mt-4.5 border-t border-line pt-4.5">
        <PlanPrice plan={plan} compact />
      </div>
      <ul className="m-0 mt-4.5 grid list-none gap-2.5 p-0">
        {plan.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] leading-[1.45] text-navy-2">
            <SvgIcon id="i-check" className="mt-0.5 size-4 flex-none text-emerald stroke-[2.6]" />{f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2.5 pt-6 [&>.btn]:flex-[1_1_auto]">
        <Link href={href} className="btn btn-primary btn-sm">Get Started</Link>
        {planCount > 1 && <Link href={plansHref} className="btn btn-ghost btn-sm">Compare {planCount} plans</Link>}
      </div>
    </article>
  );
}

/** A service's plans, side by side. The parent page animates the cards in through `data-rise`. */
export function Pricing({ plans, service, item }: { plans: PricingPlan[]; service: string; item: string }) {
  return (
    <>
      <div className={cn('grid grid-cols-1 items-start gap-[clamp(18px,2vw,26px)]', COLS[Math.min(plans.length, 4)])} data-rise>
        {plans.map((plan) => <PlanCard key={plan.name} plan={plan} href={planHref(service, item, plan)} />)}
      </div>
      <p className="mx-auto mt-8 max-w-[52em] text-center text-[13.5px] leading-[1.6] text-muted">
        Prices are our professional fees. &ldquo;Govt. Fee&rdquo; is the statutory charge paid to the government, billed at actuals where the service requires one.
      </p>
    </>
  );
}
