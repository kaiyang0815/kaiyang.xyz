import Link from "next/link";
import RandomSentence from "./random-sentence";

export default function Header() {
  return (
    <header className="flex flex-col items-start gap-4 pb-4 pt-16">
      <h1 className="text-4xl font-black">凯阳的备忘录</h1>
      <div className="text-neutral-5 text-sm">
        <RandomSentence />
      </div>
      <nav className="flex gap-6 text-lg">
        <Link
          href="/"
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          首页
        </Link>
        <Link
          href="/projects"
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          项目
        </Link>
        <Link
          href="/about"
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          关于
        </Link>
      </nav>
      <hr />
    </header>
  );
}
