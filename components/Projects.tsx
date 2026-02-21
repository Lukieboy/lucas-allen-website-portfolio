import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '2',
    title: 'UNA-Canada Gala',
    description: "A prestigious digital destination for the United Nations Association in Canada's Global Citizen Award Gala. It features an elegant dark-mode aesthetic with refined golden accents, designed to promote global citizenship and high-impact philanthropy.",
    imageUrl: 'https://i.postimg.cc/43zLJ5s8/Screenshot-2026-02-19-at-6-22-50-PM.png',
    link: 'https://unac-giving.org/',
  },
  {
    id: '0',
    title: 'Midnight Barbershop',
    description: 'A sophisticated online presence for a premium barbershop. This project features a high-contrast dark aesthetic, integrated booking system, and detailed service menus designed for a seamless mobile-first user experience.',
    imageUrl: 'https://i.postimg.cc/wTTS0SgB/Screenshot-2026-02-19-at-9-58-08-PM.png',
    link: 'https://lukieboy.github.io/Midnight-Barbershop/',
  },
  {
    id: '3',
    title: 'Expert Cleaning',
    description: 'Creating cleaner, healthier spaces so you can focus on what matters most and relax on the weekends.',
    imageUrl: 'https://i.postimg.cc/V6fRzP7k/Screenshot-2026-02-06-at-5-25-14-PM.png',
    link: 'https://lukieboy.github.io/Cleaners/',
  },
  {
    id: '1',
    title: 'Eclat Gallery',
    description: 'A premium art gallery platform showcasing "The New Seven Artists". Designed with a focus on high-end minimalist aesthetics and smooth curation workflows.',
    imageUrl: 'https://i.postimg.cc/1tmHy1Wf/Screenshot-2026-02-05-at-10-38-07-PM.png',
    link: 'https://eclatgallery.ca/',
  }
];

const Projects: React.FC = () => {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';

  // Changed from slice(0, 3) to slice(0, 2) to show only two projects on homepage
  const displayProjects = isPortfolioPage ? projects : projects.slice(0, 2);
  
  // Both home and portfolio pages now use a 2-column grid for consistent sizing
  const gridCols = 'md:grid-cols-2';
  const sectionPadding = isPortfolioPage ? 'pt-44 pb-20' : 'py-12';

  return (
    <section className={sectionPadding}>
      <motion.h3 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-normal text-[var(--text-primary)] mb-12" 
        id="portfolio"
      >
        Key Projects
      </motion.h3>
      
      <div className={`grid grid-cols-1 ${gridCols} gap-8 mb-16`}>
        {displayProjects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
            }}
            className="rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden group hover:border-[var(--accent)]/20 shadow-xl transition-colors duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[var(--border)] relative">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-10">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-normal text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h4>
                {isPortfolioPage && project.link !== '#' && (
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold px-3 py-1 border border-[var(--border)] rounded-full">
                    Live Site
                  </span>
                )}
              </div>
              
              <p className="text-[var(--text-secondary)] opacity-60 text-base font-light leading-relaxed mb-8 group-hover:opacity-100 transition-opacity duration-300 h-12 overflow-hidden">
                {project.description}
              </p>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-light hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] hover:border-[var(--accent)] transition-all duration-300 group/btn"
              >
                Launch Website
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      {!isPortfolioPage && (
        <div className="text-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-semibold hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-all duration-300 shadow-xl"
            onClick={() => window.location.hash = '#/portfolio'}
          >
            Explore All Works
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;