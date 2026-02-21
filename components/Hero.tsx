import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-16 text-center min-h-[80vh] flex flex-col justify-center bg-transparent">
      <div className="relative z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-normal text-[var(--text-primary)] mb-8 tracking-tight leading-[1.05]"
        >
          Hi, I'm Lucas Allen – <span className="opacity-60">Web Developer In Toronto</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-light text-[var(--text-secondary)] mb-8 transition-colors"
        >
          Custom Web Development Services in Toronto
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed font-light text-base mb-12 opacity-70"
        >
          I am a freelance web developer based in Toronto, specializing in responsive website design, custom web development, and AI-based optimization. With expertise in HTML, CSS, Javascript and WordPress.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link 
            to="/portfolio" 
            className="group flex items-center gap-2 px-10 py-4 border border-[var(--text-primary)]/20 text-[var(--text-primary)] font-light rounded-full text-sm transition-all duration-200 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent)]/40"
          >
            View Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link 
            to="/contact" 
            className="px-10 py-4 border border-[var(--text-primary)]/20 text-[var(--text-primary)] rounded-full text-sm font-medium hover:bg-[var(--bg-secondary)] hover:border-[var(--accent)]/40 transition-all duration-200"
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;