export function ContentEditableLabel({
  isBuilding = true,
  htmlFor,
  ...props
}: React.ComponentProps<"label"> & { isBuilding: boolean; htmlFor: string }) {
  const Comp = isBuilding ? "div" : "label";
  return (
    <Comp
      contentEditable
      suppressContentEditableWarning
      {...(isBuilding
        ? {
            "data-htmlFor": htmlFor,
          }
        : { htmlFor: htmlFor })}
      {...(props as any)}
    />
  );
}
