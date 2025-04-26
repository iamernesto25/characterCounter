// mathFunctions.test.js
const { add, subtract } = require('./practice.js');

// Group related tests using "describe"
describe('Math Functions', () => {

  test('add() should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 5)).toBe(3);
  });

  test('subtract() should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 4)).toBe(-4);
  });

});
