/**
 * What each of the 46 services covers — the content of every service page (/services/<category>/<service>).
 * Keyed by the item's slug (see `slugify` in lib/services.ts). A missing key simply gives a shorter page.
 *
 * DRAFT CONTENT: standard summaries of the usual Indian process and paperwork, written so the pages have
 * something real to show. TaxwiseIndia's team must verify every line (highlights, documents, timelines, forms) before
 * launch and may trim or replace freely. Add `price` when the client provides one.
 */
export interface ServiceDetail {
  summary: string;
  /** The hero's value points: what the customer gets and why it matters. */
  highlights?: string[];
  documents: string[];
  steps: string[];
  timeline?: string;
  price?: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  /* ---------- Business Registration ---------- */
  'private-limited-company': {
    summary: 'Incorporate a Private Limited Company with the Ministry of Corporate Affairs, the structure investors and lenders prefer, with limited liability for its shareholders.',
    highlights: ['Certificate of Incorporation with company PAN and TAN from one SPICe+ filing', 'Limited liability for shareholders, in the structure investors prefer', 'DSCs, director DINs, name approval and your MOA and AOA handled by us', 'Typically incorporated in 7-10 working days once your documents are in'],
    documents: ['PAN and Aadhaar of every director', 'Passport-size photographs', 'Identity proof (passport, voter ID or driving licence)', 'Recent address proof (bank statement or utility bill)', 'Registered office proof: rent agreement with NOC, or ownership proof, plus a utility bill'],
    steps: ['Digital Signature Certificates (DSC) for the directors', 'Name reservation through SPICe+ Part A', 'Drafting the MOA and AOA', 'Filing SPICe+ for incorporation with PAN and TAN', 'Certificate of Incorporation issued by the MCA'],
    timeline: '7-10 working days',
  },
  'llp-registration': {
    summary: 'A Limited Liability Partnership gives partners limited liability with the flexibility of a partnership and lighter compliance than a company.',
    highlights: ['Certificate of Incorporation and LLPIN, with no minimum capital needed', 'Limited liability for partners with lighter compliance than a company', 'LLP Agreement drafted and filed within 30 days, before late fees start', 'Typically registered in 10-15 working days, start to finish'],
    documents: ['PAN and Aadhaar of all partners', 'Identity and address proof of partners', 'Passport-size photographs', 'Registered office proof and a recent utility bill', 'LLP Agreement (drafted after incorporation)'],
    steps: ['DSC for the designated partners', 'Name reservation (RUN-LLP)', 'Incorporation filing (FiLLiP)', 'Certificate of Incorporation', 'LLP Agreement filed within 30 days'],
    timeline: '10-15 working days',
  },
  'opc-registration': {
    summary: 'A One Person Company lets a single founder run a company with limited liability; a nominee is named to take over if needed.',
    highlights: ['Full company status and limited liability, with just one founder', 'Certificate of Incorporation with PAN and TAN, and your nominee on record', 'No AGM to hold, and conversion to a private limited company as you grow', 'DSC, name approval, MOA, AOA and nominee consent (INC-3) handled by us'],
    documents: ['PAN and Aadhaar of the owner', 'Nominee consent (INC-3) with identity and address proof', 'Registered office proof and a recent utility bill', 'Passport-size photographs'],
    steps: ['DSC for the owner', 'Name reservation through SPICe+', 'Incorporation filing with MOA, AOA and nominee details', 'Certificate of Incorporation with PAN and TAN'],
    timeline: '7-10 working days',
  },
  'partnership-firm': {
    summary: 'Set up a partnership with a properly drafted deed and register it with the Registrar of Firms in your state.',
    highlights: ['A registered partnership deed setting out capital, profit share and roles', 'Registration gives the firm the right to sue third parties on its contracts', 'Deed drafting, stamp duty, notarisation and Registrar filing handled', 'Firm PAN and help opening the firm’s bank account'],
    documents: ['PAN and Aadhaar of all partners', 'Address proof of partners', 'Address proof of the firm', 'Passport-size photographs'],
    steps: ['Drafting the partnership deed', 'Stamp duty and notarisation', 'Registration with the Registrar of Firms', 'PAN for the firm and bank account opening'],
    timeline: '5-7 working days (varies by state)',
  },
  'sole-proprietorship': {
    summary: 'The simplest way to start: the business runs in your own name, with the registrations it needs to operate and bank.',
    highlights: ['Udyam and Shop & Establishment registrations in your business name', 'Business proof that banks accept when you open a current account', 'We pick only the registrations you need, GST included where it applies', 'Up and running in 3-5 working days, with the lightest compliance load'],
    documents: ['PAN and Aadhaar of the proprietor', 'Address proof of the business', 'Bank account details'],
    steps: ['Choosing the registrations the business needs', 'MSME / Udyam and Shop & Establishment registration', 'GST registration where applicable', 'Current account opening support'],
    timeline: '3-5 working days',
  },
  'startup-india': {
    summary: 'DPIIT recognition under Startup India for eligible companies and LLPs, opening the door to tax benefits, self-certification and funding schemes.',
    highlights: ['DPIIT recognition certificate for your eligible company or LLP', 'Opens the way to apply for the startup income tax holiday', 'Lower patent and trademark fees, with fast-tracked patent examination', 'We check eligibility and write up your innovation for the application'],
    documents: ['Certificate of Incorporation and PAN', 'Director and shareholder details', 'A brief on the product or innovation', 'Website or pitch deck, if available'],
    steps: ['Eligibility check (age, turnover and innovation criteria)', 'Preparing the business write-up', 'Application on the Startup India portal', 'DPIIT recognition certificate'],
    timeline: '2-3 weeks',
  },
  'section-8-company': {
    summary: 'A Section 8 Company is the company form for charitable, educational and social objects, where profits are applied to the cause rather than distributed.',
    highlights: ['Section 8 licence and Certificate of Incorporation for your non-profit', 'No minimum capital, and the name need not end in Limited', 'Credibility with donors and CSR funders, ready to seek tax exemption next', 'MOA, AOA, INC-14, INC-15 and three-year projections prepared for you'],
    documents: ['PAN, Aadhaar and address proof of directors', 'Registered office proof', 'Draft MOA and AOA', 'Projected income and expenditure for three years', 'Declarations (INC-14 and INC-15)'],
    steps: ['DSC and name reservation', 'Licence application under Section 8', 'Incorporation filing (SPICe+)', 'Certificate of Incorporation'],
    timeline: '15-20 working days',
  },

