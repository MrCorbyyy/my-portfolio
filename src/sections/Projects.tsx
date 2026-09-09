import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';

const techColors: Record<string, string> = {
  React: '#009BD4',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  'Tailwind CSS': '#009BD4',
  Vite: '#646cff',
  'REST API': '#FF8A3D',
  'Framer Motion': '#bb5cf8',
  'React Router': '#ca4245',
};

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact size={12} />,
  TypeScript: <SiTypescript size={12} />,
  JavaScript: <SiJavascript size={12} />,
  'Tailwind CSS': <SiTailwindcss size={12} />,
  Vite: <SiVite size={12} />,
};

const projects = [
  {
    id: 'project-ashevents',
    title: 'AshEvents',
    description:
      'A sleek event discovery and planning web platform offering seamless event browsing, ticketing information, interactive schedules, and an intuitive responsive user experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #0052CC 100%)',
    image: '/images/ashevents.png',
    live: 'https://ashevents.vercel.app/',
    github: 'https://github.com/MrCorbyyy/Ashevents',
    featured: true,
  },
  {
    id: 'project-speedpay',
    title: 'SpeedPay Onboarding Platform',
    description:
      'An enterprise fintech onboarding and case management platform developed for UMB Bank, streamlining verification and onboarding workflows for organizations and merchants onto the SpeedPay system.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    gradient: 'linear-gradient(135deg, #FF8A3D 0%, #D84315 100%)',
    image: '/images/speedpay.jpg',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-agent-collections',
    title: 'UMB Agent Collections Dashboard',
    description:
      'An enterprise financial analytics and monitoring dashboard for UMB Bank, tracking real-time agent collection volumes, branch liquidity breakdowns, MoMo provider distributions (MTN, Telecel, AirtelTigo), and field performance metrics.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #FF8A3D 100%)',
    image: '/images/agent-collections.jpg',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-baas-workflow',
    title: 'BaaS Request & Approval Workflow',
    description:
      'An enterprise Banking-as-a-Service (BaaS) onboarding system engineered for UMB Bank, featuring a 6-step progressive request wizard, core banking account auto-population, IP whitelisting, and a multi-tier governance approval pipeline.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    gradient: 'linear-gradient(135deg, #0284C7 0%, #00C2FF 100%)',
    image: '/images/baas-request.jpg',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-papss',
    title: 'PAPSS Cross-Border Remittance',
    description:
      'An enterprise banking remittance portal integrated with the Pan-African Payment and Settlement System (PAPSS) for UMB Bank, facilitating instant multi-currency cross-border transfers, real-time FX rate checks, and automated beneficiary validation.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    gradient: 'linear-gradient(135deg, #FF8A3D 0%, #FF4081 100%)',
    image: '/images/papss.png',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-health-check',
    title: 'UMB System Health Check Dashboard',
    description:
      'A mission-critical enterprise monitoring dashboard for UMB Bank, tracking real-time latency, uptime, and health across 27 microservices, government APIs (GRA, Ghana.gov, NIA), telco gateways (Hubtel), and cloud infrastructure.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #00E5FF 100%)',
    image: '/images/system-health.jpg',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-papss-dashboard',
    title: 'PAPSS Analytics Dashboard',
    description:
      'An enterprise reporting and analytics dashboard for the Pan-African Payment & Settlement System (PAPSS) at UMB Bank, tracking inbound/outbound transaction volumes, success rates, customer limit exceedances, fee splits (PAPSS/UMB share), monthly comparison charts, and overall transaction status in real time.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    gradient: 'linear-gradient(135deg, #E8A000 0%, #2E7D32 100%)',
    image: '/images/papss dashboard 1.png',
    live: 'https://github.com/MrCorbyyy',
    github: 'https://github.com/MrCorbyyy',
    featured: true,
  },
  {
    id: 'project-portfolio-v1',
    title: 'Personal Portfolio Website',
    description:
      'A clean, modern, and fully responsive personal developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion, featuring custom UI animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #FF8A3D 100%)',
    image: '/images/portfolio.png',
    live: '#home',
    github: 'https://github.com/MrCorbyyy/my-portfolio',
    featured: true,
  },
];

function TechBadge({ name }: { name: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '3px 10px',
        background: 'rgba(0, 194, 255, 0.08)',
        border: '1px solid rgba(0, 194, 255, 0.25)',
        borderRadius: '99px',
        fontSize: '11px',
        fontWeight: '500',
        color: '#0284C7',
      }}
    >
      {techIcons[name] && <span style={{ color: techColors[name] }}>{techIcons[name]}</span>}
      {name}
    </span>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Preview area */}
      <div
        style={{
          height: '190px',
          background: project.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ) : (
          <>
            <div
              style={{
                width: '160px',
                height: '100px',
                background: 'rgba(255, 255, 255, 0.25)',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', textAlign: 'center', padding: '0 16px' }}>
                {project.title}
              </span>
            </div>
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
          </>
        )}
      </div>

      {/* Content on White Card */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
          {project.title}
          {project.featured && (
            <span
              style={{
                marginLeft: '8px',
                fontSize: '10px',
                background: 'rgba(255, 138, 61, 0.12)',
                color: '#FF8A3D',
                border: '1px solid rgba(255, 138, 61, 0.35)',
                padding: '2px 8px',
                borderRadius: '99px',
                fontWeight: '700',
                verticalAlign: 'middle',
              }}
            >
              Featured
            </span>
          )}
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.7', flex: 1 }}>{project.description}</p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tech.map((t) => <TechBadge key={t} name={t} />)}
        </div>

        {/* Action buttons: Electric Cyan with Cyan Glow */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
          <a
            href={project.live}
            id={`${project.id}-live`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '13px' }}
            aria-label={`View live demo of ${project.title}`}
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.github}
            id={`${project.id}-github`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '13px' }}
            aria-label={`View GitHub repo of ${project.title}`}
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects section"
      style={{
        padding: '100px 0',
        background: '#F8FAFC',
      }}
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
          <p style={{ color: '#009BD4', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            My Work
          </p>
          <h2
            id="projects-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            Featured Projects
          </h2>
          <p style={{ marginTop: '20px', color: '#64748B', maxWidth: '520px', margin: '20px auto 0' }}>
            A selection of projects I've built to solve real problems and explore new technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <a
            href="https://github.com/MrCorbyyy"
            id="view-all-projects-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '14px 36px', fontSize: '15px' }}
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
