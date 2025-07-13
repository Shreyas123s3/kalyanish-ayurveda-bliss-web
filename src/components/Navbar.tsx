
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/923502a0-6e93-44a1-b556-0c49735d8a86.png" 
              alt="Kalyanish Ayurveda Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-serif text-amber-800 font-bold">
              Kalyanish Ayurveda
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-amber-800 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-amber-800 hover:text-green-600 transition-colors font-medium">About</a>
            <a href="#doctor" className="text-amber-800 hover:text-green-600 transition-colors font-medium">Doctor</a>
            <a href="#treatments" className="text-amber-800 hover:text-green-600 transition-colors font-medium">Treatments</a>
            <a href="#contact" className="text-amber-800 hover:text-green-600 transition-colors font-medium">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-amber-800 hover:text-green-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-amber-800 hover:text-green-600">About</a>
            <a href="#doctor" className="block px-3 py-2 text-amber-800 hover:text-green-600">Doctor</a>
            <a href="#treatments" className="block px-3 py-2 text-amber-800 hover:text-green-600">Treatments</a>
            <a href="#contact" className="block px-3 py-2 text-amber-800 hover:text-green-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
