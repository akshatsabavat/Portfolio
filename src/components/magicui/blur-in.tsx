"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  fontSize?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  fontWeight?: string;
}

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  fontSize,
  fontWeight = "bold",
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const fontSizeClasses = fontSize
    ? Object.entries(fontSize)
        .map(([breakpoint, size]) =>
          breakpoint === "default"
            ? `text-${size}`
            : `${breakpoint}:text-${size}`
        )
        .join(" ")
    : "text-4xl md:text-7xl";

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        `font-display text-center font-${fontWeight} tracking-[-0.02em] drop-shadow-sm`,
        fontSizeClasses,
        className
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
