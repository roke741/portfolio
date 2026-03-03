"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  const getAnimationDelay = (idx: number) => {
    // deterministic value between 0s and 5s (inclusive)
    const value = ((idx * 37) % 51) / 10;
    return `${value.toFixed(1)}s`;
  };

  const getAnimationDuration = (idx: number) => {
    // deterministic value between 5s and 10s
    const value = 5 + ((idx * 29) % 51) / 10;
    return `${value.toFixed(1)}s`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {meteors.map((_, idx) => {
        const meteorCount = number || 20;
        const position = idx * (800 / meteorCount) - 400;

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-12.5 before:-translate-y-1/2 before:bg-linear-to-r before:from-slate-500 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: getAnimationDelay(idx),
              animationDuration: getAnimationDuration(idx),
            }}
          />
        );
      })}
    </motion.div>
  );
};
