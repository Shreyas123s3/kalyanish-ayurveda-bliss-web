
import { useAdvancedScrollReveal } from "@/hooks/useAdvancedScrollReveal";
import { useState } from "react";

interface AdvancedSectionDividerProps {
  variant?: 'leaves' | 'vines' | 'lotus' | 'herbal-wave' | 'mystical';
}

export const AdvancedSectionDivider = ({ variant = 'leaves' }: AdvancedSectionDividerProps) => {
  const { elementRef, isVisible, animationClasses } = useAdvancedScrollReveal({
    animationType: 'scale',
    triggerOnce: true,
    delay: 200,
    duration: 1000
  });

  const [isHovered, setIsHovered] = useState(false);

  const getPattern = () => {
    switch (variant) {
      case 'herbal-wave':
        return (
          <div className="flex justify-center items-center relative">
            <svg 
              width="300" 
              height="60" 
              viewBox="0 0 300 60" 
              className="text-green-400 opacity-60"
            >
              <path
                d="M0 30 Q75 10 150 30 Q225 50 300 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              {/* Animated herbs along the wave */}
              <g className="animate-pulse" style={{ animationDuration: '6s' }}>
                <text x="50" y="25" fontSize="16" className="fill-amber-400">🌿</text>
                <text x="150" y="35" fontSize="20" className="fill-green-400">🍃</text>
                <text x="250" y="25" fontSize="16" className="fill-amber-400">🌿</text>
              </g>
            </svg>
          </div>
        );
        
      case 'mystical':
        return (
          <div className="flex justify-center items-center space-x-6 relative">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-400 to-amber-400 animate-pulse"></div>
              <div 
                className="text-amber-400 text-2xl animate-spin transform transition-all duration-700 hover:scale-150"
                style={{ animationDuration: '8s' }}
              >
                ✨
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-amber-400 via-green-400 to-transparent animate-pulse"></div>
            </div>
            
            <div 
              className="text-green-400 text-3xl animate-bounce transition-all duration-500 hover:scale-125 cursor-pointer"
              style={{ 
                animationDuration: '3s',
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))'
              }}
            >
              🪷
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-green-400 animate-pulse"></div>
              <div 
                className="text-amber-400 text-2xl animate-spin transform transition-all duration-700 hover:scale-150"
                style={{ animationDuration: '8s', animationDirection: 'reverse' }}
              >
                ✨
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-green-400 via-amber-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        );
        
      case 'leaves':
        return (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            {['🍃', '🌿', '🪷', '🌿', '🍃'].map((emoji, i) => (
              <span 
                key={i}
                className={`text-${i % 2 ? 'green' : 'amber'}-400 text-${i === 2 ? '3xl' : i % 2 ? 'xl' : '2xl'} 
                  animate-bounce hover:scale-150 transition-all duration-500 cursor-pointer`}
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                  filter: `drop-shadow(0 0 ${5 + i * 2}px rgba(${i % 2 ? '34, 197, 94' : '251, 191, 36'}, 0.4))`
                }}
              >
                {emoji}
              </span>
            ))}
          </div>
        );
        
      case 'vines':
        return (
          <div className="flex justify-center items-center relative">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
              <div className="relative">
                <span 
                  className="text-amber-400 text-2xl animate-pulse hover:scale-125 transition-all duration-500 cursor-pointer"
                  style={{ 
                    filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))',
                    animationDuration: '3s'
                  }}
                >
                  🌿
                </span>
                {/* Floating sparkles around the center element */}
                {isHovered && [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-300 rounded-full animate-ping"
                    style={{
                      top: `${-10 + i * 5}px`,
                      left: `${-10 + i * 7}px`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        );
        
      case 'lotus':
        return (
          <div className="flex justify-center items-center space-x-2 relative">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-400 animate-pulse"></div>
            <div className="relative">
              <span 
                className="text-amber-400 text-3xl animate-pulse hover:scale-150 transition-all duration-700 cursor-pointer"
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))',
                  animationDuration: '4s'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                🪷
              </span>
              {/* Ripple effect on hover */}
              {isHovered && (
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping" />
              )}
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-400 animate-pulse"></div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`py-12 flex justify-center opacity-60 ${animationClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {getPattern()}
      </div>
    </div>
  );
};
