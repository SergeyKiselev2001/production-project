export const classNames = (
  cls: string,
  mods: Record<string, boolean | string> = {},
  additional: string[] = ['']
): string => {

  const result = [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).map(el => el[1] ? el[0]: '').filter(Boolean)
  ]

  return result.join(' ')
}