  /* ---------- GST & Tax ---------- */
  'gst-registration': {
    summary: 'A GSTIN for businesses that cross the threshold, sell across states or online, or want to claim input tax credit.',
    highlights: ['GSTIN and registration certificate, typically in 3-7 working days', 'Claim input tax credit and issue tax invoices your B2B buyers can claim', 'Lets you sell across states and on online marketplaces', 'Application, Aadhaar authentication and officer queries handled by us'],
    documents: ['PAN and Aadhaar of the proprietor, partners or directors', 'Business address proof (rent agreement with NOC, or ownership proof) and utility bill', 'Bank proof: cancelled cheque or statement', 'Passport-size photographs', 'Constitution proof (Certificate of Incorporation or partnership deed)', 'Authorisation letter for the signatory'],
    steps: ['Application on the GST portal', 'Aadhaar authentication', 'Clarifications, if the officer raises any', 'GSTIN and registration certificate'],
    timeline: '3-7 working days',
  },
  'gst-return-filing': {
    summary: 'Monthly or quarterly GSTR-1 and GSTR-3B, reconciled with your purchase data, plus the annual return.',
    highlights: ['GSTR-1 and GSTR-3B filed on time, every month or quarter', 'Purchases matched with GSTR-2B, so you claim the ITC you’re entitled to', 'Avoid the late fees and interest that build up after missed due dates', 'Annual return included, and every acknowledgment sent to you'],
    documents: ['Sales and purchase invoices', 'Credit and debit notes', 'E-way bills, where applicable', 'Bank statement for the period'],
    steps: ['You share the month’s invoices', 'Reconciliation with GSTR-2B', 'Return preparation and your review', 'Filing and tax payment, with the acknowledgment sent to you'],
    timeline: 'Monthly / quarterly',
  },
  'income-tax-filing': {
    summary: 'Income tax returns for individuals, firms and companies, computed, reviewed with you and e-filed on time.',
    highlights: ['Return prepared, reviewed with you and filed 2-3 working days after documents', 'Every eligible deduction claimed, under the regime that suits you best', 'Income checked against AIS and TDS records to avoid mismatch notices', 'Filed on time to avoid late fees and preserve losses to carry forward'],
    documents: ['PAN and Aadhaar', 'Form 16 / 16A and TDS details', 'Bank statements', 'Investment and deduction proofs', 'Capital gains statements, if any', 'Books of account for business income'],
    steps: ['Collecting documents and income details', 'Computation of income and tax', 'Review of the draft return with you', 'E-filing and e-verification'],
    timeline: '2-3 working days after documents',
  },
  'tds-return-filing': {
    summary: 'Quarterly TDS returns (24Q, 26Q, 27Q) with challan matching and Form 16 / 16A for the people you paid.',
    highlights: ['Quarterly TDS returns filed for salary, vendor and non-resident payments', 'Every challan matched, so deductions tie up with what you paid', 'TDS certificates for your payees, with the right credit in their records', 'Avoid late filing fees and default notices from TRACES'],
    documents: ['TAN', 'Deductee PAN and payment details', 'TDS challans'],
    steps: ['Collecting deduction data for the quarter', 'Challan matching', 'Return preparation and validation', 'Filing and generation of Form 16 / 16A'],
    timeline: 'Quarterly',
  },
  'gst-lut': {
    summary: 'A Letter of Undertaking lets exporters supply goods or services without paying IGST, filed once for each financial year.',
    highlights: ['Export goods and services without paying IGST upfront', 'Working capital stays free instead of waiting on IGST refunds', 'RFD-11 filed and ARN issued in 1-2 working days', 'Valid for the full financial year; we remind you before it needs renewal'],
    documents: ['GSTIN and login', 'Previous LUT, if any', 'Authorised signatory details'],
    steps: ['Form GST RFD-11 on the portal', 'Signing with DSC or EVC', 'ARN and acknowledgment'],
    timeline: '1-2 working days',
  },
  'gst-cancellation': {
    summary: 'Cancel a GST registration cleanly when a business closes or no longer needs it, including the final return.',
    highlights: ['Cancellation application filed and followed through to the officer’s order', 'ITC on remaining stock worked out and settled as the law requires', 'Final return (GSTR-10) filed, so notices and late fees don’t follow', 'Ends return obligations for a business that no longer needs GST'],
    documents: ['GSTIN', 'Reason and effective date of cancellation', 'Details of stock and input tax credit'],
    steps: ['Cancellation application (REG-16)', 'Officer approval', 'Final return (GSTR-10)'],
    timeline: '15-30 days',
  },
  'tax-advisory': {
    summary: 'Advice on tax planning, business structure, notices and assessments, in writing, with the options explained.',
    highlights: ['Written advice on your question, with each option and its tax impact', 'Plan structure, salary, investments and capital gains before year end', 'Replies and representation for income tax and GST notices', 'Make decisions knowing the tax cost upfront, not at filing time'],
    documents: ['Details of the matter', 'Relevant returns, notices or agreements'],
    steps: ['Consultation to understand the question', 'Review of documents and position', 'Written advice or representation'],
    timeline: 'As needed',
  },

