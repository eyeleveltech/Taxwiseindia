/**
 * TaxwiseIndia service pricing — 46 services, 1 to 4 plans each, cheapest first.
 *
 * Where Vakilsearch (now branded Zolvit, still served at vakilsearch.com) publishes a package
 * table for the matching service, the plans mirror it as of 2026-10-09: same tiers, same offer
 * price (`price`) and struck-through price (`originalPrice`), same "+ Govt. Fee" treatment, and
 * equivalent deliverables. Vakilsearch/Zolvit platform features (their app, invoicing module,
 * bundled software licences, guarantees, ratings) are left out.
 * Where no matching Vakilsearch package exists, the plans are TaxwiseIndia benchmark prices.
 *
 * Every price and scope here must be confirmed by TaxwiseIndia before launch. Prices are
 * professional fees only; government/statutory fees (`govtFee: true`) and taxes are extra.
 */
export interface PricingPlan {
  /** Tier name shown on the card, e.g. 'Starter', 'Standard', 'Premium'. */
  name: string;
  /** Who should pick this plan — the "Choose this if" line. One short sentence. */
  bestFor: string;
  /** Professional fee in rupees. */
  price: number;
  /** Struck-through "was" price, only when the source shows one. */
  originalPrice?: number;
  /** true → the card shows "+ Govt. Fee" (statutory charges are extra). */
  govtFee: boolean;
  /** Billing period; omit for a one-time fee. */
  period?: 'month' | 'quarter' | 'year';
  features: string[];
  /** The highlighted plan — exactly one per service when it has 2+ plans. */
  popular?: boolean;
}

