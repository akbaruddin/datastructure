//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  if (!dna) return "";

  /*
   *  G -> C
   *  C -> G
   *  T -> A
   *  A -> U
   */

   const dnaToRna = {
     'G': 'C',
     'C': 'G',
     'T': 'A',
     'A': 'U'
   }

  let rna = [];
  for (let i = 0; i < dna.length; i++) {
    rna[i] = dnaToRna[dna[i]]
  }

  return rna.join('');
};
