
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 
  'GraphQL', 'Framer Motion', 'Docker', 'AWS', 'WordPress', 'Shopify', 'Three.js'
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 border-y border-[var(--border)] overflow-hidden bg-[var(--bg-secondary)]/30 backdrop-blur-sm">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <motion.div 
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array(4).fill(technologies).flat().map((tech, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-5xl font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-default select-none opacity-40 hover:opacity-100 px-4"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
