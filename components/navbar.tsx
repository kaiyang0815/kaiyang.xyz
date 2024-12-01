"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/weekly": {
    name: "weekly",
  },
  "/project": {
    name: "project",
  },
  "/about": {
    name: "about",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="mb-8 -ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative m-1 flex px-2 py-1 align-middle text-base font-medium transition-all hover:text-red-900 ${
                    isActive ? "text-red-900" : "text-neutral-500"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        <hr className="text-neutral-200 dark:text-neutral-800" />
      </div>
    </aside>
  );
}
