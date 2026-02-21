import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-32"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-normal mb-12 text-[var(--text-primary)]">About Lucas Allen</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg font-light leading-relaxed opacity-80">
            <p>
              I'm a web developer in Toronto who builds fast, functional websites and apps — and makes them smarter with AI.
            </p>
            <p>
              I work with modern frontend frameworks and content management systems, and I use AI tools and automation to handle the stuff that slows projects down, so the end result is cleaner code, better performance, and interfaces that actually respond to how people use them.
            </p>
            <p>
              I'm not interested in building things just to build them. Every line of code should solve a problem or move a business forward.
            </p>
            <p>
              When I'm not working, I'm usually grabbing coffee somewhere in Toronto or contributing to open-source projects focused on accessibility and web security.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-4">Core Skills</h3>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> React & Next.js</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> AI Tools & Automation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> HTML, CSS, and Javascript</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> TypeScript / Node.js</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> CMS (WordPress & Headless)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div> UI/UX Design (Figma)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;