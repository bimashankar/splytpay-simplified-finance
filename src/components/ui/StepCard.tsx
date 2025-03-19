
import React from "react";
import { cn } from "@/lib/utils";
import { GlassmorphicCard } from "./GlassmorphicCard";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon,
  className,
}) => {
  return (
    <GlassmorphicCard 
      interactive
      className={cn("relative h-full", className)}
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient flex items-center justify-center text-white font-semibold text-lg">
        {number}
      </div>
      <div className="pt-6 pb-2">
        <div className="text-splyt-500 mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-splyt-50">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlassmorphicCard>
  );
};

export default StepCard;
