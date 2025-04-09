import {
  GenericElementType,
  elementsTypes,
  getElementDefault,
} from "@/lib/default-elements";
import React, { useState } from "react";
import { FormElements } from "./form-elements/FormElements";
import { v4 as uuid } from "uuid";

const ele: GenericElementType[] = [
  {
    id: "1",
    order: 1,
    type: "one-line-input",
    label: "Untitled Question",
    placeholder: "Enter text here...",
    required: false,
    options: [],
  },
];

export function FormSection() {
  const [form, setForm] = useState<GenericElementType[]>(ele);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    item: GenericElementType
  ) => {
    const data = e.dataTransfer.getData("text/plain") as elementsTypes;
    setForm((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((el) => el.id === item.id);
      temp.splice(index + 1, 0, getElementDefault(uuid(), data));
      const x = temp.map((el, index) => {
        return { ...el, order: index };
      });
      return x;
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
  return (
    <div>
      {form.map((item) => (
        <div
          className={`relative after:absolute transition after:bg-stone-400 after:h-0.5  after:top-[calc(100%+0.45rem)] after:left-0 after:right-0 after:rounded-sm ${
            dragOverItem === item.id ? "after:opacity-100" : "after:opacity-0"
          }`}
          key={item.id}
          onDrop={(e) => handleDrop(e, item)}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
        >
          <FormElements type={item.type} item={item} />
        </div>
      ))}
    </div>
  );
}
