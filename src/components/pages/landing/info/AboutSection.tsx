import Image, { StaticImageData } from "next/image";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  MarqueeCocurricularBento,
  MarqueeTestimonialBento,
} from "../../../custom/Marquees";

import React from "react";
import Marquee from "@/components/magicui/marquee";
import ContentfulIcon from "@/app/images/toolIcons/contentful.svg";
import PrismaIcon from "@/app/images/toolIcons/prisma.svg";
import TypescriptIcon from "@/app/images/toolIcons/typescript-icon.svg";
import SupabaseIcon from "@/app/images/toolIcons/supabase-icon.svg";
import PostgreSqlIcon from "@/app/images/toolIcons/postgresql.svg";

const toolIcons = [
  { Icon: ContentfulIcon, name: "Contentful" },
  { Icon: PrismaIcon, name: "Prisma" },
  { Icon: TypescriptIcon, name: "TypeScript" },
  { Icon: SupabaseIcon, name: "Supabase" },
  { Icon: PostgreSqlIcon, name: "PostgreSQL" },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "My projects",
    description: "Checkout some of my work",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 lg:col-span-1",
    background: (
      <Marquee className="absolute top-10 [--duration:20s] ">
        {toolIcons.map(({ Icon, name }, idx) => (
          <div key={idx} className="relative mx-5 ">
            <Image
              src={Icon as StaticImageData}
              alt={name}
              width={48}
              height={48}
              className="mb-2"
            />
          </div>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Extra/Co-Curricular Achievements",
    description:
      "Former national-level tennis player and basketball team member",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0">
          <MarqueeCocurricularBento />
        </div>
      </div>
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
        <div className="absolute inset-0 -top-20 ">
          <MarqueeTestimonialBento />
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
        <p className="tracking-tight font-[family-name:var(--font-geist-sans)] font-bold text-4xl mb-4">
          More about me
        </p>
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
