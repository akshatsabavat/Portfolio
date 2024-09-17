import { ProjectCard } from "@/components/custom/ProjectCard";
import BlurFade from "@/components/magicui/blur-fade";

import NextJSIcon from "@/app/images/Icons/NextJSIcon.svg";
import TypeScriptIcon from "@/app/images/Icons/TypeScriptIcon.svg";
import ChakraUIIcon from "@/app/images/Icons/ChakraUIIcon.svg";
import GeminiIcon from "@/app/images/Icons/GeminiICON.svg";
import OpenAIIcon from "@/app/images/Icons/OpenAIIcon.svg";
import CloudflareIcon from "@/app/images/Icons/CloudflareIcon.svg";
import PostgreSQLIcon from "@/app/images/Icons/PGIcon.svg";
import SupabaseIcon from "@/app/images/Icons/SupabaseIcon.svg";

import SnuXplore from "@/app/images/projects/SnuXplore.png";

const DATA = {
  projects: [
    {
      title: "Explorance",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A Tech demo powered by OpenAI & Gemini developed for Omnipresent technologies to showcase the use of different LLM products and AI generated videos in creating a browser based touring experience",
      technologies: [
        { name: "Next.js", icon: NextJSIcon, h: 25, w: 25 },
        { name: "Typescript", icon: TypeScriptIcon, h: 25, w: 25 },
        { name: "Supabase", icon: SupabaseIcon, h: 25, w: 25 },
        { name: "PostgreSQL", icon: PostgreSQLIcon, h: 25, w: 25 },
        { name: "Cloudflare", icon: CloudflareIcon, h: 25, w: 25 },
        { name: "Gemini", icon: GeminiIcon, h: 45, w: 45 },
        { name: "OpenAI", icon: OpenAIIcon, h: 25, w: 25 },
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
        },
      ],
      image: SnuXplore,
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
                Projects I've worked on
              </h2>
              <p className="max-w-[600px] leading-6">
                Take a look at some of my projects that I was fortunate enough
                to build and collaborate with an awesome team
              </p>
            </div>
          </div>
        </BlurFade>
        <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[750px] mx-auto">
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
                tags={project.technologies}
                image={project.image}
                video={project.video}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
