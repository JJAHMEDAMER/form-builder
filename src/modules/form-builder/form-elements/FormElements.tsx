import { elementsTypes, GenericElementType } from "@/lib/default-elements";
import { OneLineInputElement } from "@/modules/form-builder/form-elements/elements/OneLineInputElement";

export const FormElements = ({
  type,
  item,
}: {
  type: elementsTypes;
  item: GenericElementType;
}) => {
  switch (type) {
    case "one-line-input":
      return <OneLineInputElement item={item} />;
    default:
      return <div>Unknown Element</div>;
  }
};
