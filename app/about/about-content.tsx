"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Docker",
  "AWS",
  "GraphQL",
  "TailwindCSS",
];

export default function AboutContent() {
  return (
    <div className="container max-w-3xl mx-auto py-6 px-4 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">About Me</h1>

      <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
        <p className="text-lg sm:text-xl mb-4 sm:mb-6">
          Hi, I&apos;m Kaiyang. I&apos;m a software engineer passionate about
          building things and sharing knowledge.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4">
          Background
        </h2>
        {/* ... background content ... */}

        {/* 技能标签部分 */}
        <motion.section className="my-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Skills & Tools</h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4">
          Contact
        </h2>
        {/* ... contact content ... */}
      </div>
    </div>
  );
}
