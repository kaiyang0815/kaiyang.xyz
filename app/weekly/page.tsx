import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly | Kaiyang's Notebook",
  description: "Weekly updates and learning notes",
};

export default function WeeklyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-6 px-4 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">
        Weekly Updates
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
        A weekly journal of my learning journey and thoughts.
      </p>

      <div className="space-y-6 sm:space-y-8">{/* WeeklyList component */}</div>
    </div>
  );
}
