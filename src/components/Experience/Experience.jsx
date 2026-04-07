import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    id: 'exp-1',
    period: '2022 – 2025',
    role: 'Équipier Polyvalent',
    company: 'McDonald\'s',
    location: 'Toulouse, France',
    type: 'Job étudiant',
    color: '#8b5cf6',
    emoji: '🍔',
    description: 'Gestion du stress en période de rush, travail d\'équipe et rigueur au sein d\'un environnement de restauration rapide.',
    highlights: [
      'Gestion efficace du stress en forte affluence',
      'Travail en équipe et grande coordination',
      'Rigueur dans le respect des processus d\'hygiène',
    ],
  },
  {
    id: 'exp-1a',
    period: '08/05/2023 – 25/06/2023',
    role: 'Stagiaire (Gestion & Outils Numériques)',
    company: 'CCAS de Colomiers',
    location: 'Colomiers, France',
    type: 'Stage',
    color: '#3b82f6',
    emoji: '📄',
    description: 'Traitement numérique des informations, tri et organisation des dossiers, et accompagnement du public.',
    highlights: [
      'Utilisation quotidienne des systèmes d\'information et des logiciels professionnels',
      'Gestion des données : Traitement numérique, tri et organisation des dossiers',
      'Support et aide : Accompagnement du public pour répondre à leurs demandes'
    ],
  },
  {
    id: 'exp-1b',
    period: '2022',
    role: 'Bénévole',
    company: 'AFEV',
    location: 'Toulouse, France',
    type: 'Bénévolat',
    color: '#10b981',
    emoji: '🤝',
    description: 'Accompagnement personnalisé d\'un jeune pour favoriser son développement et son épanouissement.',
    highlights: [
      'Accompagnement d\'un usager dans son parcours',
      'Faire preuve d\'écoute active envers ses besoins',
      'Être force de propositions pour des activités socio-éducatives',
      'Respect rigoureux des mesures mises en place',
    ],
  },
  {
    id: 'exp-2',
    period: 'Été 2021',
    role: 'Assistant Informatique',
    company: 'Service Informatique',
    location: 'Burkina Faso',
    type: 'Job d\'été',
    color: '#06b6d4',
    emoji: '💻',
    description: 'Aide technique, dépannage et installation de logiciels sur site. Assister les utilisateurs au quotidien pour résoudre leurs problèmes IT.',
    highlights: [
      'Support technique et aide aux utilisateurs',
      'Diagnostic et dépannage de matériel',
      'Installation et configuration de logiciels système',
    ],
  }
];

const educations = [
  {
    period: '2025 – 2026',
    degree: 'Licence 3 Informatique',
    school: 'Université Toulouse - Jean Jaurès',
    field: 'Spécialité Informatique',
    color: '#ec4899',
  },
  {
    period: '2024 – 2025',
    degree: 'Licence 2 MIASHS(mathématiques et informatique appliquées aux sciences humaines et sociales) ',
    school: 'Université Toulouse - Jean Jaurès',
    field: 'Informatique Appliquée',
    color: '#8b5cf6',
  },
  {
    period: '2023 – 2024',
    degree: 'Licence 1 MIASHS(mathématiques et informatique appliquées aux sciences humaines et sociales) ',
    school: 'Université Toulouse - Jean Jaurès',
    field: 'Spécialité Informatique',
    color: '#06b6d4',
  },
  {
    period: '2022',
    degree: 'Baccalauréat Scientifique',
    school: 'Complexe Scolaire Horizon International',
    field: 'Série Scientifique',
    color: '#10b981',
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience section-padding">
      <div className="experience__bg-orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Expérience</div>
          <h2 className="section-title">
            Mon parcours<br />
            <span className="gradient-text">professionnel</span>
          </h2>
          <p className="section-subtitle">
            Mon parcours académique et mes expériences professionnelles.
          </p>
        </motion.div>

        <div className="experience__layout">
          {/* Timeline */}
          <div className="experience__timeline">
            <div className="experience__timeline-line" />
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="exp-card"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="exp-card__dot" style={{ background: exp.color, boxShadow: `0 0 15px ${exp.color}80` }} />

                <div className="exp-card__content glass-card">
                  <div className="exp-card__bg-emoji">
                    {exp.emoji}
                  </div>
                  <div className="exp-card__header">
                    <div>
                      <div className="exp-card__meta">
                        <span className="exp-card__period">
                          <FiCalendar size={12} />
                          {exp.period}
                        </span>
                        <span className="exp-card__location">
                          <FiMapPin size={12} />
                          {exp.location}
                        </span>
                        <span
                          className="exp-card__type"
                          style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}10` }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="exp-card__role">{exp.role}</h3>
                      <div className="exp-card__company">
                        <FiBriefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <p className="exp-card__desc">{exp.description}</p>

                  <ul className="exp-card__highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="exp-card__highlight">
                        <span className="exp-card__highlight-dot" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="experience__education">
            <motion.h3
              className="experience__edu-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Formation
            </motion.h3>
            {educations.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                className="edu-card glass-card"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
              >
                <div className="edu-card__period">{edu.period}</div>
                <h4 className="edu-card__degree">{edu.degree}</h4>
                <div className="edu-card__school">{edu.school}</div>
                <div
                  className="edu-card__field"
                  style={{ color: edu.color, borderColor: `${edu.color}40`, background: `${edu.color}10` }}
                >
                  {edu.field}
                </div>
                <div className="edu-card__bar" style={{ background: `${edu.color}20` }}>
                  <div className="edu-card__bar-fill" style={{ background: edu.color }} />
                </div>
              </motion.div>
            ))}


          </div>
        </div>
      </div>
    </section>
  );
}
