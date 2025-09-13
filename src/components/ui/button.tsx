import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury Premium Variants
        "luxury-primary": "bg-deep-charcoal text-cream-ivory shadow-luxury hover:shadow-premium hover:-translate-y-1 hover:scale-105 font-body font-medium transition-all duration-300 ease-premium border border-warm-gold/20",
        "luxury-secondary": "bg-cream-ivory text-deep-charcoal shadow-button hover:shadow-card hover:-translate-y-0.5 font-body font-medium transition-all duration-300 border border-deep-charcoal/10",
        "luxury-gold": "bg-warm-gold text-deep-charcoal shadow-button hover:shadow-premium hover:-translate-y-1 font-body font-semibold transition-all duration-300",
        "hero-cta": "bg-deep-charcoal text-cream-ivory shadow-luxury hover:shadow-premium hover:-translate-y-1 hover:scale-105 font-body font-semibold transition-all duration-300 ease-premium border border-warm-gold/30",
        "size-pill": "bg-soft-pearl text-deep-charcoal border border-deep-charcoal/20 hover:bg-deep-charcoal hover:text-cream-ivory font-body font-medium transition-all duration-200",
        "size-pill-active": "bg-deep-charcoal text-cream-ivory border border-warm-gold font-body font-medium",
        "premium-primary": "bg-deep-charcoal text-cream-ivory shadow-button hover:shadow-card hover:-translate-y-0.5 font-body font-medium transition-all duration-300",
        "premium-secondary": "bg-soft-pearl text-deep-charcoal shadow-button hover:shadow-card hover:-translate-y-0.5 font-body font-medium transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 px-10 py-4 text-base",
        icon: "h-10 w-10",
        pill: "h-8 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
