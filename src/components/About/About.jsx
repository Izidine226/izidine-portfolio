import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap, FiHeart } from 'react-icons/fi';
import './About.css';

const traits = [
  {
    icon: <FiCode size={22} />,
    title: 'Dev Full Stack',
    desc: 'Je construis des apps web modernes de bout en bout avec Next.js, TypeScript et Supabase.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'IA & Automatisation',
    desc: 'Je conçois des pipelines d\'automatisation et des agents IA (n8n, OpenAI, Kling AI).',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Créateur de Contenu',
    desc: '+120 000 abonnés cumulés. Je maîtrise les algorithmes TikTok, Shorts et Reels.',
  },
  {
    icon: <FiHeart size={22} />,
    title: 'Impact Réel',
    desc: 'Je marie la tech et la viralité pour créer des produits qui ont un impact concret.',
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
                  {`const izidine = {
  name: "Izidine Nébié",
  role: "Dev Full Stack & IA",
  location: "Toulouse, France 🇫🇷",
  stage: "Devadory (2026)",
  creator: "+120k abonnés cumulés",
  stack: ["Next.js", "n8n", "OpenAI"],
  passion: "Tech + viralité"
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
                Développeur & Créateur,<br />
                <span className="gradient-text">IA et viralité</span>
              </h2>
            </motion.div>

            <motion.p className="about__text" variants={itemVariants}>
              Développeur Full Stack & Intégrateur IA en stage chez <strong>Devadory</strong>, je construis
              des pipelines vidéo automatisés, des agents IA et des applications web modernes avec
              Next.js, TypeScript, Supabase et Docker. Je transforme les idées en produits qui tournent
              vraiment.
            </motion.p>

            <motion.p className="about__text" variants={itemVariants}>
              Mais je ne suis pas que dev : créateur de contenu avec <strong>+120 000 abonnés cumulés</strong>,
              je maîtrise les algorithmes TikTok, YouTube Shorts et Reels. Je sais comment écrire des
              scripts qui accrochent, comment la tech peut amplifier la viralité — et je mets
              les deux ensemble.
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
