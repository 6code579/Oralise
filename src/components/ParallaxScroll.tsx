import React, { useEffect, useRef, useState } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculer la position relative de l'élément dans la fenêtre
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      
      // Appliquer l'effet de parallax selon la direction
      let newOffset = 0;
      switch (direction) {
        case 'up':
          newOffset = scrollProgress * speed * 100;
          break;
        case 'down':
          newOffset = -scrollProgress * speed * 100;
          break;
        case 'left':
          newOffset = scrollProgress * speed * 100;
          break;
        case 'right':
          newOffset = -scrollProgress * speed * 100;
          break;
      }

      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appeler une fois au montage

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  const getTransformStyle = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { transform: `translateY(${offset}px)` };
      case 'left':
      case 'right':
        return { transform: `translateX(${offset}px)` };
      default:
        return { transform: `translateY(${offset}px)` };
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={getTransformStyle()}
    >
      {children}
    </div>
  );
};

export { ParallaxScroll }; 