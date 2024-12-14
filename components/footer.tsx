import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuGithub, LuRss, LuTwitter } from "react-icons/lu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-300 dark:text-neutral-400">
      <div className="flex items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()}{" "}
          <Link
            href="/about"
            className={cn("hover:text-neutral-900 hover:dark:text-neutral-100")}
          >
            凯阳
          </Link>
        </span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Link href="/rss">
              <LuRss className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/kaiyang0815">
              <LuGithub className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Github</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://twitter.com/KaiyW24184">
              <LuTwitter className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Twitter or X</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
