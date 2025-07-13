
import { Leaf, Heart, Users, Sparkles, TreePine } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Practitioners",
    description: "Certified Ayurvedic doctors with years of experience"
  },
  {
    icon: Leaf,
    title: "Authentic Protocols",
    description: "Traditional Ayurvedic treatments following ancient texts"
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans for your unique constitution"
  },
  {
    icon: Sparkles,
    title: "Deep Relaxation",
    description: "Serene environment promoting peace and healing"
  },
  {
    icon: TreePine,
    title: "Long-Term Wellness",
    description: "Focus on sustainable health and preventive care"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16">
          Why Choose <span className="text-green-700">Kalyanish Ayurveda</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-amber-800 mb-3">{reason.title}</h3>
              <p className="text-amber-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
