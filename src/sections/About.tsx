import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiVite } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { FiCheckCircle, FiDownload } from 'react-icons/fi';

const techBadges = [
  { name: 'React', icon: <SiReact size={16} />, color: '#61dafb' },
  { name: 'TypeScript', icon: <SiTypescript size={16} />, color: '#3178c6' },
  { name: 'JavaScript', icon: <SiJavascript size={16} />, color: '#f7df1e' },
  { name: 'HTML5', icon: <SiHtml5 size={16} />, color: '#e34f26' },
  { name: 'CSS3', icon: <FaCss3Alt size={16} />, color: '#264de4' },
  { name: 'Tailwind', icon: <SiTailwindcss size={16} />, color: '#06b6d4' },
  { name: 'Vite', icon: <SiVite size={16} />, color: '#646cff' },
];

const traits = [
  'Passionate about clean, readable code',
  'Detail-oriented & design-aware developer',
  'Fast learner & self-motivated individual',
  'Strong team player with excellent communication',
  'Committed to accessibility & performance',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      aria-label="About me section"
      style={{ padding: '100px 0', background: '#ffffff' }}
    >
      <div className="section-container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(245,158,11,0.05))',
                zIndex: 0,
              }}
            />

            <div
              id="about-image-container"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                boxShadow: '0 20px 60px rgba(14,165,233,0.15)',
              }}
            >
              <img
                src="/richard.jpg"
                alt="Richard Obeng – Frontend Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '-24px',
                background: 'white',
                borderRadius: '16px',
                padding: '18px 22px',
                boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
                zIndex: 2,
              }}
            >
              <div style={{ display: 'flex', gap: '24px' }}>
                {[
                  { value: '3+', label: 'Years Exp.' },
                  { value: '20+', label: 'Projects' },
                  { value: '15+', label: 'Clients' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#0ea5e9' }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p style={{ color: '#0ea5e9', fontWeight: '500', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Get to Know Me
            </p>
            <h2
              id="about-heading"
              className="section-title"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', marginBottom: '32px' }}
            >
              About Me
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '15px' }}>
                Hello! I'm <strong style={{ color: '#0f172a' }}>Richard Obeng</strong>, a Frontend Developer with 3+ years of experience turning
                complex designs into clean, performant, and accessible web applications.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '15px' }}>
                I specialize in <strong style={{ color: '#0ea5e9' }}>React</strong>,{' '}
                <strong style={{ color: '#0ea5e9' }}>TypeScript</strong>, and modern CSS frameworks.
                I'm passionate about building products that not only look great but deliver an
                outstanding user experience on every device.
              </p>
            </div>

            {/* Traits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {traits.map((trait, i) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <FiCheckCircle size={16} color="#0ea5e9" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#475569' }}>{trait}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '99px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#475569',
                  }}
                >
                  <span style={{ color: badge.color }}>{badge.icon}</span>
                  {badge.name}
                </div>
              ))}
            </div>

            <a
              id="about-download-cv"
              href="#"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
              onClick={(e) => e.preventDefault()}
              aria-label="Download CV"
            >
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .section-container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #about-image-container { aspect-ratio: 16/9 !important; max-height: 320px; }
        }
      `}</style>
    </section>
  );
}
