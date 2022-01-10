// ======================================================================== 4) count vowels

const countVowels = (string) => {
    const findVowelsRegEx = new RegExp(/[aeiouy]/, "g");
    const matched = string.toLowerCase().match(findVowelsRegEx);
    return matched ? matched.length : 0;
  };
  
  const countWord = "Andele andele mami, E I E I Uh-oh! What's poppin' tonite? ";
  console.log(`Vowel Count = ${countVowels(countWord)}`);
