export type elementsTypes =
  | "one-line-input"
  | "multiple-choice"
  | "checkbox"
  | "dropdown"
  | "date-picker"
  | "file-upload"
  | "rating"
  | "signature"
  | "paragraph"
  | "number-input"
  | "email-input"
  | "phone-input"
  | "address-input";

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

export const getOneLineInputElementDefault = (id: string) => ({
  id: id,
  order: 1,
  type: "one-line-input",
  label: "Untitled Question",
  placeholder: "Enter text here...",
  required: false,
  options: [],
});
