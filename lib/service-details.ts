/**
 * What each of the 46 services covers — the content of every service page (/services/<category>/<service>).
 * Keyed by the item's slug (see `slugify` in lib/services.ts). A missing key simply gives a shorter page.
 *
 * DRAFT CONTENT: standard summaries of the usual Indian process and paperwork, written so the pages have
 * something real to show. TaxwiseIndia's team must verify every line (documents, timelines, forms) before
 * launch and may trim or replace freely. Add `price` when the client provides one.
 */
export interface ServiceDetail {
  summary: string;
  documents: string[];
  steps: string[];
  timeline?: string;
  price?: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  /* ---------- Business Registration ---------- */
  'private-limited-company': {
    summary: 'Incorporate a Private Limited Company with the Ministry of Corporate Affairs, the structure investors and lenders prefer, with limited liability for its shareholders.',
    documents: ['PAN and Aadhaar of every director', 'Passport-size photographs', 'Identity proof (passport, voter ID or driving licence)', 'Recent address proof (bank statement or utility bill)', 'Registered office proof: rent agreement with NOC, or ownership proof, plus a utility bill'],
    steps: ['Digital Signature Certificates (DSC) for the directors', 'Name reservation through SPICe+ Part A', 'Drafting the MOA and AOA', 'Filing SPICe+ for incorporation with PAN and TAN', 'Certificate of Incorporation issued by the MCA'],
    timeline: '7-10 working days',
  },
  'llp-registration': {
    summary: 'A Limited Liability Partnership gives partners limited liability with the flexibility of a partnership and lighter compliance than a company.',
    documents: ['PAN and Aadhaar of all partners', 'Identity and address proof of partners', 'Passport-size photographs', 'Registered office proof and a recent utility bill', 'LLP Agreement (drafted after incorporation)'],
    steps: ['DSC for the designated partners', 'Name reservation (RUN-LLP)', 'Incorporation filing (FiLLiP)', 'Certificate of Incorporation', 'LLP Agreement filed within 30 days'],
    timeline: '10-15 working days',
  },
  'opc-registration': {
    summary: 'A One Person Company lets a single founder run a company with limited liability; a nominee is named to take over if needed.',
    documents: ['PAN and Aadhaar of the owner', 'Nominee consent (INC-3) with identity and address proof', 'Registered office proof and a recent utility bill', 'Passport-size photographs'],
    steps: ['DSC for the owner', 'Name reservation through SPICe+', 'Incorporation filing with MOA, AOA and nominee details', 'Certificate of Incorporation with PAN and TAN'],
    timeline: '7-10 working days',
  },
  'partnership-firm': {
    summary: 'Set up a partnership with a properly drafted deed and register it with the Registrar of Firms in your state.',
    documents: ['PAN and Aadhaar of all partners', 'Address proof of partners', 'Address proof of the firm', 'Passport-size photographs'],
    steps: ['Drafting the partnership deed', 'Stamp duty and notarisation', 'Registration with the Registrar of Firms', 'PAN for the firm and bank account opening'],
    timeline: '5-7 working days (varies by state)',
  },
  'sole-proprietorship': {
    summary: 'The simplest way to start: the business runs in your own name, with the registrations it needs to operate and bank.',
    documents: ['PAN and Aadhaar of the proprietor', 'Address proof of the business', 'Bank account details'],
    steps: ['Choosing the registrations the business needs', 'MSME / Udyam and Shop & Establishment registration', 'GST registration where applicable', 'Current account opening support'],
    timeline: '3-5 working days',
  },
  'startup-india': {
    summary: 'DPIIT recognition under Startup India for eligible companies and LLPs, opening the door to tax benefits, self-certification and funding schemes.',
    documents: ['Certificate of Incorporation and PAN', 'Director and shareholder details', 'A brief on the product or innovation', 'Website or pitch deck, if available'],
    steps: ['Eligibility check (age, turnover and innovation criteria)', 'Preparing the business write-up', 'Application on the Startup India portal', 'DPIIT recognition certificate'],
    timeline: '2-3 weeks',
  },
  'section-8-company': {
    summary: 'A Section 8 Company is the company form for charitable, educational and social objects, where profits are applied to the cause rather than distributed.',
    documents: ['PAN, Aadhaar and address proof of directors', 'Registered office proof', 'Draft MOA and AOA', 'Projected income and expenditure for three years', 'Declarations (INC-14 and INC-15)'],
    steps: ['DSC and name reservation', 'Licence application under Section 8', 'Incorporation filing (SPICe+)', 'Certificate of Incorporation'],
    timeline: '15-20 working days',
  },

