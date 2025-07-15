
import { Hero } from "@/components/Hero";
import { ImmersiveVideoExperience } from "@/components/ImmersiveVideoExperience";
import { AboutUs } from "@/components/AboutUs";
import { Doctor } from "@/components/Doctor";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Panchakarma } from "@/components/Panchakarma";
import { Treatments } from "@/components/Treatments";
import { Products } from "@/components/Products";
import { ExclusiveRange } from "@/components/ExclusiveRange";
import { PatientTestimonials } from "@/components/PatientTestimonials";
import { ContactFooter } from "@/components/ContactFooter";
import { Navbar } from "@/components/Navbar";
import { DecorativeElements } from "@/components/DecorativeElements";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-amber-50">
      <ScrollProgress />
      <DecorativeElements />
      
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/c8953e53-440c-489c-a053-842ca5d6f053.png')` }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <ImmersiveVideoExperience />
        
        <SectionDivider variant="leaves" />
        <AboutUs />
        
        <SectionDivider variant="vines" />
        <Doctor />
        
        <WhyChooseUs />
        
        <SectionDivider variant="lotus" />
        <Panchakarma />
        
        <SectionDivider variant="leaves" />
        <Treatments />
        
        <SectionDivider variant="vines" />
        <Products />
        
        <SectionDivider variant="lotus" />
        <ExclusiveRange />
        
        <SectionDivider variant="leaves" />
        <PatientTestimonials />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Index;
