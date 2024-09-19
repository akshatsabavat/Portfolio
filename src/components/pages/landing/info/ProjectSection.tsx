import { ProjectCard } from "@/components/custom/ProjectCard";
import BlurFade from "@/components/magicui/blur-fade";

import NextJSIcon from "@/app/images/Icons/NextJSIcon.svg";
import TypeScriptIcon from "@/app/images/Icons/TypeScriptIcon.svg";
import GeminiIcon from "@/app/images/Icons/GeminiIcon.svg";
import OpenAIIcon from "@/app/images/Icons/OpenAIIcon.svg";
import CloudflareIcon from "@/app/images/Icons/CloudflareIcon.svg";
import PostgreSQLIcon from "@/app/images/Icons/PGIcon.svg";
import SupabaseIcon from "@/app/images/Icons/SupabaseIcon.svg";
import SanityIcon from "@/app/images/Icons/SanityIcon.svg";
import TRPCIcon from "@/app/images/Icons/TRPCIcon.svg";
import AssemblyAIIcon from "@/app/images/Icons/AssemblyIcon.png";
import ExpressIcon from "@/app/images/Icons/ExpressIconm.svg";
import PrismaIcon from "@/app/images/Icons/PrismaIcon.svg";
import JavascriptIcon from "@/app/images/Icons/JavascriptIcon.svg";
import RemixIcon from "@/app/images/Icons/RemixIcon.svg";

import SnuXplore from "@/app/images/projects/Explorance.png";
import Explorance from "@/app/images/projects/SnuXplore.png";
import Indibliss from "@/app/images/projects/Indibliss.png";
import { StaticImageData } from "next/image";

interface Technology {
  name: string;
  icon: string | StaticImageData;
  h: number;
  w: number;
}

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail: string;
  alt: string;
}

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: Technology[];
  links: {
    type: string;
    href: string;
  };
  indicator?: {
    show: boolean;
    text: string;
  };
  mediaItems: MediaItem[];
  image: StaticImageData;
  video: string;
}

interface ProjectData {
  projects: Project[];
}

const DATA: ProjectData = {
  projects: [
    {
      title: "Explorance",
      href: "https://explorance-showcase.vercel.app/",
      dates: "Feb 2024 - May 2024",
      active: true,
      description:
        "A Tech demo powered by OpenAI & Gemini developed for Omnipresent technologies showcasing the use of LLM products in creating a browser based touring experience",
      technologies: [
        { name: "Next.js", icon: NextJSIcon, h: 25, w: 25 },
        { name: "Typescript", icon: TypeScriptIcon, h: 25, w: 25 },
        { name: "TRPC", icon: TRPCIcon, h: 25, w: 25 },
        { name: "Supabase", icon: SupabaseIcon, h: 25, w: 25 },
        { name: "PostgreSQL", icon: PostgreSQLIcon, h: 25, w: 25 },
        { name: "Cloudflare", icon: CloudflareIcon, h: 25, w: 25 },
        { name: "Gemini", icon: GeminiIcon, h: 45, w: 45 },
        { name: "OpenAI", icon: OpenAIIcon, h: 25, w: 25 },
        { name: "Assembly AI", icon: AssemblyAIIcon, h: 25, w: 25 },
      ],
      links: {
        type: "Website",
        href: "https://github.com/tools-red/explorance.git",
      },
      indicator: {
        show: true,
        text: "AI suspended: no more funding",
      },
      mediaItems: [
        {
          type: "video",
          src: "https://pub-47e138e02b44477f9935d1b35c47d5a7.r2.dev/ExploranceAtFair.mp4",
          thumbnail: "/placeholder.svg?height=100&width=100",
          alt: "Project 2 Video",
        },
        {
          type: "video",
          src: "https://pub-47e138e02b44477f9935d1b35c47d5a7.r2.dev/InitialTestingExplorance.mp4",
          thumbnail: "/placeholder.svg?height=100&width=100",
          alt: "Project 5 Video",
        },
      ],
      image: Explorance,
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

    {
      title: "SnuXplore",
      href: "https://www.snuxplore.com/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        " An online platform built to ensure new students at Shiv Nadar University have an easier time navigating campus, accessing campus resources and attending events, currently has 6500+ site users",
      technologies: [
        { name: "Remix", icon: RemixIcon, h: 25, w: 25 },
        { name: "Javascript", icon: JavascriptIcon, h: 25, w: 25 },
        { name: "Prisma", icon: PrismaIcon, h: 25, w: 25 },
        { name: "PostgreSQL", icon: PostgreSQLIcon, h: 25, w: 25 },
        { name: "Express", icon: ExpressIcon, h: 25, w: 25 },
      ],
      links: {
        type: "Website",
        href: "https://github.com/SNUxplore/frontend",
      },
      mediaItems: [],
      image: SnuXplore,
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Indibliss Ecommerce",
      href: "https://indibliss-ecommerce-client.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "A complete Ecommerce platfrom built from scratch for a client, with an admin dashboard built to review and dispatch orders made on the site via customers ",
      technologies: [
        { name: "Next.js", icon: NextJSIcon, h: 25, w: 25 },
        { name: "Typescript", icon: TypeScriptIcon, h: 25, w: 25 },
        { name: "TRPC", icon: TRPCIcon, h: 25, w: 25 },
        { name: "Supabase", icon: SupabaseIcon, h: 25, w: 25 },
        { name: "PostgreSQL", icon: PostgreSQLIcon, h: 25, w: 25 },
        { name: "SanityIcon", icon: SanityIcon, h: 25, w: 25 },
      ],
      links: {
        type: "Website",
        href: "https://github.com/akshatsabavat/Indibliss-ecommerce-client",
      },
      indicator: {
        show: true,
        text: "Demo version: site under devops maintainance",
      },
      mediaItems: [],
      image: Indibliss,
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
};

const BLUR_FADE_DELAY = 0.04;

const ProjectSection = () => {
  return (
    <section id="projects" className="mb-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col gap-1">
              <h2 className="tracking-tight font-[family-name:var(--font-geist-sans)] font-bold text-4xl">
                Projects I&apos;ve worked on
              </h2>
              <p className="max-w-[600px] leading-6">
                Take a look at some of my projects that I was fortunate enough
                to build and collaborate with an awesome team
              </p>
            </div>
          </div>
        </BlurFade>
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[750px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                technologies={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                indicator={project.indicator}
                mediaItems={project.mediaItems}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
