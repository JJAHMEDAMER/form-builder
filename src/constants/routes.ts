type PathBuilder<T extends string> = {
  (...args: string[]): T;
  template: T;
};

function createPathBuilder<T extends string>(template: T): PathBuilder<T> {
  const fn = (...args: string[]) =>
    template.replace(/\{\w+\}/g, () => args.shift() || "");
  (fn as PathBuilder<T>).template = template;
  return fn as PathBuilder<T>;
}

// Usage
export const routes = {
  home: "/",
  auth: "/auth",
  formBuilder: "/form-builder",
  formBuilderId: createPathBuilder("/form-builder/{id}"),
  formBuilderIdFieldId: createPathBuilder("/form-builder/{id}/field/{fieldId}"),
} as const;
