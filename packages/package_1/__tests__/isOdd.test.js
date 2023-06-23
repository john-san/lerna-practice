// have to put .default in the require statement b/c we are using node CJS
const isOdd = require("../dist/isOdd.js").default;

test("isOdd", () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
