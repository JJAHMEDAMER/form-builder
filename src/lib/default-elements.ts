export const FORM_ELEMENTS = {
  ONE_LINE_INPUT: "one-line-input",
  MULTI_LINE_INPUT: "multi-line-input",
  SINGLE_SELECT: "single-select",
} as const;

export type elementsTypes = (typeof FORM_ELEMENTS)[keyof typeof FORM_ELEMENTS];

import { Minus, WrapText, Dot } from "lucide-react";
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
  [FORM_ELEMENTS.SINGLE_SELECT]: {
    label: "Single Select",
    description: "A single select field",
    icon: Dot,
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

export type SingleSelectElementType = GenericElementType & {
  label: string;
  required: boolean;
  options: {
    value: string;
    label: string;
  }[];
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
  id: string,
  order?: number
): MultiLineInputElementType => ({
  id: id,
  order: order || 0,
  type: FORM_ELEMENTS.MULTI_LINE_INPUT,
  label: "Untitled Question",
  placeholder: "Enter text here...",
  required: false,
  lineNumbers: 6,
  options: [],
});

export const getSingleSelectElementDefault = (
  id: string,
  order?: number
): SingleSelectElementType => ({
  id: id,
  order: order || 0,
  type: FORM_ELEMENTS.SINGLE_SELECT,
  label: "Untitled Question",
  required: false,
  options: [
    {
      value: "option1",
      label: "Option 1",
    },
  ],
});

export const getElementDefault = (
  id: string,
  order: number,
  type: elementsTypes
): GenericElementType => {
  switch (type) {
    case FORM_ELEMENTS.ONE_LINE_INPUT:
      return getOneLineInputElementDefault(id, order);
    case FORM_ELEMENTS.MULTI_LINE_INPUT:
      return getMultiLineInputElementDefault(id, order);
    case FORM_ELEMENTS.SINGLE_SELECT:
      return getSingleSelectElementDefault(id, order);
    default:
      throw new Error("Unknown element type");
  }
};
