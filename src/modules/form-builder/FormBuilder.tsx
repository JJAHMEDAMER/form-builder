import {
  GenericElementType,
  getOneLineInputElementDefault,
} from "@/lib/default-elements";
import { FormElements } from "./form-elements/FormElements";
import { SideMenu } from "@/modules/form-builder/side-menu/SideMenu";
import { v4 as uuid } from "uuid";
import { useState } from "react";

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

export function FormBuilder() {
  const [form, setForm] = useState<GenericElementType[]>(ele);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDrop = (item: GenericElementType) => {
    setForm((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((el) => el.id === item.id);
      temp.splice(index + 1, 0, getOneLineInputElementDefault(uuid()));
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
    <div className="max-w-4xl mx-auto p-4 flex gap-4">
      <div className="bg-red w-1/4">
        <div className="flex flex-col gap-2 bg-stone-200 p-4 rounded-md h-full border border-stone-300">
          <SideMenu />
        </div>
      </div>
      <div className={`pb-2 w-3/4`}>
        {form.map((item) => (
          <div
            className={`relative after:absolute transition after:bg-stone-400 after:h-0.5  after:top-[calc(100%+0.45rem)] after:left-0 after:right-0 after:rounded-sm ${
              dragOverItem === item.id ? "after:opacity-100" : "after:opacity-0"
            }`}
            key={item.id}
            onDrop={() => handleDrop(item)}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
          >
            <FormElements type={item.type} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
