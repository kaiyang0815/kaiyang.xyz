"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

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

export default function AboutContent() {
  const t = useTranslations("about");

  const interests = [
    {
      area: t("interests.frontend.title"),
      details: t("interests.frontend.description"),
    },
    {
      area: t("interests.ios.title"),
      details: t("interests.ios.description"),
    },
    {
      area: t("interests.uiux.title"),
      details: t("interests.uiux.description"),
    },
  ];

  return (
    <div className="container max-w-3xl mx-auto py-6 px-4 sm:py-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h1>

      <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
        <motion.p
          className="text-lg sm:text-xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("intro")}
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">{t("background.title")}</h2>
          <p className="mb-4">{t("background.description1")}</p>
          <p className="mb-4">{t("background.description2")}</p>
        </motion.section>

        <motion.section
          className="my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">{t("interests.title")}</h2>
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
          <h2 className="text-2xl font-bold mb-6">{t("skills.title")}</h2>
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
          <h2 className="text-2xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="mb-4">{t("projects.intro")}</p>
          <ul className="list-disc pl-5 space-y-2">
            {t.raw("projects.items").map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="mb-4">{t("contact.description")}</p>
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
