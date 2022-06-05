import { isObject } from "./is-object.function";

export const objectSerialize = (value: any) => {
  if (!isObject(value)) return;

  try {
    return JSON.stringify(value);
  } catch (e) {
    console.error("This object can't be serialized.");
  }
};
