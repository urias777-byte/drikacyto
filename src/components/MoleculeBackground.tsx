import { useEffect, useRef, useState } from 'react';

interface Molecule {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
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
      
      moleculesRef.current = Array.from({ length: Math.min(count, maxCount) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
        vy: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
        radius: Math.random() * 3 + 2,
        opacity: Math.random() * 0.3 + 0.2,
      }));
    };

    const drawMolecule = (molecule: Molecule) => {
      if (!ctx) return;
      
      // Simplified drawing on mobile - skip outer glow
      if (!isMobile) {
        const gradient = ctx.createRadialGradient(
          molecule.x, molecule.y, 0,
          molecule.x, molecule.y, molecule.radius * 3
        );
        gradient.addColorStop(0, `hsla(270, 55%, 55%, ${molecule.opacity})`);
        gradient.addColorStop(0.5, `hsla(270, 55%, 55%, ${molecule.opacity * 0.3})`);
        gradient.addColorStop(1, 'hsla(270, 55%, 55%, 0)');
        
        ctx.beginPath();
        ctx.arc(molecule.x, molecule.y, molecule.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Core
      ctx.beginPath();
      ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(270, 60%, 65%, ${molecule.opacity + 0.2})`;
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
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(molecules[i].x, molecules[i].y);
            ctx.lineTo(molecules[j].x, molecules[j].y);
            ctx.strokeStyle = `hsla(270, 50%, 60%, ${opacity})`;
            ctx.lineWidth = 1;
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
      style={{ background: 'linear-gradient(135deg, hsl(280 30% 98%) 0%, hsl(330 40% 96%) 50%, hsl(270 35% 95%) 100%)' }}
    />
  );
};

export default MoleculeBackground;
