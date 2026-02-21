
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-light transition-all duration-200 ${
      isActive ? 'text-[var(--text-primary)] border-b border-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        <div className="flex gap-8">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>
        
        <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] transition-colors duration-200">
          <span className="text-[10px] text-[var(--text-muted)] font-light uppercase tracking-wider">Current Status:</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-xs text-green-500 font-medium">Available</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
