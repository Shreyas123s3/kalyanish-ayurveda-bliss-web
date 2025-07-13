
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const EnhancedButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "default",
  size = "default"
}: EnhancedButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={`
        relative overflow-hidden group transition-all duration-300
        hover:scale-105 hover:shadow-xl hover:shadow-green-500/25
        active:scale-95 active:duration-75
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-green-400/0 before:via-green-400/20 before:to-green-400/0
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Button>
  );
};
