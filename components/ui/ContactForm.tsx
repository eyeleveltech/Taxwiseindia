'use client';

import { useState } from 'react';
import SvgIcon from '@/components/ui/SvgIcon';
import { SERVICES, WHATSAPP_URL } from '@/lib/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'gst-services',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp redirect
    const text = encodeURIComponent(
      `Hello TaxwiseIndia, I would like to inquire about ${formData.service}.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nNote: ${formData.message}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 44px)', boxShadow: '0 4px 24px -10px rgba(7, 26, 43, 0.08)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 8px', color: 'var(--navy)' }}>
        Send Us an Inquiry
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--navy-2)', margin: '0 0 28px' }}>
        Fill out the details below and our team will get in touch via WhatsApp or phone.
      </p>

      {submitted ? (
        <div style={{ padding: '32px', textAlign: 'center', background: 'var(--mint-soft)', border: '1px solid var(--mint-line)', borderRadius: '18px' }}>
          <div className="key key-lg" style={{ margin: '0 auto 16px' }}>
            <SvgIcon id="i-check" />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>
            Thank You, {formData.name}!
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--navy-2)', margin: '0 0 20px' }}>
            Your request has been forwarded. A tax specialist is reviewing your requirement.
          </p>
          <button 
            type="button" 
            onClick={() => setSubmitted(false)} 
            className="btn btn-ghost btn-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
              Your Name *
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--off)', color: 'var(--navy)', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                Phone Number (WhatsApp) *
              </label>
              <input 
                type="tel" 
                required 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--off)', color: 'var(--navy)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--off)', color: 'var(--navy)', outline: 'none' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
              Service Needed *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--off)', color: 'var(--navy)', outline: 'none' }}
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="General Consultation">General Tax Consultation</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
              Brief Requirement or Questions
            </label>
            <textarea 
              rows={3}
              placeholder="Tell us about your business, turnover, or specific tax notice..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--off)', color: 'var(--navy)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '8px' }}>
            Submit Inquiry on WhatsApp <SvgIcon id="i-send" className="i arr" />
          </button>
        </form>
      )}
    </div>
  );
}
