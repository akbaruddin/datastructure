function sides(literals, ...expressions) {
  const area = expressions[0];
  const perimeter = expressions[1];

  const s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  const s2 = area/s1;
  return [s1, s2].sort();
}

let s1 = 10, s2 = 14;
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log(y);
