import { HTMLElementType, useEffect, useRef } from "react";

export default function Contenteditable<T extends HTMLElementType = "div">({
  value,
  comp = "div",
  ...props
}: {
  comp?: HTMLElementType | React.FC;
  value: string;
} & React.ComponentProps<T>) {
  const Comp = comp as any;
  const contentEditableRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    if (
      contentEditableRef.current &&
      contentEditableRef.current.textContent !== value
    ) {
      contentEditableRef.current.textContent = value;
    }
  });

  return (
    <Comp
      {...props}
      contentEditable="true"
      suppressContentEditableWarning={true}
      ref={contentEditableRef}
    />
  );
}
