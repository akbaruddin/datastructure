function reverseString(s) {
  try {
    let str = s.split('');
    str = str.reverse();
    str = str.join('');
    console.log(str)
  } catch (e) {
    console.log(e.message)
    console.log(s)
  }
}
