
import { useEffect, useRef, useState } from 'react';

interface AdvancedScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'bounce';
  delay?: number;
  duration?: number;
}

export const useAdvancedScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: AdvancedScrollRevealOptions = {}
) => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setTimeout(() => {
            setIsVisible(true);
            if (options.triggerOnce) {
              setHasTriggered(true);
              observer.unobserve(element);
            }
          }, options.delay || 0);
        } else if (!options.triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.triggerOnce, options.delay, hasTriggered]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${options.duration || 1000} ease-out`;
    
    if (!isVisible) {
      switch (options.animationType) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-20`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-20`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-20`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-75`;
        case 'rotate':
          return `${baseClasses} opacity-0 rotate-12`;
        case 'bounce':
          return `${baseClasses} opacity-0 translate-y-10 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-10`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return { elementRef, isVisible, animationClasses: getAnimationClasses() };
};
