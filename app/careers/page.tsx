import { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';
import { ContentPage, CtaPanel, Tag } from '@/components/content/ContentPage';

export const metadata: Metadata = {
  title: 'Careers | TaxwiseIndia',
  description: 'Join the team building transparent, follow-through driven tax and compliance services in India.',
};

const OPENINGS = [
  {
    role: 'Senior Chartered Accountant (Direct & Indirect Tax)',
    location: 'Noida / Hybrid',
    experience: '3 - 5 Years Post-Qualification',
    desc: 'Lead client tax assessments, complex GST reconciliations, high-stakes notices representation, and advance tax computations.',
  },
  {
    role: 'Corporate Secretarial & MCA Specialist',
    location: 'Noida / Remote',
    experience: '2 - 4 Years (CS / Semi-Qualified CS)',
    desc: 'Oversee Private Limited and LLP incorporations, AOC-4 / MGT-7 filings on MCA V3, and drafting corporate bylaws & board resolutions.',
  },
  {
    role: 'Client Success & Follow-Through Associate',
    location: 'Noida / Remote',
    experience: '1 - 3 Years',
    desc: 'Act as the client liaison champion: tracking project milestones, delivering proactive WhatsApp status updates, and ensuring zero client chasing.',
  },
];

export default function CareersPage() {
  return (
    <ContentPage
      eyebrow="Work With Us"
      title="Build the Future of Professional Services"
      lead="We are redefining how businesses experience taxation and compliance in India through radical transparency, speed, and proactive communication."
    >
      <h2 className="mb-6 text-2xl" data-reveal>Open Positions</h2>

      <div className="mb-12 flex flex-col gap-5">
        {OPENINGS.map((op) => (
          <div key={op.role} className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-line bg-white p-8 transition-[border-color,box-shadow] duration-500 ease-out-expo hover:border-mint-line hover:shadow-[0_30px_60px_-32px_rgba(7,26,43,.32)]" data-reveal>
            <div className="max-w-[640px]">
              <div className="mb-2 flex flex-wrap gap-3">
                <Tag>{op.location}</Tag>
                <Tag tone="off">{op.experience}</Tag>
              </div>
              <h3 className="m-0 text-xl font-bold">{op.role}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-2">{op.desc}</p>
            </div>
            <a href={`mailto:${CONTACT_INFO.email}?subject=Job Application: ${encodeURIComponent(op.role)}`} className="btn btn-navy btn-sm">
              Apply via Email &rarr;
            </a>
          </div>
        ))}
      </div>

      <CtaPanel tone="off" title="Don't see a match for your background?" text={`We are always interested in meeting exceptional chartered accountants, lawyers, and client champions. Write to ${CONTACT_INFO.email}.`}>
        <a href={`mailto:${CONTACT_INFO.email}?subject=General Application`} className="btn btn-ghost btn-sm">Send Your Resume</a>
      </CtaPanel>
    </ContentPage>
  );
}
