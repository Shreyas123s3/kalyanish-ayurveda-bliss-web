
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-amber-50">
      <Navbar />
      <Hero />
      <AboutUs />
      <Doctor />
      <WhyChooseUs />
      <Panchakarma />
      <Treatments />
      <Products />
      <PatientTestimonials />
      <ContactFooter />
    </div>
  );
};

export default Index;
