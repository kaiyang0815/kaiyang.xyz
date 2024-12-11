"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-1 origin-[0] bg-neutral-200 dark:bg-stone-500"
    />
  );
}
