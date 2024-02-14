import { cn } from "@/lib/utils";
import React from "react";

type BlockquoteProps = {
  children: React.ReactNode;
  author?: string;
  color?: "card" | "primary" | "secondary" | "destructive";
};

export default function Blockquote({
  children,
  author = "unknown",
  color = "card",
}: BlockquoteProps) {
  const blockquoteClasses = cn(
    "relative px-6 py-2 text-center rounded-xl custom-block-quote overflow-hidden",
    `bg-${color} text-${color}-foreground`
  );

  return (
    <blockquote className={blockquoteClasses}>
      <p
        className={cn(
          "text-lg leading-[1.75rem] xl:text-base",
          `bg-${color} text-${color}-foreground`
        )}
      >
        {children}
      </p>
      <div
        className={cn(
          "mt-4 text-sm font-medium",
          `text-purple-600 dark:text-purple-400 bg-${color} text-${color}-foreground`
        )}
      >
        — {author}
      </div>
    </blockquote>
  );
}
