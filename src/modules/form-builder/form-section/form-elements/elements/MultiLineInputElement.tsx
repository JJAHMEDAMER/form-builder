import { ElementsTitle } from "@/components/ui/elements-title";
import { Textarea } from "@/components/ui/textarea";
import { useFormBuilderContext } from "@/context/FormBuilderContext";
import {
  GenericElementType,
  MultiLineInputElementType,
} from "@/lib/default-elements";

export default function MultiLineInputElement({
  itemId,
}: {
  itemId: GenericElementType["id"];
}) {
  const { formData, setFormData } = useFormBuilderContext();
  const elementIdData = formData.get(itemId) as MultiLineInputElementType;

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
      <Textarea
        rows={elementIdData.lineNumbers}
        placeholder={elementIdData.placeholder}
      />
    </div>
  );
}