  /* ---------- GST & Tax ---------- */
  'gst-registration': {
    summary: 'A GSTIN for businesses that cross the threshold, sell across states or online, or want to claim input tax credit.',
    documents: ['PAN and Aadhaar of the proprietor, partners or directors', 'Business address proof (rent agreement with NOC, or ownership proof) and utility bill', 'Bank proof: cancelled cheque or statement', 'Passport-size photographs', 'Constitution proof (Certificate of Incorporation or partnership deed)', 'Authorisation letter for the signatory'],
    steps: ['Application on the GST portal', 'Aadhaar authentication', 'Clarifications, if the officer raises any', 'GSTIN and registration certificate'],
    timeline: '3-7 working days',
  },
  'gst-return-filing': {
    summary: 'Monthly or quarterly GSTR-1 and GSTR-3B, reconciled with your purchase data, plus the annual return.',
    documents: ['Sales and purchase invoices', 'Credit and debit notes', 'E-way bills, where applicable', 'Bank statement for the period'],
    steps: ['You share the month’s invoices', 'Reconciliation with GSTR-2B', 'Return preparation and your review', 'Filing and tax payment, with the acknowledgment sent to you'],
    timeline: 'Monthly / quarterly',
  },
  'income-tax-filing': {
    summary: 'Income tax returns for individuals, firms and companies, computed, reviewed with you and e-filed on time.',
    documents: ['PAN and Aadhaar', 'Form 16 / 16A and TDS details', 'Bank statements', 'Investment and deduction proofs', 'Capital gains statements, if any', 'Books of account for business income'],
    steps: ['Collecting documents and income details', 'Computation of income and tax', 'Review of the draft return with you', 'E-filing and e-verification'],
    timeline: '2-3 working days after documents',
  },
  'tds-return-filing': {
    summary: 'Quarterly TDS returns (24Q, 26Q, 27Q) with challan matching and Form 16 / 16A for the people you paid.',
    documents: ['TAN', 'Deductee PAN and payment details', 'TDS challans'],
    steps: ['Collecting deduction data for the quarter', 'Challan matching', 'Return preparation and validation', 'Filing and generation of Form 16 / 16A'],
    timeline: 'Quarterly',
  },
  'gst-lut': {
    summary: 'A Letter of Undertaking lets exporters supply goods or services without paying IGST, filed once for each financial year.',
    documents: ['GSTIN and login', 'Previous LUT, if any', 'Authorised signatory details'],
    steps: ['Form GST RFD-11 on the portal', 'Signing with DSC or EVC', 'ARN and acknowledgment'],
    timeline: '1-2 working days',
  },
  'gst-cancellation': {
    summary: 'Cancel a GST registration cleanly when a business closes or no longer needs it, including the final return.',
    documents: ['GSTIN', 'Reason and effective date of cancellation', 'Details of stock and input tax credit'],
    steps: ['Cancellation application (REG-16)', 'Officer approval', 'Final return (GSTR-10)'],
    timeline: '15-30 days',
  },
  'tax-advisory': {
    summary: 'Advice on tax planning, business structure, notices and assessments, in writing, with the options explained.',
    documents: ['Details of the matter', 'Relevant returns, notices or agreements'],
    steps: ['Consultation to understand the question', 'Review of documents and position', 'Written advice or representation'],
    timeline: 'As needed',
  },

