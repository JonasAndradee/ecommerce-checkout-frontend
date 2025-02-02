import { forwardRef } from "react";
import { IMaskInput, IMaskInputProps } from "react-imask";
import { cn } from "@/presentation/lib/utils";
import { InputElement, Masked } from "imask";

export interface CustomMaskedInputProps
  extends Omit<IMaskInputProps<InputElement>, "ref"> {
  className?: string;
}

const MaskedInput = forwardRef<HTMLInputElement, CustomMaskedInputProps>(
  ({ className, mask, ...props }, ref) => {
    return (
      <IMaskInput
        {...props}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        inputRef={ref as any}
        mask={mask as Masked<any>}
      />
    );
  }
);

MaskedInput.displayName = "MaskedInput";

export { MaskedInput };
