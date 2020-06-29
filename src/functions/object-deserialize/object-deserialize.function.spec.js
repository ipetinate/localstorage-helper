const objectDeserialize = require('./object-deserialize.function')

describe('ObjectDeserialize', () => {
  it(
    'Should deserialize the object in string and return the original value as an object',
    () => {
      const stringObj = JSON.stringify({ prop: '', value: 1 })
      const stringReal = 'string'

      const objetoDesserializado1 = objectDeserialize(stringObj)
      const objetoDesserializado2 = objectDeserialize(stringReal)

      expect(objetoDesserializado1).toEqual(JSON.parse(stringObj))
      expect(objetoDesserializado2).toEqual(stringReal)
    }
  )
})
