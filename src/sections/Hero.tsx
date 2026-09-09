import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiBriefcase, FiArrowRight, FiChevronDown } from 'react-icons/fi';

// ── Typewriter hook ────────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

export default function Hero() {
  const role = useTypewriter(
    ['Developer.', 'Engineer.', 'Specialist.', 'Architect.'],
    75,
    1800
  );

  return (
    <section
      id="home"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        paddingTop: '72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow: Cyan (#00C2FF) & Coral (#FF8A3D) on white */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 194, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 138, 61, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%',
          padding: '60px 6vw',
        }}
      >
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Welcome badge */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            id="hero-welcome-text"
            style={{
              color: '#009BD4',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00C2FF',
                boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)',
              }}
            />
            Welcome to my site
          </motion.p>

          {/* Main headline: Frontend in #00C2FF, Developer. in #FF8A3D on White background */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            id="hero-headline"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '24px',
              color: '#0F172A',
            }}
          >
            Hi, I'm Richard, a{' '}
            <br />
            <span style={{ color: '#00C2FF' }}>Frontend </span>
            <span style={{ color: '#FF8A3D', whiteSpace: 'nowrap' }}>
              {role}
              <span
                className="typewriter-cursor"
                style={{ color: '#00C2FF' }}
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            id="hero-description"
            style={{
              color: '#475569',
              fontSize: '15px',
              lineHeight: '1.75',
              marginBottom: '36px',
              maxWidth: '460px',
            }}
          >
            I'm a passionate Frontend Developer focused on building modern,
            responsive and user-friendly web applications using React, TypeScript,
            JavaScript and Tailwind CSS.{' '}
            <Link
              to="about"
              smooth
              duration={600}
              style={{
                color: '#009BD4',
                cursor: 'pointer',
                fontWeight: '600',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = 'underline')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = 'none')}
            >
              See More..
            </Link>
          </motion.p>

          {/* Action buttons: Electric Cyan with Cyan Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              id="hero-hire-btn"
              href="mailto:corby12rich@gmail.com"
              className="btn-primary"
              aria-label="Hire me"
            >
              <FiBriefcase size={16} />
              Hire me !
            </a>
            <Link
              to="projects"
              smooth
              duration={600}
              id="hero-projects-btn"
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              See My Projects
              <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              width: 'clamp(420px, 38vw, 540px)',
              height: 'clamp(460px, 40vw, 580px)',
              maxWidth: '100%',
            }}
          >
            {/* Decorative shape in Electric Cyan with cyan glow */}
            <div
              className="decorative-shape"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '42px',
                left: '-38px',
                bottom: '-18px',
                right: '40px',
                backgroundColor: '#00C2FF',
                borderRadius: '28px 0 0 210px',
                zIndex: 1,
                pointerEvents: 'none',
                boxShadow: '0 12px 28px rgba(37, 99, 235, 0.15)',
              }}
            />

            <div
              className="image-container"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                borderRadius: '24px 0 0 185px',
                overflow: 'hidden',
                backgroundColor: '#E0F7FF',
                border: '3px solid #00C2FF',
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.1), 0 4px 12px rgba(37, 99, 235, 0.08)',
              }}
            >
              <img
                src="/images/me.jpeg"
                alt="Richard Obeng – Frontend Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <span style={{ fontSize: '12px', color: '#94A3B8', letterSpacing: '0.5px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#00C2FF' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style>{`
        /* Hero button centering on tablet */
        @media (max-width: 900px) {
          .hero-grid { text-align: center !important; }
          #home [style*="flexWrap"] { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
