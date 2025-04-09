import { Button } from "@/components/ui/button";
import { ELEMENTS_DATA, elementsTypes } from "@/lib/default-elements";
import { FormElementsDragCard } from "./elements-cards/FormElementsDragCard";

export const SideMenu = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="h-80 flex flex-wrap gap-2 flex-1">
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
