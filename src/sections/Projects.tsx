import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';

const techColors: Record<string, string> = {
  React: '#61dafb',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  'Tailwind CSS': '#06b6d4',
  Vite: '#646cff',
  'REST API': '#0ea5e9',
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
    id: 'project-taskflow',
    title: 'TaskFlow App',
    description:
      'A full-featured task management application with drag-and-drop boards, priority labels, due dates, and team collaboration features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-shopnest',
    title: 'ShopNest E-Commerce',
    description:
      'A modern e-commerce platform with product filtering, cart management, Stripe payment integration, and a responsive admin dashboard.',
    tech: ['React', 'TypeScript', 'REST API', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-weathervue',
    title: 'WeatherVue',
    description:
      'A beautiful weather dashboard with 7-day forecasts, animated weather icons, location-based search, and interactive charts.',
    tech: ['React', 'JavaScript', 'REST API', 'Vite'],
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-portfolio-v1',
    title: 'Portfolio Website',
    description:
      'A personal developer portfolio built with React, TypeScript, and Tailwind CSS featuring smooth animations and a minimalist design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-blogspace',
    title: 'BlogSpace CMS',
    description:
      'A markdown-based blogging platform with rich-text editing, tag filtering, reading time estimates, and an RSS feed generator.',
    tech: ['React', 'TypeScript', 'React Router', 'Vite'],
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-cryptodash',
    title: 'CryptoDash',
    description:
      'A real-time cryptocurrency dashboard with live price feeds, portfolio tracking, candlestick charts, and price alerts.',
    tech: ['React', 'TypeScript', 'REST API', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
];

function TechBadge({ name }: { name: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '3px 10px',
        background: 'rgba(14,165,233,0.06)',
        border: '1px solid rgba(14,165,233,0.15)',
        borderRadius: '99px',
        fontSize: '11px',
        fontWeight: '500',
        color: '#0ea5e9',
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
      aria-label={`Project: ${project.title}`}
    >
      {/* Colored top banner */}
      <div
        style={{
          height: '8px',
          background: project.gradient,
        }}
      />

      {/* Preview area */}
      <div
        style={{
          height: '180px',
          background: project.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: '160px',
            height: '100px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '12px',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: '700', color: 'white', textAlign: 'center', padding: '0 16px' }}>
            {project.title}
          </span>
        </div>
        {/* Subtle circles decoration */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>
          {project.title}
          {project.featured && (
            <span style={{ marginLeft: '8px', fontSize: '10px', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '2px 8px', borderRadius: '99px', fontWeight: '600', verticalAlign: 'middle' }}>
              Featured
            </span>
          )}
        </h3>
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', flex: 1 }}>{project.description}</p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tech.map((t) => <TechBadge key={t} name={t} />)}
        </div>

        {/* Action buttons */}
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
      style={{ padding: '100px 0', background: '#ffffff' }}
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
          <p style={{ color: '#0ea5e9', fontWeight: '500', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            My Work
          </p>
          <h2
            id="projects-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            Featured Projects
          </h2>
          <p style={{ marginTop: '20px', color: '#475569', maxWidth: '520px', margin: '20px auto 0' }}>
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
            href="https://github.com"
            id="view-all-projects-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
