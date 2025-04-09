export const FORM_ELEMENTS = {
  ONE_LINE_INPUT: "one-line-input",
  MULTI_LINE_INPUT: "multi-line-input",
} as const;

export type elementsTypes = (typeof FORM_ELEMENTS)[keyof typeof FORM_ELEMENTS];

import { Minus, WrapText } from "lucide-react";
export const ELEMENTS_DATA = {
  [FORM_ELEMENTS.ONE_LINE_INPUT]: {
    label: "One line Input",
    description: "A single line input field",
    icon: Minus,
  },
  [FORM_ELEMENTS.MULTI_LINE_INPUT]: {
    label: "Multi line Input",
    description: "A multi line input field",
    icon: WrapText,
  },
};

export type GenericElementType = {
  id: string;
  type: elementsTypes;
  order: number;
  [key: string]: any;
};

export type OneLineInputElementType = GenericElementType & {
  label: string;
  placeholder: string;
  required: boolean;
  options: string[];
};

export type MultiLineInputElementType = GenericElementType & {
  label: string;
  placeholder: string;
  required: boolean;
  lineNumbers: number;
  options: string[];
};

export const getOneLineInputElementDefault = (
  id: string,
  order?: number
): OneLineInputElementType => ({
  id: id,
  order: order || 0,
  type: FORM_ELEMENTS.ONE_LINE_INPUT,
  label: "Untitled Question",
  placeholder: "Enter text here...",
  required: false,
  options: [],
});

export const getMultiLineInputElementDefault = (
  id: string
): MultiLineInputElementType => ({
  id: id,
  order: 0,
  type: FORM_ELEMENTS.MULTI_LINE_INPUT,
  label: "Untitled Question",
  placeholder: "Enter text here...",
  required: false,
  lineNumbers: 6,
  options: [],
});

export const getElementDefault = (
  id: string,
  type: elementsTypes
): GenericElementType => {
  switch (type) {
    case FORM_ELEMENTS.ONE_LINE_INPUT:
      return getOneLineInputElementDefault(id);
    case FORM_ELEMENTS.MULTI_LINE_INPUT:
      return getMultiLineInputElementDefault(id);
    default:
      throw new Error("Unknown element type");
  }
};
