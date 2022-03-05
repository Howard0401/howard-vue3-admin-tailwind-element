export const GetEnv = (str: string):string =>  {
  const a = import.meta.env[str] as string
  return a
}