import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiPhone, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', icon: <FiHome size={16} />, to: 'home' },
  { label: 'Projects', icon: null, to: 'projects' },
  { label: 'About Me', icon: <FiUser size={16} />, to: 'about' },
  { label: 'Skills', icon: null, to: 'skills' },
  { label: 'Contact Me', icon: <FiPhone size={16} />, to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

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
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? '#E2E8F0' : 'transparent'}`,
        boxShadow: scrolled ? '0 4px 16px rgba(15, 23, 42, 0.05)' : 'none',
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
        {/* Logo in Electric Cyan with cyan glow */}
        <Link to="home" smooth duration={600} style={{ cursor: 'pointer' }}>
          <div
            id="nav-logo"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00C2FF, #009BD4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '20px',
              letterSpacing: '-0.5px',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08) rotate(-5deg)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 99, 235, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.15)';
            }}
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
                fontWeight: active === item.to ? '600' : '500',
                fontSize: '14px',
                transition: 'all 0.25s ease',
                color: active === item.to ? '#009BD4' : '#475569',
                background: active === item.to ? 'rgba(0, 194, 255, 0.08)' : 'transparent',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                if (active !== item.to) {
                  (e.currentTarget as HTMLElement).style.color = '#00C2FF';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0, 194, 255, 0.06)';
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

          {/* ── Dark / Light toggle ── */}
          <button
            id="theme-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
            style={{
              marginLeft: '8px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1.5px solid #E2E8F0',
              background: '#F8FAFC',
              color: isDark ? '#FF8A3D' : '#009BD4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.12) rotate(20deg)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#00C2FF';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.12)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1) rotate(0deg)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#E2E8F0';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
            }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile right side: toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-actions">
          <button
            id="theme-toggle-mobile"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1.5px solid #E2E8F0',
              background: '#F8FAFC',
              color: isDark ? '#FF8A3D' : '#009BD4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#009BD4',
              padding: '8px',
              borderRadius: '8px',
            }}
            className="mobile-nav-toggle"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
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
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
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
                fontWeight: active === item.to ? '600' : '500',
                fontSize: '15px',
                color: active === item.to ? '#009BD4' : '#475569',
                background: active === item.to ? 'rgba(0, 194, 255, 0.08)' : 'transparent',
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
          .mobile-actions { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-actions { display: none !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
