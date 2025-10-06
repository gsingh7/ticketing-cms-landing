import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-primary hover:bg-primary/10 text-primary",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
        ghost: "hover:bg-accent/10 text-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4",
        lg: "h-14 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  asChild = false,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(buttonVariants({ variant, size, className }));

  if (asChild) {
    const child = props.children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(buttonClasses, child.props?.className),
      ...props,
    });
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {props.children}
      </Link>
    );
  }

  return <button className={buttonClasses} data-slot="button" {...props} />;
}
