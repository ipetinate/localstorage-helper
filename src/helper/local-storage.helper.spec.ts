/**
 * @jest-environment jsdom
 */

import "jest-localstorage-mock";

import { clear, create, read, remove, update } from "./local-storage.helper";

describe("LocalStorage Helper", () => {
  beforeEach(() => window.localStorage.clear());

  test("Should create an item in localStorage with key and value", () => {
    const KEY = "CHAVE";
    const VALUE = "VALOR";

    create(KEY, VALUE);

    expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1);
  });

  test("Should update an item in localStorage with key and value", () => {
    const KEY = "KEY";
    const VALUE = "VALUE";

    update(KEY, VALUE);

    expect(window.localStorage.setItem).not.toHaveBeenLastCalledWith(
      "foo",
      "bar"
    );
    expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1);
  });

  test("Should obtain an item in localStorage from the key", () => {
    const KEY = "foo";
    create(KEY, "valor");

    const VALUE = read(KEY);

    expect(window.localStorage.getItem).toHaveBeenCalledWith(KEY);
    expect(window.localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1);
  });

  test("Should remove an item from localStorage using a key", () => {
    const KEY = "CHAVE";
    const VALUE = "VALOR";

    create(KEY, VALUE);

    remove(KEY);

    expect(window.localStorage.removeItem).toHaveBeenCalledWith(KEY);
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(0);
  });

  test("Should clean localStorage", () => {
    clear();

    expect(window.localStorage.clear).toHaveBeenCalled();
    expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(0);
  });
});
