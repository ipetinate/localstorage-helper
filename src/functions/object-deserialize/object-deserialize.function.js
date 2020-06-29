const objectDeserialize = (value) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    if (e) {
      return value
    }
  }
}

module.exports = objectDeserialize