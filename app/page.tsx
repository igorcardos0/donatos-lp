import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { BentoVitrine } from "@/components/bento-vitrine";
import { BookingForm } from "@/components/booking-form";
import { SOSChurrasco } from "@/components/sos-churrasco";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBar />
      <BentoVitrine />
      <section id="sos">
        <SOSChurrasco />
      </section>
      <BookingForm />
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
      <StickyCTA />
    </main>
  );
}
