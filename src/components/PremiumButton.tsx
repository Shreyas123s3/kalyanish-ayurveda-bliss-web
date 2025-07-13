
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const PremiumButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "default",
  size = "default"
}: PremiumButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group transition-all duration-500 transform
        hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30
        active:scale-95 active:duration-150
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-green-400/0 before:via-green-400/30 before:to-amber-400/20
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-1000
        after:absolute after:inset-0 after:bg-gradient-to-r
        after:from-transparent after:via-white/10 after:to-transparent
        after:translate-y-[-100%] hover:after:translate-y-[100%]
        after:transition-transform after:duration-700
        ${isHovered ? 'shadow-lg shadow-green-500/25' : ''}
        ${className}
      `}
      style={{
        boxShadow: isHovered 
          ? '0 0 30px rgba(34, 197, 94, 0.3), 0 0 60px rgba(251, 191, 36, 0.2)' 
          : undefined,
      }}
    >
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
        {children}
      </span>
      
      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-60"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
      )}
    </Button>
  );
};
