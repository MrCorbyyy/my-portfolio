import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiGitBranch,
  FiBox,
  FiZap,
} from 'react-icons/fi';
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiFigma, SiGithub, SiVite } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 size={28} />, color: '#e34f26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt size={28} />, color: '#264de4', level: 90 },
  { name: 'JavaScript', icon: <SiJavascript size={28} />, color: '#f7df1e', level: 88 },
  { name: 'TypeScript', icon: <SiTypescript size={28} />, color: '#3178c6', level: 82 },
  { name: 'React.js', icon: <SiReact size={28} />, color: '#61dafb', level: 90 },
  { name: 'Vite', icon: <SiVite size={28} />, color: '#646cff', level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} />, color: '#06b6d4', level: 85 },
  { name: 'REST APIs', icon: <FiZap size={28} />, color: '#0ea5e9', level: 78 },
  { name: 'Git & GitHub', icon: <SiGithub size={28} />, color: '#333', level: 85 },
  { name: 'Figma', icon: <SiFigma size={28} />, color: '#f24e1e', level: 70 },
];

const highlights = [
  { icon: <FiCode size={24} />, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices.' },
  { icon: <FiLayout size={24} />, title: 'Modern UI', desc: 'Crafting pixel-perfect, beautiful interfaces users love.' },
  { icon: <FiSmartphone size={24} />, title: 'Responsive', desc: 'Mobile-first designs that work flawlessly across all devices.' },
  { icon: <FiGitBranch size={24} />, title: 'Version Control', desc: 'Proficient in Git workflows and collaborative development.' },
  { icon: <FiBox size={24} />, title: 'Component Design', desc: 'Building reusable, accessible React component libraries.' },
  { icon: <FiZap size={24} />, title: 'Performance', desc: 'Optimizing for fast load times and smooth user experiences.' },
];

function SkillBar({ name, level, color, icon, delay }: { name: string; level: number; color: string; icon: React.ReactNode; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="card"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ color, display: 'flex' }}>{icon}</div>
        <span style={{ fontWeight: '600', fontSize: '14px', color: '#0f172a' }}>{name}</span>
        <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#0ea5e9', fontWeight: '600' }}>{level}%</span>
      </div>
      <div style={{ background: '#f1f5f9', borderRadius: '99px', height: '6px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, #0ea5e9)`,
            borderRadius: '99px',
          }}
        />
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
        background: '#f8fafc',
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
          <p style={{ color: '#0ea5e9', fontWeight: '500', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
            What I Work With
          </p>
          <h2
            id="skills-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800' }}
          >
            My Skills
          </h2>
          <p style={{ marginTop: '20px', color: '#475569', maxWidth: '520px', margin: '20px auto 0' }}>
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill bars grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '80px',
          }}
        >
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.06} />
          ))}
        </div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a' }}>What I Bring to the Table</h3>
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
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,165,233,0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0ea5e9',
                  margin: '0 auto 16px',
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
