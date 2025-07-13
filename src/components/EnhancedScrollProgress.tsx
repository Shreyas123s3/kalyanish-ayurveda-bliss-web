
import { useEffect, useState } from 'react';

export const EnhancedScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent">
        <div
          className="h-full bg-gradient-to-r from-green-500 via-amber-500 to-green-600 shadow-lg transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400/20 via-amber-400/20 to-green-400/20 blur-sm" />
    </div>
  );
};