  /* ---------- Compliance ---------- */
  'roc-annual-filing': {
    summary: 'The annual filings every company owes the Registrar of Companies: financial statements (AOC-4) and the annual return (MGT-7 / 7A).',
    highlights: ['AOC-4 and MGT-7 / 7A filed with the Registrar within their due dates', 'Board meeting, AGM paperwork and auditor coordination handled', 'Avoid the per-day additional fees charged on late annual forms', 'Keeps directors clear of disqualification and the company in good standing'],
    documents: ['Audited financial statements and auditor’s report', 'Board and AGM minutes', 'Shareholding details'],
    steps: ['Finalising the accounts', 'Board meeting and AGM', 'AOC-4 within 30 days of the AGM', 'MGT-7 / 7A within 60 days of the AGM'],
    timeline: 'Annual',
  },
  'company-compliance': {
    summary: 'Ongoing secretarial compliance handled through the year: board meetings, statutory registers, resolutions and event-based MCA filings.',
    highlights: ['A compliance calendar for your company, with reminders before each deadline', 'Board notices, resolutions and minutes drafted, registers kept up to date', 'ADT-1, DPT-3, MSME-1 and other MCA forms filed as they fall due', 'Records ready whenever an auditor, bank or investor asks'],
    documents: ['Company records and registers', 'Details of events during the year (appointments, loans, deposits)'],
    steps: ['A compliance calendar for your company', 'Drafting notices, resolutions and minutes', 'Filings as they fall due (ADT-1, DPT-3, MSME-1 and others)', 'Reminders before every deadline'],
    timeline: 'Ongoing',
  },
  'director-kyc': {
    summary: 'DIR-3 KYC is the yearly KYC every DIN holder must complete by 30 September to keep the DIN active.',
    highlights: ['DIR-3 KYC filed for each director, so every DIN stays active', 'Avoid DIN deactivation and the late fee to reactivate it', 'Directors keep signing and filing with the MCA without interruption', 'OTP check, certification and filing done in 1 working day'],
    documents: ['DIN', 'PAN and Aadhaar', 'Personal mobile number and email (for OTP)', 'DSC of the director'],
    steps: ['Verification of details by OTP', 'Form preparation and certification', 'Filing and acknowledgment'],
    timeline: '1 working day',
  },
  'company-changes': {
    summary: 'Changes in the company done properly: directors added or removed, name or objects changed, capital increased.',
    highlights: ['Directors added or removed, and name, objects or capital changed on record', 'Board and shareholder resolutions drafted to meet the Companies Act', 'DIR-12, MGT-14 and SH-7 filed on time, avoiding additional fees', 'MCA records that match reality, ready for audits and fundraising'],
    documents: ['Board and shareholder resolutions', 'Consent or resignation letters', 'Amended MOA / AOA, where applicable'],
    steps: ['Board meeting', 'Shareholder approval where required', 'MCA filings (DIR-12, MGT-14, SH-7 and others as applicable)', 'Approval and updated records'],
    timeline: '7-15 working days',
  },
  'registered-office-change': {
    summary: 'Shift the registered office within the city, within the state or to another state, with the right approvals and filings.',
    highlights: ['The right resolutions and filings for a local, in-state or inter-state move', 'INC-22 filed, with Regional Director approval handled where needed', 'Official notices reach your new office, keeping you compliant', 'About 7 days for a local shift, up to 2 months for a new state'],
    documents: ['New address proof and utility bill', 'NOC or rent agreement', 'Board and shareholder resolutions'],
    steps: ['Board resolution', 'INC-22 filing (with MGT-14 / INC-23 for a change of state)', 'Regional Director approval, where required'],
    timeline: '7 days to 2 months, depending on the type of shift',
  },
  'share-transfer': {
    summary: 'Transfer shares between shareholders with a valid deed, stamp duty and updated registers and certificates.',
    highlights: ['Transfer deed executed and stamped, with board approval drafted', 'Register of members and share certificates updated for the new owner', 'Clean ownership records for investors, buyers and due diligence', 'Typically completed in 7-10 working days'],
    documents: ['Share transfer deed (SH-4)', 'Share certificates', 'PAN of transferor and transferee', 'Board resolution'],
    steps: ['Executing the transfer deed', 'Stamp duty', 'Board approval', 'Register of members updated and new certificates issued'],
    timeline: '7-10 working days',
  },
  'company-closure': {
    summary: 'Close a dormant company or LLP by striking it off the register, with the accounts, affidavits and filings in order.',
    highlights: ['Strike-off application with affidavits and indemnity bond filed for you', 'Pending returns and liabilities settled first, as the ROC requires', 'No more annual filings or late fees for a company you no longer run', 'Typically closed in 3-6 months'],
    documents: ['Statement of accounts (not older than 30 days)', 'Indemnity bond and affidavits (STK-3, STK-4)', 'Board and shareholder resolutions', 'Proof of closed bank account', 'Pending returns filed'],
    steps: ['Settling liabilities and closing the bank account', 'Resolutions', 'Strike-off application (STK-2)', 'Publication and strike off by the ROC'],
    timeline: '3-6 months',
  },

