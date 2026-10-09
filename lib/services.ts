/**
 * The service catalogue: seven services, each with the items it covers.
 * Items have no pages of their own — they are listed inside the service page.
 */
export interface ServiceCategory {
  slug: string;
  name: string;
  shortName?: string;
  icon: string;
  tagline: string;
  description: string;
  overview: string[];
  whyItMatters: string;
  whatWeDo: string[];
  whoThisIsFor: string;
  items: string[];
}

export const STEPS = ['YOU PAY', 'WE START', 'WE WORK', 'WE UPDATE', 'WE COMPLETE'] as const;

export const SERVICE_CATALOG: ServiceCategory[] = [
  {
    "slug": "business-registration",
    "name": "Business Registration",
    "shortName": "Setup",
    "icon": "i-biz",
    "tagline": "Structuring corporate foundations with absolute statutory precision.",
    "description": "Establish your business with the right legal structure, from Private Limited Company and LLP incorporation to partnership and MSME registration. Get support with documentation and statutory filings to build a compliant foundation.",
    "overview": [
      "Establishing a commercial entity in India requires meticulous adherence to the Companies Act 2013 and the Limited Liability Partnership (LLP) Act 2008. The choice of corporate structure fundamentally dictates future capitalization avenues, statutory compliance burdens, and the extent of promoter liability. From integrating through the MCA21 portal to ensuring proper capitalization protocols, the formation phase is the bedrock of corporate governance.",
      "Beyond initial incorporation, structuring involves securing fundamental operational identities, including Udyam Registration under the MSME Development Act, 2006, which provides critical priority sector benefits and protection against delayed payments. For smaller ventures or individual promoters, navigating the Indian Partnership Act 1932 or establishing One Person Companies (OPC) requires a nuanced understanding of risk ring-fencing.",
      "Our approach moves beyond basic documentation. We provide strategic advisory on capital structuring, drafting of the Memorandum and Articles of Association (MOA & AOA), and ensuring seamless integration with the Registrar of Companies (ROC) to establish a bulletproof corporate entity ready for scaling."
    ],
    "whyItMatters": "Incorrect corporate structuring or flawed initial ROC filings can result in personal liability for promoters, restriction on foreign direct investment (FDI), and severe operational bottlenecks during fundraising or due diligence. An improperly structured entity often necessitates costly and complex restructuring, triggering capital gains events and regulatory penalties that could have been entirely avoided with proactive CA advisory.",
    "whatWeDo": [
      "Private Limited and Public Limited Company Incorporation (SPICe+ filings).",
      "Limited Liability Partnership (LLP) and traditional Partnership registration.",
      "One Person Company (OPC) structuring and incorporation.",
      "Drafting of bespoke Memorandum & Articles of Association (MOA & AOA).",
      "MSME/Udyam Registration and strategic advisory on associated benefits.",
      "Section 8 Company incorporation for non-profit operations."
    ],
    "whoThisIsFor": "This service is critical for startups requiring scalable, investor-ready structures, SMEs seeking to corporatize to limit liability and access formal credit, and large enterprises establishing specialized subsidiaries or joint ventures under the Indian regulatory framework.\n\n---",
    "items": [
      "Private Limited Company",
      "LLP Registration",
      "OPC Registration",
      "Partnership Firm",
      "Sole Proprietorship",
      "Startup India",
      "Section 8 Company"
    ]
  },
  {
    "slug": "gst-tax",
    "name": "GST & Tax",
    "shortName": "Tax",
    "icon": "i-gst",
    "tagline": "Rigorous tax optimization and unimpeachable regulatory compliance.",
    "description": "Ensure complete compliance with direct and indirect tax regimes. We manage your entire taxation lifecycle—from GST registration, return filings, and ITC reconciliation to corporate income tax planning and TDS computations.",
    "overview": [
      "The Indian taxation landscape is bifurcated into direct and indirect tax regimes, governed primarily by the Income Tax Act 1961 and the Central/State Goods and Services Tax (CGST/SGST/IGST) Acts 2017. Navigating this architecture requires a proactive strategy that aligns business operations with continuous legislative amendments, GST Council notifications, and evolving judicial precedents.",
      "Indirect taxation demands rigorous transaction mapping to optimize the Input Tax Credit (ITC) mechanism and prevent blockage of working capital. Direct taxation requires meticulous advance tax planning, accurate computation of TDS/TCS obligations, and strategic structuring of domestic and cross-border transactions to mitigate the risk of disallowances and scrutiny assessments.",
      "We manage the entire taxation lifecycle, from maintaining seamless synchronization with the GSTN portal for monthly compliance to executing comprehensive statutory audits under Section 44AB of the Income Tax Act. Our advisory shields businesses from penal interest and prosecution while optimizing the effective tax rate."
    ],
    "whyItMatters": "Non-compliance in GST or Income Tax invites severe repercussions, including the freezing of bank accounts, cancellation of GST registrations, compounding penal interest, and prosecution. Discrepancies in ITC claims or failure to adhere to TDS provisions not only erode profit margins through penalties but also trigger exhaustive, multi-year scrutiny assessments by revenue authorities.",
    "whatWeDo": [
      "Comprehensive GST Registration and monthly/annual return filings (GSTR-1, GSTR-3B, GSTR-9).",
      "Corporate Income Tax Return (ITR) preparation and filing.",
      "Tax Audit execution as per Section 44AB of the Income Tax Act.",
      "Input Tax Credit (ITC) reconciliation and optimization advisory.",
      "TDS/TCS computation, deduction, and quarterly return filings.",
      "Advance tax calculation, corporate tax planning, and scrutiny assessment representation."
    ],
    "whoThisIsFor": "Essential for startups needing to establish compliant foundational tax practices, SMEs requiring rigorous ITC reconciliation to protect working capital, and large enterprises demanding complex tax audits, transfer pricing advisory, and multi-state GST compliance architectures.\n\n---",
    "items": [
      "GST Registration",
      "GST Return Filing",
      "Income Tax Filing",
      "TDS Return Filing",
      "GST LUT",
      "GST Cancellation",
      "Tax Advisory"
    ]
  },
  {
    "slug": "compliance",
    "name": "Compliance",
    "shortName": "Compliance",
    "icon": "i-shield",
    "tagline": "Safeguarding corporate governance through relentless statutory adherence.",
    "description": "Safeguard your corporate governance with our comprehensive compliance management. We handle statutory MCA filings, secretarial audits, RBI reporting under FEMA, and labor law compliance, ensuring your business meets all regulatory obligations.",
    "overview": [
      "Corporate compliance in India extends far beyond simple tax returns; it encompasses a complex web of statutory obligations governed by the Ministry of Corporate Affairs (MCA), the Reserve Bank of India (RBI), and various labor ministries. The Companies Act 2013 mandates rigorous corporate governance standards, requiring the timely execution of board meetings, maintenance of statutory registers, and precise filing of annual returns and financial statements (e-forms AOC-4 and MGT-7).",
      "Cross-border transactions and foreign investments introduce the critical dimension of the Foreign Exchange Management Act (FEMA), requiring strict adherence to RBI reporting protocols (such as FLA returns and FC-GPR filings). Concurrently, labor law compliance ensures adherence to statutory benefits and workplace regulations, preventing disputes and protecting the organization's operational integrity.",
      "For entities aiming for capital markets or maintaining listed status, the compliance burden escalates exponentially under SEBI regulations. We act as an outsourced compliance mechanism, providing absolute certainty that every statutory deadline, board resolution, and regulatory filing is executed flawlessly, insulating the board of directors from regulatory friction."
    ],
    "whyItMatters": "Statutory non-compliance is increasingly treated as a strict liability offense. Directors face immediate disqualification, heavy compounding fines, and potential criminal liability for failing to file MCA returns or adhere to FEMA regulations. Furthermore, non-compliance fatally compromises corporate due diligence, immediately derailing mergers, acquisitions, or institutional fundraising efforts.",
    "whatWeDo": [
      "Annual MCA filings including Form AOC-4, MGT-7, and Director KYC (DIR-3).",
      "Secretarial audits and maintenance of statutory registers and minute books.",
      "FEMA compliance, including RBI reporting for FDI and ECB (FC-GPR, FLA).",
      "Structuring and documentation for Board of Directors and Annual General Meetings (AGM).",
      "Comprehensive labor law compliance and regulatory auditing.",
      "SEBI compliance advisory for listed entities and pre-IPO readiness."
    ],
    "whoThisIsFor": "Indispensable for funded startups navigating investor due diligence, SMEs aiming to maintain clean ROC records to avoid strike-offs, and large enterprises managing high-volume, multi-jurisdictional compliance requirements across MCA, RBI, and SEBI frameworks.\n\n---",
    "items": [
      "ROC Annual Filing",
      "Company Compliance",
      "Director KYC",
      "Company Changes",
      "Registered Office Change",
      "Share Transfer",
      "Company Closure"
    ]
  },
  {
    "slug": "trademark-ip",
    "name": "Trademark & Intellectual Property",
    "shortName": "IP & Trademark",
    "icon": "i-tm",
    "tagline": "Securing and defending your commercial identity and innovation capital.",
    "description": "Protect your brand and innovation with robust intellectual property registration. We manage the entire IP lifecycle, including comprehensive trademark clearance, copyright registration, patent advisory, and international filing strategies to secure your assets.",
    "overview": [
      "Intellectual Property (IP) constitutes the most valuable intangible asset on a modern balance sheet. The Indian IP framework, governed by the Trade Marks Act 1999, the Patent Act 1970, and the Copyright Act 1957, provides the legal mechanisms to monopolize and protect brand identity, technological innovation, and creative output. Registration with the Controller General of Patents, Designs and Trade Marks (CGPDTM) transforms ideas into legally enforceable corporate assets.",
      "Strategic trademarking requires meticulous pre-filing due diligence, navigating the complexities of the Vienna Classification for device marks, and classifying goods/services accurately to ensure comprehensive protection. Beyond domestic borders, expanding brand footprints necessitates international protection via the Madrid Protocol, a framework we utilize to secure global trademark rights efficiently.",
      "Our IP practice does not merely file applications; we architect robust IP portfolios. We handle the entire lifecycle—from clearance searches and initial filings before IPO India to responding to examination reports, prosecuting applications, and enforcing rights against infringement or passing off."
    ],
    "whyItMatters": "Operating without registered intellectual property exposes a business to catastrophic brand hijacking and costly passing-off litigation. Failure to secure trademarks or patents dilutes enterprise valuation during acquisitions and leaves the company defenseless against competitors who may register and legally enjoin the original creator from utilizing their own brand or technology.",
    "whatWeDo": [
      "Comprehensive trademark clearance searches and risk assessments.",
      "Trademark application filing and prosecution before the Trademark Registry.",
      "Copyright registration for software, literature, and creative works.",
      "Design and Patent registration advisory and execution.",
      "Responding to examination reports and representing clients in opposition hearings.",
      "International trademark filing strategy and execution via the Madrid Protocol."
    ],
    "whoThisIsFor": "Crucial for early-stage startups needing to lock down their brand and technology before product launch, SMEs expanding their market presence and product lines, and large enterprises requiring aggressive portfolio management, IP valuation, and cross-border brand enforcement.\n\n---",
    "items": [
      "Trademark Registration",
      "Trademark Search",
      "Trademark Renewal",
      "Trademark Objection",
      "Trademark Rectification",
      "Copyright Registration",
      "Patent Registration"
    ]
  },
  {
    "slug": "licenses-registrations",
    "name": "Licenses & Registrations",
    "shortName": "Licenses",
    "icon": "i-license",
    "tagline": "Establishing the statutory prerequisites for uninterrupted commercial operations.",
    "description": "Obtain the essential municipal, state, and central government licenses required for commercial operations. We navigate bureaucratic complexities to secure Shops & Establishments, IEC, FSSAI, and specialized permits tailored to your industry needs.",
    "overview": [
      "Lawful business operation in India is contingent upon acquiring a highly specific matrix of municipal, state, and central government licenses. This regulatory layer is dictated by the nature of the industry, the physical location of the establishment, and the scale of operations. The Shops & Establishments Act, administered at the state level, forms the foundational requirement for any commercial premise, regulating working conditions and employment terms.",
      "Sector-specific operations trigger specialized regulatory scrutiny. Food businesses must navigate the stringent standards of the FSSAI; international traders require an Import Export Code (IEC) from the DGFT; and manufacturing units often need BIS Certification to validate product quality and safety. Furthermore, employer obligations such as Professional Tax registration vary significantly across state jurisdictions.",
      "We untangle this bureaucratic complexity. By mapping a company's specific operational footprint against current statutory requirements, we ensure that every necessary license, from a local Drug License to national MSME/Udyam Registration, is procured and maintained, eliminating the risk of operational embargoes."
    ],
    "whyItMatters": "Operating without the mandatory licenses invites immediate operational disruption, including the sealing of premises by municipal authorities and the seizure of goods. Beyond operational halts, lacking appropriate registrations (like IEC or FSSAI) prevents participation in formal supply chains, disqualifies businesses from government tenders, and renders them ineligible for critical banking and credit facilities.",
    "whatWeDo": [
      "Procurement of state-specific Shops & Establishments Act registrations.",
      "Import Export Code (IEC) registration with the DGFT.",
      "FSSAI licensing (Basic, State, and Central) for food-related operations.",
      "Professional Tax (PT) employer and employee registrations across applicable states.",
      "Application and procurement of specialized permits (Drug Licenses, BIS Certifications).",
      "End-to-end management of license renewals and compliance audits."
    ],
    "whoThisIsFor": "Vital for startups establishing their initial operational footprint, SMEs diversifying into regulated sectors or cross-border trade, and large enterprises managing a pan-India network of branches, factories, and retail outlets requiring localized municipal compliance.\n\n---",
    "items": [
      "MSME / Udyam",
      "FSSAI",
      "IEC",
      "ISO Registration",
      "Professional Tax",
      "Shop & Establishment",
      "Digital Signature"
    ]
  },
  {
    "slug": "accounting-payroll",
    "name": "Accounting & Payroll",
    "shortName": "Accounting",
    "icon": "i-acc",
    "tagline": "Institutional-grade financial reporting and seamless workforce management.",
    "description": "Transition to institutional-grade financial reporting and seamless workforce management. We deliver full-stack bookkeeping, audit-ready financial statements, and end-to-end payroll processing—ensuring strict adherence to accounting standards and statutory labor remittances.",
    "overview": [
      "The integrity of a company's financial data is the cornerstone of its operational transparency and regulatory standing. The Companies Act 2013 mandates the maintenance of strict books of accounts reflecting a true and fair view of the state of affairs, adhering strictly to double-entry bookkeeping principles and the Accounting Standards (AS) or Indian Accounting Standards (Ind AS) prescribed by the ICAI.",
      "Parallel to financial accounting, the administration of payroll requires absolute precision and adherence to a web of labor legislations. This involves the accurate calculation of wages under the Payment of Wages Act and Minimum Wages Act, coupled with the rigorous management of statutory deductions and contributions to the Employees' Provident Fund Organization (EPFO), Employees' State Insurance Corporation (ESIC), and state-level Professional Tax authorities.",
      "We deploy robust, technology-driven accounting and payroll architectures. Our services transition businesses from ad-hoc bookkeeping to institutional-grade financial reporting, ensuring that trial balances are audit-ready, statutory remittances are timely, and management possesses the financial clarity required for strategic decision-making."
    ],
    "whyItMatters": "Deficient accounting practices obscure financial realities, masking cash flow crises and inviting devastating qualifications during statutory audits. Similarly, errors in payroll or delays in remitting EPF/ESI contributions result in severe penal damages, employee dissatisfaction, and significant legal liability under labor laws, potentially halting operations.",
    "whatWeDo": [
      "Full-stack bookkeeping in compliance with ICAI Accounting Standards / Ind AS.",
      "Preparation of audit-ready financial statements (Balance Sheet, P&L, Cash Flow).",
      "End-to-end payroll processing and salary structuring.",
      "Statutory compliance and remittances for EPF, ESIC, and Professional Tax.",
      "Monthly Management Information System (MIS) reporting and financial health analysis.",
      "Accounts payable and receivable management and reconciliation."
    ],
    "whoThisIsFor": "Essential for startups needing to present clean financials to venture capital investors, SMEs requiring reliable cash flow visibility and compliant payroll management, and large enterprises seeking to outsource high-volume transaction processing and complex statutory labor remittances.\n\n---",
    "items": [
      "Accounting",
      "Bookkeeping",
      "Payroll",
      "PF",
      "ESI",
      "Financial Statements"
    ]
  },
  {
    "slug": "legal-services",
    "name": "Legal Services",
    "shortName": "Legal",
    "icon": "i-legal",
    "tagline": "Architecting commercial agreements and mitigating systemic legal risk.",
    "description": "Architect strong commercial agreements and mitigate systemic legal risks. Our expertise spans drafting ironclad contracts, shareholder agreements, and HR policies, alongside providing comprehensive legal due diligence and specialized representation before corporate tribunals.",
    "overview": [
      "Commercial enterprise is fundamentally a network of contractual obligations governed by the Indian Contract Act 1872. The durability of a business is directly proportional to the strength of its legal scaffolding. From initial founder arrangements to complex vendor negotiations, precision in legal drafting is required to clearly delineate rights, obligations, and dispute resolution mechanisms, thereby preventing value destruction through litigation.",
      "Beyond standard contracts, corporate transactions such as Mergers and Acquisitions (M&A) or private equity fundraising demand exhaustive legal due diligence to uncover hidden liabilities. Furthermore, corporate disputes or insolvency scenarios necessitate highly specialized representation before the National Company Law Tribunal (NCLT) to protect shareholder value and ensure statutory remedies are pursued effectively.",
      "We provide comprehensive legal architecture for businesses. Our expertise covers the drafting of rigorous Memorandums of Understanding (MOUs), ironclad shareholder agreements, and precise employment contracts. We act as a proactive legal shield, identifying vulnerabilities in commercial arrangements before they crystallize into disputes."
    ],
    "whyItMatters": "Ambiguous contracts or poorly structured shareholder agreements invariably lead to protracted, capital-draining litigation and paralyzing boardroom deadlocks. Inadequate legal due diligence during acquisitions can saddle a company with unforeseen liabilities, while failing to issue proper legal notices or defend NCLT actions can result in corporate insolvency or the loss of critical assets.",
    "whatWeDo": [
      "Drafting and vetting of commercial contracts, MOUs, and Non-Disclosure Agreements (NDAs).",
      "Structuring of Founders' Agreements, Shareholder Agreements (SHA), and Term Sheets.",
      "Comprehensive legal due diligence for M&A, investments, and corporate restructuring.",
      "Drafting of ironclad employment contracts, ESOP policies, and HR manuals.",
      "Representation and advisory for proceedings before the NCLT and appellate tribunals.",
      "Issuance of legal notices and strategic dispute resolution advisory."
    ],
    "whoThisIsFor": "Critical for startups formalizing co-founder relationships and preparing for institutional funding, SMEs requiring robust vendor/client contracts to secure revenue, and large enterprises undertaking acquisitions, complex restructuring, or defending against high-stakes corporate litigation.",
    "items": [
      "Legal Consultation",
      "Legal Agreements",
      "Business Contracts",
      "Notices",
      "Legal Documentation"
    ]
  }
];

export const pad = (n: number) => String(n).padStart(2, '0');

/** "MSME / Udyam" → "msme-udyam", used for the item anchors inside a service page. */
export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const findService = (slug: string) => SERVICE_CATALOG.find((s) => s.slug === slug);

/** `/services/<category>` or, for one of its items, `/services/<category>/<item>` — every item has its own page. */
export const servicePath = (service: ServiceCategory, item?: string) =>
  `/services/${service.slug}${item ? `/${slugify(item)}` : ''}`;

/** The homepage's eight service cards map onto the catalogue (and the old routes redirect the same way). */
export const LEGACY_SERVICE_LINKS: Record<string, string> = {
  'gst-services': '/services/gst-tax',
  'income-tax': '/services/gst-tax/income-tax-filing',
  'company-registration': '/services/business-registration',
  'accounting': '/services/accounting-payroll',
  'msme-registration': '/services/licenses-registrations/msme-udyam',
  'business-compliance': '/services/compliance',
  'payroll': '/services/accounting-payroll/payroll',
  'tax-advisory': '/services/gst-tax/tax-advisory',
};
