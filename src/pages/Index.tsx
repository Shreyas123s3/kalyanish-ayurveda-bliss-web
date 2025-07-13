
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Doctor } from "@/components/Doctor";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Panchakarma } from "@/components/Panchakarma";
import { Treatments } from "@/components/Treatments";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { ContactFooter } from "@/components/ContactFooter";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-amber-50">
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/c8953e53-440c-489c-a053-842ca5d6f053.png')` }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutUs />
        <Doctor />
        <WhyChooseUs />
        <Panchakarma />
        <Treatments />
        <Products />
        <Testimonials />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Index;
