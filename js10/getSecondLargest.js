function getSecondLargest(nums) {
  // Complete the function
  let sorted = nums.sort((a, b) => a - b);
  const noDuplicates = []
  for (let i = 0; i < sorted.length; i++) {
    if (noDuplicates.indexOf(sorted[i]) == -1) {
      noDuplicates.push(sorted[i]);
    }
  }

  return noDuplicates[noDuplicates.length - 2];
}

module.exports = getSecondLargest
