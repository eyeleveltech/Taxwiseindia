import { type PricingPlan } from '@/components/ui/pricing';

export const SERVICE_PRICING: Record<string, PricingPlan[]> = {
  // --- Business Registration Pricing ---
  'private-limited-company': [
    { name: "Starter", price: "4999", period: "project", features: ["DSC & DIN", "Name Approval", "Incorporation Certificate", "PAN & TAN"], description: "Standard incorporation for startups.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "9999", period: "project", features: ["All Starter Features", "GST Registration", "MSME Registration", "1 Year Compliance Support"], description: "Full launch package with compliance.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "24999", period: "month", features: ["Everything in Pro", "Trademark Registration", "Dedicated Account Manager", "Legal Agreements"], description: "Complete business protection.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'llp-registration': [
    { name: "Starter", price: "3999", period: "project", features: ["DSC for Partners", "Name Approval", "Incorporation Certificate", "LLP Agreement Drafting"], description: "Essential setup for LLPs.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "7999", period: "project", features: ["All Starter Features", "PAN & TAN", "GST Registration", "MSME Registration"], description: "Complete LLP incorporation.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "19999", period: "month", features: ["Everything in Pro", "1 Year Compliance Support", "Dedicated Accountant", "Financial Advisory"], description: "Ongoing support for LLPs.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'opc-registration': [
    { name: "Starter", price: "3499", period: "project", features: ["DSC & DIN", "Name Approval", "Incorporation Certificate", "PAN & TAN"], description: "Basic setup for single founders.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "GST Registration", "MSME Registration", "Bank Account Opening Support"], description: "Full launch for solopreneurs.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "month", features: ["Everything in Pro", "1 Year Compliance Support", "Trademark Registration", "Legal Agreements"], description: "Complete protection and compliance.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'partnership-firm': [
    { name: "Starter", price: "2999", period: "project", features: ["Partnership Deed Drafting", "Notarization Support", "PAN Card for Firm", "Basic Consultation"], description: "Standard partnership setup.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "5999", period: "project", features: ["All Starter Features", "GST Registration", "MSME Registration", "Registration of Firm (ROF)"], description: "Registered partnership firm.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "11999", period: "month", features: ["Everything in Pro", "1 Year Compliance Support", "Trademark Registration", "Dedicated Accountant"], description: "Complete support for partnerships.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'sole-proprietorship': [
    { name: "Starter", price: "1999", period: "project", features: ["MSME (Udyam) Registration", "Basic Consultation", "Bank Account Opening Support", "Document Assistance"], description: "Quick start for freelancers.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3999", period: "project", features: ["All Starter Features", "GST Registration", "Shop & Establishment License", "Professional Tax Registration"], description: "Full setup for proprietors.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "8999", period: "month", features: ["Everything in Pro", "1 Year Compliance Support", "Trademark Registration", "Monthly GST Filing"], description: "Ongoing compliance and protection.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'startup-india': [
    { name: "Starter", price: "5999", period: "project", features: ["DPIIT Recognition", "Basic Business Plan Review", "Document Preparation", "Application Tracking"], description: "Get recognized as a startup.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "12999", period: "project", features: ["All Starter Features", "Section 80IAC Tax Exemption Application", "Angel Tax Exemption Support", "Pitch Deck Review"], description: "Maximized startup benefits.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "29999", period: "month", features: ["Everything in Pro", "Virtual CFO Services", "Fundraising Assistance", "IP (Patent/Trademark) Support"], description: "Scale with confidence.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'section-8-company': [
    { name: "Starter", price: "8999", period: "project", features: ["DSC & DIN (2 Directors)", "Name Approval", "License under Section 8", "Incorporation Certificate"], description: "Standard NGO incorporation.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "14999", period: "project", features: ["All Starter Features", "PAN & TAN", "80G & 12A Registration Support", "NITI Aayog Darpan Registration"], description: "Full launch for NGOs.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "34999", period: "month", features: ["Everything in Pro", "FCRA Registration Support", "1 Year Compliance Support", "Grant Proposal Review"], description: "Complete NGO operations support.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- GST & Tax Pricing ---
  'gst-registration': [
    { name: "Starter", price: "1499", period: "project", features: ["ARN Generation", "Document Verification", "GSTIN Certificate", "Dedicated Support"], description: "Standard GST registration.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3999", period: "project", features: ["All Starter Features", "1st Month Return Filing", "Input Tax Credit Setup", "Invoice Template"], description: "Complete setup + first filing.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "month", features: ["Everything in Pro", "Quarterly Return Filing", "Dedicated GST Consultant", "Notice Management"], description: "Ongoing compliance & support.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'gst-return-filing': [
    { name: "Starter", price: "999", period: "month", features: ["GSTR-1 & GSTR-3B", "Up to 50 Invoices", "Basic ITC Reconciliation", "Email Support"], description: "For small businesses.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "2499", period: "month", features: ["All Starter Features", "Up to 250 Invoices", "Advanced ITC Matching", "Phone Support"], description: "For growing businesses.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "5999", period: "month", features: ["Everything in Pro", "Unlimited Invoices", "Annual Return (GSTR-9)", "Notice Replies"], description: "Comprehensive GST compliance.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'income-tax-filing': [
    { name: "Starter", price: "1999", period: "project", features: ["ITR-1 / ITR-2", "Form 16 Upload", "Capital Gains (Basic)", "CA Review"], description: "For salaried individuals.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "project", features: ["ITR-3 / ITR-4", "Business & Profession Income", "Balance Sheet Prep", "Dedicated CA"], description: "For freelancers and proprietorships.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "project", features: ["Company ITR (ITR-6)", "Audit Support", "Tax Planning", "Notice Management"], description: "Corporate tax filing.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'tds-return-filing': [
    { name: "Starter", price: "1499", period: "quarter", features: ["Form 24Q / 26Q", "Up to 25 Deductees", "Challan Generation", "Basic Support"], description: "Quarterly TDS filing.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3499", period: "quarter", features: ["All Starter Features", "Up to 100 Deductees", "Form 16/16A Generation", "Revisions"], description: "Complete TDS compliance.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "7999", period: "quarter", features: ["Everything in Pro", "Unlimited Deductees", "Notice Management", "Dedicated Expert"], description: "For large organizations.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'gst-lut': [
    { name: "Starter", price: "1999", period: "project", features: ["LUT Application", "Document Preparation", "Status Tracking", "Basic Support"], description: "Standard LUT filing.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3999", period: "project", features: ["All Starter Features", "Priority Processing", "Expert Consultation", "Export Advisory"], description: "Fast-tracked application.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "6999", period: "project", features: ["Everything in Pro", "1 Year Export Compliance", "Notice Management", "Dedicated Manager"], description: "Complete export support.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'gst-cancellation': [
    { name: "Starter", price: "2999", period: "project", features: ["Cancellation Application", "Document Prep", "Status Tracking", "Email Support"], description: "Standard cancellation process.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "5999", period: "project", features: ["All Starter Features", "Final Return (GSTR-10)", "Priority Processing", "Phone Support"], description: "Complete closure with return.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "11999", period: "project", features: ["Everything in Pro", "Notice Management", "Assessment Representation", "Dedicated CA"], description: "For complex closures and notices.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'tax-advisory': [
    { name: "Starter", price: "1499", period: "project", features: ["45 Min Consultation", "Basic Query Resolution", "Email Summary", "Standard Support"], description: "Quick advice on specific issues.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "project", features: ["All Starter Features", "Detailed Written Opinion", "Tax Planning Report", "Follow-up Session"], description: "Comprehensive tax planning.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "month", features: ["Everything in Pro", "Retainer Advisory", "Transaction Structuring", "Dedicated Tax Partner"], description: "Ongoing strategic advice.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- Compliance Pricing ---
  'roc-annual-filing': [
    { name: "Starter", price: "2999", period: "project", features: ["AOC-4 & MGT-7", "Notice Board Resolution", "Basic Support"], description: "Standard ROC filing.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "Director KYC", "Minutes of Meeting Prep", "Priority Support"], description: "Complete annual compliance.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "12999", period: "project", features: ["Everything in Pro", "Secretarial Audit", "Dedicated CS", "Penalty Assessment"], description: "For complex filings.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'company-compliance': [
    { name: "Starter", price: "4999", period: "month", features: ["Basic ROC Filings", "Minutes Maintenance", "Email Support"], description: "Essential compliance.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "9999", period: "month", features: ["All Starter Features", "Quarterly Board Meetings", "Statutory Registers", "Phone Support"], description: "Standard corporate compliance.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "19999", period: "month", features: ["Everything in Pro", "FEMA Compliance", "Dedicated CS", "Audit Support"], description: "Comprehensive compliance.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'director-kyc': [
    { name: "Starter", price: "999", period: "project", features: ["DIR-3 KYC Filing", "Document Verification", "Basic Support"], description: "Standard web KYC.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "1999", period: "project", features: ["All Starter Features", "e-Form KYC", "DSC Update", "Priority Support"], description: "Detailed e-KYC.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "3999", period: "project", features: ["Everything in Pro", "Multiple Directors", "Penalty Resolution", "Dedicated Manager"], description: "For complex KYC cases.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'company-changes': [
    { name: "Starter", price: "2999", period: "project", features: ["Basic Name Change", "Resolution Drafting", "Basic Support"], description: "Simple changes.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "5999", period: "project", features: ["All Starter Features", "Director Addition/Removal", "Form DIR-12", "Priority Support"], description: "Standard structural changes.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "11999", period: "project", features: ["Everything in Pro", "Capital Alteration", "MOA/AOA Amendment", "Dedicated CS"], description: "Complex corporate restructuring.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'registered-office-change': [
    { name: "Starter", price: "2499", period: "project", features: ["Change within Local Limits", "Form INC-22", "Basic Support"], description: "Local address change.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "Change within State", "Newspaper Advertisement", "Priority Support"], description: "State-wide address change.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "project", features: ["Everything in Pro", "Change across States", "RD Approval", "Dedicated Expert"], description: "Inter-state address change.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'share-transfer': [
    { name: "Starter", price: "3499", period: "project", features: ["Basic Share Transfer", "Form SH-4", "Basic Support"], description: "Standard transfer.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "7999", period: "project", features: ["All Starter Features", "Valuation Report", "Stamp Duty Payment", "Priority Support"], description: "Complete transfer process.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "15999", period: "project", features: ["Everything in Pro", "Foreign Remittance (FDI)", "FEMA Reporting", "Dedicated CS"], description: "Complex share transfers.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'company-closure': [
    { name: "Starter", price: "4999", period: "project", features: ["Form STK-2", "Affidavit & Indemnity", "Basic Support"], description: "Standard strike-off.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "9999", period: "project", features: ["All Starter Features", "Pending ROC Filings", "Account Closure Certificate", "Priority Support"], description: "Complete closure with compliance.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "19999", period: "project", features: ["Everything in Pro", "Winding Up Petition", "Liquidator Appointment", "Dedicated Expert"], description: "Formal winding up.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- Trademark & Intellectual Property Pricing ---
  'trademark-registration': [
    { name: "Starter", price: "1999", period: "project", features: ["Trademark Search", "Application Filing", "Status Tracking"], description: "Basic TM application.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "project", features: ["All Starter Features", "Objection Reply Prep", "Expert Consultation", "1 Year Tracking"], description: "End-to-end TM protection.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "project", features: ["Everything in Pro", "Hearing Representation", "Brand Advisory", "Dedicated Lawyer"], description: "For highly contested marks.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'trademark-search': [
    { name: "Starter", price: "499", period: "project", features: ["Basic Word Search", "Report in 24 Hrs", "Email Support"], description: "Quick availability check.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "1499", period: "project", features: ["All Starter Features", "Logo Search", "Phonetic Search", "Consultation"], description: "Comprehensive search.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "3999", period: "project", features: ["Everything in Pro", "International Search", "Risk Assessment", "Dedicated Expert"], description: "Global brand search.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'trademark-renewal': [
    { name: "Starter", price: "2499", period: "project", features: ["Form TM-R", "Document Prep", "Basic Support"], description: "Standard renewal.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "5999", period: "project", features: ["All Starter Features", "Restoration (if expired)", "Status Tracking", "Priority Support"], description: "Renewal with restoration.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "project", features: ["Everything in Pro", "Address Update", "Notice Reply", "Dedicated Lawyer"], description: "Complex renewals.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'trademark-objection': [
    { name: "Starter", price: "2999", period: "project", features: ["Examination Report Analysis", "Reply Drafting", "Basic Support"], description: "Standard objection reply.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "Custom Legal Arguments", "Affidavit Prep", "Priority Support"], description: "Strong defense preparation.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "12999", period: "project", features: ["Everything in Pro", "Hearing Attendance", "Evidence Filing", "Dedicated Lawyer"], description: "Full representation.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'trademark-rectification': [
    { name: "Starter", price: "4999", period: "project", features: ["Notice Drafting", "Basic Consultation", "Email Support"], description: "Initial rectification steps.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "9999", period: "project", features: ["All Starter Features", "Filing with IPAB", "Evidence Prep", "Priority Support"], description: "Complete filing process.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "19999", period: "project", features: ["Everything in Pro", "Hearing Representation", "Counter-Statement", "Dedicated Lawyer"], description: "End-to-end litigation.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'copyright-registration': [
    { name: "Starter", price: "2999", period: "project", features: ["Basic Application", "Document Verification", "Basic Support"], description: "Standard copyright filing.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "NOC Drafting", "Software/Code Copyright", "Priority Support"], description: "For complex works.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "12999", period: "project", features: ["Everything in Pro", "Objection Handling", "Hearing Representation", "Dedicated Expert"], description: "Full copyright protection.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'patent-registration': [
    { name: "Starter", price: "9999", period: "project", features: ["Provisional Application", "Basic Search", "Basic Support"], description: "Initial idea protection.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "24999", period: "project", features: ["All Starter Features", "Complete Specification", "Detailed Search Report", "Priority Support"], description: "Full patent application.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "49999", period: "project", features: ["Everything in Pro", "International Filing", "Objection Handling", "Dedicated Attorney"], description: "Global patent strategy.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- Licenses & Registrations Pricing ---
  'msme-udyam': [
    { name: "Starter", price: "499", period: "project", features: ["Udyam Registration", "Certificate Delivery", "Basic Support"], description: "Quick MSME certificate.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "1499", period: "project", features: ["All Starter Features", "NIC Code Addition", "Priority Processing", "Consultation"], description: "Modified registration.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "2999", period: "project", features: ["Everything in Pro", "Subsidies Advisory", "Tender Support", "Dedicated Expert"], description: "Maximize MSME benefits.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'fssai': [
    { name: "Starter", price: "999", period: "project", features: ["Basic FSSAI Registration", "Document Prep", "Tracking"], description: "For small food businesses.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "2999", period: "project", features: ["State FSSAI License", "Eligibility Check", "Annual Return Filing"], description: "For medium scale operations.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "7999", period: "project", features: ["Central FSSAI License", "Import/Export Compliance", "Dedicated Manager"], description: "For large scale & imports.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'iec': [
    { name: "Starter", price: "1499", period: "project", features: ["IEC Code Generation", "Document Verification", "Basic Support"], description: "Standard import/export code.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3499", period: "project", features: ["All Starter Features", "Modification in IEC", "Priority Processing", "Consultation"], description: "Updates and fast-track.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "6999", period: "project", features: ["Everything in Pro", "AD Code Registration", "Export Promotion Advisory", "Dedicated Expert"], description: "Complete export setup.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'iso-registration': [
    { name: "Starter", price: "2999", period: "project", features: ["ISO 9001:2015", "Non-IAF Certificate", "Basic Support"], description: "Basic quality certification.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "project", features: ["All Starter Features", "IAF Approved Certificate", "Documentation Support", "Priority Support"], description: "Recognized ISO certification.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "project", features: ["Everything in Pro", "Multiple Standards (14001, 27001)", "Internal Audit", "Dedicated Consultant"], description: "Comprehensive quality standards.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'professional-tax': [
    { name: "Starter", price: "1999", period: "project", features: ["PT Registration", "Document Prep", "Basic Support"], description: "Standard PT setup.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3999", period: "project", features: ["All Starter Features", "First Return Filing", "Priority Processing", "Consultation"], description: "Registration and initial filing.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "7999", period: "year", features: ["Everything in Pro", "Annual Return Filing", "Notice Management", "Dedicated Accountant"], description: "Ongoing PT compliance.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'shop-and-establishment': [
    { name: "Starter", price: "1999", period: "project", features: ["Basic Registration", "Document Verification", "Basic Support"], description: "Local shop registration.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3999", period: "project", features: ["All Starter Features", "Labor Law Advisory", "Priority Processing", "Consultation"], description: "Registration with advisory.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "7999", period: "project", features: ["Everything in Pro", "Multi-State Registration", "Renewal Tracking", "Dedicated Expert"], description: "For multi-location stores.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'digital-signature': [
    { name: "Starter", price: "999", period: "project", features: ["Class 3 DSC (2 Years)", "Sign Only", "Basic Support"], description: "Standard signing certificate.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "1999", period: "project", features: ["All Starter Features", "Sign & Encrypt", "Priority Processing", "Consultation"], description: "Secure signing and encryption.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "3999", period: "project", features: ["Everything in Pro", "Class 3 DSC (3 Years)", "DGFT DSC", "Dedicated Expert"], description: "Long-term and specialized DSCs.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- Accounting & Payroll Pricing ---
  'accounting': [
    { name: "Starter", price: "2999", period: "month", features: ["Up to 100 Transactions", "Monthly Ledger Setup", "Email Support"], description: "Basic books.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "7999", period: "month", features: ["Up to 500 Transactions", "Monthly P&L", "Bank Reconciliation", "Phone Support"], description: "Standard accounting.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "month", features: ["Unlimited Transactions", "Virtual CFO", "Custom Reports"], description: "Corporate accounting.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'bookkeeping': [
    { name: "Starter", price: "1999", period: "month", features: ["Data Entry", "Expense Tracking", "Email Support"], description: "Essential record keeping.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "month", features: ["All Starter Features", "Accounts Payable/Receivable", "Monthly Summaries", "Phone Support"], description: "Comprehensive bookkeeping.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "month", features: ["Everything in Pro", "Inventory Tracking", "Cloud Software Setup", "Dedicated Bookkeeper"], description: "Advanced financial tracking.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'payroll': [
    { name: "Starter", price: "2999", period: "month", features: ["Up to 10 Employees", "Salary Slip Generation", "Basic Support"], description: "Small team payroll.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "6999", period: "month", features: ["All Starter Features", "Up to 50 Employees", "TDS Deductions", "Priority Support"], description: "Standard company payroll.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "12999", period: "month", features: ["Everything in Pro", "Unlimited Employees", "Full Statutory Compliance", "Dedicated Manager"], description: "Enterprise payroll solutions.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'pf': [
    { name: "Starter", price: "1999", period: "month", features: ["PF Registration", "Monthly Challan", "Basic Support"], description: "Essential PF compliance.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "month", features: ["All Starter Features", "Employee Add/Remove", "Annual Returns", "Priority Support"], description: "Complete PF management.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "month", features: ["Everything in Pro", "Claim Settlement Support", "Notice Handling", "Dedicated Expert"], description: "Advanced PF advisory.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'esi': [
    { name: "Starter", price: "1999", period: "month", features: ["ESI Registration", "Monthly Challan", "Basic Support"], description: "Essential ESI compliance.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "month", features: ["All Starter Features", "Employee E-Pehchan Card", "Half-Yearly Returns", "Priority Support"], description: "Complete ESI management.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "month", features: ["Everything in Pro", "Accident Reports", "Notice Handling", "Dedicated Expert"], description: "Advanced ESI advisory.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'financial-statements': [
    { name: "Starter", price: "3999", period: "project", features: ["P&L and Balance Sheet", "Basic Review", "Email Support"], description: "Standard year-end statements.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "8999", period: "project", features: ["All Starter Features", "Cash Flow Statement", "Notes to Accounts", "Consultation"], description: "Detailed financial reports.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "19999", period: "project", features: ["Everything in Pro", "Consolidated Statements", "Audit Assistance", "Dedicated CA"], description: "Complex corporate financials.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],

  // --- Legal Services Pricing ---
  'legal-consultation': [
    { name: "Starter", price: "999", period: "project", features: ["30 Min Call", "Basic Issue Assessment", "Email Support"], description: "Quick legal advice.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "2499", period: "project", features: ["All Starter Features", "1 Hour Call", "Written Opinion", "Follow-up Q&A"], description: "In-depth legal consultation.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "month", features: ["Everything in Pro", "Retainer Services", "Contract Review", "Dedicated Lawyer"], description: "Ongoing legal support.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'legal-agreements': [
    { name: "Starter", price: "1999", period: "project", features: ["Standard Agreement Template", "1 Round of Edits", "Email Support"], description: "Basic legal drafting.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "project", features: ["Custom Drafted Agreement", "3 Rounds of Edits", "Phone Consultation"], description: "Tailored to your needs.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "project", features: ["Complex Multi-party Contract", "Unlimited Edits", "Dedicated Lawyer"], description: "High-stakes agreements.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'business-contracts': [
    { name: "Starter", price: "2499", period: "project", features: ["NDA / Vendor Agreement", "Standard Terms", "Basic Support"], description: "Essential business contracts.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "5999", period: "project", features: ["All Starter Features", "Partnership / Franchise Agreement", "Negotiation Support", "Consultation"], description: "Advanced commercial contracts.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "14999", period: "project", features: ["Everything in Pro", "Merger & Acquisition Docs", "Shareholder Agreements", "Dedicated Counsel"], description: "Complex corporate contracts.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'notices': [
    { name: "Starter", price: "1499", period: "project", features: ["Basic Legal Notice", "Standard Drafting", "Email Support"], description: "Simple formal communication.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "3499", period: "project", features: ["All Starter Features", "Notice for Recovery/Cheque Bounce", "Dispatch & Tracking", "Consultation"], description: "Action-oriented notices.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "7999", period: "project", features: ["Everything in Pro", "Reply to Legal Notice", "Strategy Planning", "Dedicated Lawyer"], description: "Defensive & strategic responses.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
  'legal-documentation': [
    { name: "Starter", price: "1999", period: "project", features: ["Affidavits / Declarations", "Standard Formats", "Basic Support"], description: "Essential legal docs.", buttonText: "Get Started", href: "#", isPopular: false },
    { name: "Pro", price: "4999", period: "project", features: ["All Starter Features", "Wills / Power of Attorney", "Notarization Support", "Consultation"], description: "Personal and business docs.", buttonText: "Start Free Trial", href: "#", isPopular: true },
    { name: "Enterprise", price: "9999", period: "project", features: ["Everything in Pro", "Trust Deed / Society Docs", "Registration Assistance", "Dedicated Expert"], description: "Complex documentation.", buttonText: "Contact Sales", href: "#", isPopular: false },
  ],
};
