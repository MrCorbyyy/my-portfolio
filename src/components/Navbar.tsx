import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiPhone, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', icon: <FiHome size={16} />, to: 'home' },
  { label: 'About Me', icon: <FiUser size={16} />, to: 'about' },
  { label: 'Skills', icon: null, to: 'skills' },
  { label: 'Projects', icon: null, to: 'projects' },
  { label: 'Contact Me', icon: <FiPhone size={16} />, to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',        
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(14,165,233,0.08)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 6vw',
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link to="home" smooth duration={600} style={{ cursor: 'pointer' }}>
          <div
            id="nav-logo"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '800',
              fontSize: '20px',
              letterSpacing: '-0.5px',
              boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
              transition: 'transform 0.3s ease',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08) rotate(-5deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
          >
            R
          </div>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              spy
              onSetActive={() => setActive(item.to)}
              id={`nav-${item.to}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                transition: 'all 0.25s ease',
                color: active === item.to ? '#f59e0b' : '#475569',
                background: active === item.to ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                if (active !== item.to) {
                  (e.currentTarget as HTMLElement).style.color = '#0ea5e9';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(14, 165, 233, 0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.to) {
                  (e.currentTarget as HTMLElement).style.color = '#475569';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#0ea5e9',
            padding: '8px',
            borderRadius: '8px',
          }}
          className="mobile-nav-toggle"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'white',
            borderBottom: '1px solid #e2e8f0',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              id={`mobile-nav-${item.to}`}
              onClick={() => { setMenuOpen(false); setActive(item.to); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '15px',
                color: active === item.to ? '#f59e0b' : '#475569',
                background: active === item.to ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
