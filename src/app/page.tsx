import HeroSection from "@/components/pages/landing/hero/HeroSectionTextDisplay";
import NavigationDock from "@/components/custom/NavigationDock";
import ExperienceSection from "@/components/pages/landing/info/ExperienceSection";
import ProjectSection from "@/components/pages/landing/info/ProjectSection";
import TextRevealByWord from "@/components/magicui/text-reveal";

const Home = () => {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <NavigationDock />
      </div>
      <HeroSection />
      <div className="px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
          <TextRevealByWord text="Former Athlete🏀, Developer and an Engineer🛠️with a passion for building products" />
        </div>
        <ExperienceSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
