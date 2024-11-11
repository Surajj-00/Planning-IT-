// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";


// let's try this {cn} if it doesn't works then we change the path to:   import { cn } from "../../utils/cn";
// import { cn } from "@/lib/utils";
import { cn } from "../../utils/cn";




const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };