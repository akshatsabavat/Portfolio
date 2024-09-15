import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const VelocityTextSection = () => {
  return (
    <section className="py-20 ">
      <VelocityScroll
        text="Develop Launch Scale"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary drop-shadow-sm dark:text-primary-foreground md:text-7xl md:leading-[5rem]"
      />
    </section>
  );
};

export default VelocityTextSection;
