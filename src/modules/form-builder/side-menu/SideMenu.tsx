import { Button } from "@/components/ui/button";
import { ELEMENTS_DATA, elementsTypes } from "@/lib/default-elements";
import { FormElementsDragCard } from "./elements-cards/FormElementsDragCard";

export const SideMenu = () => {
  return (
    <div className="h-80 flex flex-col gap-4 bg-stone-200 p-4 rounded-md border border-stone-300">
      <div className="flex flex-wrap gap-2 flex-1">
        {Object.keys(ELEMENTS_DATA).map((element) => (
          <FormElementsDragCard
            elementType={element as elementsTypes}
            key={element}
          />
        ))}
      </div>
      <Button>Save</Button>
    </div>
  );
};
