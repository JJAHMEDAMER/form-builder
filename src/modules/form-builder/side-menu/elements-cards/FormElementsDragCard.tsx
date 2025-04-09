import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ELEMENTS_DATA, elementsTypes } from "@/lib/default-elements";

export const FormElementsDragCard = ({
  elementType,
}: {
  elementType: elementsTypes;
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", elementType);
  };
  const Icon = ELEMENTS_DATA[elementType].icon;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            draggable
            onDragStart={handleDragStart}
            className="w-12 cursor-grab h-12 bg-accent rounded-sm flex justify-center items-center border border-stone-300"
          >
            <Icon className="text-stone-700" />
          </div>
        </TooltipTrigger>
        <TooltipContent>{ELEMENTS_DATA[elementType].label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
