function regexVar() {
  let re = /^([\s\S])[\s\S]*\1$/;

  return re;
}

module.exports = regexVar;
