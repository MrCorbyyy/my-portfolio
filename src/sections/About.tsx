import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiCheckCircle } from 'react-icons/fi';




const traits = [
  'Clean, maintainable, self-documenting code',
  'Responsive, accessible, mobile-first design',
  'Performance-focused UI development',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      aria-label="About section"
      style={{
        padding: '100px 0',
        background: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <div className="section-container">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="about-card-container"
          style={{
            background: '#F8FAFC',
            borderRadius: '36px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(36px, 5.5vw, 68px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="profile-beam-wrapper">
              <div className="profile-beam-inner">
                <img
                  src="/images/me.jpeg"
                  alt="Richard Obeng – Frontend Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2
              id="about-heading"
              style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#0F172A',
                marginBottom: '20px',
              }}
            >
              Let’s <span style={{ color: '#FF8A3D' }}>Build </span>Something <br className="about-br" />
              Great Together
            </h2>

            {/* User Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <p style={{ color: '#475569', lineHeight: '1.75', fontSize: '15px' }}>
                Hello! I'm <strong style={{ color: '#0F172A' }}>Richard Obeng</strong>, a passionate Frontend Developer with 3+ years of experience turning complex designs into clean, performant, and accessible web applications.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.75', fontSize: '15px' }}>
                I specialize in <strong style={{ color: '#009BD4' }}>React</strong>,{' '}
                <strong style={{ color: '#009BD4' }}>TypeScript</strong>, and modern Tailwind CSS frameworks, delivering seamless user experiences on every screen.
              </p>
            </div>

            {/* Traits list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              {traits.map((trait) => (
                <div key={trait} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiCheckCircle size={15} color="#00C2FF" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#475569' }}>{trait}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                gap: 'clamp(28px, 4vw, 48px)',
                marginBottom: '36px',
                flexWrap: 'wrap',
                paddingTop: '16px',
                borderTop: '1px solid #E2E8F0',
              }}
            >
              <div>
                <div style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: '800', color: '#0F172A', lineHeight: '1' }}>
                  9+
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500', marginTop: '6px' }}>
                  Project Completed
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: '800', color: '#0F172A', lineHeight: '1' }}>
                  3+
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500', marginTop: '6px' }}>
                  Years Experience
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: '800', color: '#0F172A', lineHeight: '1' }}>
                  4+
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '500', marginTop: '6px' }}>
                  Industry Clients
                </div>
              </div>
            </div>

            <a
              id="about-download-cv"
              href="/Richard_Obeng_Resume.pdf"
              download="Richard_Obeng_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                borderRadius: '999px',
                padding: '14px 36px',
                fontSize: '15px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              aria-label="Download CV"
            >
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-card-container {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding: 36px 24px !important;
          }
          .about-card-container [style*="justify-content"] {
            justify-content: center !important;
          }
          .about-card-container [style*="borderTop"] {
            justify-content: center !important;
          }
          .about-card-container [style*="flexDirection: column"] {
            align-items: center !important;
          }
          .about-br {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
