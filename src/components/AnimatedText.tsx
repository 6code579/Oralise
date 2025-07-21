import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  type?: 'typing' | 'reveal' | 'fadeIn';
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'typing',
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (type === 'typing') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (onComplete) {
          onComplete();
        }
      }, speed);

      return () => clearTimeout(timer);
    } else if (type === 'reveal') {
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (onComplete) onComplete();
      }, delay);

      return () => clearTimeout(timer);
    } else if (type === 'fadeIn') {
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (onComplete) onComplete();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, type, speed, delay, currentIndex, onComplete]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (type === 'reveal') {
      return isVisible 
        ? `${baseClasses} opacity-100 translate-y-0` 
        : `${baseClasses} opacity-0 translate-y-4`;
    } else if (type === 'fadeIn') {
      return isVisible 
        ? `${baseClasses} opacity-100` 
        : `${baseClasses} opacity-0`;
    }
    
    return '';
  };

  return (
    <div className={`${getAnimationClasses()} ${className}`}>
      {type === 'typing' ? (
        <span>
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export { AnimatedText }; 