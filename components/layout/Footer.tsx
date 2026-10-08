import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS } from '@/lib/constants';
import FooterGiant from './FooterGiant';

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-off pt-[clamp(64px,8vw,96px)]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <div>
            <Link className="flex items-center gap-2.5" href="/" aria-label="TaxwiseIndia, back to top">
              <Image className="h-auto w-[38px]" src="/assets/tw-mark.png" alt="" width={326} height={256} />
              <Image className="h-auto w-[146px]" src="/assets/tw-wordmark-dark.png" alt="TaxwiseIndia" width={803} height={96} />
            </Link>
            <p className="mt-4 max-w-[22em] font-display text-[16px] font-semibold leading-[1.45] tracking-[-.01em] text-navy">Tax &amp; Compliance, Without the Chase.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3" aria-label="Footer">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 font-display text-[12px] font-bold uppercase leading-none tracking-[.14em] text-navy">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul className="m-0 grid gap-[11px] p-0">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-[15px] transition-colors hover:text-emerald-ink">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-line py-[22px] text-[14.5px] text-muted">
          <p className="m-0">© {new Date().getFullYear()} TaxwiseIndia. All rights reserved.</p>
          <p className="m-0">
            Developed and designed by{' '}
            <a href="https://theeyelevelstudio.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy transition-colors hover:text-emerald-ink">EyeLevel Growth Studio</a>
          </p>
        </div>
      </div>
      <FooterGiant />
    </footer>
  );
}
