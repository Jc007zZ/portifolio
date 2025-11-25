import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Container {
  className?: string;
  children?: ReactNode;
}

export function Container({ className, children }: Container) {
  return (
    <div
      className={cn(
        "flex-1 h-40 bg-zinc-200/50 dark:bg-neutral-950/50 rounded-lg border dark:border-neutral-900 border-neutral-900/50 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
