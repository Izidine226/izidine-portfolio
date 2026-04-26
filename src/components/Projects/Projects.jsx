import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 'proj-0',
    title: 'Studio Vidéo IA Automatisé 🚧',
    category: 'Automatisation',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Docker', 'Python', 'Go', 'Tailwind CSS'],
    description: 'Pipeline 100% automatisé pour générer des vidéos cinématiques & dynamiques via Next.js, Supabase et Docker. (En cours – Stage Devadory)',
    longDesc: 'Conception d\'un studio vidéo entièrement automatisé chez Devadory utilisant une stack moderne : Next.js, TypeScript et Supabase (Middleware/PostgreSQL). Le pipeline couple des API de génération d\'images et de vidéos (Kling AI) orchestrées par Docker et des services en Python/Go. Intégration de flux complexes de clonage vocal et synchronisation labiale. Gestion de la stratégie de contenu TikTok pour l\'acquisition client.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    emoji: '🎬',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'proj-0b',
    title: 'TikTok Creator Assistant 🤖',
    category: 'Automatisation',
    tags: ['n8n', 'OpenAI API', 'GPT-4o-mini', 'SerpAPI', 'JavaScript', 'Prompt Engineering'],
    description: 'Agent IA conversationnel sur n8n qui aide les créateurs TikTok à analyser leur contenu, détecter les tendances et générer des scripts avec export PDF.',
    longDesc: 'Agent IA complet construit sur n8n aidant les créateurs TikTok à booster leur audience. Analyse les vidéos avec un diagnostic noté /10, détecte les tendances en temps réel via SerpAPI, génère des scripts complets avec indications de montage, calcule les revenus potentiels et crée des calendriers éditoriaux personnalisés. Adapte automatiquement le contenu pour YouTube Shorts, Reels et LinkedIn.\n\nArchitecture : Chat Trigger → AI Agent (GPT-4o-mini) + 4 outils (SerpAPI, HTTP Request, Code Tool, Vision IA) + Mémoire conversationnelle + Export PDF automatique.',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    emoji: '🎯',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'proj-0c',
    title: 'Média IA & Personal Branding 📱',
    category: 'Automatisation',
    tags: ['TikTok', 'YouTube Shorts', 'IA Générative', 'Storytelling', 'Script Writing', 'Growth Hacking'],
    description: 'Création de plusieurs médias viraux cumulant +120 000 abonnés : fictions vidéo générées par IA (100k+) et personal branding à fort engagement (20k+).',
    longDesc: 'Construction from scratch de plusieurs communautés cumulant +120 000 abonnés :\n\n🎬 Automatisation & Storytelling (100k+ abonnés) : Création d\'un média narratif basé sur des fictions vidéo entièrement générées par l\'IA générative.\n\n👤 Personal Branding (20k+ abonnés) : Réalisation et montage d\'une chaîne incarnée avec un fort taux d\'engagement.\n\n🧠 Expertise Algorithmique : Scripts optimisés avec vocabulaire accessible et situations universelles pour maximiser la rétention et contourner les filtres de modération. Maîtrise des algorithmes TikTok, YouTube Shorts et Instagram Reels.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
    emoji: '🚀',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'proj-1',
    title: 'Simulateur d\'Entretien IA',
    category: 'IA',
    tags: ['Node.js', 'Express', 'MySQL', 'OpenAI'],
    description: 'Outil innovant pour s\'entraîner aux entretiens d\'embauche avec ChatGPT générant des questions sur mesure.',
    longDesc: 'Un simulateur d\'entretien 100 % vocal : vous parlez, et l\'IA vous écoute et vous répond de vive voix, comme un vrai recruteur ! Derrière, une technologie solide (Node.js / OpenAI) et un système d\'authentification totalement sécurisé protègent vos données.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    emoji: '🤖',
    live: 'https://assistant-job.vercel.app/',
    github: 'https://github.com/gameur241/assistant_job',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'League Of Stones',
    category: 'Web',
    tags: ['React', 'Express', 'MongoDB'],
    description: 'Jeu de cartes sur navigateur mélangeant Hearthstone et League of Legends.',
    longDesc: 'Un mashup ludique avec interface fluide et responsive, serveur Express et base MongoDB. Logique de requêtes AJAX pour interagir avec le jeu en temps réel.',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    emoji: '🃏',
    live: '#',
    github: 'https://mi-git.univ-tlse2.fr/projet_web/projet_web',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Gestion des Vols (Police)',
    category: 'Logiciel',
    tags: ['Java', 'UML', 'Design Patterns'],
    description: 'Application de gestion des rapports de vols pour les commissariats.',
    longDesc: 'Application de bureau robuste en Java. Conception stricte avec modélisation UML (diagrammes de classes, séquences, cas d\'utilisation) et implémentation du pattern Observer pour la réactivité.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    emoji: '🚔',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'proj-4',
    title: 'Analyse Rugby Pro',
    category: 'Data Science',
    tags: ['R', 'Rmarkdown', 'ACP'],
    description: 'Analyse statistique approfondie des profils de joueurs de rugby.',
    longDesc: 'Application de l\'Analyse en Composantes Principales (ACP) sur un dataset de joueurs (saison 23-24). Mise en évidence des corrélations entre mensurations et victoires.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    emoji: '🏉',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Domotique IoT',
    category: 'IoT',
    tags: ['Python', 'Automation', 'IoT'],
    description: 'Scripting et automatisation pour piloter des objets connectés à domicile.',
    longDesc: 'Projet personnel pour automatiser la maison (lumières, capteurs) via des scripts Python et des protocoles IoT locaux.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    emoji: '🏠',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Rénov\'Toi (En cours)',
    category: 'Startup',
    tags: ['CEO', 'Écologie', 'SaaS'],
    description: 'Plateforme solidaire connectant les particuliers avec des artisans réparateurs locaux.',
    longDesc: 'Mon projet entrepreneurial actuel. Plateforme écologique de mise en relation client-artisan pour limiter les déchets, avec un modèle économique par commission/abonnement.',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    emoji: '🌱',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'proj-7',
    title: 'Boutique de sites web (À venir)',
    category: 'Web',
    tags: ['E-commerce', 'Portfolio', 'Templates'],
    description: 'Vente de sites prêts à l\'emploi (boutiques, portfolios).',
    longDesc: 'Un projet visant à fournir des solutions web clés en main pour des clients cherchant à se lancer rapidement. Je proposerai des templates modernes, esthétiques et performants pour la vente et la présentation.',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    emoji: '🛒',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'proj-8',
    title: 'Créateur de CV Automatisé (À venir)',
    category: 'Web',
    tags: ['SaaS', 'PDF', 'Automatisation'],
    description: 'Un outil qui génère un CV pro instantanément selon les infos saisies.',
    longDesc: 'Une application permettant à quiconque de remplir un formulaire simple pour générer un CV au design premium, prêt à l\'emploi. Le système formatera automatiquement les données avec des designs optimisés pour les recruteurs.',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    emoji: '📄',
    live: '#',
    github: '#',
    featured: false,
  },
];

