import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-400">
      <div className="flex justify-between gap-4">
        <span>© {new Date().getFullYear()} 凯阳</span>
        <div className="flex gap-4">
          <Link href="https://github.com/kaiyang">GitHub</Link>
          <Link href="https://twitter.com/kaiyang0815">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}
