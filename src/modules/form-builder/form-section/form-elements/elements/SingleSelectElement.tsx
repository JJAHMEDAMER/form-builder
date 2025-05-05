import { Button } from "@/components/ui/button";
import { ElementsTitle } from "@/components/ui/elements-title";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  GenericElementType,
  SingleSelectElementType,
} from "@/lib/default-elements";
import { CirclePlus, Trash2 } from "lucide-react";
import { useFormBuilderContext } from "@/context/form-builder-context";
import Contenteditable from "@/components/ui/ContentEditable";
import { Label } from "@/components/ui/label";

export default function SingleSelectElement({
  itemId,
}: {
  itemId: GenericElementType["id"];
}) {
  const { isBuilding, formData, setFormData } = useFormBuilderContext();
  const elementData = formData.get(itemId) as SingleSelectElementType;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.set(itemId, { ...elementData, label: e.target.innerHTML });
      return temp;
    });
  };

  const handleOptionChange = (e: React.FormEvent) => {
    if (!isBuilding) return;
    const target = e.target as HTMLLabelElement;
    const updatedOptions = elementData.options.map((option) => {
      const item = isBuilding ? target.dataset["htmlfor"] : target.htmlFor;
      if (option.value === item) {
        return { ...option, label: target.innerHTML };
      }
      return option;
    });
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.set(itemId, { ...elementData, options: updatedOptions });
      return temp;
    });
  };

  const handleAddClick = () => {
    if (!isBuilding) return;
    const newOption = {
      value: `option-${elementData.options.length + 1}`,
      label: "Untitled Option",
    };
    const updatedOptions = [...elementData.options, newOption];
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.set(itemId, { ...elementData, options: updatedOptions });
      return temp;
    });
  };

  const handleDeleteClick = (value: string) => {
    const newOptions = elementData.options.filter(
      (option) => option.value !== value,
    );
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.set(itemId, { ...elementData, options: newOptions });
      return temp;
    });
  };

  return (
    <div className="mb-4 rounded-md border p-4">
      <ElementsTitle
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInputChange}
        className={`mb-2 px-2 text-lg font-bold`}
        data-placeholder={"Untitled Question"}
      />

      <RadioGroup defaultValue="comfortable">
        {elementData.options.map((option) => (
          <div key={option.value} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Contenteditable<"label">
                comp={Label}
                value={option.label}
                contentEditable={isBuilding}
                suppressContentEditableWarning
                onInput={handleOptionChange}
                // The data attribute  is converted to lowercase in the DOM
                data-htmlfor={!isBuilding ? undefined : option.value}
                htmlFor={isBuilding ? undefined : option.value}
              />
            </div>

            <Button
              variant={"secondary"}
              size="icon"
              className="ml-2"
              onClick={() => handleDeleteClick(option.value)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
      </RadioGroup>

      <Button
        onClick={handleAddClick}
        className="mt-4 flex gap-2"
        variant="outline"
      >
        <CirclePlus />
        Add Option
      </Button>
    </div>
  );
}