  /* ---------- Trademark & Intellectual Property ---------- */
  'trademark-registration': {
    summary: 'Register your brand name or logo with the Trade Marks Registry so it is yours to use and protect.',
    highlights: ['Application filed in 1-2 days, and you can use ™ from then on', 'Exclusive rights to your brand across India for 10 years, renewable', 'The ® symbol and the legal footing to stop copycats once registered', 'Search, filing and Registry replies handled, with updates at every stage'],
    documents: ['Logo or wordmark', 'Applicant details (individual, firm or company)', 'MSME or Startup certificate, for the reduced fee', 'Power of attorney (TM-48)', 'User affidavit, if the mark is already in use'],
    steps: ['Trademark search', 'Application (TM-A); you can use ™ from here', 'Examination and reply, if any', 'Journal publication', 'Registration certificate (®)'],
    timeline: 'Filing in 1-2 days; registration takes 6-18 months',
  },
  'trademark-search': {
    summary: 'Check the IP India database for identical or similar marks before you file, with a clear risk view.',
    highlights: ['Search for identical and similar marks across the relevant classes', 'A written risk report with a clear recommendation on filing', 'Avoid investing in a name likely to face objection or opposition', 'Results in 1-2 working days'],
    documents: ['Proposed mark', 'Class of goods or services'],
    steps: ['Search across the relevant classes', 'Risk report', 'Recommendation on filing'],
    timeline: '1-2 working days',
  },
  'trademark-renewal': {
    summary: 'A registered trademark lasts ten years; renewal (TM-R) can be filed from six months before expiry.',
    highlights: ['Renewal (TM-R) filed, protecting your mark for another 10 years', 'Renew before expiry to avoid the late surcharge or losing the mark', 'Status check first, so the right owner and details are on record', 'Filed within 1-2 working days'],
    documents: ['Registration certificate or number', 'Applicant details', 'Power of attorney'],
    steps: ['Status check', 'Renewal application (TM-R)', 'Renewal certificate'],
    timeline: '1-2 working days to file',
  },
  'trademark-objection': {
    summary: 'A reply to the examination report, filed within the 30-day window, with the evidence that supports your mark.',
    highlights: ['Reply to the examination report filed within the 30-day window', 'Keeps your application from being treated as abandoned', 'Arguments, evidence of use and affidavits drafted for each objection', 'Representation at the hearing, if the Registry schedules one'],
    documents: ['Examination report', 'Evidence of use', 'Affidavits, where needed'],
    steps: ['Analysis of the objection', 'Drafting the reply', 'Filing', 'Hearing, if one is scheduled'],
    timeline: 'Reply filed within the 30-day window',
  },
  'trademark-rectification': {
    summary: 'Correct or cancel an entry in the trademark register, including marks wrongly registered or not in use.',
    highlights: ['Petition to correct or remove a wrong entry on the trademark register', 'Challenge marks that were wrongly registered or are not in genuine use', 'Clear a conflicting mark that stands in the way of your own brand', 'Case assessed and evidence gathered before anything is filed'],
    documents: ['Registration details', 'Grounds and supporting evidence'],
    steps: ['Assessment of the case', 'Petition filing', 'Proceedings before the Registry'],
    timeline: 'Case-dependent',
  },
  'copyright-registration': {
    summary: 'Register literary, artistic, musical and software works for proof of ownership.',
    highlights: ['Registration certificate that serves as prima facie proof of ownership', 'Covers literary, artistic and musical works and software code', 'Stronger footing to stop copying and claim damages in court', 'Application filed and followed through the 30-day objection period'],
    documents: ['Copy of the work', 'Applicant identity proof', 'NOC from the author, if different from the applicant', 'Power of attorney'],
    steps: ['Application filing', '30-day period for objections', 'Examination', 'Registration certificate'],
    timeline: '2-3 months',
  },
  'patent-registration': {
    summary: 'Protect an invention: patentability search, drafting the specification and filing with the Patent Office.',
    highlights: ['Patentability search before you invest in drafting and filing', 'A provisional filing secures your priority date, with 12 months to complete', 'Exclusive rights to make, use and sell your invention for up to 20 years', 'Specification drafted and filed in 1-2 weeks'],
    documents: ['Invention disclosure', 'Drawings, where applicable', 'Inventor and applicant details'],
    steps: ['Patentability search', 'Drafting the provisional or complete specification', 'Filing', 'Publication, examination request and grant'],
    timeline: 'Filing in 1-2 weeks',
  },

