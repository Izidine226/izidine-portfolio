import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss, SiExpress, SiMysql, SiPhp, SiCplusplus,
  SiTypescript, SiNextdotjs, SiSupabase, SiN8N, SiGo, SiOpenai,
  SiTiktok, SiInstagram, SiYoutube, SiCanva, SiGoogleanalytics, SiMeta, SiFigma
} from 'react-icons/si';
import { FaJava, FaRobot, FaChartLine, FaBullhorn } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    name: 'Front-End',
    color: '#8b5cf6',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
      { name: 'React.js', icon: <SiReact />, level: 85 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 78 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS3', icon: <SiCss />, level: 90 },
    ],
  },
  {
    name: 'Back-End & DB',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 85 },
      { name: 'Express.js', icon: <SiExpress />, level: 80 },
      { name: 'Supabase', icon: <SiSupabase />, level: 75 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 78 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
    ],
  },
  {
    name: 'IA & Automatisation',
    color: '#f59e0b',
    skills: [
      { name: 'OpenAI API', icon: <SiOpenai />, level: 82 },
      { name: 'n8n', icon: <SiN8N />, level: 80 },
      { name: 'Prompt Engineering', icon: <FaRobot />, level: 85 },
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'Go', icon: <SiGo />, level: 60 },
    ],
  },
  {
    name: 'DevOps & Outils',
    color: '#ec4899',
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 80 },
      { name: 'Git & Github', icon: <SiGit />, level: 90 },
      { name: 'Java', icon: <FaJava />, level: 80 },
      { name: 'C++', icon: <SiCplusplus />, level: 75 },
      { name: 'PHP', icon: <SiPhp />, level: 70 },
    ],
  },
  {
    name: 'Marketing & Growth',
    color: '#10b981',
    skills: [
      { name: 'TikTok', icon: <SiTiktok />, level: 92 },
      { name: 'Instagram / Reels', icon: <SiInstagram />, level: 88 },
      { name: 'YouTube Shorts', icon: <SiYoutube />, level: 85 },
      { name: 'Meta Ads', icon: <SiMeta />, level: 70 },
      { name: 'Google Analytics', icon: <SiGoogleanalytics />, level: 72 },
      { name: 'Canva / Design', icon: <SiCanva />, level: 80 },
      { name: 'Script & Storytelling', icon: <FaBullhorn />, level: 90 },
      { name: 'Growth Hacking', icon: <FaChartLine />, level: 85 },
    ],
  },
];

function SkillBar({ name, icon, level, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="skill-item__header">
        <div className="skill-item__icon" style={{ color }}>
          {icon}
        </div>
        <span className="skill-item__name">{name}</span>
        <span className="skill-item__level">{level}%</span>
      </div>
      <div className="skill-item__bar">
        <motion.div
          className="skill-item__fill"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills section-padding">
      <div className="skills__bg-orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Compétences</div>
          <h2 className="section-title">
            Mon stack technique
            <br />
            <span className="gradient-text">maîtrisé</span>
          </h2>
          <p className="section-subtitle">
            Des technologies soigneusement choisies pour bâtir des solutions robustes et scalables.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              className="skills__category glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.7 }}
            >
              <div className="skills__category-header">
                <div className="skills__category-dot" style={{ background: cat.color }} />
                <h3 className="skills__category-name">{cat.name}</h3>
              </div>
              <div className="skills__list">
                {cat.skills.map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    delay={catIdx * 0.15 + idx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos Marquee */}
        <div className="skills__marquee-wrapper">
          <div className="skills__marquee">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
              <div key={i} className="skills__marquee-item">
                <span className="skills__marquee-icon">{skill.icon}</span>
                <span className="skills__marquee-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
