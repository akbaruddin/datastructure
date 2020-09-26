function leftRotate(a, d) {
  // console.log(a, d)
  for (let i = 0; i < 5; i++) {

    console.log(a[i]);
  }

  return [...a.slice(d), ...a.slice(0, d)]
}

leftRotate([1, 2, 3, 4, 5], 4)
