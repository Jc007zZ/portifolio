import { ReactNode } from "react";

interface Tech {
  children?: ReactNode;
  color: string;
}

export function Tech({ children, color }: Tech) {
  return (
    <div className="flex items-center gap-1 dark:bg-zinc-800 bg-zinc-400/40 w-fit py-[0.1rem] px-3 rounded-2xl">
      <div className={"size-[0.6rem] rounded-full pulse-custom " + color} />
      <p className="text-sm">{children}</p>
    </div>
  );
}