  /* ---------- Compliance ---------- */
  'roc-annual-filing': {
    summary: 'The annual filings every company owes the Registrar of Companies: financial statements (AOC-4) and the annual return (MGT-7 / 7A).',
    documents: ['Audited financial statements and auditor’s report', 'Board and AGM minutes', 'Shareholding details'],
    steps: ['Finalising the accounts', 'Board meeting and AGM', 'AOC-4 within 30 days of the AGM', 'MGT-7 / 7A within 60 days of the AGM'],
    timeline: 'Annual',
  },
  'company-compliance': {
    summary: 'Ongoing secretarial compliance handled through the year: board meetings, statutory registers, resolutions and event-based MCA filings.',
    documents: ['Company records and registers', 'Details of events during the year (appointments, loans, deposits)'],
    steps: ['A compliance calendar for your company', 'Drafting notices, resolutions and minutes', 'Filings as they fall due (ADT-1, DPT-3, MSME-1 and others)', 'Reminders before every deadline'],
    timeline: 'Ongoing',
  },
  'director-kyc': {
    summary: 'DIR-3 KYC is the yearly KYC every DIN holder must complete by 30 September to keep the DIN active.',
    documents: ['DIN', 'PAN and Aadhaar', 'Personal mobile number and email (for OTP)', 'DSC of the director'],
    steps: ['Verification of details by OTP', 'Form preparation and certification', 'Filing and acknowledgment'],
    timeline: '1 working day',
  },
  'company-changes': {
    summary: 'Changes in the company done properly: directors added or removed, name or objects changed, capital increased.',
    documents: ['Board and shareholder resolutions', 'Consent or resignation letters', 'Amended MOA / AOA, where applicable'],
    steps: ['Board meeting', 'Shareholder approval where required', 'MCA filings (DIR-12, MGT-14, SH-7 and others as applicable)', 'Approval and updated records'],
    timeline: '7-15 working days',
  },
  'registered-office-change': {
    summary: 'Shift the registered office within the city, within the state or to another state, with the right approvals and filings.',
    documents: ['New address proof and utility bill', 'NOC or rent agreement', 'Board and shareholder resolutions'],
    steps: ['Board resolution', 'INC-22 filing (with MGT-14 / INC-23 for a change of state)', 'Regional Director approval, where required'],
    timeline: '7 days to 2 months, depending on the type of shift',
  },
  'share-transfer': {
    summary: 'Transfer shares between shareholders with a valid deed, stamp duty and updated registers and certificates.',
    documents: ['Share transfer deed (SH-4)', 'Share certificates', 'PAN of transferor and transferee', 'Board resolution'],
    steps: ['Executing the transfer deed', 'Stamp duty', 'Board approval', 'Register of members updated and new certificates issued'],
    timeline: '7-10 working days',
  },
  'company-closure': {
    summary: 'Close a dormant company or LLP by striking it off the register, with the accounts, affidavits and filings in order.',
    documents: ['Statement of accounts (not older than 30 days)', 'Indemnity bond and affidavits (STK-3, STK-4)', 'Board and shareholder resolutions', 'Proof of closed bank account', 'Pending returns filed'],
    steps: ['Settling liabilities and closing the bank account', 'Resolutions', 'Strike-off application (STK-2)', 'Publication and strike off by the ROC'],
    timeline: '3-6 months',
  },

