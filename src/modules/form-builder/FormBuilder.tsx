import { SideMenu } from "@/modules/form-builder/side-menu/SideMenu";
import { FormSection } from "./form-section/FormSection";
import { FormBuilderProvider } from "@/context/FormBuilderContext";

export function FormBuilder() {
  return (
    <FormBuilderProvider>
      <div className="max-w-4xl mx-auto p-4 flex gap-4">
        <div className="bg-red w-1/4">
          <SideMenu />
        </div>
        <div className={`pb-2 w-3/4`}>
          <FormSection />
        </div>
      </div>
    </FormBuilderProvider>
  );
}
