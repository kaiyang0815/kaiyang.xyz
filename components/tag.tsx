import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/10",
        className
      )}
    >
      {children}
    </span>
  );
}
