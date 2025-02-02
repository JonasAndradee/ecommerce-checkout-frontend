import { forwardRef } from "react";
import { IMaskInput, ReactMaskProps } from "react-imask";
import { cn } from "@/presentation/lib/utils";

export interface MaskedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: any;
  definitions?: {
    [key: string]: RegExp;
  };
}

const MaskedInput = forwardRef<
  HTMLInputElement,
  ReactMaskProps<HTMLInputElement> & MaskedInputProps
>(({ className, mask, definitions, ...props }, ref) => {
  return (
    <IMaskInput
      {...props}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      mask={mask}
      unmask={false}
      ref={ref as any}
      definitions={definitions}
    />
  );
});

MaskedInput.displayName = "MaskedInput";

export { MaskedInput };
