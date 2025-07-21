import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Circle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  blur: number;
  opacity: number;
  color: string;
  layer: number;
  baseX: number;
  baseY: number;
}

const LAYERS = [
  { count: 8, blur: 36, speed: 0.12, minR: 90, maxR: 180, opacity: 0.16 },
  { count: 12, blur: 16, speed: 0.22, minR: 40, maxR: 90, opacity: 0.22 },
  { count: 18, blur: 4, speed: 0.38, minR: 18, maxR: 40, opacity: 0.32 },
];

// Mapping route -> couleur principale
const PAGE_COLORS: Record<string, string> = {
  '/': '#26b2bc', // Accueil
  '/about': '#c41e3a',
  '/contact': '#033356',
  '/training': '#26b2bc',
  '/coaching': '#c41e3a',
  '/french': '#033356',
  '/english': '#26b2bc',
  '/entrepriseTraining': '#c41e3a',
  '/individuelTraining': '#26b2bc',
  '/groupTraining': '#c41e3a',
  '/childrenTraining': '#26b2bc',
  '/examen': '#fbbf24',
};

const getPageColor = (pathname: string, isDark: boolean) => {
  // Trouver la couleur la plus proche (route exacte ou parent)
  let color = PAGE_COLORS['/'];
  Object.keys(PAGE_COLORS).forEach(route => {
    if (pathname.startsWith(route)) color = PAGE_COLORS[route];
  });
  // Optionnel : ajuster pour dark mode
  if (isDark && color === '#fbbf24') return '#f59e42';
  return color;
};

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Effet parallax souris
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Générer les cercles
    const isDark = document.documentElement.classList.contains('dark');
    const mainColor = getPageColor(location.pathname, isDark);
    let circles: Circle[] = [];
    LAYERS.forEach((layer, i) => {
      for (let j = 0; j < layer.count; j++) {
        const radius = Math.random() * (layer.maxR - layer.minR) + layer.minR;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        circles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius,
          speedX: (Math.random() - 0.5) * layer.speed,
          speedY: (Math.random() - 0.5) * layer.speed,
          blur: layer.blur,
          opacity: layer.opacity,
          color: mainColor,
          layer: i,
        });
      }
    });
    circlesRef.current = circles;

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Dégradé radial global subtil
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 1.2
      );
      grad.addColorStop(0, isDark ? 'rgba(30,41,59,0.12)' : 'rgba(219,234,254,0.12)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circlesRef.current.forEach(c => {
        // Mouvement
        c.x += c.speedX;
        c.y += c.speedY;
        // Rebond sur les bords
        if (c.x - c.radius < 0 || c.x + c.radius > canvas.width) c.speedX *= -1;
        if (c.y - c.radius < 0 || c.y + c.radius > canvas.height) c.speedY *= -1;
        // Parallax souris (chaque couche réagit différemment)
        const parallaxX = (mouse.current.x - 0.5) * (c.layer + 1) * 40;
        const parallaxY = (mouse.current.y - 0.5) * (c.layer + 1) * 40;
        // Glow
        ctx.save();
        ctx.globalAlpha = c.opacity;
        ctx.filter = `blur(${c.blur}px)`;
        ctx.beginPath();
        ctx.arc(c.x + parallaxX, c.y + parallaxY, c.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = c.color;
        ctx.shadowColor = c.color;
        ctx.shadowBlur = c.blur * 1.7;
        ctx.fill();
        ctx.restore();
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [location.pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export { AnimatedBackground }; 