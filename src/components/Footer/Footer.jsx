import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="izidine" smooth={true} duration={800} className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="gradient-text">Dev</span>
              <span className="footer__logo-bracket">/&gt;</span>
            </Link>
            <p className="footer__tagline">
              Construire l'avenir numérique, <br />
              une ligne de code à la fois.
            </p>
            <div className="footer__socials">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/Izidine226', id: 'footer-github', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/izidine-nebie-483487349?utm_source=share_via&utm_content=profile&utm_medium=member_ios', id: 'footer-linkedin', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links-grid">
            <div className="footer__links-col">
              <h4 className="footer__links-title">Navigation</h4>
              <ul className="footer__links-list">
                {['izidine', 'about', 'skills', 'projects', 'experience', 'hobbies', 'contact'].map(id => (
                  <li key={id}>
                    <Link to={id} smooth={true} duration={800} offset={-80} className="footer__link">
                      {id === 'izidine' ? 'Accueil' : id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__links-title">Stack</h4>
              <ul className="footer__links-list">
                {['React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'AWS'].map(tech => (
                  <li key={tech}>
                    <span className="footer__link footer__link--muted">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__links-title">Contact</h4>
              <ul className="footer__links-list">
                <li>
                  <a href="mailto:nebieizidinemagid@gmail.com" className="footer__link">
                    nebieizidinemagid@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33621589988" className="footer__link">
                    +33 6 21 58 99 88
                  </a>
                </li>
                <li>
                  <span className="footer__link footer__link--muted">Toulouse, France 🇫🇷</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Izidine. Fait avec <FiHeart size={13} className="footer__heart" /> et beaucoup de ☕
          </p>
          <Link to="izidine" smooth={true} duration={800} className="footer__back-top" aria-label="Retour en haut">
            <FiArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
