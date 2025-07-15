
import { EnhancedButton } from "@/components/EnhancedButton";
import { Mail, Phone } from "lucide-react";

export const ExclusiveRange = () => {
  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-800">
              Exclusive range of <span className="text-green-700">Kalyanesh Ayurveda</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-amber-700 font-light leading-relaxed">
              Expert Solution To Enhance Your Natural Skin & Hair Beauty
            </p>
            
            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-amber-800 text-lg font-medium">Handmade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-amber-800 text-lg font-medium">With Authentic Contents</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-amber-800 text-lg font-medium">Herbal Products</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <EnhancedButton 
                className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-6 py-3 rounded-full shadow-lg"
                onClick={() => window.location.href = 'mailto:swatiamolyadav@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </EnhancedButton>
              
              <EnhancedButton 
                className="bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-lg"
                onClick={() => window.location.href = 'tel:9975056893'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Make A Call
              </EnhancedButton>
            </div>
          </div>
          
          {/* Product Image - Right Side */}
          <div className="relative">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-500">
              <img 
                src="/lovable-uploads/22aa4def-34ee-416f-b718-3bdd6712e102.png" 
                alt="Kalyanish Ayurveda Product Range" 
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
              {/* Golden glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/10 to-green-400/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
