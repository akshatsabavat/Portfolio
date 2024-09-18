import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Markdown from "react-markdown";
import ShinyButton from "../magicui/shiny-button";

import SitelinkIcon from "@/app/images/Icons/SiteLink.svg";
import GithubIcon from "@/app/images/Icons/GithubIcon.svg";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly {
    name: string;
    icon: StaticImageData;
    h: number;
    w: number;
  }[];
  link?: string;
  image?: StaticImageData;
  video?: string;
  links?: {
    type: string;
    href: string;
  };
  className?: string;
  indicator?: {
    show: boolean;
    text: string;
  };
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  indicator,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative"
      }
    >
      {indicator && indicator.show && (
        <div className="absolute top-2 left-2 z-10">
          <Badge variant="destructive" className="text-xs px-2 py-1">
            {indicator.text}
          </Badge>
        </div>
      )}
      <Link href={href ?? ""} className={cn("block cursor-pointer", className)}>
        <Image
          src={image as StaticImageData}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top border-b-2 border-gray-100"
        />
      </Link>
      <CardHeader className="px-3">
        <div className="space-y-1">
          <div className="flex flex-row items-baseline justify-between w-full mb-3">
            <div className="flex flex-col gap-1">
              <CardTitle className="text-xl">{title}</CardTitle>
              <time className="text-xs">{dates}</time>
            </div>
            <div className="flex flex-row gap-2">
              <ShinyButton href={href ?? ""} px={"2"} icon={SitelinkIcon} />
              <a className="pt-1.5" href={links?.href}>
                <Image
                  src={GithubIcon as StaticImageData}
                  alt="Project Github URL"
                  height={24}
                  width={24}
                  className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
          <Markdown className="prose max-w-full text-pretty text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag, index) => (
              <div
                className="flex items-center px-1 py-0 text-[12px]"
                key={index}
              >
                <Image
                  src={tag.icon}
                  alt={tag.name}
                  width={tag.w}
                  height={tag.h}
                  className="mr-1"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
