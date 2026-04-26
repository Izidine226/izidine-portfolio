import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Izidine.css';

const socialLinks = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/Izidine226', label: 'GitHub', id: 'social-github' },
  { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/izidine-nebie-483487349/', label: 'LinkedIn', id: 'social-linkedin' },
];

const floatingTags = [
  { text: 'Next.js', top: '15%', left: '8%', delay: 0 },
  { text: 'n8n · IA', top: '28%', right: '6%', delay: 0.4 },
  { text: 'TypeScript', bottom: '35%', left: '5%', delay: 0.8 },
  { text: '120k Abonnés', bottom: '20%', right: '8%', delay: 1.2 },
];

export default function Izidine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.color = Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 35; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="Izidine" className="Izidine">
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="Izidine__canvas" />

      {/* Glow Orbs */}
      <div className="Izidine__orb Izidine__orb--1" />
      <div className="Izidine__orb Izidine__orb--2" />
      <div className="Izidine__orb Izidine__orb--3" />

      {/* Floating Tech Tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={tag.text}
          className="Izidine__floating-tag"
          style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + tag.delay, duration: 0.5 }}
        >
          <span className="Izidine__floating-tag-dot" />
          {tag.text}
        </motion.div>
      ))}

      <div className="container Izidine__container">
        {/* Social Links */}
        <motion.div
          className="Izidine__social"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="Izidine__social-link"
              id={social.id}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
          <div className="Izidine__social-line" />
        </motion.div>

        {/* Main Content */}
        <div className="Izidine__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag Izidine__tag">
              <span className="Izidine__tag-dot" />
              Disponible pour des projets
            </div>
          </motion.div>

          <motion.h1
            className="Izidine__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Bonjour, je suis<br />
            <span className="gradient-text">Izidine</span>
          </motion.h1>

          <motion.div
            className="Izidine__type-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <span className="Izidine__type-prefix">Je suis </span>
            <TypeAnimation
              sequence={[
                'Développeur Full Stack',
                2000,
                'Intégrateur IA & Automatisation',
                2000,
                'Créateur de Contenu (120k+)',
                2000,
                'Stratège Social Media',
                2000,
                'Passionné de tech & IA',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="Izidine__type-text"
            />
          </motion.div>

          <motion.p
            className="Izidine__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Développeur Full Stack & Intégrateur IA, je construis des pipelines d'automatisation,
            des agents intelligents et des applications web modernes. Créateur de contenu avec
            +120 000 abonnés cumulés — je marie la tech et la viralité pour créer un impact réel.
          </motion.p>

          <motion.div
            className="Izidine__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <Link to="projects" smooth={true} duration={800} offset={-80}>
              <button className="btn-primary" id="Izidine-projects-btn">
                Voir mes projets
                <FiArrowDown size={16} />
              </button>
            </Link>
            <a href="/cv.pdf" download className="btn-secondary" id="Izidine-cv-btn">
              Télécharger CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="Izidine__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            {[
              { value: '120k+', label: 'Abonnés cumulés' },
              { value: '10+', label: 'Projets réalisés' },
              { value: '100%', label: 'Passion IA' },
            ].map((stat, i) => (
              <div key={i} className="Izidine__stat">
                <span className="Izidine__stat-value gradient-text">{stat.value}</span>
                <span className="Izidine__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Avatar / Image */}
        <motion.div
          className="Izidine__avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Rotating gradient border frame */}
          <div className="Izidine__avatar-frame">
            <div className="Izidine__avatar-ring Izidine__avatar-ring--1" />
            <div className="Izidine__avatar-ring Izidine__avatar-ring--2" />
            <div className="Izidine__avatar-glow" />
            <div className="Izidine__avatar">
              <img src="/izidine.jpg" alt="Izidine - Développeur Full-Stack" />
            </div>
          </div>
          <div className="Izidine__avatar-badge">
            <span className="Izidine__badge-dot" />
            Open to work
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="Izidine__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Link to="about" smooth={true} duration={800} offset={-80}>
          <div className="Izidine__scroll-mouse">
            <div className="Izidine__scroll-wheel" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
