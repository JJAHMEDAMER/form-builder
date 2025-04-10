import { GenericElementType } from "@/lib/default-elements";
import { createContext, useContext, useState } from "react";

type FromBuilderContext = {
  isBuilding: boolean;
  setIsBuilding: React.Dispatch<React.SetStateAction<boolean>>;
  formData: Map<GenericElementType["id"], GenericElementType>;
  setFormData: React.Dispatch<
    React.SetStateAction<Map<GenericElementType["id"], GenericElementType>>
  >;
};

const FormBuilderContext = createContext<FromBuilderContext | null>(null);

export const useFormBuilderContext = () => {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error(
      "useFormBuilderContext must be used within a FormBuilderProvider"
    );
  }
  return context;
};

export const FormBuilderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isBuilding, setIsBuilding] = useState(true);
  const [formData, setFormData] = useState<
    Map<GenericElementType["id"], GenericElementType>
  >(new Map());
  console.log("FormBuilderProvider", formData);

  const value = { isBuilding, setIsBuilding, formData, setFormData };
  return (
    <FormBuilderContext.Provider value={value}>
      {children}
    </FormBuilderContext.Provider>
  );
};
