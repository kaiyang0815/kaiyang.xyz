"use client";

import { cn } from "app/libs/utils";

interface TabProps {
  items: string[];
  selectedItem: string;
  onChange: (item: string) => void;
}

export function Tab({ items, selectedItem, onChange }: TabProps) {
  return (
    <div className="mb-8 flex space-x-4 border-b border-neutral-200 dark:border-neutral-800">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={cn(
            "pb-2 text-sm font-medium transition-all",
            selectedItem === item
              ? "border-b-2 border-neutral-800 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100"
              : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