  /* ---------- Trademark & Intellectual Property ---------- */
  'trademark-registration': {
    summary: 'Register your brand name or logo with the Trade Marks Registry so it is yours to use and protect.',
    documents: ['Logo or wordmark', 'Applicant details (individual, firm or company)', 'MSME or Startup certificate, for the reduced fee', 'Power of attorney (TM-48)', 'User affidavit, if the mark is already in use'],
    steps: ['Trademark search', 'Application (TM-A); you can use ™ from here', 'Examination and reply, if any', 'Journal publication', 'Registration certificate (®)'],
    timeline: 'Filing in 1-2 days; registration takes 6-18 months',
  },
  'trademark-search': {
    summary: 'Check the IP India database for identical or similar marks before you file, with a clear risk view.',
    documents: ['Proposed mark', 'Class of goods or services'],
    steps: ['Search across the relevant classes', 'Risk report', 'Recommendation on filing'],
    timeline: '1-2 working days',
  },
  'trademark-renewal': {
    summary: 'A registered trademark lasts ten years; renewal (TM-R) can be filed from six months before expiry.',
    documents: ['Registration certificate or number', 'Applicant details', 'Power of attorney'],
    steps: ['Status check', 'Renewal application (TM-R)', 'Renewal certificate'],
    timeline: '1-2 working days to file',
  },
  'trademark-objection': {
    summary: 'A reply to the examination report, filed within the 30-day window, with the evidence that supports your mark.',
    documents: ['Examination report', 'Evidence of use', 'Affidavits, where needed'],
    steps: ['Analysis of the objection', 'Drafting the reply', 'Filing', 'Hearing, if one is scheduled'],
    timeline: 'Reply filed within the 30-day window',
  },
  'trademark-rectification': {
    summary: 'Correct or cancel an entry in the trademark register, including marks wrongly registered or not in use.',
    documents: ['Registration details', 'Grounds and supporting evidence'],
    steps: ['Assessment of the case', 'Petition filing', 'Proceedings before the Registry'],
    timeline: 'Case-dependent',
  },
  'copyright-registration': {
    summary: 'Register literary, artistic, musical and software works for proof of ownership.',
    documents: ['Copy of the work', 'Applicant identity proof', 'NOC from the author, if different from the applicant', 'Power of attorney'],
    steps: ['Application filing', '30-day period for objections', 'Examination', 'Registration certificate'],
    timeline: '2-3 months',
  },
  'patent-registration': {
    summary: 'Protect an invention: patentability search, drafting the specification and filing with the Patent Office.',
    documents: ['Invention disclosure', 'Drawings, where applicable', 'Inventor and applicant details'],
    steps: ['Patentability search', 'Drafting the provisional or complete specification', 'Filing', 'Publication, examination request and grant'],
    timeline: 'Filing in 1-2 weeks',
  },

  /* ---------- Licenses & Registrations ---------- */
  'msme-udyam': {
    summary: 'Udyam registration for micro, small and medium enterprises, the gateway to MSME benefits and faster payment protection.',
    documents: ['Aadhaar of the proprietor, partner or director', 'PAN', 'GSTIN, if applicable', 'Business details'],
    steps: ['Details and Aadhaar OTP', 'PAN and GST validation', 'Udyam certificate'],
    timeline: '1 working day',
  },
  'fssai': {
    summary: 'The food licence every food business needs: basic registration, state licence or central licence, depending on turnover.',
    documents: ['Photo identity proof', 'Business address proof', 'List of food categories', 'Layout plan and NOC, for state and central licences'],
    steps: ['Category assessment', 'Application', 'Inspection, if required', 'Licence issued'],
    timeline: '7-30 days',
  },
  'iec': {
    summary: 'The Import Export Code from DGFT, required before any business can import or export.',
    documents: ['PAN', 'Address proof', 'Bank certificate or cancelled cheque', 'Passport-size photograph'],
    steps: ['Application on the DGFT portal', 'Fee payment', 'IEC issued'],
    timeline: '1-3 working days',
  },
  'iso-registration': {
    summary: 'ISO certification (9001, 14001, 27001 and others) through an accredited body, with the documentation prepared for you.',
    documents: ['Company profile', 'Process documents', 'Scope of certification'],
    steps: ['Gap assessment', 'Documentation', 'Audit', 'Certificate'],
    timeline: '15-30 days',
  },
  'professional-tax': {
    summary: 'Professional tax registration for employers and professionals in the states where it applies, with the periodic returns.',
    documents: ['PAN', 'Address proof', 'Certificate of Incorporation', 'Employee details'],
    steps: ['Application on the state portal', 'Registration certificate', 'Periodic returns'],
    timeline: '5-10 working days',
  },
  'shop-establishment': {
    summary: 'Registration with the state labour department for shops and offices, usually the first licence a new premises needs.',
    documents: ['PAN', 'Address proof and rent agreement', 'Employee details', 'Photograph of the premises'],
    steps: ['Application on the state portal', 'Fee payment', 'Certificate'],
    timeline: '3-10 working days',
  },
  'digital-signature': {
    summary: 'A Class 3 Digital Signature Certificate for MCA, GST, income tax and tender filings.',
    documents: ['PAN and Aadhaar', 'Passport-size photograph', 'Mobile number and email'],
    steps: ['Application', 'eKYC and video verification', 'USB token issued'],
    timeline: '1-2 working days',
  },

