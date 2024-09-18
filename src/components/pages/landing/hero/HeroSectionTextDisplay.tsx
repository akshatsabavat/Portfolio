"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import Particles from "@/components/magicui/particles";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurIn from "@/components/magicui/blur-in";
import ShinyButton from "@/components/magicui/shiny-button";
import BlurFade from "@/components/magicui/blur-fade";

import AvatarProfileImage from "@/app/images/ProfileSiteImage.jpg";

const HeroSection = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="absolute z-10 flex items-center justify-center">
        <div className="flex-col items-center text-center">
          <div className="flex w-full justify-center">
            <BlurFade delay={0.25} inView>
              <Avatar className="h-[50px] w-[50px]">
                <Image
                  src={AvatarProfileImage}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </Avatar>
            </BlurFade>
          </div>
          <BlurIn
            word="Hey there 👋, I'm"
            fontSize={{
              default: "lg",
              md: "xl",
            }}
            fontWeight="normal"
          />
          <GradualSpacing
            className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Akshat Sabavat"
          />
          <BlurIn
            word="Student @ Pitt and Fullstack engineer with a passion for building SaaS products"
            fontSize={{
              default: "lg",
              md: "xl",
            }}
            fontWeight="normal"
            className="max-w-[400px] mx-auto"
          />
          <div className="mt-3 flex gap-3 max-w-[500px] mx-auto justify-center items-center flex-gap-2">
            <Button>Contact me</Button>
            <ShinyButton onClick={scrollToProjects} text="See my work" />
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default HeroSection;
