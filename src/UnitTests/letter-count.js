export const getLetterCount = string => {

  const alphanumericRegex = /[^a-zA-Z0-9]/g
  const letters = string.split('');
  let letterCount = {};

  letters.forEach(letter => {
    if(letter.match(alphanumericRegex)) return;
    
    letter = letter.toLowerCase();
    if(!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
};