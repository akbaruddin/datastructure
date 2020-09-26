function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    const next = i + 1;
    if (arr[i] !== next) {
      const nextIndex = arr.indexOf(next, i);
      arr[nextIndex] = arr[i];
      arr[i] = next;
      ++swap;
    }
  }
  return swap;
}
// 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))
