export const classNames = (
  cls: string,
  mods: Record<string, boolean | string>,
  additional: string[]
): string => {

  let result = [
    cls,
    ...additional,
    ...Object.entries(mods).map(el => Boolean(el[1]) ? el[0]: '').filter(Boolean)
  ];

  return result.join(" ");
};
