import {
  GenericElementType,
  OneLineInputElementType,
} from "@/lib/default-elements";
import { Input } from "@/components/ui/input";
import { ElementsTitle } from "@/components/ui/elements-title";
import { useFormBuilderContext } from "@/context/form-builder-context";

export function OneLineInputElement({
  itemId,
}: {
  itemId: GenericElementType["id"];
}) {
  const { formData, setFormData } = useFormBuilderContext();
  const elementIdData = formData.get(itemId) as OneLineInputElementType;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      const temp = new Map(prev);
      temp.set(itemId, { ...elementIdData, label: e.target.innerHTML });
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
      <Input type="text" placeholder={elementIdData.placeholder} />
    </div>
  );
}
