import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProgramsSection />
        <CampusLifeSection />
        <NewsEventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
