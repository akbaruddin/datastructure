function regexVar() {
  let re = new RegExp('\\d+', 'g');
  return re;
}

const r = '102, 1948948 and 1.3 and 4.5'.match(regexVar());

for (const e of r) {
  console.log(e);
}
