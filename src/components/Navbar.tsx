
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50 transition-all duration-300 hover:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/dff1ad8b-7b9b-4848-bbf7-eccc06521a28.png" 
                alt="Kalyanish Ayurveda Logo" 
                className="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <span className="text-2xl font-serif text-amber-800 font-bold transition-all duration-300 group-hover:text-green-700">
              Kalyanish Ayurveda
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="relative text-amber-800 hover:text-green-600 transition-all duration-300 font-medium group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="#about" className="relative text-amber-800 hover:text-green-600 transition-all duration-300 font-medium group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="#doctor" className="relative text-amber-800 hover:text-green-600 transition-all duration-300 font-medium group">
              <span className="relative z-10">Doctor</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="#treatments" className="relative text-amber-800 hover:text-green-600 transition-all duration-300 font-medium group">
              <span className="relative z-10">Treatments</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="#contact" className="relative text-amber-800 hover:text-green-600 transition-all duration-300 font-medium group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-amber-100/50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-amber-800 hover:text-green-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200">Home</a>
            <a href="#about" className="block px-3 py-2 text-amber-800 hover:text-green-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200">About</a>
            <a href="#doctor" className="block px-3 py-2 text-amber-800 hover:text-green-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200">Doctor</a>
            <a href="#treatments" className="block px-3 py-2 text-amber-800 hover:text-green-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200">Treatments</a>
            <a href="#contact" className="block px-3 py-2 text-amber-800 hover:text-green-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
