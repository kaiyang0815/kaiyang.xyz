"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "Swift",
  "SwiftUI",
  "UIKit",
  "iOS",
  "JavaScript",
  "HTML/CSS",
  "Git",
];

const interests = [
  {
    area: "Frontend Development",
    details: "Modern web frameworks, responsive design, and user experience",
  },
  {
    area: "iOS Development",
    details: "Native iOS apps, SwiftUI, and mobile user interfaces",
  },
  {
    area: "UI/UX Design",
    details: "Creating intuitive and beautiful user interfaces",
  },
];

export default function AboutContent() {
  return (
    <div className="container max-w-3xl mx-auto py-6 px-4 sm:py-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
        <motion.p
          className="text-lg sm:text-xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m Kaiyang. I&apos;m a software engineer passionate about
          creating beautiful and intuitive user experiences through web and iOS
          development.
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="mb-4">
            As a recent graduate turned software engineer, I&apos;m at the
            beginning of my exciting journey in tech. With less than a year of
            professional experience, I&apos;ve already discovered my passion for
            creating engaging user interfaces and seamless user experiences.
          </p>
          <p className="mb-4">
            I split my time between frontend web development and iOS app
            development, constantly learning and exploring new technologies in
            both domains. I believe in writing clean, maintainable code and
            creating applications that users love to interact with.
          </p>
        </motion.section>

        <motion.section
          className="my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Areas of Interest</h2>
          <div className="space-y-6">
            {interests.map((item, index) => (
              <motion.div
                key={item.area}
                className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <h3 className="font-semibold text-lg">{item.area}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Skills & Tools</h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">Current Projects</h2>
          <p className="mb-4">I&apos;m currently working on:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Building this personal blog using Next.js and TailwindCSS</li>
            <li>Learning SwiftUI and developing my first iOS app</li>
            <li>Exploring modern frontend frameworks and best practices</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-4">
            I&apos;m always excited to connect with fellow developers and learn
            from the community. Feel free to reach out through:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="https://github.com/kaiyangxie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kaiyang_xie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:hi@kaiyang.xyz"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Email
              </a>
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
