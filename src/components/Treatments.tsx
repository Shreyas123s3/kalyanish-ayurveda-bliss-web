
const treatments = [
  { 
    name: "Abhyanga", 
    description: "Body Massage with herbal oils", 
    image: "/lovable-uploads/eaa87077-d891-4bde-98f4-5503752529c1.png"
  },
  { 
    name: "Shirodhara", 
    description: "Oil pour therapy on forehead", 
    image: "/lovable-uploads/3299c160-4314-4f5d-aefc-b8a12bf9f123.png"
  },
  { 
    name: "Patrapottali Sweda", 
    description: "Herbal leaf fomentation", 
    image: "/lovable-uploads/9984b097-1b0e-4378-a412-99d5bad52b11.png"
  },
  { 
    name: "Manyabasti", 
    description: "Neck oil retention therapy", 
    image: "/lovable-uploads/c4d9ea0c-0ff3-4ed2-b682-08b5db2b17ba.png"
  },
  { 
    name: "Janubasti", 
    description: "Knee oil therapy", 
    image: "/lovable-uploads/56ee3ca7-58ca-44b7-9783-4a73be6560f4.png"
  },
  { 
    name: "Katibasti", 
    description: "Lower back therapy", 
    image: "/lovable-uploads/62c327c8-79dd-4695-91f1-72c41e259d8d.png"
  },
  { 
    name: "Raktmokshan", 
    description: "Leech therapy for blood purification", 
    image: "/lovable-uploads/22918730-119e-45dc-a0f1-f12929ac6adf.png"
  }
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
                <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300 relative">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/40 rounded-xl transition-all duration-300" />
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
