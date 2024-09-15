import HeroSection from "@/components/pages/landing/hero/HeroSectionTextDisplay";
import NavigationDock from "@/components/custom/NavigationDock";
import VelocityTextSection from "@/components/pages/landing/hero/VelocityTextSection";
import AboutSection from "@/components/pages/landing/hero/AboutSection";
import ExperienceSection from "@/components/pages/landing/hero/ExperienceSection";

const Home = () => {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <NavigationDock />
      </div>
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <VelocityTextSection />
    </div>
  );
};

export default Home;
