"use client";

import { motion, type AnimationProps } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  href?: string;
  text?: string;
  px?: string;
  className?: string;
  icon?: StaticImageData;
  iconH?: number;
  iconW?: number;
  onClick?: () => void | Promise<void>;
  reverseScheme?: boolean; // Add this new prop
}

const ShinyButton = ({
  text,
  className,
  icon,
  px,
  href,
  iconH,
  iconW,
  onClick,
  reverseScheme = false, // Default to false
}: ShinyButtonProps) => {
  const ButtonContent = () => (
    <motion.button
      {...animationProps}
      className={cn(
        `relative rounded-lg px-${
          px ? px : "6"
        } py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out`,
        reverseScheme
          ? "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] dark:hover:shadow"
          : "hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "relative flex items-center justify-center h-full w-full text-sm tracking-wide font-[family-name:var(--font-geist-sans)]",
          reverseScheme
            ? "text-[rgb(255,255,255,90%)] dark:text-[rgb(0,0,0,65%)] dark:font-normal font-light"
            : "text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] dark:font-light font-normal"
        )}
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {text}
        {icon && (
          <Image
            className={text ? "ml-1" : ""}
            src={icon}
            alt=""
            width={iconW ?? 20}
            height={iconH ?? 20}
          />
        )}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );

  return href ? (
    <a href={href}>
      <ButtonContent />
    </a>
  ) : (
    <ButtonContent />
  );
};

export default ShinyButton;