  /* ---------- Licenses & Registrations ---------- */
  'msme-udyam': {
    summary: 'Udyam registration for micro, small and medium enterprises, the gateway to MSME benefits and faster payment protection.',
    highlights: ['Udyam certificate with a permanent registration number, no renewal needed', 'Protection against delayed buyer payments for micro and small units', 'Better access to priority sector credit and government MSME schemes', 'Registered in 1 working day, with PAN and GST details validated'],
    documents: ['Aadhaar of the proprietor, partner or director', 'PAN', 'GSTIN, if applicable', 'Business details'],
    steps: ['Details and Aadhaar OTP', 'PAN and GST validation', 'Udyam certificate'],
    timeline: '1 working day',
  },
  'fssai': {
    summary: 'The food licence every food business needs: basic registration, state licence or central licence, depending on turnover.',
    highlights: ['The right registration or licence for your business: basic, state or central', 'A 14-digit FSSAI number for your labels, bills and premises', 'Needed to sell food legally, including on delivery and online platforms', 'Application, documents and any inspection handled with you'],
    documents: ['Photo identity proof', 'Business address proof', 'List of food categories', 'Layout plan and NOC, for state and central licences'],
    steps: ['Category assessment', 'Application', 'Inspection, if required', 'Licence issued'],
    timeline: '7-30 days',
  },
  'iec': {
    summary: 'The Import Export Code from DGFT, required before any business can import or export.',
    highlights: ['10-digit Import Export Code from DGFT in 1-3 working days', 'Needed to clear customs and to send or receive foreign trade payments', 'Valid for life, kept active with a simple annual update on DGFT', 'DGFT portal application and fee payment handled for you'],
    documents: ['PAN', 'Address proof', 'Bank certificate or cancelled cheque', 'Passport-size photograph'],
    steps: ['Application on the DGFT portal', 'Fee payment', 'IEC issued'],
    timeline: '1-3 working days',
  },
  'iso-registration': {
    summary: 'ISO certification (9001, 14001, 27001 and others) through an accredited body, with the documentation prepared for you.',
    highlights: ['ISO 9001, 14001, 27001 and more, certified through an accredited body', 'Helps you qualify for tenders and win larger buyers’ trust', 'Gap assessment and documentation prepared for you before the audit', 'Certified in 15-30 days, valid three years with yearly surveillance audits'],
    documents: ['Company profile', 'Process documents', 'Scope of certification'],
    steps: ['Gap assessment', 'Documentation', 'Audit', 'Certificate'],
    timeline: '15-30 days',
  },
  'professional-tax': {
    summary: 'Professional tax registration for employers and professionals in the states where it applies, with the periodic returns.',
    highlights: ['Registration in every state where your business owes professional tax', 'Employee deductions and periodic returns handled after registration', 'Avoid interest and penalties for late payment or missed registration', 'Certificate typically in 5-10 working days'],
    documents: ['PAN', 'Address proof', 'Certificate of Incorporation', 'Employee details'],
    steps: ['Application on the state portal', 'Registration certificate', 'Periodic returns'],
    timeline: '5-10 working days',
  },
  'shop-and-establishment': {
    summary: 'Registration with the state labour department for shops and offices, usually the first licence a new premises needs.',
    highlights: ['Registration certificate under your state’s Shops and Establishments Act', 'Often the first licence a new shop or office needs to operate lawfully', 'Accepted by banks as business proof for a current account', 'Online application and fee handled, certificate in 3-10 working days'],
    documents: ['PAN', 'Address proof and rent agreement', 'Employee details', 'Photograph of the premises'],
    steps: ['Application on the state portal', 'Fee payment', 'Certificate'],
    timeline: '3-10 working days',
  },
  'digital-signature': {
    summary: 'A Class 3 Digital Signature Certificate for MCA, GST, income tax and tender filings.',
    highlights: ['Class 3 DSC on a USB token, issued in 1-2 working days', 'Sign MCA, GST, income tax and tender filings online', 'Legally valid signature under the Information Technology Act, 2000', 'Paperless eKYC and video verification, with no office visit'],
    documents: ['PAN and Aadhaar', 'Passport-size photograph', 'Mobile number and email'],
    steps: ['Application', 'eKYC and video verification', 'USB token issued'],
    timeline: '1-2 working days',
  },

