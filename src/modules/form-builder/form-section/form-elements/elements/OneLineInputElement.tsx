import {
  GenericElementType,
  OneLineInputElementType,
} from "@/lib/default-elements";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ElementsTitle } from "@/components/ui/elements-title";

export function OneLineInputElement({ item }: { item: GenericElementType }) {
  const elementIdData = item as OneLineInputElementType;
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
      <Input type="text" placeholder={innerState.placeholder} />
    </div>
  );
}
