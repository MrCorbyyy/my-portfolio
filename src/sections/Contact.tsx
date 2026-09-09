import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

const socialLinks = [
  {
    id: 'social-github',
    icon: <FiGithub size={20} />,
    href: 'https://github.com',
    label: 'GitHub',
    color: '#333',
  },
  {
    id: 'social-linkedin',
    icon: <FiLinkedin size={20} />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  {
    id: 'social-twitter',
    icon: <FiTwitter size={20} />,
    href: 'https://twitter.com',
    label: 'Twitter / X',
    color: '#1da1f2',
  },
  {
    id: 'social-email',
    icon: <FiMail size={20} />,
    href: 'mailto:richard@example.com',
    label: 'Email',
    color: '#0ea5e9',
  },
];

const contactInfo = [
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Accra, Ghana' },
  { icon: <FiMail size={18} />, label: 'Email', value: 'richard@example.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+233 000 000 000' },
];

type FormState = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#0f172a',
    background: '#f8fafc',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box' as const,
  };

  return (
    <section
      id="contact"
      aria-label="Contact section"
      style={{ padding: '100px 0', background: '#f8fafc' }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ color: '#0ea5e9', fontWeight: '500', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Let's Talk
          </p>
          <h2
            id="contact-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            Get In Touch
          </h2>
          <p style={{ marginTop: '20px', color: '#475569', maxWidth: '500px', margin: '20px auto 0' }}>
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {/* Contact details */}
            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
                Contact Information
              </h3>
              {contactInfo.map((info) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(14,165,233,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0ea5e9',
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', marginBottom: '2px' }}>{info.label}</p>
                    <p style={{ fontSize: '14px', color: '#0f172a', fontWeight: '500' }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>
                Find Me On
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#475569',
                      transition: 'all 0.2s ease',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = social.color;
                      (e.currentTarget as HTMLElement).style.borderColor = social.color;
                      (e.currentTarget as HTMLElement).style.background = `${social.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#475569';
                      (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                      (e.currentTarget as HTMLElement).style.background = '#f8fafc';
                    }}
                  >
                    <span style={{ color: 'inherit' }}>{social.icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '28px' }}>
                Send a Message
              </h3>

              <form
                id="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiUser size={14} color="#0ea5e9" /> Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#0ea5e9'; e.target.style.background = '#ffffff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMail size={14} color="#0ea5e9" /> Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#0ea5e9'; e.target.style.background = '#ffffff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMessageSquare size={14} color="#0ea5e9" /> Message
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={(e) => { e.target.style.borderColor = '#0ea5e9'; e.target.style.background = '#ffffff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: status === 'sending' ? 0.75 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                  aria-label="Send message"
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error feedback */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    style={{
                      padding: '14px 18px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '10px',
                      color: '#059669',
                      fontSize: '14px',
                      fontWeight: '500',
                      textAlign: 'center',
                    }}
                  >
                    ✅ Message sent! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          #contact .section-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
