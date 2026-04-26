import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFutbol, FaChessKnight, FaGamepad, FaFilm, FaBook, FaRobot, FaLightbulb, FaBullhorn } from 'react-icons/fa';
import './Hobbies.css';

const hobbies = [
  {
    id: 'h1',
    title: 'Football',
    description: "Esprit d'équipe, goût de l'effort et dépassement de soi.",
    icon: <FaFutbol />,
    color: '#10b981'
  },
  {
    id: 'h2',
    title: 'Échecs',
    description: "Stratégie, anticipation et réflexion analytique.",
    icon: <FaChessKnight />,
    color: '#8b5cf6'
  },
  {
    id: 'h3',
    title: 'Console',
    description: "Résolution d'énigmes et moments de convivialité en équipe.",
    icon: <FaGamepad />,
    color: '#ec4899'
  },
  {
    id: 'h4',
    title: 'Cinéma',
    description: "Inspiration, évasion et appréciation artistique.",
    icon: <FaFilm />,
    color: '#06b6d4'
  },
  {
    id: 'h5',
    title: 'Lecture',
    description: "Apprentissage continu et découverte de nouveaux univers.",
    icon: <FaBook />,
    color: '#f59e0b'
  },
  {
    id: 'h6',
    title: 'Création de Contenu IA',
    description: "Construire des médias viraux grâce à l'automatisation et à l'IA générative. +120k abonnés cumulés.",
    icon: <FaRobot />,
    color: '#8b5cf6'
  },
  {
    id: 'h7',
    title: 'Entrepreneuriat',
    description: "Concevoir des projets à impact, tester des idées et construire quelque chose de sa tête.",
    icon: <FaLightbulb />,
    color: '#f59e0b'
  },
  {
    id: 'h8',
    title: 'Veille Tech & IA',
    description: "Suivre les dernières tendances IA, tester de nouveaux outils et toujours avoir un temps d'avance.",
    icon: <FaBullhorn />,
    color: '#06b6d4'
  }
];

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="hobbies" className="hobbies section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="hobbies__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Passions</div>
          <h2 className="section-title">Mes <span className="gradient-text">Centres d'intérêt</span></h2>
          <p className="section-subtitle">
            Ce qui m'anime au quotidien en dehors des lignes de code.
          </p>
        </motion.div>

        <motion.div 
          className="hobbies__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {hobbies.map((hobby) => (
            <motion.div 
              key={hobby.id} 
              className="hobby-card glass-card"
              variants={itemVariants}
            >
              <div className="hobby-card__bg-icon" style={{ color: hobby.color }}>
                {hobby.icon}
              </div>
              <div 
                className="hobby-card__icon"
                style={{ color: hobby.color, background: `${hobby.color}15`, border: `1px solid ${hobby.color}30` }}
              >
                {hobby.icon}
              </div>
              <h3 className="hobby-card__title">{hobby.title}</h3>
              <p className="hobby-card__desc">{hobby.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
