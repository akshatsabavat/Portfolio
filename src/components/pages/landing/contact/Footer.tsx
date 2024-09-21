"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ShinyButton from "@/components/magicui/shiny-button";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="pt-6 md:pt-8 pb-40 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <GradualSpacing
          className="font-display text-center text-3xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
          text="Like what you see ?"
        />
        <p className="mb-6 dark:text-gray-400">
          Let&apos;s talk and get this going
        </p>
        <div className="w-full max-w-md space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-1/2 py-2 px-4 bg-transparent border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300 ease-in-out"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-1/2 py-2 px-4 bg-transparent border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300 ease-in-out"
            />
          </div>
          <Input
            type="text"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-2 px-4 bg-transparent border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300 ease-in-out"
          />
          <div className="flex justify-start">
            <ShinyButton
              iconH={25}
              iconW={25}
              text={isSubmitting ? "Submitting" : "Send message"}
              className="text-black"
              onClick={handleSubmit}
            />
          </div>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-500">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-500">
              Error sending message. Please try again.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
