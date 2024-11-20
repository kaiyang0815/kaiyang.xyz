"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

export function MotionDiv({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
