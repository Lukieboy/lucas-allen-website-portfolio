
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Sam',
    text: 'Lucas Allen did an amazing job on my landing page. He finished everything in just one week, and the page ...',
    rating: 5,
    date: 'September 22, 2025',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: '2',
    name: 'Ankit Kushwaha',
    text: 'Working with Lucas was an excellent experience. He was fast, efficient, and delivered a website that exce ...',
    rating: 5,
    date: 'August 23, 2025',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: '3',
    name: 'Tarunpreet Kaur',
    text: 'Lucas is a talented developer with a knack of developing exactly what the client wants. I worked with Luc ...',
    rating: 5,
    date: 'July 30, 2025',
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    id: '4',
    name: 'Oxsys Systems',
    text: 'Excellent professionalism, well coordinated, delivered in time, rightly charged, a dedicated coder, stron ...',
    rating: 5,
    date: 'November 7, 2024',
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <h3 className="text-3xl font-normal text-[var(--text-primary)] mb-12">Testimonials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {testimonials.map((t) => (
          <div key={t.id} className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col h-full transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--border)] overflow-hidden flex-shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[var(--text-primary)] text-sm font-medium">{t.name}</h4>
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
            <p className="text-[var(--text-secondary)] opacity-70 text-xs font-light leading-relaxed mb-6 flex-grow italic transition-colors">
              "{t.text}"
            </p>
            <div className="text-[10px] text-[var(--text-muted)] font-light mt-auto">
              {t.date}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-8 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium hover:opacity-90 transition-all duration-300">
          Read More Reviews
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
