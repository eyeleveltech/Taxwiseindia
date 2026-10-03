import { Metadata } from 'next';
import { CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants';
import SvgIcon from '@/components/ui/SvgIcon';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | TaxwiseIndia',
  description: 'Connect with TaxwiseIndia. Chat directly on WhatsApp, request a callback, or submit an inquiry to our tax professionals.',
};

export default function ContactPage() {
  return (
    <main className="sec sec-off" style={{ paddingTop: 'clamp(100px, 14vw, 150px)', paddingBottom: '90px' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '44px' }}>
          <p className="eyebrow"><i className="dot"></i>Direct Contact</p>
          <h1 className="h2" style={{ marginTop: '16px' }}>Let&apos;s Talk Taxes & Compliance</h1>
          <p className="lead">
            Have a question or need immediate filing assistance? Our team responds within minutes during business hours.
          </p>
        </div>

        {/* 2-Column Layout: Cards Left, Form Right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '32px', alignItems: 'start' }}>
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* WhatsApp Priority Card */}
            <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '24px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <span className="coin" style={{ width: '48px', height: '48px' }}>
                  <SvgIcon id="i-send" style={{ width: '22px', height: '22px' }} />
                </span>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 700, margin: 0, color: '#fff' }}>Instant WhatsApp Support</h3>
                  <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>Fastest response — typically under 15 minutes</p>
                </div>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: '0 0 20px' }}>
                Chat directly with our team to share documents, clarify tax doubts, or initiate your registration instantly.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%' }}
              >
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Contact Details Cards */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="key key-sm"><SvgIcon id="i-phone" /></span>
                <div>
                  <b style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy)', letterSpacing: '0.04em' }}>Phone</b>
                  <a href={`tel:${CONTACT_INFO.phone}`} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--emerald-ink)', textDecoration: 'none' }}>
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="key key-sm"><SvgIcon id="i-mail" /></span>
                <div>
                  <b style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy)', letterSpacing: '0.04em' }}>Email</b>
                  <a href={`mailto:${CONTACT_INFO.email}`} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--emerald-ink)', textDecoration: 'none' }}>
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="key key-sm"><SvgIcon id="i-work" /></span>
                <div>
                  <b style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy)', letterSpacing: '0.04em' }}>Working Hours</b>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--navy-2)' }}>{CONTACT_INFO.hours}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="key key-sm"><SvgIcon id="i-store" /></span>
                <div>
                  <b style={{ display: 'block', fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy)', letterSpacing: '0.04em' }}>Office Address</b>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--navy-2)', lineHeight: 1.5 }}>{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
