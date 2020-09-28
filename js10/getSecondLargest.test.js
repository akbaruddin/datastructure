const secondLargest = require("./getSecondLargest");

test("second largest", () => {
  expect(secondLargest([2, 3, 6, 6, 5])).toBe(5);
})
