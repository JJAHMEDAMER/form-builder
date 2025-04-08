import { GenericElementType } from "@/lib/default-elements";
import { FormElements } from "./form-elements/FormElements";
import { SideMenu } from "@/modules/form-builder/side-menu/SideMenu";

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
  {
    id: "2",
    order: 2,
    type: "multiple-choice",
    label: "Untitled Question",
    placeholder: "Enter text here...",
    required: false,
    options: [],
  },
  {
    id: "3",
    order: 3,
    type: "checkbox",
    label: "Untitled Question",
    placeholder: "Enter text here...",
    required: false,
    options: [],
  },
  {
    id: "4",
    order: 4,
    type: "dropdown",
    label: "Untitled Question",
    placeholder: "Enter text here...",
    required: false,
    options: [],
  },
];

export function FormBuilder() {
  return (
    <div className="max-w-4xl mx-auto p-4 flex gap-4">
      <div className="bg-red w-1/4">
        <div className="flex flex-col gap-2 bg-stone-200 p-4 rounded-md h-full border border-stone-300">
          <SideMenu />
        </div>
      </div>
      <div className="space-y-2 w-3/4">
        {ele.map((item) => (
          <FormElements key={item.id} type={item.type} item={item} />
        ))}
      </div>
    </div>
  );
}
