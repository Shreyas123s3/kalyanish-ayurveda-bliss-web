
import { EnhancedButton } from "@/components/EnhancedButton";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const handleBookingClick = () => {
    window.open('https://wa.me/919975056893', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Kalyanish Ayurveda Logo - Increased by 60-70% */}
          <div className="mb-4">
            <img 
              src="/lovable-uploads/923502a0-6e93-44a1-b556-0c49735d8a86.png" 
              alt="Kalyanish Ayurveda Logo" 
              className="mx-auto w-auto h-80 md:h-96 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          
          {/* Heading - moved directly under logo */}
          <h1 className="text-5xl md:text-7xl font-serif text-amber-800 mb-4 leading-tight">
            Ancient Wisdom.
            <br />
            <span className="text-green-700">Modern Healing.</span>
          </h1>
          
          {/* Subheading - placed directly beneath heading */}
          <p className="text-xl md:text-2xl text-amber-700 mb-6 font-light leading-relaxed">
            A sanctuary for holistic Ayurvedic transformation
            <br />
            where ancient traditions meet contemporary wellness
          </p>
          
          {/* CTA Button - positioned directly under description */}
          <EnhancedButton 
            onClick={handleBookingClick}
            className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
            size="lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Book Your Healing Journey
          </EnhancedButton>
        </div>
        
        {/* Enhanced floating herbs animation */}
        <div className="absolute top-1/4 left-10 animate-bounce opacity-60">
          <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
        </div>
        <div className="absolute top-1/3 right-10 animate-bounce opacity-40" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce opacity-50" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-green-300 rounded-full shadow-lg shadow-green-300/50"></div>
        </div>
      </div>
    </section>
  );
};
