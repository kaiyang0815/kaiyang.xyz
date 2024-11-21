"use client";

import { Link } from "@/utils/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations("nav");

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { href: "/blog", label: t("blog") },
    { href: "/weekly", label: t("weekly") },
    { href: "/projects", label: t("projects") },
    { href: "/about", label: t("about") },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-lg">
          Kaiyang
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-6 hidden md:flex md:flex-1 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-left">{t("navigation")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 pt-4">
                  <LanguageToggle />
                  <ModeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
