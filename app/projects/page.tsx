"use client";
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col justify-start space-y-4">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-neutral max-w-none space-y-4"
      >
        <h1>近期项目</h1>
      </motion.section>
    </main>
  );
}
