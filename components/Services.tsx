import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Bot, Palette } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '0',
    title: 'Custom Web Development',
    description: 'Hand-coded websites built with modern frameworks like React and Next.js — fast, scalable, and tailored to your business goals.',
    icon: <Code size={24} />,
  },
  {
    id: '1',
    title: 'AI Integration',
    description: 'Smart features powered by AI — from chatbots and content generation to automated workflows that save you time.',
    icon: <Bot size={24} />,
  },
  {
    id: '2',
    title: 'Responsive Design',
    description: 'Pixel-perfect layouts that look and perform great on every device, from mobile phones to ultra-wide desktops.',
    icon: <Smartphone size={24} />,
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Clean, intuitive interfaces designed in Figma and brought to life with smooth animations and thoughtful interactions.',
    icon: <Palette size={24} />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-12">
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-normal text-[var(--text-primary)] mb-12"
      >
        Services
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            className="rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border)] p-10 group hover:border-[var(--accent)]/20 shadow-xl transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-6 group-hover:border-[var(--accent)]/40 transition-colors duration-300">
              {service.icon}
            </div>
            <h4 className="text-xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
              {service.title}
            </h4>
            <p className="text-[var(--text-secondary)] opacity-60 text-base font-light leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
