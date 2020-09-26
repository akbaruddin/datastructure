const countValley = require("./countValley");

test('8 UDDDUDUU => 1', () => {
  expect(countValley(8, 'UDDDUDUU')).toBe(1);
});

test('12 DDUUDDUDUUUD => 2', () => {
  expect(countValley(12, 'DDUUDDUDUUUD')).toBe(2);
});
