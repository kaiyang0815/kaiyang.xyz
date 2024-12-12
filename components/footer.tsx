import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-400">
      <div className="flex items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} 凯阳</span>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/kaiyang0815">GitHub</Link>
          <Link href="https://twitter.com/KaiyW24184">Twitter</Link>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
