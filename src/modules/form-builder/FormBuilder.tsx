import { SideMenu } from "@/modules/form-builder/side-menu/SideMenu";
import { FormSection } from "./form-section/FormSection";

export function FormBuilder() {
  return (
    <div className="max-w-4xl mx-auto p-4 flex gap-4">
      <div className="bg-red w-1/4">
        <div className="flex flex-col gap-2 bg-stone-200 p-4 rounded-md h-full border border-stone-300">
          <SideMenu />
        </div>
      </div>
      <div className={`pb-2 w-3/4`}>
        <FormSection />
      </div>
    </div>
  );
}
