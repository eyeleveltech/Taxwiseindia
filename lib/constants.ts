export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface ServiceDetailData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  turnaround: string;
  deliverables: string[];
  documentsRequired: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
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

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'gst-services': {
    slug: 'gst-services',
    title: 'GST Registration & Return Filing Services',
    subtitle: 'Stay completely compliant with seamless monthly filings, input tax credit reconciliation, and proactive notices assistance.',
    badge: 'GST Compliance',
    icon: 'i-gst',
    turnaround: '2 – 3 Business Days',
    deliverables: [
      'New GST Registration with ARN and GST Certificate',
      'Timely GSTR-1, GSTR-3B and CMP-08 Monthly/Quarterly Filings',
      'Input Tax Credit (ITC) 2B Reconciliation to maximize tax savings',
      'Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C)',
      'Department Notice Resolution & Scrutiny Representation',
    ],
    documentsRequired: [
      'PAN Card and Aadhaar of Proprietor / Partners / Directors',
      'Electricity Bill / Rent Agreement / Property Tax receipt of premises',
      'Bank Account Statement / Cancelled Cheque with IFSC & Account Number',
      'Partnership Deed or Certificate of Incorporation & MOA/AOA',
      'Authorized Signatory Letter / Board Resolution',
    ],
    process: [
      { step: '01', title: 'Data & Invoices Submission', desc: 'Securely upload your sales and purchase records through WhatsApp or email.' },
      { step: '02', title: 'Reconciliation & Tax Calculation', desc: 'We compute precise net liabilities, match ITC with GSTR-2B, and send you the draft summary.' },
      { step: '03', title: 'Confirmation & Portal Filing', desc: 'Upon your approval, we file on the GST portal and share the official acknowledgement challan.' },
    ],
    faqs: [
      { q: 'Who is required to obtain GST registration in India?', a: 'Businesses selling goods with annual turnover exceeding Rs 40 Lakhs (Rs 20 Lakhs in special states) or service providers exceeding Rs 20 Lakhs must register. Mandatory registration also applies for inter-state sellers and e-commerce vendors.' },
      { q: 'What happens if I miss a monthly GST return deadline?', a: 'Late fees accumulate per day of delay (up to statutory ceilings), and interest at 18% p.a. applies on unpaid tax liabilities. Regular compliance protects your credit rating and avoids vendor payment blocks.' },
    ],
  },
  'income-tax': {
    slug: 'income-tax',
    title: 'Income Tax Return (ITR) Filing & Assessment',
    subtitle: 'Expert-assisted tax filing for salaried individuals, professionals, business owners, and capital gains investors.',
    badge: 'Direct Tax',
    icon: 'i-itr',
    turnaround: '24 – 48 Hours',
    deliverables: [
      'Accurate ITR Filing across ITR-1, ITR-2, ITR-3, and ITR-4 forms',
      'Comprehensive deductions optimization (Old vs New Tax Regime comparison)',
      'Capital Gains calculation from stocks, mutual funds, crypto, and real estate',
      'Foreign income reporting and double taxation relief (Schedule FA & FSI)',
      'Defective return rectification and response to Section 143(1) intimation notices',
    ],
    documentsRequired: [
      'PAN Card and Aadhaar Card',
      'Form 16 / Form 16A from employer and deductors',
      'Form 26AS and Annual Information Statement (AIS / TIS)',
      'Bank Account Statements for the entire financial year',
      'Capital gains trading reports from brokers (Zerodha, Groww, etc.)',
    ],
    process: [
      { step: '01', title: 'Document Upload & Review', desc: 'Share your Form 16, bank statements, and trading summaries.' },
      { step: '02', title: 'Regime Optimization & Computation', desc: 'Our tax experts calculate your tax liability under both regimes to maximize savings.' },
      { step: '03', title: 'Verification & ITR Acknowledgement', desc: 'We file your return, assist with e-Verification, and share your ITR-V receipt.' },
    ],
    faqs: [
      { q: 'Should I opt for the Old or New Tax Regime?', a: 'It depends on your deductions (HRA, Home Loan Interest, 80C, 80D). We compute both options side-by-side to guarantee you pay the minimum tax allowable by law.' },
      { q: 'Is it mandatory to report savings bank interest?', a: 'Yes, interest from savings accounts and fixed deposits is taxable under "Income from Other Sources", subject to Section 80TTA/80TTB deductions.' },
    ],
  },
  'company-registration': {
    slug: 'company-registration',
    title: 'Company & Business Registration in India',
    subtitle: 'Incorporate your Private Limited Company, LLP, OPC, or Partnership firm with end-to-end legal support.',
    badge: 'Incorporation',
    icon: 'i-biz',
    turnaround: '7 – 10 Business Days',
    deliverables: [
      'Name Approval via MCA RUN / SPICe+ Part A',
      'Director Identification Numbers (DIN) & Digital Signature Certificates (DSC)',
      'Drafting Memorandum (MOA) and Articles of Association (AOA)',
      'Certificate of Incorporation (COI) with PAN and TAN allotment',
      'Zero-fee Corporate Bank Account assistance and EPFO/ESIC registrations',
    ],
    documentsRequired: [
      'Self-attested PAN and Aadhaar of all Directors and Shareholders',
      'Proof of Identity: Voter ID / Passport / Driving License',
      'Bank statement or Utility Bill (under 2 months old) showing current address',
      'Registered office proof: Electricity bill + NOC from property owner',
      'Passport-sized photographs of all proposed directors',
    ],
    process: [
      { step: '01', title: 'Name Search & DSC Issuance', desc: 'We check MCA trademark uniqueness and issue Digital Signatures for all directors.' },
      { step: '02', title: 'SPICe+ Filing & MCA Review', desc: 'We prepare corporate bylaws (MOA/AOA) and submit the incorporation dossier to the Registrar.' },
      { step: '03', title: 'Incorporation Certificate Delivery', desc: 'You receive your Incorporation Certificate, Company PAN, TAN, and bank opening kit.' },
    ],
    faqs: [
      { q: 'What is the minimum capital required for a Private Limited Company?', a: 'There is no minimum paid-up capital requirement under Indian law. You can start with as little as Rs 1,000 authorized capital.' },
      { q: 'How many directors are required for a Private Limited Company?', a: 'A minimum of two directors and two shareholders are required (a director can also be a shareholder).' },
    ],
  },
  'accounting': {
    slug: 'accounting',
    title: 'Cloud Bookkeeping & Accounting Services',
    subtitle: 'Maintain clean, auditable books of accounts with monthly financial statements and bank reconciliations.',
    badge: 'Bookkeeping',
    icon: 'i-acc',
    turnaround: 'Ongoing Monthly / Quarterly',
    deliverables: [
      'Monthly bookkeeping in TallyPrime, Zoho Books, or QuickBooks',
      'Bank statement reconciliation and payment categorization',
      'Accounts receivable and payable tracking',
      'Monthly Profit & Loss, Balance Sheet, and Cash Flow Statements',
      'Year-end audit-ready financial schedules and ledger finalization',
    ],
    documentsRequired: [
      'Bank statements in Excel/PDF format',
      'Sales and purchase invoices with GST details',
      'Expense receipts and vendor bills',
      'Loan account statements and interest certificates',
    ],
    process: [
      { step: '01', title: 'Monthly Statements Handover', desc: 'Send your invoices, receipts, and bank statements at month end.' },
      { step: '02', title: 'Ledger Categorization & Balancing', desc: 'Our accountants record entries, match vendor balances, and flag discrepancy items.' },
      { step: '03', title: 'Executive Financial Reports', desc: 'You receive an easy-to-read financial summary highlighting profitability, margins, and cash health.' },
    ],
    faqs: [
      { q: 'Can you work with our existing accounting software?', a: 'Yes! We support Zoho Books, TallyPrime, QuickBooks, and Excel workflows seamlessly.' },
      { q: 'Is bookkeeping mandatory for small businesses?', a: 'Under the Companies Act and Section 44AA of Income Tax Act, maintaining proper books of accounts is mandatory for companies and specified turnover thresholds.' },
    ],
  },
  'msme-registration': {
    slug: 'msme-registration',
    title: 'MSME & Udyam Registration Services',
    subtitle: 'Unlock collateral-free government loans, subsidy benefits, patent discounts, and protection against delayed buyer payments.',
    badge: 'MSME Benefits',
    icon: 'i-msme',
    turnaround: '1 – 2 Business Days',
    deliverables: [
      'Official Udyam Registration Certificate with lifetime validity',
      'Eligible classification under Micro, Small, or Medium Enterprise category',
      'Eligibility advisory for credit guarantee schemes (CGTMSE)',
      'Subsidies on trademark and patent filings (up to 50% discount)',
      'Access to MSME Samadhaan delayed payment protection portal',
    ],
    documentsRequired: [
      'Aadhaar card of the Business Owner / Managing Partner / Director',
      'PAN Card of the Enterprise / Owner',
      'GSTIN (if GST is registered)',
      'Bank account details (Account number & IFSC code)',
      'Basic investment & plant/machinery details',
    ],
    process: [
      { step: '01', title: 'Enterprise Details Collection', desc: 'We gather your business activity type (manufacturing/services) and financial metrics.' },
      { step: '02', title: 'NIC Code Mapping', desc: 'We select the precise National Industry Classification codes to optimize your eligibility.' },
      { step: '03', title: 'Certificate Issuance', desc: 'We file on the government Udyam portal and deliver your official QR-verified certificate.' },
    ],
    faqs: [
      { q: 'Is Udyam registration renewable?', a: 'No, Udyam registration is a one-time process with lifetime validity, though turnover and investment updates occur automatically through linked ITR data.' },
      { q: 'Does Udyam registration protect me against late payments?', a: 'Yes! Under the MSMED Act, buyers must pay within 45 days. Delayed payments attract compounding interest at three times the RBI bank rate via MSME Samadhaan.' },
    ],
  },
  'business-compliance': {
    slug: 'business-compliance',
    title: 'Annual ROC Compliance & Corporate Governance',
    subtitle: 'Fulfill all Ministry of Corporate Affairs (MCA) filings, director KYC, and board resolutions without legal penalties.',
    badge: 'Corporate Law',
    icon: 'i-shield',
    turnaround: 'Annual & Event-Based',
    deliverables: [
      'Annual ROC Return filings (AOC-4 financial statements & MGT-7 annual return)',
      'Director KYC (DIR-3 KYC) for all DIN holders',
      'Annual General Meeting (AGM) notices and board resolutions drafting',
      'Statutory Registers and minutes book maintenance',
      'Change of registered office, director addition/resignation, and share capital alterations',
    ],
    documentsRequired: [
      'Audited Financial Statements (Balance Sheet & Profit/Loss)',
      'Director KYC details (Mobile number & email OTP verification)',
      'Active Digital Signatures (DSC) of at least one Director',
      'Auditor Appointment details (Form ADT-1)',
    ],
    process: [
      { step: '01', title: 'Compliance Calendar Audit', desc: 'We audit your company filings to detect pending dues or nearing deadlines.' },
      { step: '02', title: 'Secretarial Documentation', desc: 'We draft board minutes, AGM documents, and compile MCA e-forms.' },
      { step: '03', title: 'ROC Portal Filing & SRN Receipts', desc: 'We sign and submit forms on MCA V3, providing official Service Request Number challans.' },
    ],
    faqs: [
      { q: 'What is the penalty for missing annual ROC filings?', a: 'Penalties are severe: Rs 100 per day per form with no upper limit, along with risk of director disqualification and company strike-off.' },
      { q: 'Is DIR-3 KYC mandatory every year?', a: 'Yes. Every individual holding a DIN must complete annual KYC by September 30th to prevent their DIN from becoming deactivated.' },
    ],
  },
  'payroll': {
    slug: 'payroll',
    title: 'Payroll Processing & PF/ESI Compliance',
    subtitle: 'Accurate monthly salary calculations, statutory deductions, PF & ESIC filings, and professional payslip generation.',
    badge: 'Labor Compliance',
    icon: 'i-payroll',
    turnaround: 'Monthly Delivery',
    deliverables: [
      'Automated Monthly Payroll Calculation and Salary Slips Generation',
      'Provident Fund (EPF) and ESI monthly contribution computation and challan filing',
      'Professional Tax (PT) state-wise deduction and remittance',
      'TDS on Salary (Section 192) computation and Form 24Q quarterly filing',
      'Employee onboarding, CTC restructuring, and full & final settlement calculation',
    ],
    documentsRequired: [
      'Employee master data (Name, PAN, Aadhaar, UAN, Bank details)',
      'Monthly attendance, leave and overtime sheets',
      'Investment declaration proofs (for TDS deductions)',
      'Company EPF and ESIC establishment codes',
    ],
    process: [
      { step: '01', title: 'Monthly Attendance Input', desc: 'You share your team attendance and variable pay updates.' },
      { step: '02', title: 'Salary Computation & Challans', desc: 'We prepare the salary register, calculate PF/ESI/PT/TDS, and generate payment challans.' },
      { step: '03', title: 'Payslips & Portal Remittance', desc: 'We distribute password-protected PDF payslips and file returns on the EPFO/ESIC portals.' },
    ],
    faqs: [
      { q: 'When is EPF registration mandatory for a company?', a: 'EPF registration is mandatory when an establishment employs 20 or more persons, though voluntary registration is available for smaller teams.' },
      { q: 'What is the ceiling for ESI coverage?', a: 'Employees earning a monthly wage up to Rs 21,000 (Rs 25,000 for employees with disabilities) are covered under the ESI scheme.' },
    ],
  },
  'tax-advisory': {
    slug: 'tax-advisory',
    title: 'Strategic Tax Advisory & Wealth Planning',
    subtitle: 'Personalized guidance from experienced chartered accountants to structure business transactions and reduce tax exposure legally.',
    badge: 'Advisory',
    icon: 'i-advice',
    turnaround: 'On-Demand Consultations',
    deliverables: [
      'Business entity selection and group corporate structuring',
      'Transaction tax planning and GST rate classification advice',
      'Cross-border payments, DTAA benefits, and Form 15CA/15CB certificates',
      'Start-up Angel Tax and Section 80-IAC tax holiday consulting',
      'Tax dispute advisory, appeals, and notice representation',
    ],
    documentsRequired: [
      'Financial accounts and past tax filings for 3 assessment years',
      'Draft contracts, agreements, or term sheets for transaction evaluation',
      'Specific tax dilemma or query summary',
    ],
    process: [
      { step: '01', title: 'Initial Brief & Fact Gathering', desc: 'Submit your specific situation or strategic query for expert review.' },
      { step: '02', title: 'Detailed Legal & Tax Analysis', desc: 'Our senior specialists analyze statutes, relevant case law, and tax treaties.' },
      { step: '03', title: 'Consultation & Written Opinion', desc: 'We conduct a 1-on-1 strategy call and deliver a structured written tax opinion.' },
    ],
    faqs: [
      { q: 'Can you assist in resolving old tax scrutiny notices?', a: 'Yes. We represent taxpayers in faceless assessments, appeals before the CIT(A), and rectification petitions.' },
      { q: 'Do you offer virtual consultations?', a: 'Yes, all tax advisory consultations are conducted via Google Meet or Zoom, with follow-up written documentation.' },
    ],
  },
};


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
  services: [
    { href: '/gst-services', label: 'GST' },
    { href: '/income-tax', label: 'Income Tax' },
    { href: '/accounting', label: 'Accounting' },
    { href: '/company-registration', label: 'Company Registration' },
    { href: '/msme-registration', label: 'MSME' },
    { href: '/business-compliance', label: 'Compliance' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
  ],
  resources: [
    { href: '/tax-guides', label: 'Tax Guides' },
    { href: '/gst-updates', label: 'GST Updates' },
    { href: '/business-guides', label: 'Business Guides' },
    { href: '#faq', label: 'FAQs' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};
