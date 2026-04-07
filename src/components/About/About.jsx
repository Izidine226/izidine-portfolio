import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap, FiHeart } from 'react-icons/fi';
import './About.css';

const traits = [
  {
    icon: <FiCode size={22} />,
    title: 'Clean Code',
    desc: 'J\'écris du code lisible, maintenable et performant suivant les meilleures pratiques.',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Architecture',
    desc: 'Je conçois des architectures scalables et robustes pour des applications modernes.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Performance',
    desc: 'L\'optimisation est au cœur de mon travail pour une expérience utilisateur fluide.',
  },
  {
    icon: <FiHeart size={22} />,
    title: 'Passion',
    desc: 'Chaque ligne de code est une opportunité d\'innover et de créer quelque chose d\'unique.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="about__bg-orb" />
      <div className="container">
        <div className="about__grid">
          {/* Left - Image & Code Block */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="about__image-wrapper"
              style={{ y: imageY, rotate: imageRotate }}
            >
              <div className="about__image-glow" />
              <img src="/code.jpg" alt="Izidine" className="about__image" />
              <div className="about__image-border" />
            </motion.div>

            {/* Code Snippet Card */}
            <div className="about__code-card glass-card">
              <div className="about__code-header">
                <div className="about__code-dot about__code-dot--red" />
                <div className="about__code-dot about__code-dot--yellow" />
                <div className="about__code-dot about__code-dot--green" />
                <span className="about__code-filename">about.js</span>
              </div>
              <pre className="about__code-content">
                <code>
                  {`const developer = {
  name: "Izidine",
  role: "Dev Junior & IA",
  location: "Toulouse, France 🇫🇷",
  mobility: "Permis B + Véhicule",
  skills: ["React", "Node", "Python"],
  passion: "Créer l'impossible"
};`}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={ref}
            className="about__content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <div className="section-tag">À propos</div>
              <h2 className="section-title">
                Développeur passionné,<br />
                <span className="gradient-text">créateur de solutions</span>
              </h2>
            </motion.div>

            <motion.p className="about__text" variants={itemVariants}>
              En tant que développeur Full Stack junior et intégrateur IA passionné, je me spécialise
              dans la création d'applications web modernes augmentées par l'intelligence artificielle.
              Mon approche combine les dernières technologies web avec les outils IA pour construire
              des produits innovants qui repoussent les limites.
            </motion.p>

            <motion.p className="about__text" variants={itemVariants}>
              Ma règle d'or : écrire un code propre, clair et sans prise de tête. Prêt à rejoindre une équipe pour relever de nouveaux défis ! Je maîtrise aussi bien le front-end que le back-end,
              avec une expertise particulière en React, Node.js et architecture cloud.
            </motion.p>

            {/* Traits Grid */}
            <motion.div className="about__traits" variants={containerVariants}>
              {traits.map((trait) => (
                <motion.div key={trait.title} className="about__trait glass-card" variants={itemVariants}>
                  <div className="about__trait-icon">
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className="about__trait-title">{trait.title}</h4>
                    <p className="about__trait-desc">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
