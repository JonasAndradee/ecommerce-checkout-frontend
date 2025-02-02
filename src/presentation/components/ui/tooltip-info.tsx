import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/presentation/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface TooltipInfoProps {
  content: string;
}

export function TooltipInfo({ content }: TooltipInfoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type="button">
          <InfoIcon className="h-4 w-4 text-muted-foreground ml-1" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
