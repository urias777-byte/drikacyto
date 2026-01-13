import { useEffect, useRef } from 'react';

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
      const count = Math.floor((canvas.width * canvas.height) / 25000);
      moleculesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.2,
      }));
    };

    const drawMolecule = (molecule: Molecule) => {
      if (!ctx) return;
      
      // Outer glow
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

      // Core
      ctx.beginPath();
      ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(270, 60%, 65%, ${molecule.opacity + 0.2})`;
      ctx.fill();
    };

    const drawConnections = () => {
      if (!ctx) return;
      const molecules = moleculesRef.current;
      const maxDistance = 150;

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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections();
      moleculesRef.current.forEach(drawMolecule);
      updateMolecules();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createMolecules();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createMolecules();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, hsl(280 30% 98%) 0%, hsl(330 40% 96%) 50%, hsl(270 35% 95%) 100%)' }}
    />
  );
};

export default MoleculeBackground;
