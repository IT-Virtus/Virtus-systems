import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-1000',
    'slide-left': 'opacity-0 translate-x-8 transition-all duration-1000',
    'slide-right': 'opacity-0 -translate-x-8 transition-all duration-1000',
    'scale-up': 'opacity-0 scale-95 transition-all duration-1000'
  };

  const activeClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    'scale-up': 'opacity-100 scale-100'
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${isIntersecting ? activeClasses[animation] : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;