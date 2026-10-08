import type { Metadata } from 'next';
import { SITE_URL } from './constants';

export const siteMetadata: Metadata = {
  title: 'TaxwiseIndia | Tax & Compliance, Without the Chase',
  description:
    'GST, income tax, accounting and business compliance services in India. TaxwiseIndia handles the work and keeps you updated at every step.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'TaxwiseIndia | Tax & Compliance, Without the Chase',
    description:
      'From GST and income tax to accounting and business compliance, TaxwiseIndia handles the work and keeps you updated at every step.',
    images: [{ url: `${SITE_URL}/assets/tw-wordmark-dark.png` }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/assets/favicon.png',
    apple: '/assets/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#F6F8FA',
  },
};

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TaxwiseIndia',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/apple-touch-icon.png`,
  slogan: 'Tax & Compliance, Without the Chase.',
  description:
    'Tax, accounting and business compliance services in India: GST, income tax, business registration, accounting, MSME, company compliance, payroll and tax advisory.',
  areaServed: { '@type': 'Country', name: 'India' },
  knowsAbout: [
    'GST services',
    'Income tax filing',
    'Business registration',
    'Accounting',
    'MSME registration',
    'Company compliance',
    'Payroll',
    'Tax advisory',
  ],
};

export const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does TaxwiseIndia provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST services, income tax, business registration, accounting, MSME services, company compliance, payroll and tax advisory: tax, accounting and compliance in one place.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the process work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell us what you need and our team handles the necessary process. We keep you informed about important progress and requirements, complete the process and keep you informed about what\'s next.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I receive updates after making payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you\'ve trusted us with the work, staying informed is our responsibility, not yours. We keep you posted with every move.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I submit my documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once you tell us what you need, our team lets you know which documents are required and how to share them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does my service take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the service. We tell you what to expect before we start and keep you updated at every step.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can TaxwiseIndia handle ongoing compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We support ongoing statutory and regulatory requirements, along with tax and accounting, under one roof.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I speak with someone before purchasing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Choose Talk to an Expert and our team will help you find the right service.',
      },
    },
  ],
};
