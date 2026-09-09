import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
  { id: 'footer-github', icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
  { id: 'footer-linkedin', icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { id: 'footer-twitter', icon: <FiTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
  { id: 'footer-email', icon: <FiMail size={18} />, href: 'mailto:richard@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{
        background: '#0f172a',
        color: '#94a3b8',
        padding: '48px 24px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 6vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '800',
            fontSize: '22px',
            boxShadow: '0 4px 16px rgba(14, 165, 233, 0.4)',
          }}
        >
          R
        </div>

        {/* Name & tagline */}
        <div>
          <p style={{ color: '#e2e8f0', fontWeight: '700', fontSize: '18px', marginBottom: '4px' }}>
            Richard Obeng
          </p>
          <p style={{ fontSize: '14px', color: '#64748b' }}>Frontend Developer</p>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {socialLinks.map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#0ea5e9';
                (e.currentTarget as HTMLElement).style.background = 'rgba(14,165,233,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#64748b';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Copyright */}
        <p style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
          © {new Date().getFullYear()} Richard Obeng. Made with{' '}
          <FiHeart size={13} color="#f59e0b" style={{ display: 'inline' }} />
          {' '}using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
