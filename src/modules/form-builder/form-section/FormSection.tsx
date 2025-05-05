import {
  GenericElementType,
  elementsTypes,
  getElementDefault,
} from "@/lib/default-elements";
import React, { useState } from "react";
import { FormElements } from "./form-elements/FormElements";
import { v4 as uuid } from "uuid";
import { useFormBuilderContext } from "@/context/form-builder-context";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function FormSection() {
  const { formData, setFormData } = useFormBuilderContext();
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropOverItemId: GenericElementType["id"] | null,
  ) => {
    const data = e.dataTransfer.getData("text/plain") as elementsTypes;
    setFormData((prev) => {
      const temp = new Map(prev);
      const order = dropOverItemId
        ? temp.get(dropOverItemId)!.order
        : temp.size;
      const id = uuid();
      temp.set(id, getElementDefault(id, order, data));
      return temp;
    });
    setDragOverItem(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverItem(e.currentTarget.id);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDeleteElementClick = (id: GenericElementType["id"]) => {
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.delete(id);
      return temp;
    });
  };

  return (
    <div>
      {Array.from(formData.values())
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <div
            className={`group relative transition after:absolute after:top-[calc(100%+0.45rem)] after:right-0 after:left-0 after:h-0.5 after:rounded-sm after:bg-stone-400 ${
              dragOverItem === item.id ? "after:opacity-100" : "after:opacity-0"
            }`}
            key={item.id}
            onDrop={(e) => handleDrop(e, item.id)}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
          >
            <Button
              onClick={() => handleDeleteElementClick(item.id)}
              className="curser-pointer absolute -top-3 -right-3 bg-red-200 opacity-0 transition group-hover:opacity-100 hover:bg-red-500/50"
              variant="secondary"
            >
              <Trash2 />
            </Button>
            <FormElements type={item.type} itemId={item.id} />
          </div>
        ))}

      <div
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDrop={(e) => handleDrop(e, null)}
        className="mb-4 rounded-md border bg-stone-200 p-4"
      >
        Drop Element here on one of the above elements...
      </div>
    </div>
  );
}
