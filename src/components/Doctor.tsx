
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Doctor = () => {
  return (
    <section id="doctor" className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-12">
          Know Your <span className="text-green-700">Doctor</span>
        </h2>
        
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-amber-200/50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-amber-200 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-8xl">👩‍⚕️</div>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
                🌿
              </div>
            </div>
            
            <div className="flex-1 text-left">
              <h3 className="text-3xl font-serif text-amber-800 mb-2">Dr. Swati Yadav</h3>
              <p className="text-green-700 font-medium mb-4">BAMS MD in Ayurveda, PGDYN</p>
              <p className="text-amber-700 leading-relaxed mb-6">
                With years of dedicated experience in Ayurvedic medicine and Panchakarma therapies, 
                Dr. Swati Yadav brings profound knowledge and compassionate care to every patient. 
                Her expertise in traditional healing methods combined with modern diagnostic approaches 
                ensures comprehensive treatment tailored to individual needs.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </a>
                <a href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
                <a href="#" className="p-3 bg-red-100 rounded-full hover:bg-red-200 transition-colors">
                  <Youtube className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
