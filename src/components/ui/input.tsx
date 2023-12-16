import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full border border-input bg-secondary font-aThuluth text-3xl rounded-2xl py-8 md:py-10 md:px-20 md:w-fit ring-offset-background text-center file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brown placeholder:text-center placeholder:text-xl  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
