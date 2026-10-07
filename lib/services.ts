/**
 * The service catalogue: seven services, each with the items it covers.
 * Items have no pages of their own — they are listed inside the service page.
 * `desc` is set only where the brief already has a line for that area.
 */
export interface ServiceCategory {
  slug: string;
  name: string;
  icon: string;
  desc: string | null;
  items: string[];
}

export const STEPS = ['YOU PAY', 'WE START', 'WE WORK', 'WE UPDATE', 'WE COMPLETE'] as const;

export const SERVICE_CATALOG: ServiceCategory[] = [
  {
    slug: 'business-registration', name: 'Business Registration', icon: 'i-biz',
    desc: 'Start and structure your business with confidence.',
    items: ['Private Limited Company', 'LLP Registration', 'OPC Registration', 'Partnership Firm', 'Sole Proprietorship', 'Startup India', 'Section 8 Company'],
  },
  {
    slug: 'gst-tax', name: 'GST & Tax', icon: 'i-gst',
    desc: 'Registration, returns, compliance and support.',
    items: ['GST Registration', 'GST Return Filing', 'Income Tax Filing', 'TDS Return Filing', 'GST LUT', 'GST Cancellation', 'Tax Advisory'],
  },
  {
    slug: 'compliance', name: 'Compliance', icon: 'i-shield',
    desc: 'Ongoing statutory and regulatory requirements.',
    items: ['ROC Annual Filing', 'Company Compliance', 'Director KYC', 'Company Changes', 'Registered Office Change', 'Share Transfer', 'Company Closure'],
  },
  {
    slug: 'trademark-ip', name: 'Trademark & Intellectual Property', icon: 'i-tm',
    desc: null,
    items: ['Trademark Registration', 'Trademark Search', 'Trademark Renewal', 'Trademark Objection', 'Trademark Rectification', 'Copyright Registration', 'Patent Registration'],
  },
  {
    slug: 'licenses-registrations', name: 'Licenses & Registrations', icon: 'i-license',
    desc: 'Registration and business compliance support.',
    items: ['MSME / Udyam', 'FSSAI', 'IEC', 'ISO Registration', 'Professional Tax', 'Shop & Establishment', 'Digital Signature'],
  },
  {
    slug: 'accounting-payroll', name: 'Accounting & Payroll', icon: 'i-acc',
    desc: 'Accurate books and ongoing accounting support.',
    items: ['Accounting', 'Bookkeeping', 'Payroll', 'PF', 'ESI', 'Financial Statements'],
  },
  {
    slug: 'legal-services', name: 'Legal Services', icon: 'i-legal',
    desc: null,
    items: ['Legal Consultation', 'Legal Agreements', 'Business Contracts', 'Notices', 'Legal Documentation'],
  },
];

export const pad = (n: number) => String(n).padStart(2, '0');

/** "MSME / Udyam" → "msme-udyam", used for the item anchors inside a service page. */
export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const findService = (slug: string) => SERVICE_CATALOG.find((s) => s.slug === slug);

export const servicePath = (service: ServiceCategory, item?: string) =>
  `/services/${service.slug}${item ? `#${slugify(item)}` : ''}`;

/** The homepage's eight service cards map onto the catalogue (and the old routes redirect the same way). */
export const LEGACY_SERVICE_LINKS: Record<string, string> = {
  'gst-services': '/services/gst-tax',
  'income-tax': '/services/gst-tax#income-tax-filing',
  'company-registration': '/services/business-registration',
  'accounting': '/services/accounting-payroll',
  'msme-registration': '/services/licenses-registrations#msme-udyam',
  'business-compliance': '/services/compliance',
  'payroll': '/services/accounting-payroll#payroll',
  'tax-advisory': '/services/gst-tax#tax-advisory',
};
