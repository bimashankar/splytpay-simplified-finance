
import React from "react";
import { cn } from "@/lib/utils";

interface UseCaseCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  icon,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white/80 shadow-glass hover:shadow-glass-lg border border-white/20 backdrop-blur-sm",
      "rounded-xl p-6 transition-all duration-300 hover:-translate-y-1",
      "flex flex-col items-center text-center",
      className
    )}>
      <div className="mb-4 text-splyt-500 flex items-center justify-center w-16 h-16 rounded-full bg-splyt-50">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

export default UseCaseCard;
