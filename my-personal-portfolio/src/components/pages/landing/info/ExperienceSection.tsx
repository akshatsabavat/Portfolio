import ExperienceTab from "@/components/custom/ExperienceTab";

const ExperienceSection = () => {
  return (
    <section className="py-20 max-w-[900px] mx-auto">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col gap-1">
          <h2 className="tracking-tight font-[family-name:var(--font-geist-sans)] font-bold text-4xl">
            Where I've Worked
          </h2>
          <p className="max-w-[600px] leading-6">
            Have a look at some of the places I have had the pleasure of working
            that have greatly contributed to my skills and experiences.
          </p>
        </div>
        <div className="mt-8">
          <ExperienceTab />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
