
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  animated?: boolean;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
  element = "h1",
  animated = true,
}) => {
  const Element = element;
  
  return (
    <Element
      className={cn(
        animated ? "text-shimmer" : "text-gradient",
        "font-display font-bold",
        className
      )}
    >
      {children}
    </Element>
  );
};

export default AnimatedGradientText;
