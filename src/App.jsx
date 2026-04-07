import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Izidine from './components/Izidine/Izidine';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CinematicIntro from './components/Intro/CinematicIntro';
import './App.css';

function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="app noise-bg">
      <CursorGlow />

      <AnimatePresence>
        {!introComplete && (
          <CinematicIntro key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar />
          <main>
            <Izidine />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Hobbies />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
