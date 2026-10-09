import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './tailwind.css';
import IconSprite from '@/components/layout/IconSprite';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/layout/ProgressBar';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { siteMetadata, professionalServiceJsonLd } from '@/lib/metadata';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable} motion`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body id="top" suppressHydrationWarning>
        <IconSprite />
        <a className="skip" href="#main">Skip to content</a>
        <SmoothScroll />
        <ProgressBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
