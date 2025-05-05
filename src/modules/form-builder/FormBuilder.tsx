import { SideMenu } from "@/modules/form-builder/side-menu/SideMenu";
import { FormSection } from "./form-section/FormSection";
import { FormBuilderProvider } from "@/context/FormBuilderContext";

export function FormBuilder() {
  return (
    <FormBuilderProvider>
      <div className="mx-auto flex max-w-4xl gap-4 p-4">
        <div className="bg-red w-1/4">
          <SideMenu />
        </div>
        <div className={`w-3/4 pb-2`}>
          <FormSection />
        </div>
      </div>
    </FormBuilderProvider>
  );
}
