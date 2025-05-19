import { HOME_CONTENT } from "@/content/home.content";
import { getForms } from "@/lib/supabase/forms.crud";
import { UserPageContentLoader } from "./types";
import FormList from "./components/forms-list";
import CreateFormSection from "./components/create-form-section";

export async function getUserPageContentLoader(): Promise<UserPageContentLoader> {
  const data = await getForms();
  return {
    content: HOME_CONTENT,
    data: data,
  };
}

export default function HomePage() {
  return (
    <div className="container pt-8">
      <div className="flex flex-col gap-4">
        <CreateFormSection />
        <FormList />
      </div>
    </div>
  );
}
