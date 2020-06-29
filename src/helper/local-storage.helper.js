const isObject = require('../functions/is-object/is-object.function')
const objectDeserialize = require('../functions/object-deserialize/object-deserialize.function')
const objectSerialize = require('../functions/object-serialize/object-serialize.function')

const clear = () => {
  window.localStorage.clear()
}

const create = (key, value) => {
  if (isObject(value) || Array.isArray(value)) {
    value = objectSerialize(value)
  }

  window.localStorage.setItem(key, value)
}

const read = (key) => {
  if (!key || key === '') { return }

  const value = window.localStorage.getItem(key)

  return objectDeserialize(value)
}

const update = (key, value) => {
  if (isObject(value)) {
    value = objectSerialize(value)
  }

  window.localStorage.setItem(key, value)
}

const remove = (key) => {
  if (!key || key === '') { return }

  window.localStorage.removeItem(key)
}

module.exports = {
  clear,
  create,
  isObject,
  objectDeserialize,
  objectSerialize,
  read,
  remove,
  update
}