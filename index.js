const {
  clear,
  create,
  objectDeserialize,
  objectSerialize,
  read,
  remove,
  update
} = require('./src/helper/local-storage.helper')

const isObject = require('./src/functions/is-object/is-object.function')

module.exports = {
  clear,
  create,
  objectDeserialize,
  objectSerialize,
  read,
  remove,
  update,
  isObject
}