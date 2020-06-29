const isObject = require('../is-object/is-object.function')

const objectSerialize = (value) => {
  if (!isObject(value)) return

  try {
    return JSON.stringify(value)
  } catch (e) {
    console.err('This object can\'t be serialized.')
  }
}

module.exports = objectSerialize