  /* ---------- Accounting & Payroll ---------- */
  'accounting': {
    summary: 'Monthly accounting in Tally, Zoho or QuickBooks, with reconciliations and reports you can read.',
    highlights: ['Monthly books in Tally, Zoho or QuickBooks, reconciled with your bank', 'Monthly reports that show profit, cash and dues at a glance', 'Accurate numbers for GST, income tax, loans and investor questions', 'Year-end finalisation handed to your auditor without a backlog'],
    documents: ['Bank statements', 'Sales and purchase invoices', 'Expense bills'],
    steps: ['Data collection', 'Posting and reconciliation', 'Monthly reports', 'Year-end finalisation'],
    timeline: 'Monthly',
  },
  'bookkeeping': {
    summary: 'Day-to-day recording of transactions, so the books are always current and audit-ready.',
    highlights: ['Every transaction recorded weekly or monthly, so books stay current', 'Bank reconciliation and tracking of receivables and payables', 'Know who owes you and whom you owe, at any time', 'Audit-ready records with no year-end catch-up'],
    documents: ['Bank statements', 'Invoices and bills', 'Receipts and payment records'],
    steps: ['Ledger entries', 'Bank reconciliation', 'Receivables and payables tracking', 'Periodic reports'],
    timeline: 'Weekly / monthly',
  },
  'payroll': {
    summary: 'Salary processing every month: payslips, TDS, PF and ESI, and the statutory payments and returns that go with them.',
    highlights: ['Salaries computed, payslips issued and a bank file ready each month', 'TDS, PF, ESI and professional tax deducted and paid on time', 'Avoid the interest and damages charged on late statutory payments', 'Investment declarations applied so each employee’s TDS is right'],
    documents: ['Employee master data', 'Attendance and leave', 'Salary structures', 'Investment declarations'],
    steps: ['Monthly inputs', 'Computation', 'Payslips and bank file', 'Statutory payments and returns'],
    timeline: 'Monthly',
  },
  'pf': {
    summary: 'EPFO registration for establishments with 20 or more employees, and the monthly contributions and returns after that.',
    highlights: ['EPFO registration and a UAN for each of your employees', 'Monthly ECR filed and contributions paid by the 15th of the next month', 'Avoid the interest and damages charged on late PF payments', 'Retirement savings and EDLI insurance that help you keep staff'],
    documents: ['PAN and Certificate of Incorporation', 'Address proof', 'Employee details', 'Bank details', 'DSC'],
    steps: ['Establishment registration', 'UAN generation for employees', 'Monthly ECR filing and payment'],
    timeline: 'Registration in 3-7 days; then monthly',
  },
  'esi': {
    summary: 'ESIC registration for establishments with 10 or more employees in notified areas, with contributions and returns handled.',
    highlights: ['ESIC registration and insurance numbers for eligible employees', 'Medical, sickness, maternity and employment injury cover for your staff', 'Monthly contributions computed and paid by the 15th of the next month', 'Work injury is covered under ESI, easing your liability as an employer'],
    documents: ['PAN and Certificate of Incorporation', 'Address proof', 'Employee details', 'Bank details'],
    steps: ['Establishment registration', 'Insurance numbers for employees', 'Monthly contributions', 'Half-yearly returns'],
    timeline: 'Registration in 3-7 days; then monthly',
  },
  'financial-statements': {
    summary: 'Profit and loss, balance sheet, cash flow and notes, prepared in the format the law requires and ready for the auditor.',
    highlights: ['Balance sheet, P&L, cash flow and notes in the format the law requires', 'Statements your auditor, bank and investors can rely on', 'We work with your auditor until the statements are signed', 'Ready in time for your AGM, ROC filings and income tax return'],
    documents: ['Books of account or trial balance', 'Bank statements', 'Fixed asset register'],
    steps: ['Review of the books', 'Preparation of statements', 'Coordination with the auditor', 'Final signed statements'],
    timeline: 'Annual',
  },

