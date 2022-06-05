import { objectSerialize } from "./object-serialize.function";

it("Should serialize the data if it is an object and return as a string", () => {
  const objeto = { prop: "", value: 1 };

  const objetoSerializado = objectSerialize(objeto);

  expect(objetoSerializado).toEqual(JSON.stringify(objeto));
});
