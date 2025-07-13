
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutUs = () => {
  const { elementRef, isVisible } = useScrollReveal({ triggerOnce: true });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
              About Our <span className="text-green-700">Sanctuary</span>
            </h2>
            <div className="prose prose-lg text-amber-700 leading-relaxed">
              <p>
                Welcome to <strong>Kalyanish Ayurveda and Panchakarma Center</strong>, your sanctuary for holistic healing through the ancient wisdom of Ayurveda. Nestled in a serene environment, our center is dedicated to restoring balance, vitality, and well-being through time-tested Ayurvedic principles.
              </p>
              <p>
                At Kalyanish Ayurveda, we believe that true health encompasses the harmony of mind, body, and spirit. Our approach combines traditional Ayurvedic practices with modern understanding to provide personalized care that addresses the root cause of ailments, not just the symptoms.
              </p>
              <p>
                Whether you seek detoxification through Panchakarma, relief from chronic conditions, or simply wish to maintain optimal health, our experienced practitioners guide you on a transformative journey toward complete wellness.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-500">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="/lovable-uploads/dc89f9df-fc45-43f9-a995-3c5e6fb9df84.png" 
                  alt="Ayurvedic consultation room" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
