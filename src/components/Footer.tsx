import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
  { id: 'footer-github', icon: <FiGithub size={18} />, href: 'https://github.com/MrCorbyyy', label: 'GitHub' },
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
        background: '#070C16',
        color: '#94A3B8',
        padding: '48px 24px 32px',
        borderTop: '1px solid #1E293B',
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
        {/* Logo in Electric Cyan with cyan glow */}
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00C2FF, #0088B5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#070C18',
            fontWeight: '800',
            fontSize: '22px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 25px rgba(0, 194, 255, 0.65)',
          }}
        >
          R
        </div>

        {/* Name & tagline */}
        <div>
          <p style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '18px', marginBottom: '4px', letterSpacing: '0.3px' }}>
            Richard Obeng
          </p>
          <p style={{ fontSize: '14px', color: '#64748B' }}>Frontend Developer</p>
        </div>

        {/* Social icons with cyan glow hover */}
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
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid #1E293B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#00C2FF';
                (e.currentTarget as HTMLElement).style.background = 'rgba(0, 194, 255, 0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = '#00C2FF';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0, 194, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.04)';
                (e.currentTarget as HTMLElement).style.borderColor = '#1E293B';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Copyright */}
        <p style={{ fontSize: '13px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
          © {new Date().getFullYear()} Richard Obeng. Made with{' '}
          <FiHeart size={13} color="#FF8A3D" style={{ display: 'inline', fill: '#FF8A3D' }} />
          {' '}using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
