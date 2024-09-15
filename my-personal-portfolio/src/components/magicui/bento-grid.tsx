import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimatedGradientText from "./animated-gradient-text";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
      "bg-white dark:bg-black", // Solid background
      "shadow-md", // Add shadow for depth
      className
    )}
  >
    <div className="relative z-10 flex flex-col p-6">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
      </div>
      <p className="max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>

    <div className="absolute inset-0 top-[100px]">{background}</div>

    <a
      href={href}
      className={cn(
        "absolute bottom-4 right-4 p-2 transition-all duration-300 opacity-0 group-hover:opacity-100",
        "rounded-lg"
      )}
    >
      <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            "text-sm font-medium"
          )}
        >
          {cta}
        </span>
        <ChevronRight className="ml-1 inline-block size-3" />
      </AnimatedGradientText>
    </a>
  </div>
);

export { BentoCard, BentoGrid };
