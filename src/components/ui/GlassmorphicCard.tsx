
import React from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  shine?: boolean;
}

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  interactive = false,
  shine = false,
}) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        interactive && "hover:shadow-glass-lg hover:-translate-y-1",
        shine && "card-shine",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
