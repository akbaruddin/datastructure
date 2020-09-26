function minimumBribes(q) {
  let bribe = 0;
  let len = q.length;

  for(let i = len - 1; i >= 0; i--) {
      if (q[i] - (i + 1) > 2) {
          console.log('Too chaotic')
          return;
      }

      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
          if (q[j] > q[i]) bribe++;
      }
  }

  console.log(bribe)
}
