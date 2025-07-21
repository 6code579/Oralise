import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[] | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const particleCount = window.innerWidth < 768 ? 30 : 50; // Moins de particules sur mobile
    const connectionDistance = window.innerWidth < 768 ? 100 : 150;
    const particleSpeed = 0.3;

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les particules
    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    // Animer les particules
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Couleurs selon le mode
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? '#60A5FA' : '#1E40AF';
      const connectionColor = isDark ? '#3B82F6' : '#60A5FA';

      // Ajouter un gradient subtil en arrière-plan
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
      gradient.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.02)' : 'rgba(30, 64, 175, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mettre à jour et dessiner les particules
      particlesRef.current?.forEach((particle, index) => {
        // Mettre à jour la position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebondir aux bords
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Dessiner la particule avec effet de pulsation
        const pulse = Math.sin(Date.now() * 0.001 + index) * 0.2 + 0.8;
        const currentSize = particle.size * pulse;
        
        // Effet de traînée
        const trailLength = 3;
        for (let i = 0; i < trailLength; i++) {
          const trailOpacity = (particle.opacity * (1 - i / trailLength)) * 0.3;
          const trailSize = currentSize * (1 - i / trailLength);
          
          ctx.beginPath();
          ctx.arc(
            particle.x - particle.vx * i * 2,
            particle.y - particle.vy * i * 2,
            trailSize,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `${particleColor}${Math.floor(trailOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }
        
        // Particule principale
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Dessiner les connexions
        particlesRef.current?.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;

          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export { ParticleBackground }; 