"use client";

import Link from "next/link";
import { Linkedin, Send } from "lucide-react";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ShinyButton from "@/components/magicui/shiny-button";

import MailSendIcon from "@/app/images/Icons/MailSendIcon.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="py-6 md:py-8 mb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <GradualSpacing
          className="font-display text-center text-3xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
          text="Like what you see ?"
        />
        <p className="mb-6">Let's talk and get this going !</p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <div className="relative flex-grow">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 bg-transparent  border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300 ease-in-out"
            />
          </div>
          <ShinyButton
            reverseScheme={false}
            px="2"
            iconH={25}
            iconW={25}
            icon={MailSendIcon}
          />
        </form>
      </div>
    </footer>
  );
}
