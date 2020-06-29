const isObject = require('./is-object.function')

describe('IsObject Function', () => {
  test('Should check if the value is Object', () => {
    expect(isObject({ key: 'key', value: 'value' })).toBe(true)
  })

  test('Should check if the value is Object when passing an array', () => {
    expect(isObject([{ key: 'key', value: 'value' }])).toBe(true)
  })
})
