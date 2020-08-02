/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.jpg' {
  const value: string;
  export default value;
}
type POST = {
  id: string,
  date: string,
  title: string
}