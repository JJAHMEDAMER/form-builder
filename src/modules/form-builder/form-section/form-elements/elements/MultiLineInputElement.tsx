import { ElementsTitle } from "@/components/ui/elements-title";
import { Textarea } from "@/components/ui/textarea";
import {
  GenericElementType,
  MultiLineInputElementType,
} from "@/lib/default-elements";
import { useState } from "react";

export default function MultiLineInputElement({
  item,
}: {
  item: GenericElementType;
}) {
  const elementIdData = item as MultiLineInputElementType;
  const [innerState, setInnerState] = useState(elementIdData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerState({ ...innerState, label: e.target.innerHTML });
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
        rows={innerState.lineNumbers}
        placeholder={innerState.placeholder}
      />
    </div>
  );
}
