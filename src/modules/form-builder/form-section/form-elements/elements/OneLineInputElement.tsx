import {
  GenericElementType,
  OneLineInputElementType,
} from "@/lib/default-elements";
import { Input } from "@/components/ui/input";
import { ElementsTitle } from "@/components/ui/elements-title";
import { useFormBuilderContext } from "@/context/FormBuilderContext";

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
    <div className="border p-4 mb-4  rounded-md">
      <ElementsTitle
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInputChange}
        className={`text-lg font-bold mb-2 px-2`}
        data-placeholder={"Untitled Question"}
      />
      <Input type="text" placeholder={elementIdData.placeholder} />
    </div>
  );
}
