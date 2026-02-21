import React, { useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundEffectType } from '../types';

const HeaderParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 50,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--text-muted)]"
          style={{ 
            width: p.size, 
            height: p.size, 
            left: `${p.x}%`, 
            top: `${p.y}%`,
            willChange: 'transform'
          }}
          animate={{ y: [0, -100, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

const FullParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 0.8,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * -50,
      pathX: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      pathY: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{ 
            width: p.size, 
            height: p.size, 
            left: `${p.x}%`, 
            top: `${p.y}%`,
            opacity: p.opacity,
            boxShadow: p.size > 2.5 ? '0 0 6px rgba(255, 255, 255, 0.15)' : 'none',
            willChange: 'transform, opacity'
          }}
          animate={{ 
            x: p.pathX,
            y: p.pathY,
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay, 
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
};

const ConnectedNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    
    // Dynamic config based on screen size
    const getConfig = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      if (isMobile) {
        return {
          count: 30,
          distance: 90,
          speed: 0.5,
          opacity: 0.3
        };
      } else if (isTablet) {
        return {
          count: 50,
          distance: 130,
          speed: 0.6,
          opacity: 0.4
        };
      } else {
        return {
          count: 80,
          distance: 160,
          speed: 0.7,
          opacity: 0.5
        };
      }
    };

    let currentConfig = getConfig();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      currentConfig = getConfig();
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < currentConfig.count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * currentConfig.speed,
          vy: (Math.random() - 0.5) * currentConfig.speed,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around logic
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentConfig.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < currentConfig.distance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineOpacity = (1 - (distance / currentConfig.distance)) * 0.35;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};

const Bubbles: React.FC = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 400 + 200,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 20,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-50 overflow-hidden z-0">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-[var(--accent)] blur-[80px]"
          style={{ 
            width: b.size, 
            height: b.size, 
            left: `${b.x}%`, 
            top: `${b.y}%`,
            opacity: b.opacity,
            willChange: 'transform'
          }}
          animate={{
            x: [`${b.x}%`, `${(b.x + 30) % 100}%`, `${b.x}%`],
            y: [`${b.y}%`, `${(b.y + 30) % 100}%`, `${b.y}%`],
          }}
          transition={{ 
            duration: b.duration, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
};

const Stars: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white shadow-[0_0_4px_white]"
          style={{ 
            width: s.size, 
            height: s.size, 
            left: `${s.x}%`, 
            top: `${s.y}%`,
            willChange: 'opacity'
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
};

interface BackgroundEffectsProps {
  effect: BackgroundEffectType;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ effect }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={effect}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        {effect === 'particles' && <HeaderParticles />}
        {effect === 'full-particles' && <FullParticles />}
        {effect === 'connected' && <ConnectedNetwork />}
        {effect === 'bubbles' && <Bubbles />}
        {effect === 'stars' && <Stars />}
      </motion.div>
    </AnimatePresence>
  );
};

export default BackgroundEffects;