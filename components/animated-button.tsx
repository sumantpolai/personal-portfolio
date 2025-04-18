import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "hotstar-button px-4 py-2 rounded-lg font-medium transition-all duration-300",
          variant === "outline" ? "bg-transparent" : "bg-indigo-600/20",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton

