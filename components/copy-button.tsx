"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return (
    <button
      className={cn(
        "absolute right-4 top-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background p-2 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(value).then(() => {
          setHasCopied(true);
        });
      }}
      {...props}
    >
      {hasCopied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      <span className="sr-only">Copy</span>
    </button>
  );
}
