import { HOME_CONTENT } from "@/content/home.content";
import { getForms } from "@/lib/supabase/forms.crud";

export type HomeContent = typeof HOME_CONTENT;

export interface UserPageContentLoader {
  content: HomeContent;
  data: Awaited<ReturnType<typeof getForms>>;
}
