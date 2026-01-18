import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-brand-red/20">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      
      {/* Placeholder for Testimonials or Portfolio if needed later */}
      
      <ContactForm />
      <Footer />
    </main>
  );
}
