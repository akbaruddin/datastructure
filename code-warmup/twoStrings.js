function twoStrings(s1, s2) {
  let state = false;
  const list = s1.split('');
  for (let i = 0; i < list.length; i++) {
    if (s2.indexOf(list[i], 0) != -1) {
      state = true
    }
  }
  console.log(state ? "YES": "NO")
}

twoStrings('hello', 'world');
twoStrings('hi', 'world');
