import { elementsTypes, GenericElementType } from "@/lib/default-elements";
import { OneLineInputElement } from "@/modules/form-builder/form-elements/elements/OneLineInputElement";
import { memo, useEffect, useState } from "react";

export const FormElements = memo(
  ({ type, item }: { type: elementsTypes; item: GenericElementType }) => {
    switch (type) {
      case "one-line-input":
        return (
          <JustMountedWrapper>
            <OneLineInputElement item={item} />{" "}
          </JustMountedWrapper>
        );
      default:
        return <div>Unknown Element</div>;
    }
  }
);

export const JustMountedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [justMounted, setJustMounted] = useState(true);

  useEffect(() => {
    if (justMounted) {
      setTimeout(() => {
        setJustMounted(false);
      }, 150);
    }
  }, [justMounted]);

  return (
    <div className={`transition ${justMounted ? "opacity-0" : "opacity-100"}`}>
      {children}
    </div>
  );
};
