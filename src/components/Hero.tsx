
import { PremiumButton } from "@/components/PremiumButton";
import { useAdvancedScrollReveal } from "@/hooks/useAdvancedScrollReveal";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const { elementRef, animationClasses } = useAdvancedScrollReveal({
    animationType: 'slideUp',
    delay: 300,
    duration: 1200,
    triggerOnce: true
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive background glow that follows mouse */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />
      
      <div ref={elementRef} className={`text-center max-w-4xl mx-auto ${animationClasses}`}>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-800 mb-6 leading-tight group">
            <span className="inline-block hover:scale-105 transition-transform duration-500">
              Ancient Wisdom.
            </span>
            <br />
            <span className="text-green-700 inline-block hover:scale-105 transition-transform duration-500 hover:text-green-600">
              Modern Healing.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-700 mb-8 font-light leading-relaxed hover:text-amber-600 transition-colors duration-300">
            A sanctuary for holistic Ayurvedic transformation
            <br />
            <span className="hover:scale-105 inline-block transition-transform duration-300">
              where ancient traditions meet contemporary wellness
            </span>
          </p>
          
          <div className="group">
            <PremiumButton 
              className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Book Your Healing Journey
            </PremiumButton>
          </div>
        </div>
        
        {/* Enhanced floating elements with premium effects */}
        <div className="absolute top-1/4 left-10 group">
          <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-bounce hover:scale-150 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full opacity-30 animate-ping"></div>
        </div>
        
        <div className="absolute top-1/3 right-10 group" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 animate-bounce hover:scale-150 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full opacity-30 animate-ping"></div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 group" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-green-300 rounded-full shadow-lg shadow-green-300/50 animate-bounce hover:scale-150 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-300 rounded-full opacity-30 animate-ping"></div>
        </div>

        {/* Premium floating text effects */}
        <div className="absolute top-20 right-1/4 opacity-40">
          <div className="text-green-400 text-sm font-script animate-pulse hover:scale-110 transition-all duration-500 cursor-pointer">
            ॐ शांति शांति शांति:
          </div>
        </div>
      </div>
    </section>
  );
};
