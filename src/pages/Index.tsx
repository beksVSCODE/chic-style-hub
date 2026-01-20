import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CatalogSection />
        <NewArrivalsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
