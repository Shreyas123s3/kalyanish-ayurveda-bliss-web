
import { useEffect, useState } from 'react';
import { useScrollReveal, useParallaxScroll } from '@/hooks/useScrollReveal';

export const AdvancedFloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { elementRef: parallax1, offset: offset1 } = useParallaxScroll(0.3);
  const { elementRef: parallax2, offset: offset2 } = useParallaxScroll(0.5);
  const { elementRef: parallax3, offset: offset3 } = useParallaxScroll(0.7);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Parallax Floating Elements */}
      <div
        ref={parallax1}
        className="absolute top-1/4 left-10 w-6 h-6 opacity-40"
        style={{ transform: `translateY(${offset1}px)` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg animate-pulse"></div>
      </div>

      <div
        ref={parallax2}
        className="absolute top-1/3 right-16 w-4 h-4 opacity-50"
        style={{ transform: `translateY(${offset2}px)` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-md animate-bounce"></div>
      </div>

      <div
        ref={parallax3}
        className="absolute bottom-1/4 left-1/4 w-5 h-5 opacity-30"
        style={{ transform: `translateY(${offset3}px)` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-300 to-teal-400 rounded-full shadow-sm animate-ping"></div>
      </div>

      {/* Mouse-Following Elements */}
      <div
        className="absolute w-2 h-2 bg-green-400/20 rounded-full transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x * 0.05,
          top: mousePosition.y * 0.05,
        }}
      />
      <div
        className="absolute w-3 h-3 bg-amber-400/15 rounded-full transition-all duration-1500 ease-out"
        style={{
          left: mousePosition.x * 0.03,
          top: mousePosition.y * 0.03,
        }}
      />

      {/* Herbal Leaf Patterns */}
      <div className="absolute top-20 right-20 animate-float opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-green-500">
          <path
            d="M20 5C15 10 10 15 15 25C20 35 25 25 30 15C35 10 30 5 20 5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute bottom-32 left-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-amber-500">
          <path
            d="M17.5 3C13 7.5 8.5 12 13 20C17.5 28 22 20 26.5 12C30.5 7.5 26 3 17.5 3Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
