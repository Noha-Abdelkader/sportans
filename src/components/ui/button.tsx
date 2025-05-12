import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-300 ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: `border-2 border-dark  bg-transparent hover:bg-black hover:text-white `,
        "outline-d": `border border-white  bg-transparent hover:bg-white/60 hover:text-main-500`,
        secondary: "!bg-main-500 text-white hover:bg-main-500/50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "before-effect":
          "border border-transparent text-white bg-dark-300 relative  before:content-'' before:h-8 before:w-6 before:bg-main-500 before:-top-1.5 before:absolute before:-right-1.5 before:-z-10  hover:before:top-0 hover:before:right-0   duration-300 ease-in-out before:transition-all hover:bg-main-500 hover:before:bg-transparent   ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9  px-3",
        lg: " h-9 md:h-11  px-8 md:py-2 text-sm md:text-lg",
        icon: "h-10 w-10",
      },
      mood: {
        dark: "dark",
        light: "light",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      mood: "light",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, mood, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, mood }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
