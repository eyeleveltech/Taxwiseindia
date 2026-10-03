import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import IconSprite from '@/components/layout/IconSprite';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/layout/ProgressBar';
import { siteMetadata, professionalServiceJsonLd, faqPageJsonLd } from '@/lib/metadata';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
      </head>
      <body id="top">
        <IconSprite />
        <a className="skip" href="#main">Skip to content</a>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
