import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  const result1 = getLetterCount(string1);
  const result2 = getLetterCount(string2);

  for(const property in result1) {
    if(result1[property] !== result2[property]) return false;
  }

  return true;
}