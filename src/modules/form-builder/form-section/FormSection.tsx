import {
  GenericElementType,
  elementsTypes,
  getElementDefault,
} from "@/lib/default-elements";
import React, { useState } from "react";
import { FormElements } from "./form-elements/FormElements";
import { v4 as uuid } from "uuid";
import { useFormBuilderContext } from "@/context/FormBuilderContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function FormSection() {
  const { formData, setFormData } = useFormBuilderContext();
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropOverItemId: GenericElementType["id"] | null
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
            className={`relative group after:absolute transition after:bg-stone-400 after:h-0.5  after:top-[calc(100%+0.45rem)] after:left-0 after:right-0 after:rounded-sm ${
              dragOverItem === item.id ? "after:opacity-100" : "after:opacity-0"
            }`}
            key={item.id}
            onDrop={(e) => handleDrop(e, item.id)}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
          >
            <Button
              onClick={() => handleDeleteElementClick(item.id)}
              className="absolute -top-3 -right-3 hover:bg-red-500/50 bg-red-200 transition curser-pointer opacity-0 group-hover:opacity-100"
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
        className="border p-4 mb-4  rounded-md bg-stone-200"
      >
        Drop Element here on one of the above elements...
      </div>
    </div>
  );
}
