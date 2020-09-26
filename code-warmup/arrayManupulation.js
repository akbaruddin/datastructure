function arrayManipulation(n, queries) {
  let A = Array.from({length: n}, () => 0);
  let max = 0;
  let sum = 0;

  for (var i = 0; i < queries.length; i++) {
    var [a, b, k] = queries[i];
    A[a - 1] += k;
    if (b < n) A[b] -= k;
  }
  for (var i = 0; i < n; i++) {
    sum += A[i];
    if (max < sum) max = sum;
  }
  return max;
}
