import { useEffect, useRef, useState } from 'react';

interface Molecule {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: 'white' | 'pink' | 'purple';
}

const MoleculeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moleculesRef = useRef<Molecule[]>([]);
  const animationRef = useRef<number>();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createMolecules = () => {
      // Reduce particle count significantly on mobile
      const densityFactor = isMobile ? 80000 : 25000;
      const count = Math.floor((canvas.width * canvas.height) / densityFactor);
      const maxCount = isMobile ? 15 : 50;
      
      const colors: Array<'white' | 'pink' | 'purple'> = ['white', 'pink', 'purple'];
      moleculesRef.current = Array.from({ length: Math.min(count, maxCount) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
        vy: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
        radius: Math.random() * 5 + 4,
        opacity: Math.random() * 0.4 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const drawMolecule = (molecule: Molecule) => {
      if (!ctx) return;

      const colorMap = {
        white: { h: 0, s: 0, l: 95 },
        pink: { h: 330, s: 70, l: 75 },
        purple: { h: 270, s: 60, l: 40 },
      };
      const c = colorMap[molecule.color];
      
      // Outer glow
      if (!isMobile) {
        const gradient = ctx.createRadialGradient(
          molecule.x, molecule.y, 0,
          molecule.x, molecule.y, molecule.radius * 4
        );
        gradient.addColorStop(0, `hsla(${c.h}, ${c.s}%, ${c.l + 15}%, ${molecule.opacity})`);
        gradient.addColorStop(0.5, `hsla(${c.h}, ${c.s}%, ${c.l + 10}%, ${molecule.opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${c.h}, ${c.s}%, ${c.l}%, 0)`);
        
        ctx.beginPath();
        ctx.arc(molecule.x, molecule.y, molecule.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Core
      ctx.beginPath();
      ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${c.h}, ${c.s}%, ${Math.min(c.l + 20, 100)}%, ${molecule.opacity + 0.3})`;
      ctx.fill();
    };

    const drawConnections = () => {
      if (!ctx) return;
      const molecules = moleculesRef.current;
      const maxDistance = isMobile ? 100 : 150;

      for (let i = 0; i < molecules.length; i++) {
        for (let j = i + 1; j < molecules.length; j++) {
          const dx = molecules[i].x - molecules[j].x;
          const dy = molecules[i].y - molecules[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(molecules[i].x, molecules[i].y);
            ctx.lineTo(molecules[j].x, molecules[j].y);
            ctx.strokeStyle = `hsla(300, 40%, 70%, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }
    };

    const updateMolecules = () => {
      moleculesRef.current.forEach(molecule => {
        molecule.x += molecule.vx;
        molecule.y += molecule.vy;

        if (molecule.x < 0 || molecule.x > canvas.width) molecule.vx *= -1;
        if (molecule.y < 0 || molecule.y > canvas.height) molecule.vy *= -1;
      });
    };

    const animate = () => {
      if (!ctx) return;
      
      // Skip animation frames while scrolling on mobile
      if (isMobile && isScrollingRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections();
      moleculesRef.current.forEach(drawMolecule);
      updateMolecules();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle scroll events - pause animation while scrolling
    const handleScroll = () => {
      if (isMobile) {
        isScrollingRef.current = true;
        
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      }
    };

    resizeCanvas();
    createMolecules();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createMolecules();
    });
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, hsl(240 5% 15%) 0%, hsl(240 5% 12%) 50%, hsl(240 5% 10%) 100%)' }}
    />
  );
};

export default MoleculeBackground;
