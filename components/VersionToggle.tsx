
import React from 'react';
import { Layers, Zap } from 'lucide-react';

interface VersionToggleProps {
  isCreative: boolean;
  onToggle: () => void;
}

const VersionToggle: React.FC<VersionToggleProps> = ({ isCreative, onToggle }) => {
  return (
    <div className="fixed bottom-24 right-8 z-[100] flex flex-col items-end gap-3">
      <button
        onClick={onToggle}
        className="group relative flex items-center gap-3 px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          {isCreative ? (
            <>
              <Zap size={18} className="text-[var(--accent)]" />
              <span className="text-xs font-bold text-[var(--text-primary)] tracking-tight">Creative Mode</span>
            </>
          ) : (
            <>
              <Layers size={18} className="text-[var(--text-muted)]" />
              <span className="text-xs font-bold text-[var(--text-secondary)] tracking-tight">Classic Mode</span>
            </>
          )}
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
          Switch to {isCreative ? 'Classic' : 'Creative'} View
        </div>
      </button>
    </div>
  );
};

export default VersionToggle;
