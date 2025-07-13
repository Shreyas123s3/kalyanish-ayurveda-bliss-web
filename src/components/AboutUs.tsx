
import { useAdvancedScrollReveal } from "@/hooks/useAdvancedScrollReveal";
import { useState } from "react";

export const AboutUs = () => {
  const { elementRef, animationClasses } = useAdvancedScrollReveal({ 
    animationType: 'slideUp',
    triggerOnce: true,
    delay: 200,
    duration: 1000
  });

  const { elementRef: imageRef, animationClasses: imageAnimationClasses } = useAdvancedScrollReveal({ 
    animationType: 'slideLeft',
    triggerOnce: true,
    delay: 400,
    duration: 1200
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-amber-50/30 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={elementRef}
            className={`space-y-6 ${animationClasses}`}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6 group">
              About Our{" "}
              <span className="text-green-700 hover:scale-105 inline-block transition-transform duration-500 cursor-pointer hover:text-green-600">
                Sanctuary
              </span>
            </h2>
            
            <div className="prose prose-lg text-amber-700 leading-relaxed space-y-4">
              <p className="hover:text-amber-600 transition-colors duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-100/50 p-2 rounded-lg transform transition-all">
                Welcome to <strong className="text-green-700 hover:text-green-600 transition-colors">Kalyanish Ayurveda and Panchakarma Center</strong>, your sanctuary for holistic healing through the ancient wisdom of Ayurveda. Nestled in a serene environment, our center is dedicated to restoring balance, vitality, and well-being through time-tested Ayurvedic principles.
              </p>
              
              <p className="hover:text-amber-600 transition-colors duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-100/50 p-2 rounded-lg transform transition-all">
                At Kalyanish Ayurveda, we believe that true health encompasses the harmony of mind, body, and spirit. Our approach combines traditional Ayurvedic practices with modern understanding to provide personalized care that addresses the root cause of ailments, not just the symptoms.
              </p>
              
              <p className="hover:text-amber-600 transition-colors duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-100/50 p-2 rounded-lg transform transition-all">
                Whether you seek detoxification through Panchakarma, relief from chronic conditions, or simply wish to maintain optimal health, our experienced practitioners guide you on a transformative journey toward complete wellness.
              </p>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative group ${imageAnimationClasses}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-700 relative overflow-hidden">
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="aspect-square bg-gradient-to-br from-green-200 to-amber-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-amber-800 z-10 relative">
                  <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    🌿
                  </div>
                  <p className="text-lg font-serif group-hover:scale-105 transition-transform duration-300">
                    Holistic Healing
                  </p>
                  <p className="text-sm group-hover:text-green-700 transition-colors duration-300">
                    Mind • Body • Spirit
                  </p>
                </div>
                
                {/* Animated particles */}
                {isHovered && [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-300 rounded-full animate-ping opacity-60"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 12}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s',
                    }}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Floating elements around the card */}
            <div className="absolute -top-4 -right-4 text-2xl animate-bounce opacity-70 group-hover:scale-125 transition-transform duration-500">
              ✨
            </div>
            <div className="absolute -bottom-4 -left-4 text-xl animate-pulse opacity-70 group-hover:scale-125 transition-transform duration-500">
              🍃
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
