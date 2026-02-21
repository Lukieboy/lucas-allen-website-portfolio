import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import { BackgroundEffectType } from './types';

// ScrollToTop component to handle scroll restoration on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomeView: React.FC = () => (
  <div className="relative">
    <Hero />
    <Services />
    <Projects />
    
    <div className="py-20 text-center border-t border-[var(--border)] mt-12 relative overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mb-6 tracking-tight">
        Ready to start your custom web development project?
      </h2>
      <p className="text-[var(--text-secondary)] opacity-60 mb-10 font-light max-w-xl mx-auto text-lg">
        Contact me today for a free consultation about your next website project.
      </p>
      <Link 
        to="/contact" 
        className="inline-flex items-center gap-2 px-12 py-4 rounded-full border border-[var(--accent)] text-[var(--text-primary)] font-light hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-all duration-300"
      >
        Contact Lucas
      </Link>
    </div>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();
  // State for managing background effect
  const [effect, setEffect] = useState<BackgroundEffectType>('bubbles');

  return (
    <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors duration-300 relative">
      {/* Ensure scroll to top on every navigation */}
      <ScrollToTop />
      
      {/* Global Background Effect */}
      <BackgroundEffects effect={effect} />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 min-h-[80vh] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;