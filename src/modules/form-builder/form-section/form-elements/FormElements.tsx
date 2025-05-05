import {
  elementsTypes,
  FORM_ELEMENTS,
  GenericElementType,
} from "@/lib/default-elements";
import { OneLineInputElement } from "@/modules/form-builder/form-section/form-elements/elements/OneLineInputElement";
import { memo, useEffect, useState } from "react";
import MultiLineInputElement from "./elements/MultiLineInputElement";
import SingleSelectElement from "./elements/SingleSelectElement";

export const FormElements = memo(
  ({
    type,
    itemId,
  }: {
    type: elementsTypes;
    itemId: GenericElementType["id"];
  }) => {
    switch (type) {
      case FORM_ELEMENTS.ONE_LINE_INPUT: {
        return (
          <JustMountedWrapper>
            <OneLineInputElement itemId={itemId} />
          </JustMountedWrapper>
        );
      }

      case FORM_ELEMENTS.MULTI_LINE_INPUT: {
        return (
          <JustMountedWrapper>
            <MultiLineInputElement itemId={itemId} />
          </JustMountedWrapper>
        );
      }

      case FORM_ELEMENTS.SINGLE_SELECT: {
        return (
          <JustMountedWrapper>
            <SingleSelectElement itemId={itemId} />
          </JustMountedWrapper>
        );
      }

      default: {
        return <div>Unknown Element</div>;
      }
    }
  },
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
