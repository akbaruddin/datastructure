/*
8
UDDDUDUU

_/\      _
   \    /
    \/\/


12
DDUUDDUDUUUD

_           /\_
  \  /\    /
   \/  \/\/
*/

function countValleys(steps, path) {
  let valleyCount = 0;
  let altitude = 0;
  const pathList = path.split('');
  for (let i = 0; i < steps; i++) {
    if (pathList[i] == 'U') {
      altitude++;
      if (altitude == 0) {
        valleyCount++;
      }
    } else {
      altitude--;
    }
  }
  return valleyCount
}


module.exports = countValleys;
