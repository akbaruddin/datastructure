function repeatedString(s, n) {
  let numberOfAs = 0;

  if(n >= s.length) {
    let occurrencesOfA = [...s].filter(e => e === 'a').length;

    numberOfAs = Math.floor(n/s.length) * occurrencesOfA;
  }

  let tailStringLength = n % s.length;

  for (let i = 0; i < tailStringLength; i++) {
    if (s[i] === 'a') numberOfAs++;
  }

  return numberOfAs;
}