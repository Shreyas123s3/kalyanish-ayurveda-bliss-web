
const treatments = [
  { name: "Abhyanga", description: "Body Massage with herbal oils", icon: "💆‍♀️" },
  { name: "Shirodhara", description: "Oil pour therapy on forehead", icon: "🫗" },
  { name: "Patrapottali Sweda", description: "Herbal leaf fomentation", icon: "🍃" },
  { name: "Manyabasti", description: "Neck oil retention therapy", icon: "🧘‍♀️" },
  { name: "Janubasti", description: "Knee oil therapy", icon: "🦵" },
  { name: "Katibasti", description: "Lower back therapy", icon: "🔙" },
  { name: "Raktmokshan", description: "Leech therapy for blood purification", icon: "🩸" }
];

export const Treatments = () => {
  return (
    <section id="treatments" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16">
          Our Signature <span className="text-green-700">Treatments</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-serif text-amber-800 mb-2">{treatment.name}</h3>
                <p className="text-amber-700 text-sm">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
