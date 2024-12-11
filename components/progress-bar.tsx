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
      className="fixed left-0 right-0 top-0 h-[2px] origin-[0] bg-neutral-800 dark:bg-neutral-100"
    />
  );
}
