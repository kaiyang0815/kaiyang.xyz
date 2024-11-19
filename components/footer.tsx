import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 mx-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Kaiyang
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            GitHub
          </a>
          .
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yourusername">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com/yourusername">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:your@email.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
