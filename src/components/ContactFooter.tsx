
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactFooter = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-amber-100 to-green-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16">
          Begin Your <span className="text-green-700">Healing Journey</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-serif text-amber-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-800">Address</h4>
                    <p className="text-amber-700">Kalyanish Ayurveda & Panchakarma Center</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-medium text-amber-800">Phone</h4>
                    <p className="text-amber-700">+91 XXXX XXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-medium text-amber-800">Email</h4>
                    <p className="text-amber-700">info@kalyanishayurveda.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-800">Hours</h4>
                    <p className="text-amber-700">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-amber-700">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-serif text-amber-800 mb-6">Request a Consultation</h3>
            
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/70" />
              <Input placeholder="Phone Number" className="bg-white/70" />
              <Input placeholder="Email Address" className="bg-white/70" />
              <Textarea placeholder="Tell us about your health concerns..." className="bg-white/70 h-32" />
              <Button className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center py-8 border-t border-amber-300/50">
          <div className="flex justify-center mb-4">
            <div className="text-4xl animate-pulse">🌿</div>
          </div>
          <p className="text-amber-700">
            © 2024 Kalyanish Ayurveda & Panchakarma Center. All rights reserved.
          </p>
          <p className="text-amber-600 text-sm mt-2">
            Restoring balance through ancient wisdom
          </p>
        </div>
      </div>
    </section>
  );
};
