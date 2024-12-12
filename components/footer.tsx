import Link from "next/link";
import { LuGithub, LuRss, LuTwitter } from "react-icons/lu";
import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-400">
      <div className="flex items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()}{" "}
          <Link
            href="/about"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            凯阳
          </Link>
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="/rss"
            className="h-4 w-4 hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <LuRss />
          </Link>
          <Link
            href="https://github.com/kaiyang0815"
            className="h-4 w-4 hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <LuGithub />
          </Link>
          <Link
            href="https://twitter.com/KaiyW24184"
            className="h-4 w-4 hover:text-neutral-900 hover:dark:text-neutral-100"
          >
            <LuTwitter />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
