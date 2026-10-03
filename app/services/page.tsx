import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, SERVICE_DETAILS, WHATSAPP_URL } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';

export const metadata: Metadata = {
  title: 'All Services | TaxwiseIndia',
  description: 'Explore our complete suite of tax, GST, accounting, business incorporation, and compliance services.',
};

export default function ServicesPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <p className="eyebrow"><i className="dot"></i>Full Service Catalog</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>Tax & Compliance Services, Without the Chase</h1>
          <p className="lead">
            Every service is backed by experienced professionals, proactive WhatsApp updates, and strict timeline commitments.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {SERVICES.map((s) => {
            const detail = SERVICE_DETAILS[s.slug];
            return (
              <article 
                key={s.slug} 
                style={{ 
                  background: '#fff', 
                  border: '1px solid var(--line)', 
                  borderRadius: '24px', 
                  padding: '32px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px -8px rgba(7, 26, 43, 0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span className="key key-lg">
                    <SvgIcon id={s.icon} />
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--emerald-ink)', background: 'var(--mint-soft)', padding: '5px 12px', borderRadius: '99px' }}>
                    {detail?.turnaround || '2 - 3 Days'}
                  </span>
                </div>

                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 10px', color: 'var(--navy)' }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-2)', margin: '0 0 20px', flex: 1 }}>
                  {s.description}
                </p>

                {detail?.deliverables && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {detail.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--navy)' }}>
                        <SvgIcon id="i-check" style={{ width: '16px', height: '16px', stroke: 'var(--emerald)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto' }}>
                  <Link href={`/${s.slug}`} className="btn btn-navy btn-sm" style={{ flex: 1 }}>
                    View Details
                  </Link>
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-ghost btn-sm"
                    title="Inquire on WhatsApp"
                  >
                    <SvgIcon id="i-send" className="i" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{ marginTop: '56px', background: 'var(--emerald)', borderRadius: '28px', padding: '40px 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 12px', color: 'var(--navy)' }}>
            Not sure which compliance service your business needs?
          </h2>
          <p style={{ maxWidth: '520px', margin: '0 auto 24px', fontSize: '16px', color: 'var(--navy)' }}>
            Speak directly with our Chartered Accountants. We will evaluate your operations and recommend the exact registrations and filings required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-navy btn-lg">
              Book a Free Consultation
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
