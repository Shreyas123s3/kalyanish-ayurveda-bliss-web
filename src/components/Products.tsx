
const products = [
  "Herbal Massage Oils", "Ayurvedic Medicines", "Herbal Teas", "Detox Powders",
  "Immunity Boosters", "Digestive Aids", "Skin Care Products", "Hair Care Solutions"
];

export const Products = () => {
  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16">
          Premium <span className="text-green-700">Healthcare Products</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  🌿
                </div>
                <h3 className="text-sm font-medium text-amber-800">{product}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Visit Store / Contact to Purchase
          </button>
        </div>
      </div>
    </section>
  );
};
