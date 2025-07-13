import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Doctor } from "@/components/Doctor";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Panchakarma } from "@/components/Panchakarma";
import { Treatments } from "@/components/Treatments";
import { Products } from "@/components/Products";
import { PatientTestimonials } from "@/components/PatientTestimonials";
import { ContactFooter } from "@/components/ContactFooter";
import { Navbar } from "@/components/Navbar";
import { DecorativeElements } from "@/components/DecorativeElements";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AdvancedFloatingElements } from "@/components/AdvancedFloatingElements";
import { AdvancedSectionDivider } from "@/components/AdvancedSectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-amber-50 relative overflow-hidden">
      <ScrollProgress />
      <AdvancedFloatingElements />
      
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/c8953e53-440c-489c-a053-842ca5d6f053.png')` }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <AdvancedSectionDivider variant="herbal-wave" />
        <AboutUs />
        
        <AdvancedSectionDivider variant="mystical" />
        <Doctor />
        
        <WhyChooseUs />
        
        <AdvancedSectionDivider variant="lotus" />
        <Panchakarma />
        
        <AdvancedSectionDivider variant="leaves" />
        <Treatments />
        
        <AdvancedSectionDivider variant="vines" />
        <Products />
        
        <AdvancedSectionDivider variant="mystical" />
        <PatientTestimonials />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Index;
