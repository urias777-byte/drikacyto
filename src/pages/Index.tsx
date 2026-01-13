import MoleculeBackground from '@/components/MoleculeBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import TrustSection from '@/components/TrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated molecule background */}
      <MoleculeBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <SolutionSection />
          <TrustSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
