import { useLoaderData } from "react-router";
import { UserPageContentLoader } from "../types";
import FormCard from "./form-card";

export default function FormList() {
  const {
    data: { data, error },
  } = useLoaderData<UserPageContentLoader>();

  if (error || !data) return <div>Error happened</div>;

  if (data.length === 0) return null;

  return (
    <div className="flex-warp flex gap-4">
      {data.map((form) => (
        <FormCard
          key={form.id}
          handleClick={() => {
            window.location.href = `/form/${form.id}`;
          }}
          title={form.title}
          description={form.description}
          last_modified={form.last_modified}
        />
      ))}
    </div>
  );
}
