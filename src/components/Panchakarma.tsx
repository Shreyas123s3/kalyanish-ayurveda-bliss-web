
const treatments = [
  {
    name: "Vamana",
    subtitle: "Therapeutic Emesis",
    description: "A detoxifying procedure to eliminate Kapha toxins via controlled vomiting. It clears respiratory & digestive systems.",
    icon: "🌊"
  },
  {
    name: "Virechana",
    subtitle: "Purgation Therapy",
    description: "Detox through purgation to remove Pitta toxins from liver & gallbladder. Improves metabolism & skin health.",
    icon: "🔥"
  },
  {
    name: "Basti",
    subtitle: "Medicated Enema",
    description: "A deeply nourishing colon cleanse using herbal oils or decoctions. Balances Vata dosha and treats constipation, arthritis.",
    icon: "🌿"
  },
  {
    name: "Nasya",
    subtitle: "Nasal Therapy",
    description: "Application of medicated oils via nose to clear sinuses, improve mental clarity & relieve stress and migraine.",
    icon: "💨"
  },
  {
    name: "Raktamokshana",
    subtitle: "Blood Letting",
    description: "Detox by controlled removal of impure blood using leech or needle. Beneficial for skin disorders, inflammation, acne.",
    icon: "🩸"
  }
];

export const Panchakarma = () => {
  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            What is <span className="text-green-700">Panchakarma?</span>
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            The five sacred purification therapies that form the cornerstone of Ayurvedic detoxification and rejuvenation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-amber-200/50 
                hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 
                transition-all duration-500 group cursor-pointer"
            >
              <div className="text-center mb-4 relative">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  {treatment.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </div>
                <h3 className="text-2xl font-serif text-amber-800 mb-1">{treatment.name}</h3>
                <p className="text-green-700 font-medium text-sm">{treatment.subtitle}</p>
              </div>
              <p className="text-amber-700 leading-relaxed text-center">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
