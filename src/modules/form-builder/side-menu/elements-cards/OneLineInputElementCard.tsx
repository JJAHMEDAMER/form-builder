import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FORM_ELEMENTS } from "@/lib/default-elements";
import { Minus } from "lucide-react";
export const OneLineInputElementCard = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            draggable
            data-element-type={FORM_ELEMENTS.ONE_LINE_INPUT}
            className="w-12 cursor-grab h-12 bg-accent rounded-sm flex justify-center items-center border border-stone-300"
          >
            <Minus className="text-stone-700" />
          </div>
        </TooltipTrigger>
        <TooltipContent>One line Input</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
