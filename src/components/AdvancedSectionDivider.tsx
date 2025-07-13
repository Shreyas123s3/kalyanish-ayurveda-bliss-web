
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AdvancedSectionDividerProps {
  variant?: 'leaves' | 'lotus' | 'vines' | 'mandala';
}

export const AdvancedSectionDivider = ({ variant = 'leaves' }: AdvancedSectionDividerProps) => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.3 });

  const variants = {
    leaves: (
      <div className="flex justify-center items-center space-x-4">
        <div className="w-8 h-8 transform rotate-45 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-spin"></div>
        <div className="w-2 h-16 bg-gradient-to-b from-green-500 to-amber-500 rounded-full"></div>
        <div className="w-8 h-8 transform -rotate-45 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-60 animate-spin" style={{ animationDirection: 'reverse' }}></div>
      </div>
    ),
    lotus: (
      <div className="relative flex justify-center">
        <div className="w-16 h-16 relative">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-8 bg-gradient-to-t from-green-400 to-emerald-300 rounded-full opacity-70 animate-pulse"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                transformOrigin: 'center bottom',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    ),
    vines: (
      <div className="flex justify-center">
        <svg width="200" height="40" viewBox="0 0 200 40" className="text-green-500">
          <path
            d="M0 20 Q50 10 100 20 T200 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <circle cx="50" cy="15" r="3" fill="currentColor" className="animate-bounce" />
          <circle cx="100" cy="20" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
          <circle cx="150" cy="15" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.4s' }} />
        </svg>
      </div>
    ),
    mandala: (
      <div className="relative flex justify-center">
        <div className="w-20 h-20 relative animate-spin" style={{ animationDuration: '20s' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-10 bg-gradient-to-t from-green-500 to-amber-500 rounded-full"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-25px)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 via-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div
      ref={elementRef}
      className={`py-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      {variants[variant]}
    </div>
  );
};
