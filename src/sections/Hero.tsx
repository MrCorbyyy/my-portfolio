import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiBriefcase, FiArrowRight, FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        paddingTop: '72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
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
              color: '#0ea5e9',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '16px',
              letterSpacing: '0.3px',
            }}
          >
            Welcome to my site
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            id="hero-headline"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#0ea5e9',
            }}
          >
            Hi, I'm Richard, a{' '}
            <br />
            <span style={{ color: '#0ea5e9' }}>Frontend </span>
            <span style={{ color: '#f59e0b' }}>Developer.</span>
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
                color: '#0ea5e9',
                cursor: 'pointer',
                fontWeight: '500',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = 'underline')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = 'none')}
            >
              See More..
            </Link>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              id="hero-hire-btn"
              href="mailto:richard@example.com"
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

        {/* Right: Profile image with decorative cyan shape */}
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
          {/* hero-image-wrapper: expanded to fit the page cleanly */}
          <div
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              width: 'clamp(380px, 32vw, 470px)',
              height: 'clamp(400px, 33.7vw, 495px)',
              maxWidth: '100%',
            }}
          >
            {/* decorative-shape: large cyan curved shape behind the image protruding from left and bottom-left */}
            <div
              className="decorative-shape"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '36px',
                left: '-32px',
                bottom: '-14px',
                right: '34px',
                backgroundColor: '#0ea5e9',
                borderRadius: '24px 0 0 180px',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* image-container: rectangular container with rounded top-left and sweeping bottom-left curve */}
            <div
              className="image-container"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                borderRadius: '20px 0 0 155px',
                overflow: 'hidden',
                backgroundColor: '#e0f2fe',
                boxShadow: '0 24px 54px rgba(14, 165, 233, 0.2)',
              }}
            >
              <img
                src="/richard.jpg"
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
        <span style={{ fontSize: '12px', color: '#94a3b8', letterSpacing: '0.5px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#0ea5e9' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #home [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center !important;
          }
          #home .hero-image-wrapper {
            margin: 0 auto !important;
            width: clamp(260px, 70vw, 340px) !important;
            height: clamp(275px, 74vw, 360px) !important;
          }
          #home .decorative-shape {
            top: 24px !important;
            left: -24px !important;
            bottom: -10px !important;
            right: 24px !important;
            border-radius: 18px 0 0 135px !important;
          }
          #home .image-container {
            border-radius: 16px 0 0 120px !important;
          }
          #hero-description { max-width: 100% !important; }
          #home [style*="flexWrap"] { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
