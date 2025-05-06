import { HOME_CONTENT } from "@/content/home.content";
import { Grid2x2Plus } from "lucide-react";
import { useLoaderData } from "react-router";

interface UserPageContentLoader {
  content: typeof HOME_CONTENT;
  data: any;
}

export function getUserPageContentLoader(): UserPageContentLoader {
  return {
    content: HOME_CONTENT,
    data: [
      {
        title: "Test Form",
        description: "This is a test form",
        id: "test-form",
      },
    ],
  };
}

export function HomePage() {
  const { content } = useLoaderData<UserPageContentLoader>();

  return (
    <div className="container pt-8">
      <div className="flex flex-col gap-4">
        <div className="bg-surface-500/60 rounded-xl p-8">
          <h1 className="text-text-100 text-2xl font-bold">{content.H1}</h1>
          <h2 className="text-text-200 mb-6 text-sm">{content.H2}</h2>
          <button className="border-surface-500/80 flex aspect-square max-h-52 min-h-48 flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl border">
            <span className="bg-surface-300 flex flex-1 items-center justify-center">
              <Grid2x2Plus className="text-surface-500 h-16 w-16" />
            </span>
            <span className="bg-surface-400 text-text-200 flex cursor-pointer flex-col justify-center p-2 text-start font-bold">
              <h3>{content.H3}</h3>
              <span className="text-xs font-normal opacity-90">
                {content.lblStartWith}
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