export const SERVICE_PRICING: Record<string, PricingPlan[]> = {
  /* ---------- Business Registration ---------- */

  // Source: https://vakilsearch.com/private-limited-company-registration (2026-10-09)
  'private-limited-company': [
    {
      name: 'Starter',
      bestFor: 'You only need the company incorporated, with no add-ons.',
      price: 999,
      originalPrice: 1499,
      govtFee: true,
      features: [
        'Company name approval',
        'MOA and AOA drafting',
        'Certificate of Incorporation',
        'PAN and TAN',
        'ESI and PF registration',
        'Post-incorporation compliance reminders',
        'Updates at every step',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'Most founders: a guided, done-for-you company setup.',
      price: 1499,
      originalPrice: 2999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Dedicated filing expert',
        'Document review before filing',
        'Compliance starter kit',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Pro',
      bestFor: 'You want your brand protected and MSME benefits in place from day one.',
      price: 3499,
      originalPrice: 4999,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Priority filing',
        'Trademark registration for your brand',
        'MSME (Udyam) registration',
        'Guidance on government schemes and benefits',
        'Incorporation + trademark filing in 8–14 days',
      ],
    },
  ],

  // Source: https://vakilsearch.com/llp-registration (2026-10-09)
  'llp-registration': [
    {
      name: 'Standard',
      bestFor: 'Partners who just need the LLP registered with the essentials.',
      price: 999,
      originalPrice: 1999,
      govtFee: true,
      features: [
        'LLP name reservation',
        'LLP incorporation form filing',
        'LLP Incorporation Certificate',
        'LLP agreement filing',
        'PAN and TAN',
        'Post-incorporation compliance reminders',
        'Updates at every step',
      ],
    },
    {
      name: 'Fastrack',
      bestFor: 'Partners on a deadline who need priority name reservation and faster filings.',
      price: 2499,
      originalPrice: 3599,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Priority name reservation',
        'Expedited DSC processing',
        'Faster LLP agreement filing',
        'Compliance starter kit',
      ],
    },
    {
      name: 'Premium',
      bestFor: 'Partners who want year one handled: registration, compliance, tax and books.',
      price: 10999,
      originalPrice: 21999,
      govtFee: true,
      features: [
        'Everything in Fastrack',
        '30-minute strategy call with a senior CA/CS',
        'Form 8 and Form 11 filing (year 1)',
        'DIR-3 KYC for 2 partners',
        'Income tax filing (turnover up to ₹20 lakh)',
        'Accounting and bookkeeping (up to 100 transactions)',
        'Financial statement preparation',
      ],
      popular: true,
    },
  ],

  // Source: https://vakilsearch.com/one-person-company-registration (2026-10-09)
  'opc-registration': [
    {
      name: 'Starter',
      bestFor: 'Solo founders who only need the OPC incorporated, with no add-ons.',
      price: 999,
      originalPrice: 1499,
      govtFee: true,
      features: [
        'Company name approval',
        'MOA and AOA drafting',
        'Certificate of Incorporation',
        'PAN and TAN',
        'ESI and PF registration',
        'Post-incorporation compliance reminders',
        'Updates at every step',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'Most solo founders: a guided, done-for-you OPC setup.',
      price: 1499,
      originalPrice: 2999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Dedicated filing expert',
        'Document review before filing',
        'Compliance starter kit',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Pro',
      bestFor: 'You want your brand protected and MSME benefits in place from day one.',
      price: 3499,
      originalPrice: 4999,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Priority filing',
        'Trademark registration for your brand',
        'MSME (Udyam) registration',
        'Guidance on government schemes and benefits',
      ],
    },
  ],

  // Source: https://vakilsearch.com/partnership-firm-registration (2026-10-09). Source notes "Doc. charges applicable" (deed stamp paper/notary).
  'partnership-firm': [
    {
      name: 'Starter',
      bestFor: 'You only need the partnership deed drafted and the firm registered.',
      price: 2499,
      originalPrice: 3339,
      govtFee: true,
      features: [
        'Expert-assisted process',
        'Partnership deed drafted in 3 days',
        'Deed submitted to the local Registrar on your behalf',
        'PAN for the firm',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'You want the firm registered plus GST registration and a year of returns.',
      price: 4999,
      originalPrice: 7149,
      govtFee: true,
      features: [
        'Everything in Starter',
        'GST registration',
        'GSTR-1 and GSTR-3B for 12 months (up to 300 transactions)',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      bestFor: 'You want registration, GST, trademark and the first ITR all handled.',
      price: 8999,
      originalPrice: 13899,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Dedicated account manager',
        'Trademark registration for your brand',
        'ITR filing for one financial year (turnover up to ₹10 lakh)',
      ],
    },
  ],

  // Source: https://vakilsearch.com/sole-proprietorship-registration (2026-10-09). Source shows no "+ Govt. Fee" (GST/Udyam registration is free).
  'sole-proprietorship': [
    {
      name: 'Starter',
      bestFor: 'You need one registration (GST or MSME) to start trading as a proprietor.',
      price: 499,
      originalPrice: 999,
      govtFee: false,
      features: [
        'Expert-assisted process',
        'GST or MSME (Udyam) registration (any one)',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'You want both registrations plus a year of GST returns.',
      price: 3499,
      originalPrice: 4999,
      govtFee: false,
      features: [
        'Expert-assisted process',
        'GST registration',
        'MSME (Udyam) registration',
        'GST return filing for 12 months (up to 300 transactions)',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      bestFor: 'You want registrations, a year of GST returns and your ITR covered.',
      price: 5999,
      originalPrice: 8260,
      govtFee: false,
      features: [
        'Expert-assisted process',
        'GST registration',
        'MSME (Udyam) registration',
        'GST return filing for 12 months (up to 500 transactions)',
        'Income tax return filing',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/startup-india-registration shows a lead form only, even after scrolling) —
  // TaxwiseIndia benchmark; confirm before launch. DPIIT recognition itself carries no government fee.
  'startup-india': [
    {
      name: 'Starter',
      bestFor: 'You want to check DPIIT eligibility and get the application filed.',
      price: 2999,
      govtFee: false,
      features: [
        'DPIIT recognition eligibility check',
        'Document checklist',
        'Application preparation and filing',
        'Application status guidance',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want a stronger application and guidance on startup schemes.',
      price: 5999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Detailed application and document review',
        'Guidance on startup schemes and benefits',
        'Recognition follow-up',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'You also plan to claim the tax exemption and IPR benefits.',
      price: 9999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Tax-exemption (Section 80-IAC) application guidance',
        'IPR benefit guidance',
        'Startup compliance consultation',
      ],
    },
  ],

  // Source: https://vakilsearch.com/ngo/registration/section-8 (2026-10-09)
  'section-8-company': [
    {
      name: 'Starter',
      bestFor: 'You want structure advice and your NGO name reserved before incorporating.',
      price: 999,
      originalPrice: 1499,
      govtFee: true,
      features: [
        'Expert-assisted process',
        'Guidance on the right NGO structure',
        'Name suggestions',
        'Name approval within 7 working days',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'You are ready to incorporate your Section 8 company.',
      price: 2999,
      originalPrice: 3999,
      govtFee: true,
      features: [
        'Expert-assisted process',
        'DSC in 24 hours',
        'DIN for directors',
        'Name reservation in 5 days',
        'SPICe+ form filing in 7 days',
        'Certificate of Incorporation',
        'Company PAN and TAN',
        'NGO DARPAN registration',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      bestFor: 'You want incorporation, 12A/80G and the first year of compliance handled.',
      price: 14999,
      originalPrice: 29999,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Dedicated account manager',
        'Name reservation in 3 days',
        'Section 12A and 80G applications within 14 days of formation',
        'e-Anudaan registration',
        'Accounting for one financial year (up to 300 transactions)',
        'Audit for one financial year (up to 300 transactions)',
        'ITR filing for one financial year',
        'Transaction and tax advisory by a professional auditor',
      ],
    },
  ],

  /* ---------- GST & Tax ---------- */

  // Source: https://vakilsearch.com/gst-registration (2026-10-09). Source shows no "+ Govt. Fee" (GST registration has no government fee).
  'gst-registration': [
    {
      name: 'Standard',
      bestFor: 'You want your GST application filed within 48 hours.',
      price: 599,
      originalPrice: 999,
      govtFee: false,
      features: [
        'GST application filed within 48 hours',
        'GST registration support',
        'ARN tracking and updates at every step',
        'GST Registration Certificate',
        'Support over chat',
      ],
    },
    {
      name: 'Premium',
      bestFor: 'You need a fast-track, error-free application filed within 24 hours.',
      price: 1999,
      originalPrice: 3999,
      govtFee: false,
      features: [
        'GST application filed within 24 hours',
        'Priority ARN generation',
        'Registration under Rule 14A where eligible',
        'Document check for an error-free application',
        'GSTIN issuance support',
        'GST Registration Certificate',
        'MSME (Udyam) registration',
        'GST compliance checklist',
        'Dedicated GST expert',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      bestFor: 'You want GST registration plus a full year of return filing.',
      price: 4999,
      originalPrice: 7999,
      govtFee: false,
      features: [
        'Expert-assisted GST registration',
        'GST Registration Certificate',
        'MSME (Udyam) registration',
        'GST returns for 12 months (300 transactions, ₹20 lakh turnover)',
        'Quarterly GST health check',
        'Dedicated compliance manager',
      ],
    },
  ],

  // Source: https://vakilsearch.com/gst-return-filing (2026-10-09). Source shows "+ Taxes", not a government fee.
  'gst-return-filing': [
    {
      name: 'Standard',
      bestFor: 'You want to try us for one quarter of nil-return filing.',
      price: 999,
      originalPrice: 1499,
      govtFee: false,
      period: 'quarter',
      features: [
        'Expert-assisted process',
        'GSTR-1 and GSTR-3B filing for 3 months (nil returns only)',
      ],
    },
    {
      name: 'Premium',
      bestFor: 'Small businesses that want a full year of GSTR-1 and GSTR-3B filed.',
      price: 2999,
      originalPrice: 4599,
      govtFee: false,
      period: 'year',
      features: [
        'Expert-assisted process',
        'GSTR-1 and GSTR-3B filing for 12 months',
        'Up to 200 transactions or ₹10 lakh turnover',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      bestFor: 'Growing businesses that want GST returns and the ITR in one plan.',
      price: 4999,
      originalPrice: 7499,
      govtFee: false,
      period: 'year',
      features: [
        'Dedicated account manager',
        'Expert-assisted process',
        'GSTR-1 and GSTR-3B filing for 12 months',
        'Up to 300 transactions or ₹30 lakh turnover',
        'ITR filing for one financial year (turnover up to ₹30 lakh)',
      ],
    },
  ],

  // Lite + Standard: https://vakilsearch.com/ca-consultation (same cards on /chartered-accountant-services; /income-tax-return-filing-online
  // itself shows only a lead form "@ ₹2,499 + Tax") (2026-10-09). Pro + Enterprise: no Vakilsearch package found — TaxwiseIndia benchmark; confirm before launch.
  'income-tax-filing': [
    {
      name: 'Lite',
      bestFor: 'Salaried individuals filing a simple ITR-1 return.',
      price: 1499,
      originalPrice: 1999,
      govtFee: false,
      features: [
        'Tax computation',
        'Form 16 import and review',
        'ITR-1 preparation and filing',
        'Email support',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'Salary plus a house property, capital gains or interest income.',
      price: 2499,
      originalPrice: 3845,
      govtFee: false,
      features: [
        'Everything in Lite',
        'Deductions and exemptions claimed (80C, 80D, HRA and more)',
        'Income from one house property',
        'Capital gains from shares or mutual funds computed',
        'Income from other sources (interest and similar)',
        'Priority email and chat support',
      ],
      popular: true,
    },
    {
      name: 'Pro',
      bestFor: 'Proprietors and professionals with business or professional income.',
      price: 4999,
      govtFee: false,
      features: [
        'Return for business or professional income',
        'Additional schedules prepared',
        'Document review by a CA',
      ],
    },
    {
      name: 'Enterprise',
      bestFor: 'Companies that need their corporate income tax return filed.',
      price: 14999,
      govtFee: false,
      features: [
        'Company income tax return preparation and filing',
        'Audit and tax-planning coordination where agreed',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/tds-return-filing shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'tds-return-filing': [
    {
      name: 'Starter',
      bestFor: 'Small deductors filing one quarterly TDS return.',
      price: 1499,
      govtFee: false,
      period: 'quarter',
      features: [
        'Quarterly TDS return preparation and filing',
        'Challan and document review',
        'Filing support',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Businesses with more deductees that also need Form 16/16A.',
      price: 3499,
      govtFee: false,
      period: 'quarter',
      features: [
        'Everything in Starter',
        'Higher deductee volume',
        'Form 16/16A where applicable',
        'Revision support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'High-volume deductors that need discrepancies followed up.',
      price: 7999,
      govtFee: false,
      period: 'quarter',
      features: [
        'Everything in Pro',
        'High-volume deductee support',
        'TDS discrepancy follow-up',
        'Dedicated compliance support',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/lut-gst shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // LUT filing itself carries no government fee.
  'gst-lut': [
    {
      name: 'Starter',
      bestFor: 'Exporters who need this year’s LUT filed on the GST portal.',
      price: 1999,
      govtFee: false,
      features: [
        'LUT eligibility and document checklist',
        'Form RFD-11 preparation',
        'GST portal filing',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Exporters who want the filing plus acknowledgement follow-up.',
      price: 3999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Acknowledgement and status follow-up',
        'Expert consultation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Regular exporters who want renewals and export advice covered.',
      price: 6999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Renewal reminder and support',
        'Export compliance consultation',
        'Dedicated follow-up',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/gst-cancellation shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // GST cancellation carries no government fee.
  'gst-cancellation': [
    {
      name: 'Starter',
      bestFor: 'A simple voluntary cancellation with no pending issues.',
      price: 2999,
      govtFee: false,
      features: [
        'Eligibility and document check',
        'Cancellation application preparation',
        'Portal filing and status follow-up',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You also need pending returns and the final return sorted.',
      price: 5999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Pending-return checklist',
        'Final return (GSTR-10) guidance',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Complex cases involving notices or ITC reversal.',
      price: 11999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Complex cancellation case review',
        'Notice and ITC issue coordination',
        'Dedicated expert support',
      ],
    },
  ],

  // Starter: https://vakilsearch.com/chartered-accountant-services — "₹799 ₹499 for a 30-minute CA consultation" (2026-10-09).
  // Pro + Enterprise: no Vakilsearch package found — TaxwiseIndia benchmark; confirm before launch.
  'tax-advisory': [
    {
      name: 'Starter',
      bestFor: 'You have a specific tax question and want a CA’s view quickly.',
      price: 499,
      originalPrice: 799,
      govtFee: false,
      features: [
        '30-minute consultation with a CA',
        'Review of your tax query',
        'Action-point summary',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want a tax-planning review and written advice.',
      price: 4999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Written advisory note',
        'Tax-planning review',
        'Follow-up session',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Businesses that want a tax advisor on call every month.',
      price: 14999,
      govtFee: false,
      period: 'month',
      features: [
        'Monthly advisory retainer',
        'Transaction and tax-structure review',
        'Ongoing tax query support',
        'Dedicated advisor',
      ],
    },
  ],

  /* ---------- Compliance ---------- */

  // Source: https://vakilsearch.com/online-accounting-compliance-service ("Annual Compliance Services" / "Mandatory Annual Filings") (2026-10-09).
  // Vakilsearch has no ROC-only package; the same three tiers back company-compliance below.
  'roc-annual-filing': [
    {
      name: 'Essential',
      bestFor: 'Your books are handled elsewhere; you need every ROC filing done on time.',
      price: 6988,
      originalPrice: 9983,
      govtFee: true,
      period: 'year',
      features: [
        'AOC-4 filing (financial statements)',
        'MGT-7 filing (annual return)',
        'ADT-1 auditor appointment',
        'DIR-3 KYC for up to 2 directors',
        'INC-20A commencement of business',
        'Board meeting and AGM documentation',
        'Statutory registers maintained',
        'Secretarial compliance support all year',
        'Compliance calendar set up at onboarding',
      ],
    },
    {
      name: 'Plus',
      bestFor: 'Early-stage companies with no accountant (under ₹10 lakh turnover).',
      price: 11988,
      originalPrice: 17126,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Essential',
        'Bookkeeping, up to 200 transactions a year',
        'Turnover up to ₹10 lakh',
        'Ledger maintenance and journal entries',
        'Bank reconciliation for the year',
        'Balance sheet and profit & loss prepared',
        'Accounting support through the year',
      ],
      popular: true,
    },
    {
      name: 'Complete',
      bestFor: 'GST-registered companies that want filings, books and GST in one plan.',
      price: 15588,
      originalPrice: 20785,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Plus',
        'GSTR-1 and GSTR-3B filing',
        'GST reconciliation against GSTR-2B',
        'GST compliance monitoring all year',
        'GST advisory on rates and notices',
        'Dedicated account manager',
      ],
    },
  ],

  // Source: https://vakilsearch.com/company-compliance (2026-10-09) — same package table as roc-annual-filing.
  'company-compliance': [
    {
      name: 'Essential',
      bestFor: 'You have an accountant and need the secretarial side fully handled.',
      price: 6988,
      originalPrice: 9983,
      govtFee: true,
      period: 'year',
      features: [
        'AOC-4 filing (financial statements)',
        'MGT-7 filing (annual return)',
        'ADT-1 auditor appointment',
        'DIR-3 KYC for up to 2 directors',
        'INC-20A commencement of business',
        'Board meeting and AGM documentation',
        'Statutory registers maintained',
        'Secretarial compliance support all year',
        'Compliance calendar set up at onboarding',
      ],
    },
    {
      name: 'Plus',
      bestFor: 'Early-stage companies that also need their books kept for the year.',
      price: 11988,
      originalPrice: 17126,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Essential',
        'Bookkeeping, up to 200 transactions a year',
        'Turnover up to ₹10 lakh',
        'Ledger maintenance and journal entries',
        'Bank reconciliation for the year',
        'Balance sheet and profit & loss prepared',
        'Accounting support through the year',
      ],
      popular: true,
    },
    {
      name: 'Complete',
      bestFor: 'GST-registered companies that want compliance, books and GST together.',
      price: 15588,
      originalPrice: 20785,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Plus',
        'GSTR-1 and GSTR-3B filing',
        'GST reconciliation against GSTR-2B',
        'GST compliance monitoring all year',
        'GST advisory on rates and notices',
        'Dedicated account manager',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/director-kyc-filing shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // DIR-3 KYC is free when filed by the due date; the late-filing penalty is separate.
  'director-kyc': [
    {
      name: 'Starter',
      bestFor: 'One director filing DIR-3 KYC before the due date.',
      price: 999,
      govtFee: false,
      features: [
        'DIR-3 KYC document checklist',
        'Form validation',
        'Electronic submission and acknowledgement',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Companies filing KYC for more than one director.',
      price: 1999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Additional directors (defined scope)',
        'DSC and detail-update assistance where needed',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Multiple directors, or a late filing that needs sorting out.',
      price: 3999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Multiple-director coordination',
        'Late-filing and notice assistance',
      ],
    },
  ],

  // No Vakilsearch equivalent: Vakilsearch prices each change separately (add/remove director, name, capital, objects)
  // and those pages show lead forms only — TaxwiseIndia benchmark; confirm before launch.
  'company-changes': [
    {
      name: 'Starter',
      bestFor: 'A single routine change filed with the ROC.',
      price: 2999,
      govtFee: true,
      features: [
        'Resolution and document checklist',
        'MCA/ROC change filing',
        'Updates at every step',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Director appointments, resignations or removals.',
      price: 5999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Director appointment/removal filing',
        'Form DIR-12 where applicable',
        'Priority coordination',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Capital, objects or MOA/AOA changes that need more paperwork.',
      price: 11999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Capital, objects and MOA/AOA change coordination',
        'Complex change documentation',
        'Dedicated compliance expert',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/change-registered-office-company-address shows a lead form only) —
  // TaxwiseIndia benchmark; confirm before launch.
  'registered-office-change': [
    {
      name: 'Starter',
      bestFor: 'Moving within the same city or local limits.',
      price: 2499,
      govtFee: true,
      features: [
        'Address-change document checklist',
        'Form INC-22 and supporting documents',
        'Updates at every step',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Moving to another city within the same state.',
      price: 6999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Within-state address change guidance',
        'Board and shareholder resolutions as required',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Shifting the registered office to another state.',
      price: 14999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Inter-state shift coordination',
        'Regional Director process support where required',
        'Dedicated compliance expert',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/share-transfer-services offers only a ₹999 30-min consultation) —
  // TaxwiseIndia benchmark; confirm before launch.
  'share-transfer': [
    {
      name: 'Starter',
      bestFor: 'A straightforward transfer between existing resident shareholders.',
      price: 3499,
      govtFee: true,
      features: [
        'Share-transfer document checklist',
        'Form SH-4 execution guidance',
        'Transfer filing and coordination',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Transfers that need valuation or stamp-duty work.',
      price: 7999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Valuation and stamp-duty coordination',
        'Document verification',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Complex or cross-border transfers with FEMA reporting.',
      price: 15999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Complex and cross-border transfer coordination',
        'FEMA reporting guidance where applicable',
        'Dedicated company-secretarial support',
      ],
    },
  ],

  // No Vakilsearch package found (/strike-off-company, /winding-up-of-company and /closure-of-private-limited-company show lead forms
  // and an indicative cost table only) — TaxwiseIndia benchmark; confirm before launch.
  'company-closure': [
    {
      name: 'Starter',
      bestFor: 'An inactive company with no liabilities applying for strike-off.',
      price: 4999,
      govtFee: true,
      features: [
        'Closure eligibility review',
        'Form STK-2 and document checklist',
        'Affidavit and indemnity bond drafting',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Pending ROC filings need clearing before the company can close.',
      price: 9999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Pending ROC filing coordination',
        'Account and record closure checklist',
        'Priority follow-up',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Complex closures or winding up with creditors involved.',
      price: 19999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Complex closure and winding-up consultation',
        'Creditor and liquidator coordination where required',
        'Dedicated legal and compliance expert',
      ],
    },
  ],

  /* ---------- Trademark & Intellectual Property ---------- */

  // Source: https://vakilsearch.com/trademark-registration (2026-10-09). The card omits "+ Govt. Fee", but the Trade Marks Registry fee per class is extra.
  'trademark-registration': [
    {
      name: 'Standard',
      bestFor: 'The regular filing route when you are not in a hurry.',
      price: 1499,
      originalPrice: 1999,
      govtFee: true,
      features: [
        '30-minute consultation with a trademark expert',
        'Trademark class search',
        'Detailed trademark search to reduce objection risk',
        'Application filed within 3 days',
        'Use the ™ symbol within 3–5 days',
        'Trademark certificate once registered',
      ],
    },
    {
      name: 'Express',
      bestFor: 'You want the application filed within hours and the ™ symbol in use fast.',
      price: 1999,
      originalPrice: 3332,
      govtFee: true,
      features: [
        'Everything in Standard',
        'Application filed within 6 hours',
        'Use the ™ symbol within 1–2 days',
        'MSME (Udyam) registration on request',
      ],
      popular: true,
    },
  ],

  // No Vakilsearch package found (Vakilsearch offers a free self-serve search tool, no paid search package) —
  // TaxwiseIndia benchmark; confirm before launch. A trademark search carries no government fee.
  'trademark-search': [
    {
      name: 'Starter',
      bestFor: 'A quick check that your word mark is not already taken.',
      price: 499,
      govtFee: false,
      features: [
        'Word mark search',
        'Preliminary availability check',
        'Summary of close matches',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want phonetic and logo matches checked before filing.',
      price: 1499,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Phonetic and similar-name review',
        'Logo/device mark search on request',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'A written risk report and class strategy before a brand launch.',
      price: 3999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Expanded risk review',
        'Class and brand strategy discussion',
        'Written search report',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/trademark-renewal shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'trademark-renewal': [
    {
      name: 'Starter',
      bestFor: 'Renewing a registered mark before it expires.',
      price: 2499,
      govtFee: true,
      features: [
        'Form TM-R renewal application',
        'Registration details and document check',
        'Filing status follow-up',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Your mark is close to or past its expiry date.',
      price: 5999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Expiry and grace-period review',
        'Restoration guidance if eligible',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Renewals across several classes, or with corrections to make.',
      price: 9999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Notice and correction coordination',
        'Multiple-class coordination',
        'Dedicated IP support',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/trademark-objection shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // Replying to an examination report carries no government fee.
  'trademark-objection': [
    {
      name: 'Starter',
      bestFor: 'A straightforward objection that needs a well-drafted reply.',
      price: 2999,
      govtFee: false,
      features: [
        'Examination report review',
        'Reply drafted and filed',
        'Document checklist',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Objections that need legal arguments and supporting evidence.',
      price: 6999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Custom legal arguments',
        'Evidence and affidavit preparation',
        'Priority review',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Your application has been listed for a hearing.',
      price: 12999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Hearing preparation and representation',
        'Additional evidence and filing coordination',
        'Dedicated IP lawyer',
      ],
    },
  ],

  // No Vakilsearch package found (no rectification page; /ipindia/trademark-opposition shows no package) — TaxwiseIndia benchmark; confirm before launch.
  'trademark-rectification': [
    {
      name: 'Starter',
      bestFor: 'You want to assess whether a rectification case is worth filing.',
      price: 4999,
      govtFee: true,
      features: [
        'Initial rectification assessment',
        'Application drafting',
        'Consultation',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You are filing a rectification and need evidence prepared.',
      price: 9999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Evidence preparation',
        'Filing coordination',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Contested proceedings that may go to a hearing.',
      price: 19999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Hearing and contested-proceeding coordination',
        'Counter-statement where needed',
        'Dedicated IP counsel',
      ],
    },
  ],

  // Starter: https://vakilsearch.com/copyright-registration-in-delhi — "starts at ₹2,999 + govt fees" (2026-10-09; the national
  // /copyright-registration page shows a lead form only). Pro + Enterprise: TaxwiseIndia benchmark; confirm before launch.
  'copyright-registration': [
    {
      name: 'Starter',
      bestFor: 'Registering a single literary, artistic or musical work.',
      price: 2999,
      govtFee: true,
      features: [
        'Application prepared and filed in 5–7 days',
        'Work and document verification',
        'Use the © symbol once filed',
        'Updates at every step',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Software, code or works that need NOCs and authorisations.',
      price: 6999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'NOC and authorisation documents',
        'Software/code and complex-work documentation',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Applications that draw an objection or need a hearing.',
      price: 12999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'Objection reply coordination',
        'Hearing and document follow-up where required',
        'Dedicated IP support',
      ],
    },
  ],

  // Source: https://vakilsearch.com/patent-registration (2026-10-09)
  'patent-registration': [
    {
      name: 'Consultation',
      bestFor: 'Inventors who want expert guidance before deciding to file.',
      price: 499,
      originalPrice: 999,
      govtFee: true,
      features: [
        '30-minute consultation with a registered patent expert',
        'Preliminary patentability assessment',
        'Advice on provisional vs complete filing',
        'Overview of process, timeline and government fees',
        'Document checklist for the application',
        'Filing strategy and jurisdiction advice (India/PCT)',
      ],
    },
    {
      name: 'Standard',
      bestFor: 'You want a thorough patent search and claims drafted for filing.',
      price: 9999,
      originalPrice: 24999,
      govtFee: true,
      features: [
        'Patentability search (Indian and global databases, 130+ countries)',
        'In-depth technical analysis of the invention',
        'Strategic advice on filing and claim drafting',
        'Claims prepared and reviewed for complete filing',
        'Timeline: 10–12 days',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      bestFor: 'High-value inventions that need fast, senior-attorney drafting.',
      price: 15999,
      originalPrice: 31999,
      govtFee: true,
      features: [
        'Advanced patentability analysis and strategy report',
        'Drafting and filing by a senior patent attorney',
        'Multiple consultations with patent and technical experts',
        '2 drafting iterations (further changes charged)',
        'Timeline: 4–10 days',
      ],
    },
  ],

  /* ---------- Licenses & Registrations ---------- */

  // No Vakilsearch package found (https://vakilsearch.com/udyam-registration shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // Udyam registration on the government portal is free.
  'msme-udyam': [
    {
      name: 'Starter',
      bestFor: 'You need your Udyam certificate with no fuss.',
      price: 499,
      govtFee: false,
      features: [
        'Udyam registration filed for you',
        'Document and data verification',
        'Udyam certificate follow-up',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want the right NIC codes and enterprise details checked.',
      price: 1499,
      govtFee: false,
      features: [
        'Everything in Starter',
        'NIC code and enterprise-detail review',
        'Priority document review',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'You plan to use MSME schemes, subsidies or tenders.',
      price: 2999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'MSME scheme and subsidy guidance',
        'Tender-readiness checklist',
        'Dedicated expert consultation',
      ],
    },
  ],

  // No Vakilsearch package found on 2026-10-09 (https://vakilsearch.com/fssai-registration shows a lead form and the government fee
  // table only; the previous file listed these amounts as Vakilsearch prices) — treat as TaxwiseIndia benchmark; confirm before launch.
  'fssai': [
    {
      name: 'Starter',
      bestFor: 'Small food businesses that need basic FSSAI registration.',
      price: 799,
      govtFee: true,
      features: [
        'Basic FSSAI registration',
        'Document preparation',
        'Application tracking',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Mid-sized food businesses that need a State FSSAI licence.',
      price: 2499,
      govtFee: true,
      features: [
        'State FSSAI licence',
        'Eligibility and document review',
        'Annual return support where included',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Large, multi-state or import/export food businesses (Central licence).',
      price: 4499,
      govtFee: true,
      features: [
        'Central FSSAI licence',
        'Import/export food compliance guidance',
        'Dedicated manager',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/import-export-code shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'iec': [
    {
      name: 'Starter',
      bestFor: 'You need an Import Export Code to start trading abroad.',
      price: 1499,
      govtFee: true,
      features: [
        'IEC application filed with DGFT',
        'Document verification',
        'Filing status follow-up',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want priority processing or an existing IEC updated.',
      price: 3499,
      govtFee: true,
      features: [
        'Everything in Starter',
        'IEC modification where needed',
        'Priority processing and consultation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Exporters who also need AD code and export set-up support.',
      price: 6999,
      govtFee: true,
      features: [
        'Everything in Pro',
        'AD code and export set-up coordination',
        'Export-promotion advisory',
        'Dedicated expert support',
      ],
    },
  ],

  // Starter: https://vakilsearch.com/iso-certification — "packages starting at ₹1,499" (2026-10-09; no package cards shown).
  // Pro + Enterprise: TaxwiseIndia benchmark; confirm before launch. No government fee; certification-body audit fees are separate.
  'iso-registration': [
    {
      name: 'Starter',
      bestFor: 'You want to understand which ISO standard fits and what it takes.',
      price: 1499,
      govtFee: false,
      features: [
        'ISO certification guidance',
        'Document checklist',
        'Certification scope discussion',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You are getting certified to ISO 9001 or one other standard.',
      price: 6999,
      govtFee: false,
      features: [
        'Documentation for ISO 9001 or one chosen standard',
        'Audit preparation guidance',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'You need several ISO standards or internal audit support.',
      price: 14999,
      govtFee: false,
      features: [
        'Multiple-standard coordination',
        'Internal audit and documentation support',
        'Dedicated consultant',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/professional-tax-registration shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'professional-tax': [
    {
      name: 'Starter',
      bestFor: 'You need Professional Tax registration in one state.',
      price: 1999,
      govtFee: true,
      features: [
        'Professional Tax registration',
        'State-specific document checklist',
        'Filing guidance',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want registration plus your first return filed.',
      price: 3999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'First applicable return filed',
        'Priority processing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Employers who want PT returns and notices handled all year.',
      price: 7999,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Pro',
        'Ongoing return filing',
        'Notice and compliance support',
        'Dedicated accountant',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/shop-and-establishment-license shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'shop-and-establishment': [
    {
      name: 'Starter',
      bestFor: 'One shop or office that needs its state registration.',
      price: 1999,
      govtFee: true,
      features: [
        'State-specific registration',
        'Document checklist',
        'Application status updates',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want registration plus labour-law compliance guidance.',
      price: 3999,
      govtFee: true,
      features: [
        'Everything in Starter',
        'Labour-law compliance guidance',
        'Priority processing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Multiple locations, with renewals tracked for the year.',
      price: 7999,
      govtFee: true,
      period: 'year',
      features: [
        'Everything in Pro',
        'Multi-location and multi-state coordination',
        'Renewal and compliance tracking',
        'Dedicated expert',
      ],
    },
  ],

  // Source: https://vakilsearch.com/dsc-registration (2026-10-09). No plan carries a badge there; Standard is marked popular here.
  // Source shows no "+ Govt. Fee": the DSC itself has no government fee; Elite includes MCA filings, whose fees are extra.
  'digital-signature': [
    {
      name: 'Standard',
      bestFor: 'Individuals or businesses that need a DSC for signing and filings.',
      price: 1999,
      originalPrice: 2499,
      govtFee: false,
      features: [
        'DSC valid for 2 years',
        'Sign unlimited documents',
        'For individuals or organisations',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      bestFor: 'New companies wanting a DSC plus first-year compliance in one plan.',
      price: 24999,
      originalPrice: 29999,
      govtFee: true,
      features: [
        'Everything in Standard',
        'GST registration',
        'Auditor appointment and share certificates issued',
        'INC-20A filing',
        'DIR-3 KYC for 2 directors',
        'Accounting and bookkeeping (up to 100 transactions)',
        'Financial statement preparation',
        'AOC-4, MGT-7 and ADT-1 filing (turnover up to ₹20 lakh)',
        'AGM facilitation and statutory registers',
        'PF and ESI registration',
        'Income tax filing for one year (turnover up to ₹20 lakh)',
      ],
    },
  ],

  /* ---------- Accounting & Payroll ---------- */

  // Starter: https://vakilsearch.com/accounting-bookkeeping-services — "Pricing starts from ₹7,999 for accounting packages" (2026-10-09;
  // no package cards and no billing period shown — the monthly period is carried over from the previous file, confirm it).
  // Pro + Enterprise: TaxwiseIndia benchmark; confirm before launch.
  'accounting': [
    {
      name: 'Starter',
      bestFor: 'Small businesses that need their books kept and basic reports.',
      price: 7999,
      govtFee: false,
      period: 'month',
      features: [
        'Transaction recording and ledger maintenance',
        'Basic financial reports',
        'Updates at every step',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want a monthly P&L, balance sheet and reconciled bank accounts.',
      price: 14999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Starter',
        'Monthly profit & loss and balance sheet',
        'Bank reconciliation',
        'Management reporting',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Higher volumes, custom reports and CFO-style support.',
      price: 29999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Pro',
        'Higher transaction and turnover scope',
        'Custom financial reports',
        'Virtual CFO-style support',
      ],
    },
  ],

  // No Vakilsearch package found (Vakilsearch sells bookkeeping only inside its accounting/compliance packages) —
  // TaxwiseIndia benchmark; confirm before launch.
  'bookkeeping': [
    {
      name: 'Starter',
      bestFor: 'You need transactions and expenses recorded every month.',
      price: 1999,
      govtFee: false,
      period: 'month',
      features: [
        'Transaction recording',
        'Expense tracking',
        'Ledger upkeep',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You also want payables, receivables and the bank reconciled.',
      price: 4999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Starter',
        'Accounts payable and receivable tracking',
        'Monthly summaries',
        'Bank reconciliation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Higher volumes with financial statements and account reviews.',
      price: 9999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Pro',
        'Higher transaction volume',
        'Financial statement support',
        'Dedicated bookkeeper and account review',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/online-payroll-management shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  'payroll': [
    {
      name: 'Starter',
      bestFor: 'Teams of up to 10 employees.',
      price: 2999,
      govtFee: false,
      period: 'month',
      features: [
        'Payroll processing for up to 10 employees',
        'Salary slips',
        'Payroll support',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'Teams of up to 50 employees with TDS on salaries.',
      price: 6999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Starter',
        'Payroll for up to 50 employees',
        'TDS and deduction calculations',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Larger teams that want statutory deductions coordinated.',
      price: 12999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Pro',
        'Larger workforce processing',
        'Statutory deduction coordination',
        'Dedicated payroll manager',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/pf-registration shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // EPFO registration has no government fee; PF contributions are the employer's own statutory cost.
  'pf': [
    {
      name: 'Starter',
      bestFor: 'You need PF registration and help with monthly challans.',
      price: 1999,
      govtFee: false,
      period: 'month',
      features: [
        'PF registration and process assistance',
        'Monthly challan and document checklist',
        'Compliance support',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You want employee joins/exits and returns handled too.',
      price: 4999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Starter',
        'Employee addition and exit coordination',
        'Return filing and compliance support',
        'Priority assistance',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Ongoing PF compliance including claims and notices.',
      price: 9999,
      govtFee: false,
      period: 'month',
      features: [
        'Everything in Pro',
        'Claim and notice support',
        'Ongoing PF compliance coordination',
        'Dedicated expert',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/esi-registration shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // ESIC registration has no government fee; contributions are the employer's own statutory cost.
  'esi': [
    {
      name: 'Starter',
      bestFor: 'Employers who need ESI registration.',
      price: 1950,
      govtFee: false,
      features: [
        'ESI registration',
        'Employer and employee document checklist',
        'Portal process guidance',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You also want employees enrolled and returns guided.',
      price: 5999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Employee enrolment',
        'Compliance and return guidance',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Larger workforces that need ongoing ESI support.',
      price: 9999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Ongoing support for a larger workforce',
        'Notice and incident-reporting guidance',
        'Dedicated expert',
      ],
    },
  ],

  // No Vakilsearch package found (financial statements are bundled into its accounting/compliance packages) —
  // TaxwiseIndia benchmark; confirm before launch.
  'financial-statements': [
    {
      name: 'Starter',
      bestFor: 'You need a balance sheet and profit & loss for the year.',
      price: 3999,
      govtFee: false,
      features: [
        'Profit & loss and balance sheet preparation',
        'Review of your records',
        'Document checklist',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You need a full set with cash flow statement and notes.',
      price: 8999,
      govtFee: false,
      features: [
        'Everything in Starter',
        'Cash flow statement',
        'Notes to accounts',
        'Consultation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Consolidated or complex statements with audit support.',
      price: 19999,
      govtFee: false,
      features: [
        'Everything in Pro',
        'Consolidated and complex statements',
        'Audit assistance where agreed',
        'Dedicated CA support',
      ],
    },
  ],

  /* ---------- Legal Services ---------- */

  // Starter: https://vakilsearch.com/talk-to-a-lawyer — "Starting at ₹99" for a 30-minute consultation, shown as "₹399 ₹99" (2026-10-09).
  // Pro + Enterprise: TaxwiseIndia benchmark; confirm before launch.
  'legal-consultation': [
    {
      name: 'Starter',
      bestFor: 'You want a lawyer’s first view on your issue.',
      price: 99,
      originalPrice: 399,
      govtFee: false,
      features: [
        '30-minute consultation with a lawyer',
        'Initial assessment of your issue',
        'General legal guidance',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'You need a longer session with follow-up questions answered.',
      price: 999,
      govtFee: false,
      features: [
        'Extended consultation',
        'Follow-up Q&A',
        'Written summary where agreed',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Businesses that want a lawyer on call every month.',
      price: 9999,
      govtFee: false,
      period: 'month',
      features: [
        'Monthly legal-support retainer',
        'Routine consultations',
        'Contract review allowance',
      ],
    },
  ],

  // No Vakilsearch package found (individual agreement pages show lead forms only) — TaxwiseIndia benchmark; confirm before launch.
  // Stamp duty on the executed agreement is extra.
  'legal-agreements': [
    {
      name: 'Starter',
      bestFor: 'A standard agreement customised to your details.',
      price: 1999,
      govtFee: true,
      features: [
        'Standard agreement customised to your details',
        'One round of edits',
        'Drafting support',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'A custom agreement drafted for your specific deal.',
      price: 4999,
      govtFee: true,
      features: [
        'Custom agreement drafting',
        'Multiple edits within an agreed limit',
        'Consultation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Complex or multi-party agreements with negotiation support.',
      price: 9999,
      govtFee: true,
      features: [
        'Complex or multi-party agreement drafting',
        'Expanded revisions and negotiation support',
        'Dedicated legal professional',
      ],
    },
  ],

  // No Vakilsearch package found (/master-service-agreement, /vendor-agreement and /non-disclosure-agreement-nda show lead forms only) —
  // TaxwiseIndia benchmark; confirm before launch. Stamp duty on the executed contract is extra.
  'business-contracts': [
    {
      name: 'Starter',
      bestFor: 'An NDA, vendor or other standard business agreement.',
      price: 2499,
      govtFee: true,
      features: [
        'NDA, vendor or standard business agreement',
        'Standard terms review',
        'Drafting support',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'A custom commercial or partnership contract.',
      price: 5999,
      govtFee: true,
      features: [
        'Custom commercial or partnership contract',
        'Consultation and defined revision rounds',
        'Negotiation support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'Shareholder, JV or other complex multi-party contracts.',
      price: 14999,
      govtFee: true,
      features: [
        'Complex multi-party, shareholder or JV contract',
        'Expanded review and drafting',
        'Dedicated counsel',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/legal-notice shows a lead form; its FAQ quotes a general ₹1,499–₹2,499 range) —
  // TaxwiseIndia benchmark; confirm before launch. Sending a legal notice carries no government fee.
  'notices': [
    {
      name: 'Starter',
      bestFor: 'Sending or replying to a notice on a standard matter.',
      price: 1499,
      govtFee: false,
      features: [
        'Legal notice drafted or replied to',
        'Review of your information',
        'Notice dispatched on your behalf',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'A more complex notice that needs a lawyer’s review.',
      price: 2499,
      govtFee: false,
      features: [
        'Higher-complexity notice or reply',
        'Lawyer review and revisions',
        'Case-specific consultation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'A disputed matter that needs a notice strategy.',
      price: 7999,
      govtFee: false,
      features: [
        'Dispute notice or reply strategy',
        'Additional document review',
        'Dedicated legal support',
      ],
    },
  ],

  // No Vakilsearch package found (https://vakilsearch.com/legal-documentation-service shows a lead form only) — TaxwiseIndia benchmark; confirm before launch.
  // Stamp duty, notarisation and registration charges are extra.
  'legal-documentation': [
    {
      name: 'Starter',
      bestFor: 'A ready legal document filled in with your details.',
      price: 499,
      govtFee: true,
      features: [
        'Ready legal document prepared',
        'Customised with your details',
        'Delivered ready to sign',
      ],
    },
    {
      name: 'Pro',
      bestFor: 'An affidavit, power of attorney or business document drafted.',
      price: 1999,
      govtFee: true,
      features: [
        'Customised affidavit, POA or business document',
        'Document review and defined revisions',
        'Notarisation guidance',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      bestFor: 'A set of documents, including registration coordination.',
      price: 4999,
      govtFee: true,
      features: [
        'Complex legal documentation package',
        'Registration and documentation coordination',
        'Dedicated expert support',
      ],
    },
  ],
};

/** The cheapest plan of a service, for "from ₹X" labels. */
export const startingPlan = (slug: string): PricingPlan | undefined =>
  SERVICE_PRICING[slug]?.reduce((a, b) => (b.price < a.price ? b : a));
