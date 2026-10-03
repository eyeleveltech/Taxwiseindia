import { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';

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
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        <div style={{ maxWidth: '680px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Work With Us</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>Build the Future of Professional Services</h1>
          <p className="lead">
            We are redefining how businesses experience taxation and compliance in India through radical transparency, speed, and proactive communication.
          </p>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 24px' }}>
          Open Positions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
          {OPENINGS.map((op, idx) => (
            <div key={idx} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ maxWidth: '640px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--emerald-ink)', background: 'var(--mint-soft)', padding: '4px 10px', borderRadius: '99px' }}>
                    {op.location}
                  </span>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--navy-2)', background: 'var(--off)', padding: '4px 10px', borderRadius: '99px' }}>
                    {op.experience}
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
                  {op.role}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.6, margin: 0 }}>
                  {op.desc}
                </p>
              </div>

              <div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}?subject=Job Application: ${encodeURIComponent(op.role)}`}
                  className="btn btn-navy btn-sm"
                >
                  Apply via Email &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--off)', border: '1px solid var(--line)', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
            Don&apos;t see a match for your background?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--navy-2)', margin: '0 0 16px' }}>
            We are always interested in meeting exceptional chartered accountants, lawyers, and client champions.
          </p>
          <a href={`mailto:${CONTACT_INFO.email}?subject=General Application`} className="btn btn-ghost btn-sm">
            Send Your Resume to {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </main>
  );
}
