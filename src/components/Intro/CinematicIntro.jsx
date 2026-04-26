import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CinematicIntro.css';

/* ── Typing Effect ─────────────────────────────────────────── */
function TypeWriter({ text, onDone }) {
  const [displayed, setDisplayed] = useState('');
  const [cursor, setCursor] = useState(true);
  const idx = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const iv = setInterval(() => {
        if (idx.current < text.length) {
          setDisplayed(text.slice(0, idx.current + 1));
          idx.current++;
        } else {
          clearInterval(iv);
          setTimeout(() => onDone?.(), 600);
        }
      }, 65);
      return () => clearInterval(iv);
    }, 800);
    return () => clearTimeout(delay);
  }, [text, onDone]);

  // blinking cursor
  useEffect(() => {
    const iv = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(iv);
  }, []);

  return (
    <span className="ci-typewriter">
      {displayed}
      <span className="ci-cursor" style={{ opacity: cursor ? 1 : 0 }}>|</span>
    </span>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export default function CinematicIntro({ onComplete }) {
  // phases: 'boot' → 'typing' → 'zoom' → 'done'
  const [phase, setPhase] = useState('boot');

  // Boot flicker → show typing
  useEffect(() => {
    const t = setTimeout(() => setPhase('typing'), 1400);
    return () => clearTimeout(t);
  }, []);

  const handleTypingDone = () => {
    setTimeout(() => setPhase('zoom'), 700);
    setTimeout(() => onComplete?.(), 2400);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="ci-overlay"
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stars background */}
          <div className="ci-stars" />
          <div className="ci-stars ci-stars--2" />

          {/* Zoom tunnel — visible during zoom phase */}
          <motion.div
            className="ci-tunnel"
            initial={{ scale: 0, opacity: 0 }}
            animate={phase === 'zoom' ? { scale: 80, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Monitor */}
          <motion.div
            className="ci-scene"
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={
              phase === 'zoom'
                ? { opacity: 0, scale: 2.5, y: -200 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={
              phase === 'zoom'
                ? { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {/* Monitor body */}
            <div className="ci-monitor">
              {/* Glare */}
              <div className="ci-monitor__glare" />

              {/* Screen */}
              <div className="ci-screen">
                {/* Boot flicker */}
                {phase === 'boot' && (
                  <motion.div
                    className="ci-screen__boot"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.3, 1, 0.5, 1] }}
                    transition={{ duration: 1.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                  >
                    <span className="ci-screen__boot-text">BIOS v2.0 · Initialisation...</span>
                  </motion.div>
                )}

                {/* Terminal content */}
                {(phase === 'typing' || phase === 'zoom') && (
                  <motion.div
                    className="ci-terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="ci-terminal__bar">
                      <span className="ci-dot ci-dot--red" />
                      <span className="ci-dot ci-dot--yellow" />
                      <span className="ci-dot ci-dot--green" />
                      <span className="ci-terminal__title">portfolio.exe</span>
                    </div>
                    <div className="ci-terminal__body">
                      <div className="ci-terminal__line">
                        <span className="ci-prompt">{'>'}</span>
                        <span className="ci-cmd"> Lancement du portfolio...</span>
                      </div>
                      <div className="ci-terminal__line ci-terminal__line--big">
                        <TypeWriter
                          text="Portfolio de Izidine"
                          onDone={handleTypingDone}
                        />
                      </div>
                      <div className="ci-terminal__line">
                        <span className="ci-prompt">{'>'}</span>
                        <span className="ci-cmd"> Dev Full Stack · Intégrateur IA · Créateur (120k+)</span>
                      </div>
                      {phase === 'zoom' && (
                        <motion.div
                          className="ci-terminal__line ci-enter"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="ci-prompt">{'>'}</span>
                          <span className="ci-cmd ci-cmd--green"> Bienvenue dans le portfolio de Izidine</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Scanlines */}
                <div className="ci-scanlines" />
                {/* Screen glow */}
                <div className="ci-screen__glow" />
              </div>

              {/* Monitor frame bottom bar */}
              <div className="ci-monitor__chin">
                <div className="ci-monitor__led" />
              </div>
            </div>

            {/* Monitor stand */}
            <div className="ci-stand">
              <div className="ci-stand__neck" />
              <div className="ci-stand__base" />
            </div>
          </motion.div>

          {/* Bottom hint */}
          {phase === 'typing' && (
            <motion.p
              className="ci-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 }}
            >
              Entrez dans le monde de Izidine...
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