  /* ---------- Accounting & Payroll ---------- */
  'accounting': {
    summary: 'Monthly accounting in Tally, Zoho or QuickBooks, with reconciliations and reports you can read.',
    documents: ['Bank statements', 'Sales and purchase invoices', 'Expense bills'],
    steps: ['Data collection', 'Posting and reconciliation', 'Monthly reports', 'Year-end finalisation'],
    timeline: 'Monthly',
  },
  'bookkeeping': {
    summary: 'Day-to-day recording of transactions, so the books are always current and audit-ready.',
    documents: ['Bank statements', 'Invoices and bills', 'Receipts and payment records'],
    steps: ['Ledger entries', 'Bank reconciliation', 'Receivables and payables tracking', 'Periodic reports'],
    timeline: 'Weekly / monthly',
  },
  'payroll': {
    summary: 'Salary processing every month: payslips, TDS, PF and ESI, and the statutory payments and returns that go with them.',
    documents: ['Employee master data', 'Attendance and leave', 'Salary structures', 'Investment declarations'],
    steps: ['Monthly inputs', 'Computation', 'Payslips and bank file', 'Statutory payments and returns'],
    timeline: 'Monthly',
  },
  'pf': {
    summary: 'EPFO registration for establishments with 20 or more employees, and the monthly contributions and returns after that.',
    documents: ['PAN and Certificate of Incorporation', 'Address proof', 'Employee details', 'Bank details', 'DSC'],
    steps: ['Establishment registration', 'UAN generation for employees', 'Monthly ECR filing and payment'],
    timeline: 'Registration in 3-7 days; then monthly',
  },
  'esi': {
    summary: 'ESIC registration for establishments with 10 or more employees in notified areas, with contributions and returns handled.',
    documents: ['PAN and Certificate of Incorporation', 'Address proof', 'Employee details', 'Bank details'],
    steps: ['Establishment registration', 'Insurance numbers for employees', 'Monthly contributions', 'Half-yearly returns'],
    timeline: 'Registration in 3-7 days; then monthly',
  },
  'financial-statements': {
    summary: 'Profit and loss, balance sheet, cash flow and notes, prepared in the format the law requires and ready for the auditor.',
    documents: ['Books of account or trial balance', 'Bank statements', 'Fixed asset register'],
    steps: ['Review of the books', 'Preparation of statements', 'Coordination with the auditor', 'Final signed statements'],
    timeline: 'Annual',
  },

  /* ---------- Legal Services ---------- */
  'legal-consultation': {
    summary: 'A conversation with a legal expert about your business question, followed by a written summary of the way forward.',
    documents: ['A brief of the matter', 'Relevant documents'],
    steps: ['Booking', 'Consultation', 'Written summary'],
    timeline: 'Same or next working day',
  },
  'legal-agreements': {
    summary: 'Founders’, shareholders’, employment, vendor and non-disclosure agreements drafted for your situation.',
    documents: ['Details of the parties', 'Commercial terms'],
    steps: ['Brief', 'Drafting', 'Review rounds', 'Execution support (stamping or e-sign)'],
    timeline: '3-5 working days',
  },
  'business-contracts': {
    summary: 'Service agreements, master service agreements, SLAs and franchise contracts that protect the deal you have made.',
    documents: ['Details of the parties', 'Scope, pricing and terms'],
    steps: ['Brief', 'Drafting', 'Review rounds', 'Execution support'],
    timeline: '3-5 working days',
  },
  'notices': {
    summary: 'Legal notices and replies: payment recovery, breach of contract, and responses to GST or income tax department notices.',
    documents: ['The notice received, or the facts of the matter', 'Supporting documents'],
    steps: ['Assessment', 'Drafting', 'Dispatch or filing', 'Follow-up'],
    timeline: '2-3 working days',
  },
  'legal-documentation': {
    summary: 'Resolutions, affidavits, declarations, powers of attorney and MOUs, drafted and ready to execute.',
    documents: ['Purpose of the document', 'Details of the parties'],
    steps: ['Requirement', 'Drafting', 'Execution support'],
    timeline: '2-4 working days',
  },
};
