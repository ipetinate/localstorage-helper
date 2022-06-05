import { isObject } from "functions/is-object.function";
import { objectDeserialize } from "functions/object-deserialize.function";
import { objectSerialize } from "functions/object-serialize.function";

const clear = () => {
  window.localStorage.clear();
};

const create = (key: string, value: any) => {
  if (isObject(value) || Array.isArray(value)) {
    value = objectSerialize(value);
  }

  window.localStorage.setItem(key, value);
};

const read = (key: string) => {
  if (!key || key === "") {
    return;
  }

  const value: string | null = window.localStorage.getItem(key);

  return objectDeserialize(value);
};

const update = (key: string, value: any) => {
  if (isObject(value)) {
    value = objectSerialize(value);
  }

  window.localStorage.setItem(key, value);
};

const remove = (key: string) => {
  if (!key || key === "") {
    return;
  }

  window.localStorage.removeItem(key);
};

export {
  clear,
  create,
  isObject,
  objectDeserialize,
  objectSerialize,
  read,
  remove,
  update,
};
