import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { label: 'Accueil', to: 'izidine' },
  { label: 'À propos', to: 'about' },
  { label: 'Compétences', to: 'skills' },
  { label: 'Projets', to: 'projects' },
  { label: 'Expérience', to: 'experience' },
  { label: 'Passions', to: 'hobbies' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('izidine');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="izidine" smooth={true} duration={800} className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name gradient-text">Dev</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection(item.to)}
                className={`navbar__link ${activeSection === item.to ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="contact" smooth={true} duration={800} className="btn-primary navbar__cta">
          Me contacter
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
