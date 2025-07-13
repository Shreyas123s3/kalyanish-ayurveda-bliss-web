
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Keshav Jadhav",
    rating: 5,
    text: "मी आपल्या कडे वमन हे पंचकर्म केले मला आपली सेवा खुप छान वाटली तसेच आपण दिलेली औषध खुप चांगली असुन वमन केल्या मुळे माझ्या तील दोष कमी झाले व माझे वजन कमी करण्यासाठी मला खूप मदत झाली . आणि माझी पचन क्रिया ही सुधारली आहे .मला डॉ . स्वाती यादव यांनी भरपुर छान माहिती दिली धन्यवाद.",
    lang: "marathi"
  },
  {
    name: "Kartiki Shete",
    rating: 5,
    text: "Me geli ek varsh Suvarnprashan maza muli sathi ghet ahe ... Kupch chan product ahe immunity booster mhnun ... Thanks Dr Swati Yadav",
    lang: "marathi"
  },
  {
    name: "Namrata Kolashetti",
    rating: 5,
    text: "Last year I suffered from my knee pain. The pain was so unbearable. I was so helpless, not knowing where to go in the pandemic. My brother asked me to give a try for Ayurvedic treatment which i really wasn't sure about. The treatment not only treated my physical pain from root but my mental health as well. Her involvement was so so personal that you just feel more than a friend. And now here I am dancing, playing, doing whatever i want happily. Thank you so soo much 🥰❤️",
    lang: "english"
  },
  {
    name: "Vithaldas Patil",
    rating: 5,
    text: "Excellent results with detailed case study at each time. Deep analysis and all therapies were doing in well manner with due care.",
    lang: "english"
  },
  {
    name: "Poonam Bogawat",
    rating: 5,
    text: "Dr Swati is very friendly. She will listen your queries very patiently. She will explain the root cause first then gives proper medicine. I'm fully satisfied with the way she handles her patient 🙂",
    lang: "english"
  },
  {
    name: "Sanket Jadhav",
    rating: 5,
    text: "I recently had the pleasure of visiting Kalyani Ayurveda and Panchkarma Centre for my hair fall concerns. Dr. Swati exudes professionalism and expertise in the field of hair fall treatment. Since starting treatment under Dr. Swati's care, I have noticed a significant improvement in the health and thickness of my hair. Thank you, Dr. Swati, for restoring my confidence and helping me achieve healthier, fuller hair!",
    lang: "english"
  }
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  position: number;
  onSelect: () => void;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, position, onSelect, isActive }: TestimonialCardProps) => {
  const isCenter = position === 0;
  
  return (
    <div
      onClick={onSelect}
      className={cn(
        "absolute cursor-pointer transition-all duration-700 ease-in-out p-6 border-2 rounded-2xl backdrop-blur-md shadow-xl",
        isCenter 
          ? "z-20 bg-white/60 border-amber-200/80 shadow-2xl scale-110" 
          : "z-10 bg-white/30 border-amber-200/50 hover:bg-white/40 scale-90 opacity-70"
      )}
      style={{
        width: 320,
        height: 280,
        left: '50%',
        top: '50%',
        transform: `
          translate(-50%, -50%) 
          translateX(${position * 280}px)
          translateY(${isCenter ? -20 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 1.5 : -1.5}deg)
        `,
      }}
    >
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-amber-700 mb-4 leading-relaxed italic text-sm line-clamp-6">
        "{testimonial.text.length > 180 ? testimonial.text.substring(0, 180) + '...' : testimonial.text}"
      </p>
      <p className="absolute bottom-6 left-6 right-6 text-amber-800 font-medium text-sm">
        - {testimonial.name}
      </p>
    </div>
  );
};

export const PatientTestimonials = () => {
  const [activeTab, setActiveTab] = useState("english");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = testimonials.filter(t => t.lang === activeTab);
  const totalVisible = Math.min(3, filteredTestimonials.length);
  
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < totalVisible; i++) {
      const index = (currentIndex + i) % filteredTestimonials.length;
      visible.push({
        testimonial: filteredTestimonials[index],
        position: i - Math.floor(totalVisible / 2)
      });
    }
    return visible;
  };

  const handleMove = (direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return filteredTestimonials.length - 1;
      if (newIndex >= filteredTestimonials.length) return 0;
      return newIndex;
    });
  };

  const handleCardSelect = (position: number) => {
    if (position !== 0) {
      handleMove(position);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-8">
          What Our <span className="text-green-700">Patients Say</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-md rounded-full p-1 shadow-lg">
            <button 
              onClick={() => {
                setActiveTab("english");
                setCurrentIndex(0);
              }}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeTab === "english" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-amber-800 hover:bg-white/50"
              )}
            >
              English
            </button>
            <button 
              onClick={() => {
                setActiveTab("marathi");
                setCurrentIndex(0);
              }}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeTab === "marathi" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-amber-800 hover:bg-white/50"
              )}
            >
              मराठी
            </button>
          </div>
        </div>
        
        <div className="relative w-full overflow-hidden" style={{ height: 400 }}>
          {getVisibleTestimonials().map(({ testimonial, position }, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${activeTab}-${currentIndex}`}
              testimonial={testimonial}
              position={position}
              onSelect={() => handleCardSelect(position)}
              isActive={position === 0}
            />
          ))}
          
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              onClick={() => handleMove(-1)}
              className="flex h-12 w-12 items-center justify-center bg-white/40 backdrop-blur-md border-2 border-amber-200/50 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 rounded-full shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleMove(1)}
              className="flex h-12 w-12 items-center justify-center bg-white/40 backdrop-blur-md border-2 border-amber-200/50 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 rounded-full shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
