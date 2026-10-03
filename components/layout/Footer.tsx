import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS } from '@/lib/constants';
import styles from './Footer.module.css';
import FooterGiant from './FooterGiant';

export default function Footer() {
  return (
    <footer className={styles.ftr}>
      <div className="wrap">
        <div className={styles.ftrTop}>
          <div className={styles.ftrBrand}>
            <Link className="brand" href="#top" aria-label="TaxwiseIndia — back to top">
              <Image className={styles.mk} src="/assets/tw-mark.png" alt="" width={326} height={256} />
              <Image className={styles.wm} src="/assets/tw-wordmark-dark.png" alt="TaxwiseIndia" width={803} height={96} />
            </Link>
            <p>Tax &amp; Compliance, Without the Chase.</p>
          </div>
          <nav className={styles.ftrCols} aria-label="Footer">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul>
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.ftrBot}>
          <p>© {new Date().getFullYear()} TaxwiseIndia. All rights reserved.</p>
        </div>
      </div>
      <FooterGiant />
    </footer>
  );
}
