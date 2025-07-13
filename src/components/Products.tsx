
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EnhancedButton } from "@/components/EnhancedButton";

const products = [
  {
    name: "Amla Hair Oil",
    image: "/lovable-uploads/a8e862c2-846d-4aa0-a5a9-f805501e6833.png"
  },
  {
    name: "Vasudha Hair Oil",
    image: "/lovable-uploads/394b58b4-ee9b-4334-bca2-7a5ae8ffa155.png"
  },
  {
    name: "Mehendi Powder",
    image: "/lovable-uploads/cba23ebb-7091-4499-9721-b3d80ecf7973.png"
  },
  {
    name: "Aloe Vera Shampoo",
    image: "/lovable-uploads/16a05987-93ab-4796-b523-5178995686d4.png"
  },
  {
    name: "Abhyanga Oil",
    image: "/lovable-uploads/5b5bc82d-655a-4f3f-bb33-547afff79e3a.png"
  },
  {
    name: "Anti Dandruff Shampoo",
    image: "/lovable-uploads/4b3bb15e-deb4-436b-9628-22a46059295f.png"
  },
  {
    name: "Shikekai Shampoo",
    image: "/lovable-uploads/d4153f58-ca41-4449-ba52-19e4f396be0e.png"
  },
  {
    name: "Herbal Face Pack",
    image: "/lovable-uploads/467fe011-2530-4a98-b03c-4bf6a68e6664.png"
  }
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
              className={`bg-white/40 backdrop-blur-md rounded-xl p-4 shadow-lg border border-amber-200/50 
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
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-amber-50 relative group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-sm font-medium text-amber-800 group-hover:text-green-700 transition-colors duration-300">
                  {product.name}
                </h3>
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