const filters = ['Tous', 'Automatisation', 'Web', 'IA', 'Logiciel', 'Data Science', 'IoT', 'Startup'];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <button className="project-modal__close" onClick={onClose} aria-label="Fermer">
          <FiX size={20} />
        </button>

        <div className="project-modal__izidine" style={{ background: project.gradient }}>
          <span className="project-modal__emoji">{project.emoji}</span>
        </div>

        <div className="project-modal__body">
          <div className="project-modal__meta">
            <span className="project-modal__category" style={{ color: project.color }}>
              {project.category}
            </span>
            <h3 className="project-modal__title">{project.title}</h3>
            <p className="project-modal__desc">{project.longDesc}</p>
          </div>

          <div className="project-modal__tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag" style={{ '--tag-color': project.color }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="project-modal__actions">
            {project.live && project.live !== '#' && (
              <a href={project.live} className="btn-primary" id={`${project.id}-live`} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size={15} />
                Voir le projet
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a href={project.github} className="btn-secondary" id={`${project.id}-github`} target="_blank" rel="noopener noreferrer">
                <FiGithub size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="projects__bg-orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Projets</div>
          <h2 className="section-title">
            Ce que j'ai <span className="gradient-text">construit</span>
          </h2>
          <p className="section-subtitle">
            Une sélection de projets démontrant mes compétences techniques et ma créativité.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`projects__filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              id={`filter-${filter.toLowerCase().replace(' ', '-')}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card__bg-emoji">
                  {project.emoji}
                </div>
                <div className="project-card__bg" style={{ background: project.gradient }} />

                <div className="project-card__top">
                  <div className="project-card__icon-wrapper" style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}>
                    <span className="project-card__emoji">{project.emoji}</span>
                  </div>
                  <div className="project-card__links">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        className="project-card__link"
                        onClick={e => e.stopPropagation()}
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        className="project-card__link"
                        onClick={e => e.stopPropagation()}
                        aria-label="Voir le projet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card__content">
                  <span className="project-card__category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                </div>

                <div className="project-card__tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="project-tag" style={{ '--tag-color': project.color }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-tag">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="project-card__arrow">
                  <FiExternalLink size={14} />
                  Voir les détails
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
