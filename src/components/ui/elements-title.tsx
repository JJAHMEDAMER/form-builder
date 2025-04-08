import { cn } from "@/lib/utils";
import React, { useState } from "react";

function ElementsTitle({ children, ...props }: React.ComponentProps<"div">) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      {ref?.textContent === "" && (
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full pointer-events-none text-gray-500",
            props.className
          )}
        >
          {ref?.dataset["placeholder"]}
        </div>
      )}
      <div ref={(newRef) => setRef(newRef)} {...props}>
        {children}
      </div>
    </div>
  );
}

export { ElementsTitle };
