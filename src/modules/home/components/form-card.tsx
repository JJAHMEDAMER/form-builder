import { lastModified } from "@/lib/utils";
import { Tables } from "@/types/supabase";

interface FormCardProps
  extends Pick<Tables<"forms">, "title" | "description" | "last_modified"> {
  handleClick: () => void;
}

export default function FormCard({
  handleClick,
  title,
  description,
  last_modified,
}: FormCardProps) {
  return (
    <button
      onClick={handleClick}
      className="border-surface-500/80 hover:border-primary-500 active:border-secondary-500 flex aspect-square h-48 flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl border transition duration-200 hover:shadow-md active:scale-[0.98] active:shadow-none"
    >
      <span
        style={{
          background:
            "linear-gradient(135deg, rgb(51, 51, 51) 0%, rgb(32, 32, 32) 100%)",
        }}
        className="bg-surface-300 flex flex-1 items-center justify-center"
      />
      <span className="bg-surface-400 text-text-200 flex cursor-pointer flex-col justify-center p-2 text-start font-bold">
        <h3>{title}</h3>
        <span className="text-xs font-normal opacity-90">
          {description || " "}
        </span>
        <span className="text-xs font-normal opacity-90">
          {lastModified(last_modified)} by you
        </span>
      </span>
    </button>
  );
}
