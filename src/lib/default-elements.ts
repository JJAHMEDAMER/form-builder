export const FORM_ELEMENTS = {
  ONE_LINE_INPUT: "one-line-input",
} as const;

export type elementsTypes = (typeof FORM_ELEMENTS)[keyof typeof FORM_ELEMENTS];

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

export const getOneLineInputElementDefault = (
  id: string,
  order?: number
): OneLineInputElementType => ({
  id: id,
  order: order || 0,
  type: "one-line-input",
  label: "Untitled Question",
  placeholder: "Enter text here...",
  required: false,
  options: [],
});
