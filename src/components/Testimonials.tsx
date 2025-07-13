
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "The Panchakarma treatment at Kalyanish Ayurveda completely transformed my health. Dr. Swati's expertise and the serene environment made my healing journey truly remarkable.",
    lang: "english"
  },
  {
    name: "राज पाटील",
    rating: 5,
    text: "कल्याणीश आयुर्वेदात माझ्या पाचकर्म उपचाराने माझे आरोग्य पूर्णपणे बदलले. डॉ. स्वातीची तज्ञता अप्रतिम आहे.",
    lang: "marathi"
  },
  {
    name: "Amit Kumar",
    rating: 5,
    text: "Excellent treatment for chronic back pain. The Katibasti therapy worked wonders. Highly recommend this center for authentic Ayurvedic healing.",
    lang: "english"
  },
  {
    name: "सुनिता देशमुख",
    rating: 5,
    text: "शिरोधारा उपचारानंतर माझी मानसिक शांती आणि एकाग्रता वाढली आहे. खूप छान अनुभव होता.",
    lang: "marathi"
  },
  {
    name: "Rakesh Verma",
    rating: 5,
    text: "The herbal products and personalized diet plans have significantly improved my digestive health. Thank you for the holistic approach to wellness.",
    lang: "english"
  },
  {
    name: "मीरा जोशी",
    rating: 5,
    text: "अभ्यंग मसाजमुळे माझ्या त्वचेची चमक वाढली आहे. डॉक्टरांचा सल्ला खूप उपयुक्त होता.",
    lang: "marathi"
  }
];

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("english");

  const filteredTestimonials = testimonials.filter(t => t.lang === activeTab);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-8">
          What Our <span className="text-green-700">Patients Say</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-md rounded-full p-1 shadow-lg">
            <button 
              onClick={() => setActiveTab("english")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "english" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-amber-800 hover:bg-white/50"
              }`}
            >
              English
            </button>
            <button 
              onClick={() => setActiveTab("marathi")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "marathi" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-amber-800 hover:bg-white/50"
              }`}
            >
              मराठी
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-amber-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-amber-800 font-medium">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
