
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Discovery',
    text: 'Deep dive into your business objectives, technical requirements, and target users.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Blueprint',
    text: 'Wireframing, architecture design, and high-fidelity UI/UX prototyping.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Build',
    text: 'Agile development with clean code, scalability, and performance at the core.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Launch',
    text: 'Rigorous testing, SEO optimization, and deployment to production-grade servers.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--accent)] mb-4">The Workflow</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">From Concept to Code.</h3>
        </div>
        <p className="max-w-md text-[var(--text-secondary)] font-light opacity-60 text-lg leading-relaxed">
          I follow a proven four-step process to ensure every project exceeds expectations and drives business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-10 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border)] group hover:border-[var(--accent)]/50 transition-all duration-200"
          >
            <div className="absolute top-6 right-8 text-7xl font-black text-[var(--border)] group-hover:text-[var(--accent)]/5 transition-colors duration-200 pointer-events-none select-none">
              0{i + 1}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-8 shadow-inner transition-colors duration-200">
              {step.icon}
            </div>
            <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{step.title}</h4>
            <p className="text-sm font-light text-[var(--text-secondary)] opacity-50 leading-relaxed">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
