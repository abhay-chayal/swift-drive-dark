import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BookingSection from "@/components/BookingSection";
import BookingTest from "@/components/BookingTest";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="page-transition">
        <HeroSection />
        <FeaturesSection />
        <BookingSection />
        <BookingTest />
      </main>
    </div>
  );
};

export default Index;
