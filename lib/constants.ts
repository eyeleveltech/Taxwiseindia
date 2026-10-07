import { SERVICE_CATALOG, servicePath } from './services';
export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface HowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface OwnerCard {
  icon: string;
  title: string;
  description: string;
}

export const WHATSAPP_URL = 'https://wa.me/910000000000';
export const SITE_URL = 'https://taxwiseindia.com';

export const CONTACT_INFO = {
  phone: '+91 (0) 00000 00000',
  email: 'hello@taxwiseindia.com',
  address: 'Commercial Tower, Sector 62, Noida, Uttar Pradesh, 201309',
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM IST',
  whatsapp: WHATSAPP_URL,
};

export const SERVICES: Service[] = [
  { slug: 'gst-services', title: 'GST Services', description: 'Registration, returns, compliance and support.', icon: 'i-gst', featured: true },
  { slug: 'income-tax', title: 'Income Tax', description: 'ITR filing and tax-related assistance.', icon: 'i-itr' },
  { slug: 'company-registration', title: 'Business Registration', description: 'Start and structure your business with confidence.', icon: 'i-biz' },
  { slug: 'accounting', title: 'Accounting', description: 'Accurate books and ongoing accounting support.', icon: 'i-acc' },
  { slug: 'msme-registration', title: 'MSME Services', description: 'Registration and business compliance support.', icon: 'i-msme' },
  { slug: 'business-compliance', title: 'Company Compliance', description: 'Ongoing statutory and regulatory requirements.', icon: 'i-shield' },
  { slug: 'payroll', title: 'Payroll', description: 'Salary and payroll-related support.', icon: 'i-payroll' },
  { slug: 'tax-advisory', title: 'Tax Advisory', description: 'Practical guidance for your tax and compliance needs.', icon: 'i-advice' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: 'fa1', question: 'What services does TaxwiseIndia provide?', answer: 'GST services, income tax, business registration, accounting, MSME services, company compliance, payroll and tax advisory — tax, accounting and compliance in one place.' },
  { id: 'fa2', question: 'How does the process work?', answer: 'Tell us what you need and our team handles the necessary process. We keep you informed about important progress and requirements, complete the process and keep you informed about what\'s next.' },
  { id: 'fa3', question: 'Will I receive updates after making payment?', answer: 'Yes. Once you\'ve trusted us with the work, staying informed is our responsibility — not yours. We keep you posted with every move.' },
  { id: 'fa4', question: 'How do I submit my documents?', answer: 'Once you tell us what you need, our team lets you know which documents are required and how to share them.' },
  { id: 'fa5', question: 'How long does my service take?', answer: 'It depends on the service. We tell you what to expect before we start and keep you updated at every step.' },
  { id: 'fa6', question: 'Can TaxwiseIndia handle ongoing compliance?', answer: 'Yes. We support ongoing statutory and regulatory requirements, along with tax and accounting, under one roof.' },
  { id: 'fa7', question: 'Can I speak with someone before purchasing?', answer: 'Yes. Choose Talk to an Expert and our team will help you find the right service.' },
];

export const HOW_STEPS: HowStep[] = [
  { number: '01', title: 'Tell Us What You Need', description: 'Share your requirement with our team.', icon: 'i-send' },
  { number: '02', title: 'We Get to Work', description: 'Our team handles the necessary process.', icon: 'i-work' },
  { number: '03', title: 'Stay Updated', description: 'We keep you informed about important progress and requirements.', icon: 'i-bell' },
  { number: '04', title: 'Get It Done', description: 'We complete the process and keep you informed about what\'s next.', icon: 'i-check' },
];

export const WHY_CARDS: WhyCard[] = [
  { icon: 'i-eye', title: 'You Know What\'s Happening', description: 'No wondering whether your work has started.' },
  { icon: 'i-bell', title: 'We Keep You Updated', description: 'Important developments don\'t have to be chased.' },
  { icon: 'i-layers', title: 'One Team. Multiple Needs.', description: 'Tax, accounting and compliance support under one roof.' },
];

export const OWNER_CARDS: OwnerCard[] = [
  { icon: 'i-rocket', title: 'STARTUPS', description: 'Get your business structure and compliance foundations right.' },
  { icon: 'i-store', title: 'SMALL BUSINESSES', description: 'Keep your tax, accounting and compliance under control.' },
  { icon: 'i-trend', title: 'GROWING BUSINESSES', description: 'Reduce administrative friction and stay focused on growth.' },
];

export const TRUST_ITEMS = [
  { text: '12+ Years Industry Experience', bold: '12+' },
  { text: 'Tax & Compliance Specialists', bold: null },
  { text: 'End-to-End Business Support', bold: null },
  { text: 'Proactive Customer Updates', bold: null },
];

export const FOOTER_LINKS = {
  services: SERVICE_CATALOG.map((s) => ({ href: servicePath(s), label: s.name })),
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};