  /* ---------- Legal Services ---------- */
  'legal-consultation': {
    summary: 'A conversation with a legal expert about your business question, followed by a written summary of the way forward.',
    highlights: ['Speak with a legal expert the same or next working day', 'A written summary of your options and the next steps', 'Clarity before you sign, send a notice or escalate a dispute', 'Practical advice in plain language, focused on your business'],
    documents: ['A brief of the matter', 'Relevant documents'],
    steps: ['Booking', 'Consultation', 'Written summary'],
    timeline: 'Same or next working day',
  },
  'legal-agreements': {
    summary: 'Founders’, shareholders’, employment, vendor and non-disclosure agreements drafted for your situation.',
    highlights: ['Founders’, shareholders’, employment, vendor and NDA agreements drafted', 'Clear terms on ownership, payment, IP and exit that head off disputes', 'Review rounds until the draft matches your deal', 'Stamping or e-sign support, so the agreement is properly executed'],
    documents: ['Details of the parties', 'Commercial terms'],
    steps: ['Brief', 'Drafting', 'Review rounds', 'Execution support (stamping or e-sign)'],
    timeline: '3-5 working days',
  },
  'business-contracts': {
    summary: 'Service agreements, master service agreements, SLAs and franchise contracts that protect the deal you have made.',
    highlights: ['Service agreements, MSAs, SLAs and franchise contracts drafted for your deal', 'Scope, payment, liability and termination terms spelled out clearly', 'Dispute resolution clauses that save time and cost if things go wrong', 'Drafted with review rounds in 3-5 working days'],
    documents: ['Details of the parties', 'Scope, pricing and terms'],
    steps: ['Brief', 'Drafting', 'Review rounds', 'Execution support'],
    timeline: '3-5 working days',
  },
  'notices': {
    summary: 'Legal notices and replies: payment recovery, breach of contract, and responses to GST or income tax department notices.',
    highlights: ['Legal notices for payment recovery and breach of contract, drafted and sent', 'Replies to GST and income tax notices within the time allowed', 'A documented first step that can settle a matter before it reaches court', 'Drafted in 2-3 working days, with follow-up after dispatch'],
    documents: ['The notice received, or the facts of the matter', 'Supporting documents'],
    steps: ['Assessment', 'Drafting', 'Dispatch or filing', 'Follow-up'],
    timeline: '2-3 working days',
  },
  'legal-documentation': {
    summary: 'Resolutions, affidavits, declarations, powers of attorney and MOUs, drafted and ready to execute.',
    highlights: ['Resolutions, affidavits, declarations, powers of attorney and MOUs drafted', 'Wording and format that banks, registries and authorities expect', 'Fewer rejections and repeat visits over a badly worded document', 'Ready to sign in 2-4 working days, with execution support'],
    documents: ['Purpose of the document', 'Details of the parties'],
    steps: ['Requirement', 'Drafting', 'Execution support'],
    timeline: '2-4 working days',
  },
};

