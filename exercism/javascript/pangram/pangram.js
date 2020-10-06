//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let char of alphabet) {
    if (!str.toLowerCase().includes(char)) {
      return false;
    }
  }

  return true;
};
