import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'nebieizidinemagid@gmail.com',
    href: 'mailto:nebieizidinemagid@gmail.com',
    id: 'contact-email',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Téléphone',
    value: '06 21 58 99 88',
    href: 'tel:+33621589988',
    id: 'contact-phone',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Localisation',
    value: 'Toulouse, France',
    href: null,
    id: 'contact-location',
  },
];

const socials = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/Izidine226', label: 'GitHub', id: 'contact-github' },
  { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/izidine-nebie-483487349/', label: 'LinkedIn', id: 'contact-linkedin' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/nebieizidinemagid@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: "Nouveau message depuis le portfolio !"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus('error');
    }
    
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="contact__bg-orb contact__bg-orb--1" />
      <div className="contact__bg-orb contact__bg-orb--2" />
      <div className="container">
        <motion.div
          ref={ref}
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Contact</div>
          <h2 className="section-title">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="section-subtitle">
            Vous avez un projet en tête ? Je suis disponible pour en discuter.
            N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info Panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact__info-card glass-card">
              <h3 className="contact__info-title">Informations</h3>
              <p className="contact__info-desc">
                Disponible pour des missions freelance, des CDI et des collaborations sur 
                des projets passionnants. Réponse garantie sous 24h.
              </p>

              <div className="contact__info-items">
                {contactInfo.map((item) => (
                  <div key={item.id} className="contact__info-item">
                    <div className="contact__info-icon">{item.icon}</div>
                    <div>
                      <div className="contact__info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} id={item.id} className="contact__info-value contact__info-value--link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    id={s.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>

              {/* Availability Badge */}
              <div className="contact__availability">
                <div className="contact__avail-dot" />
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className={`contact__field ${focused === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                  <label htmlFor="name" className="contact__label">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="contact__input"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div className={`contact__field ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                  <label htmlFor="email" className="contact__label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="contact__input"
                    placeholder="jean@example.com"
                    required
                  />
                </div>
              </div>

              <div className={`contact__field ${focused === 'subject' ? 'focused' : ''} ${formData.subject ? 'filled' : ''}`}>
                <label htmlFor="subject" className="contact__label">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  className="contact__input"
                  placeholder="Projet de développement web..."
                  required
                />
              </div>

              <div className={`contact__field ${focused === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="contact__input contact__textarea"
                  placeholder="Décrivez votre projet ou votre besoin..."
                  rows={5}
                  required
                />
              </div>

              {status === 'success' && (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message envoyé ! Je vous répondrai dans les 24h.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="contact__success"
                  style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Une erreur est survenue lors de l'envoi.
                </motion.div>
              )}

              <button
                type="submit"
                className="btn-primary contact__submit"
                id="contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <div className="contact__spinner" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
