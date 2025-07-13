
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EnhancedButton } from "@/components/EnhancedButton";

const products = [
  "Herbal Massage Oils", "Ayurvedic Medicines", "Herbal Teas", "Detox Powders",
  "Immunity Boosters", "Digestive Aids", "Skin Care Products", "Hair Care Solutions"
];

export const Products = () => {
  const { elementRef, isVisible } = useScrollReveal({ triggerOnce: true });

  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          Premium <span className="text-green-700">Healthcare Products</span>
        </h2>
        
        <div 
          ref={elementRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {products.map((product, index) => (
            <div 
              key={index}
              className={`bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-amber-200/50 
                hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-2 hover:scale-105
                transition-all duration-500 group cursor-pointer
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
                }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  🌿
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-sm font-medium text-amber-800 group-hover:text-green-700 transition-colors duration-300">{product}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <EnhancedButton className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-8 py-3 rounded-full shadow-lg">
            Visit Store / Contact to Purchase
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};
