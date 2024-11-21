import { Metadata } from "next";
import { MotionDiv } from "@/components/motion-wrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Kaiyang's Notebook",
  description: "A showcase of my projects and work",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of my projects and experiments. Each project is built
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Source</span>
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
