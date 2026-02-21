import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] py-24 border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed mb-8 transition-colors max-w-sm">
              Lucas Allen is an experienced web developer in Canada, specializing in responsive, 
              user-friendly websites and custom solutions to grow your business. Contact today.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Lukieboy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucas-allen-canada/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:lucasallen624@gmail.com" 
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h5 className="text-[var(--text-primary)] text-sm font-medium mb-6">Site Link</h5>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="text-[var(--text-muted)] text-sm font-light hover:text-[var(--text-primary)] transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  onClick={scrollToTop}
                  className="text-[var(--text-muted)] text-sm font-light hover:text-[var(--text-primary)] transition-colors inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={scrollToTop}
                  className="text-[var(--text-muted)] text-sm font-light hover:text-[var(--text-primary)] transition-colors inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="text-[var(--text-muted)] text-sm font-light hover:text-[var(--text-primary)] transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-[11px] font-light">
            © 2026 Lucas Allen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;