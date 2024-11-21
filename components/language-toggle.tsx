"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "@/utils/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/i18n";

const languageNames = {
  en: "English",
  zh: "中文",
} as const;

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    router.replace(pathname, { locale: value });
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[90px] h-8">
        <SelectValue placeholder={languageNames[locale as keyof typeof languageNames]} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem
            key={locale}
            value={locale}
            className="cursor-pointer"
          >
            {languageNames[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
