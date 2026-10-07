import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

/** Shared frame for the secondary pages (guides, updates, careers, legal). */
export function ContentPage({ eyebrow, title, lead, narrow = false, children }: {
  eyebrow: string;
  title: string;
  lead?: string;
  narrow?: boolean;
  children: ReactNode;
}) {
  return (
    <Reveal as="main" id="main" className="sec sec-off pb-[90px] pt-[clamp(100px,14vw,150px)]">
      <div className={narrow ? 'wrap max-w-[820px]' : 'wrap'}>
        <div className="mb-11 max-w-[640px]">
          <p className="eyebrow" data-intro><i className="dot"></i>{eyebrow}</p>
          <h1 className="h2 mt-4" data-intro>{title}</h1>
          {lead && <p className="lead" data-intro>{lead}</p>}
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">{children}</div>;
}

export function InfoCard({ meta, title, text, action }: { meta?: ReactNode; title: string; text: string; action?: ReactNode }) {
  return (
    <article className="flex flex-col rounded-3xl border border-line bg-white p-8 transition-[translate,border-color,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:border-mint-line hover:shadow-[0_30px_60px_-32px_rgba(7,26,43,.32)]" data-reveal>
      {meta && <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2 text-[13px] text-navy-2">{meta}</div>}
      <h2 className="m-0 text-[19px] leading-[1.35]">{title}</h2>
      <p className="mb-6 mt-3 flex-1 text-[15px] leading-relaxed text-navy-2">{text}</p>
      {action && <div className="mt-auto [&>.btn]:w-full">{action}</div>}
    </article>
  );
}

export function Tag({ children, tone = 'mint' }: { children: ReactNode; tone?: 'mint' | 'off' }) {
  return (
    <span className={`rounded-full px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[.04em] ${tone === 'mint' ? 'bg-mint-soft text-emerald-ink' : 'bg-off text-navy-2'}`}>
      {children}
    </span>
  );
}

const TONES = {
  navy: 'bg-navy text-white [&_h2]:text-white [&_p]:text-white/80',
  emerald: 'bg-emerald text-navy [&_p]:text-navy',
  off: 'border border-line bg-off [&_p]:text-navy-2',
};

export function CtaPanel({ tone = 'navy', title, text, children }: { tone?: keyof typeof TONES; title: string; text: string; children: ReactNode }) {
  return (
    <div className={`rounded-3xl p-9 text-center ${TONES[tone]}`} data-reveal>
      <h2 className="m-0 text-2xl">{title}</h2>
      <p className="mx-auto mb-5 mt-2 max-w-[40em] text-[15px]">{text}</p>
      {children}
    </div>
  );
}

/** Policy / legal pages: one white card of prose with a "back home" footer. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <ContentPage eyebrow="Legal Information" title={title} narrow>
      <p className="-mt-6 mb-9 text-sm text-navy-2" data-intro>Last updated: {updated}</p>
      <div className="rounded-3xl border border-line bg-white p-[clamp(28px,4vw,48px)] text-[15.5px] leading-[1.7] text-navy-2 [&_a]:font-semibold [&_a]:text-emerald-ink [&_h2]:mb-0 [&_h2]:mt-7 [&_h2]:text-xl [&_h2]:leading-snug [&_h2:first-child]:mt-0 [&_p]:my-3 [&_ul]:my-3 [&_ul]:pl-5" data-reveal>
        {children}
        <div className="mt-9 border-t border-line pt-6">
          <Link href="/" className="btn btn-ghost btn-sm">&larr; Back to Home</Link>
        </div>
      </div>
    </ContentPage>
  );
}
