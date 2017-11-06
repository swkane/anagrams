// P1 / P3
let input = document.getElementsByName('given')[0]
let handleAnagram = () => {
  console.log(input.value);
  let givenWord = input.value;
  let alphabetizedWord = alphabetize(givenWord);
  let anagrams = words.filter((word) => {
    return alphabetize(word) === alphabetizedWord;
  })
  console.log(anagrams);
  return anagrams;
}

function alphabetize(word) {
  return word.split("").sort().join("");
}

// P2
function makeDictionary() {
  let dictionary = {};

  for (var i = 0; i < words.length; i++) {
    let alphabatized = alphabetize(words[i]);
    if (alphabatized in dictionary) {
      dictionary[alphabatized].push(words[i])
    } else {
      dictionary[alphabatized] = [words[i]];
    }
  }
  let fiveDictionary = {};
  for (alphabatized in dictionary) {
    if (dictionary[alphabatized].length >= 5) {
      fiveDictionary[alphabatized] = dictionary[alphabatized];
    }
  }
  return fiveDictionary;
}


// P4

// Input: a word or phrase
// Output: all two word anagrams to use all the letters
