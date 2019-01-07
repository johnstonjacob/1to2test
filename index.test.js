const { addTwo, addTwoRandomly } = require('./index.js')

test('adds two correctly', () => {
    expect(addTwo(3)).toBe(5)
})

test('adds two randomly', () => {
    expect(addTwoRandomly(3)).toBe(5)
})
