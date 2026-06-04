import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { BmiCta } from "@/components/BmiCta";
import HealthTipsSection from "@/components/bmi/HealthTipsSection";
import { BmiResult } from "@/types/bmi.types";
import { PackagesComparison } from "@/components/PackagesComparison";
import { PackagesSlider } from "@/components/PackagesSlider";
import { Testimonials } from "@/components/Testimonials";
import { TeamSection } from "@/components/TeamSection";
import { JourneySteps } from "@/components/JourneySteps";
import { Faq } from "@/components/Faq";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Payment } from "@/components/Payment";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [lastResult, setLastResult] = useState<BmiResult | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("diet_picnic_last_bmi");
    if (savedResult) {
      try {
        setLastResult(JSON.parse(savedResult));
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-[#191c1d]">
      <Navbar />
      <Hero />
      <VideoSection />
      <WhyUs />
      <Services />
      <BmiCta />
      
      {/* Interactive Health Tips Section */}
      <section id="health-tips" className="py-20 md:py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <HealthTipsSection lastResult={lastResult} />
        </div>
      </section>

      <section id="packages">
        <PackagesSlider />
        <PackagesComparison />
      </section>
      <Testimonials />
      <TeamSection />
      <JourneySteps />
      <Faq />
      <RegistrationForm />
      <Payment />
      <FinalCta />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors dir="rtl" />
    </main>
  );
}
