import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiFramer,
  SiHtml5,
  SiCss,
  SiGit,
  SiNpm,
} from 'react-icons/si';
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiGitBranch,
  FiBox,
  FiZap,
  FiServer,
  FiTool,
  FiSettings,
  FiUploadCloud,
  FiShield,
  FiStar,
} from 'react-icons/fi';

type Skill = { name: string; icon: React.ReactNode };
type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <FiCode size={20} />,
    color: '#009BD4',
    bg: 'rgba(0, 155, 212, 0.07)',
    border: 'rgba(0, 155, 212, 0.22)',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 size={13} /> },
      { name: 'CSS3', icon: <SiCss size={13} /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript size={13} /> },
      { name: 'TypeScript', icon: <SiTypescript size={13} /> },
      { name: 'React.js', icon: <SiReact size={13} /> },
      { name: 'Vite', icon: <SiVite size={13} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={13} /> },
      { name: 'Responsive Web Design', icon: <FiSmartphone size={13} /> },
      { name: 'Component-Based Dev', icon: <FiBox size={13} /> },
      { name: 'UI/UX Implementation', icon: <FiLayout size={13} /> },
    ],
  },
  {
    id: 'api',
    title: 'API & Backend Integration',
    icon: <FiZap size={20} />,
    color: '#FF8A3D',
    bg: 'rgba(255, 138, 61, 0.07)',
    border: 'rgba(255, 138, 61, 0.22)',
    skills: [
      { name: 'REST API Integration', icon: <FiZap size={13} /> },
      { name: 'Axios', icon: <FiCode size={13} /> },
      { name: 'React Query', icon: <SiReact size={13} /> },
      { name: 'SWR', icon: <FiCode size={13} /> },
      { name: 'JSON Data Handling', icon: <FiCode size={13} /> },
      { name: 'Postman', icon: <SiPostman size={13} /> },
      { name: 'Auth & Authorization', icon: <FiShield size={13} /> },
      { name: 'Microsoft Azure MSAL', icon: <FiServer size={13} /> },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX & Animation',
    icon: <FiStar size={20} />,
    color: '#9B5CF8',
    bg: 'rgba(155, 92, 248, 0.07)',
    border: 'rgba(155, 92, 248, 0.22)',
    skills: [
      { name: 'Framer Motion', icon: <SiFramer size={13} /> },
      { name: 'NextUI', icon: <FiBox size={13} /> },
      { name: 'React Icons', icon: <FiStar size={13} /> },
      { name: 'Responsive Interfaces', icon: <FiSmartphone size={13} /> },
      { name: 'Interactive Experiences', icon: <FiZap size={13} /> },
      { name: 'Figma-to-Frontend', icon: <SiFigma size={13} /> },
    ],
  },
  {
    id: 'tools',
    title: 'Dev & Collaboration Tools',
    icon: <FiTool size={20} />,
    color: '#475569',
    bg: 'rgba(71, 85, 105, 0.07)',
    border: 'rgba(71, 85, 105, 0.2)',
    skills: [
      { name: 'Git', icon: <SiGit size={13} /> },
      { name: 'GitHub', icon: <SiGithub size={13} /> },
      { name: 'VS Code', icon: <FiCode size={13} /> },
      { name: 'npm', icon: <SiNpm size={13} /> },
      { name: 'Postman', icon: <SiPostman size={13} /> },
      { name: 'Vercel', icon: <SiVercel size={13} /> },
    ],
  },
  {
    id: 'problemsolving',
    title: 'Technical & Problem-Solving',
    icon: <FiSettings size={20} />,
    color: '#00B89C',
    bg: 'rgba(0, 184, 156, 0.07)',
    border: 'rgba(0, 184, 156, 0.22)',
    skills: [
      { name: 'Debugging', icon: <FiCode size={13} /> },
      { name: 'Error Handling', icon: <FiShield size={13} /> },
      { name: 'Environment Variables', icon: <FiSettings size={13} /> },
      { name: 'CORS', icon: <FiServer size={13} /> },
      { name: 'API Troubleshooting', icon: <FiTool size={13} /> },
      { name: 'Deployment & Hosting', icon: <FiUploadCloud size={13} /> },
      { name: 'Git Branching', icon: <FiGitBranch size={13} /> },
      { name: 'Merge Conflict Resolution', icon: <FiGitBranch size={13} /> },
    ],
  },
];

const highlights = [
  { icon: <FiCode size={24} />, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices.' },
  { icon: <FiLayout size={24} />, title: 'Modern UI', desc: 'Crafting pixel-perfect, beautiful interfaces users love.' },
  { icon: <FiSmartphone size={24} />, title: 'Responsive', desc: 'Mobile-first designs that work flawlessly across all devices.' },
  { icon: <FiGitBranch size={24} />, title: 'Version Control', desc: 'Proficient in Git workflows and collaborative development.' },
  { icon: <FiBox size={24} />, title: 'Component Design', desc: 'Building reusable, accessible React component libraries.' },
  { icon: <FiZap size={24} />, title: 'Performance', desc: 'Optimizing for fast load times and smooth user experiences.' },
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="card"
      style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: category.bg,
            border: `1px solid ${category.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: category.color,
            flexShrink: 0,
          }}
        >
          {category.icon}
        </div>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0F172A' }}>
          {category.title}
        </h3>
      </div>

      {/* Skill pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + i * 0.04, duration: 0.35 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              background: category.bg,
              border: `1px solid ${category.border}`,
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: '500',
              color: category.color,
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ opacity: 0.85 }}>{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      aria-label="Skills section"
      style={{
        padding: '100px 0',
        background: '#F8FAFC',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ color: '#009BD4', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            What I Work With
          </p>
          <h2
            id="skills-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            My Skills
          </h2>
          <p style={{ marginTop: '20px', color: '#64748B', maxWidth: '520px', margin: '20px auto 0' }}>
            A full view of the technologies, tools, and practices I use to build exceptional products.
          </p>
        </motion.div>

        {/* Category cards — 2-col on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '80px',
          }}
        >
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0F172A' }}>What I Bring to the Table</h3>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card"
              style={{ padding: '28px', textAlign: 'center' }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(0, 194, 255, 0.08)',
                  border: '1px solid rgba(0, 194, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#009BD4',
                  margin: '0 auto 16px',
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
