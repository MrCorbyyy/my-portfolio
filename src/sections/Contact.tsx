import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiUser,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    id: 'social-github',
    icon: <FiGithub size={20} />,
    href: 'https://github.com/MrCorbyyy',
    label: 'GitHub',
    color: '#475569',
  },
  {
    id: 'social-linkedin',
    icon: <FiLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/richard-obeng-270b38336/',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  {
    id: 'social-twitter',
    icon: <FiTwitter size={20} />,
    href: 'https://twitter.com/iam_mrObeng',
    label: 'Twitter / X',
    color: '#1da1f2',
  },
  {
    id: 'social-email',
    icon: <FiMail size={20} />,
    href: 'mailto:corby12rich@gmail.com',
    label: 'Email',
    color: '#FF8A3D',
  },
];

const contactInfo = [
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Accra, Ghana' },
  { icon: <FiMail size={18} />, label: 'Email', value: 'corby12rich@gmail.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+233 050 982 9682' },
];

type FormState = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';
type SendVia = 'email' | 'whatsapp';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [sendVia, setSendVia] = useState<SendVia>('email');
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    const { name, email, message } = form;

    setTimeout(() => {
      if (sendVia === 'email') {
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.open(`mailto:corby12rich@gmail.com?subject=${subject}&body=${body}`, '_blank');
      } else {
        const text = encodeURIComponent(
          `Hi Richard! I'm ${name} (${email}).\n\n${message}`
        );
        window.open(`https://wa.me/233509829682?text=${text}`, '_blank');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1.5px solid #E2E8F0',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#0F172A',
    background: '#F8FAFC',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box' as const,
  };

  return (
    <section
      id="contact"
      aria-label="Contact section"
      style={{
        padding: '100px 0',
        background: '#FFFFFF',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ color: '#009BD4', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Let's Talk
          </p>
          <h2
            id="contact-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            Get In Touch
          </h2>
          <p style={{ marginTop: '20px', color: '#64748B', maxWidth: '500px', margin: '20px auto 0' }}>
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
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '4px' }}>
                Contact Information
              </h3>
              {contactInfo.map((info) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(0, 194, 255, 0.08)',
                      border: '1px solid rgba(0, 194, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#009BD4',
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '500', marginBottom: '2px' }}>{info.label}</p>
                    <p style={{ fontSize: '14px', color: '#0F172A', fontWeight: '600' }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', marginBottom: '20px' }}>
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
                    aria-label={`Visit my ${social.label}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      textDecoration: 'none',
                      color: '#475569',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      background: '#F8FAFC',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#00C2FF';
                      (e.currentTarget as HTMLElement).style.color = '#009BD4';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(0, 194, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0';
                      (e.currentTarget as HTMLElement).style.color = '#475569';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ color: social.color }}>{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                Send a Message
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                Fill out the form and choose how you'd like to reach me.
              </p>

              {/* Channel picker */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '28px',
                  background: '#F1F5F9',
                  borderRadius: '12px',
                  padding: '4px',
                }}
              >
                {(['email', 'whatsapp'] as SendVia[]).map((method) => {
                  const isActive = sendVia === method;
                  const isWA = method === 'whatsapp';
                  return (
                    <button
                      key={method}
                      type="button"
                      id={`contact-via-${method}`}
                      onClick={() => setSendVia(method)}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '9px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 0.25s ease',
                        background: isActive
                          ? isWA ? '#25D366' : '#00C2FF'
                          : 'transparent',
                        color: isActive ? '#FFFFFF' : '#64748B',
                        boxShadow: isActive
                          ? isWA
                            ? '0 4px 14px rgba(37, 211, 102, 0.35)'
                            : '0 4px 14px rgba(0, 194, 255, 0.35)'
                          : 'none',
                      }}
                    >
                      {isWA ? <FaWhatsapp size={15} /> : <FiMail size={14} />}
                      {isWA ? 'WhatsApp' : 'Email'}
                    </button>
                  );
                })}
              </div>

              <form
                id="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiUser size={14} color="#009BD4" /> Full Name
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
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00C2FF';
                      e.target.style.boxShadow = '0 0 12px rgba(0, 194, 255, 0.35)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMail size={14} color="#009BD4" /> Email Address
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
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00C2FF';
                      e.target.style.boxShadow = '0 0 12px rgba(0, 194, 255, 0.35)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMessageSquare size={14} color="#009BD4" /> Message
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
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00C2FF';
                      e.target.style.boxShadow = '0 0 12px rgba(0, 194, 255, 0.35)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    fontSize: '15px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    color: '#FFFFFF',
                    transition: 'all 0.25s ease',
                    opacity: status === 'sending' ? 0.75 : 1,
                    background: sendVia === 'whatsapp'
                      ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
                      : 'linear-gradient(135deg, #00C2FF 0%, #0052CC 100%)',
                    boxShadow: sendVia === 'whatsapp'
                      ? '0 6px 20px rgba(37, 211, 102, 0.4)'
                      : '0 6px 20px rgba(0, 194, 255, 0.4)',
                  }}
                  aria-label={`Send message via ${sendVia}`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                      </svg>
                      Opening...
                    </>
                  ) : sendVia === 'whatsapp' ? (
                    <>
                      <FaWhatsapp size={17} />
                      Send via WhatsApp
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send via Email
                    </>
                  )}
                </button>

                {/* Success feedback */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="contact-success-msg"
                    role="alert"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      background: sendVia === 'whatsapp'
                        ? 'rgba(37, 211, 102, 0.1)'
                        : 'rgba(0, 194, 255, 0.1)',
                      border: `1px solid ${sendVia === 'whatsapp' ? '#25D366' : '#00C2FF'}`,
                      borderRadius: '8px',
                      color: sendVia === 'whatsapp' ? '#128C7E' : '#009BD4',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    <FiCheck size={16} />
                    {sendVia === 'whatsapp'
                      ? 'WhatsApp opened! Your message is ready to send.'
                      : 'Email client opened! Your message is ready to send.'}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 800px) {
          #contact .section-container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
