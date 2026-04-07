import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss, SiExpress, SiMysql, SiPhp, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    name: 'Front-End',
    color: '#8b5cf6',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'React.js', icon: <SiReact />, level: 85 },
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
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
    ],
  },
  {
    name: 'Classique & DevOps',
    color: '#ec4899',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 80 },
      { name: 'C++', icon: <SiCplusplus />, level: 75 },
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'PHP', icon: <SiPhp />, level: 70 },
      { name: 'Docker', icon: <SiDocker />, level: 80 },
      { name: 'Git & Github', icon: <SiGit />, level: 90 },
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
