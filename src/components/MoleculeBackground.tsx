import { useEffect, useRef } from 'react';

interface Pill {
  x: number;
  y: number;
  speed: number;
  width: number;
  height: number;
  opacity: number;
  color: 'white' | 'pink' | 'purple';
  rotation: number;
  rotationSpeed: number;
}

const MoleculeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pillsRef = useRef<Pill[]>([]);
  const animationRef = useRef<number>();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number>();
  const isMobileRef = useRef(window.innerWidth < 768);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPills = () => {
      isMobileRef.current = window.innerWidth < 768;
      const count = isMobileRef.current ? 40 : 100;
      const colors: Array<'white' | 'pink' | 'purple'> = ['white', 'pink', 'purple'];
      pillsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        width: Math.random() * 4 + 3,
        height: Math.random() * 10 + 8,
        opacity: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      }));
    };

    const drawPill = (pill: Pill) => {
      if (!ctx) return;
      const colorMap = {
        white: { h: 0, s: 0, l: 92 },
        pink: { h: 330, s: 70, l: 75 },
        purple: { h: 270, s: 60, l: 40 },
      };
      const c = colorMap[pill.color];

      ctx.save();
      ctx.translate(pill.x, pill.y);
      ctx.rotate(pill.rotation);

      const r = pill.width / 2;

      // Glow
      if (!isMobileRef.current) {
        ctx.shadowColor = `hsla(${c.h}, ${c.s}%, ${c.l + 15}%, ${pill.opacity})`;
        ctx.shadowBlur = 12;
      }

      // Pill shape (rounded rect)
      ctx.beginPath();
      ctx.moveTo(-pill.width / 2, -pill.height / 2 + r);
      ctx.arcTo(-pill.width / 2, -pill.height / 2, pill.width / 2, -pill.height / 2, r);
      ctx.arcTo(pill.width / 2, -pill.height / 2, pill.width / 2, pill.height / 2, r);
      ctx.arcTo(pill.width / 2, pill.height / 2, -pill.width / 2, pill.height / 2, r);
      ctx.arcTo(-pill.width / 2, pill.height / 2, -pill.width / 2, -pill.height / 2, r);
      ctx.closePath();

      ctx.fillStyle = `hsla(${c.h}, ${c.s}%, ${Math.min(c.l + 20, 100)}%, ${pill.opacity})`;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.restore();
    };

    const updatePills = () => {
      pillsRef.current.forEach(pill => {
        pill.y += pill.speed;
        pill.rotation += pill.rotationSpeed;

        if (pill.y > canvas.height + 20) {
          pill.y = -20;
          pill.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      if (!ctx) return;
      if (isMobileRef.current && isScrollingRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pillsRef.current.forEach(drawPill);
      updatePills();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (isMobileRef.current) {
        isScrollingRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      }
    };

    resizeCanvas();
    createPills();
    animate();

    const handleResize = () => { isMobileRef.current = window.innerWidth < 768; resizeCanvas(); createPills(); };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, hsl(240 5% 15%) 0%, hsl(240 5% 12%) 50%, hsl(240 5% 10%) 100%)' }}
    />
  );
};

export default MoleculeBackground;
