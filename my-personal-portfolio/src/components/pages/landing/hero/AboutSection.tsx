import React from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, CodeIcon, TrophyIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/components/example/animated-list-demo";
import SparklesText from "@/components/magicui/sparkles-text";
import { MarqueeDemo } from "./MarqueeDemo";

const skills = [
  "Full-Stack Development",
  "UI/UX Design",
  "SaaS",
  "Startups",
  "Sports",
  "Innovation",
];

const features = [
  {
    Icon: FileTextIcon,
    name: "My projects",
    description: "Checkout some of my work",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 m-2",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <p className="text-sm font-medium dark:text-white">{skill}</p>
          </div>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Athletic Achievements",
    description:
      "Former national-level tennis player and basketball team member",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      // <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      <></>
    ),
  },
  {
    Icon: Share2Icon,
    name: "What others say about me",
    description:
      "Read the testimonials of some of the people I had to oppurtunity to work with",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 -top-20 blur-[5px]">
          <MarqueeDemo />
        </div>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Timeline",
    description: "My journey through the years",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      // <Calendar
      //   mode="single"
      //   selected={new Date(2022, 4, 11, 0, 0, 0)}
      //   className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      // />
      <></>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 relative container max-w-[900px] mx-auto px-4">
      <div className="flex-col mb-10">
        <SparklesText
          className="tracking-tight font-[family-name:var(--font-geist-sans)] font-bold text-5xl mb-4"
          text="More about me"
        />
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