/** The hero's value points for each of the seven category pages (/services/<category>), keyed by category slug. */
export const CATEGORY_HIGHLIGHTS: Record<string, string[]> = {
  'business-registration': [
    'Company, LLP, OPC, firm or proprietorship: the right structure for your plans',
    'Limited liability for founders when you incorporate a company or LLP',
    'DSCs, name approval, drafting and every government filing handled by us',
    'Incorporation or registration certificate in hand, ready to open a bank account',
  ],
  'gst-tax': [
    'GST registration, returns and LUT, plus income tax and TDS filings',
    'Input tax credit reconciled every period, so you claim what you’re owed',
    'Returns filed by their due dates, avoiding late fees and interest',
    'Notices and tax questions answered in writing, with options explained',
  ],
  'compliance': [
    'ROC annual filings, director KYC and event-based forms filed on time',
    'Directors kept clear of disqualification, the company in good standing',
    'A compliance calendar for your company, and we keep you posted at every step',
    'Clean records ready for audits, investors and due diligence',
  ],
  'trademark-ip': [
    'Trademark search, filing, objections and renewals handled end to end',
    'Exclusive rights that let you stop copycats and build brand value',
    'Copyright and patent filings for your content, software and inventions',
    'Registry deadlines tracked, so replies and renewals go in on time',
  ],
  'licenses-registrations': [
    'MSME, FSSAI, IEC, ISO, professional tax and shop licences from one team',
    'We work out which licences your activity and location actually need',
    'Operate without the risk of fines or sealing over a missing licence',
    'Renewals and annual updates tracked, so licences don’t lapse unnoticed',
  ],
  'accounting-payroll': [
    'Books kept current in Tally, Zoho or QuickBooks and reconciled monthly',
    'Payroll, payslips, TDS, PF and ESI handled every month',
    'Statutory payments made on time, avoiding interest and damages',
    'Audit-ready financial statements and reports you can actually read',
  ],
  'legal-services': [
    'Agreements, business contracts, notices and legal documents drafted for you',
    'Clear terms that protect your deal and help prevent disputes',
    'Consult a legal expert and get a written way forward',
    'Stamping and e-sign support, so documents are ready to execute',
  ],
};
