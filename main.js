// P1 / P3
let input1 = document.getElementById('input1');
let handleAnagram = () => {
  console.log("Input Word: ",input1.value);
  let givenWord = input1.value;
  let alphabetizedWord = alphabetize(givenWord);
  let anagrams = words.filter((word) => {
    return alphabetize(word) === alphabetizedWord;
  })
  console.log("Anagrams: ", anagrams);
  return anagrams;
}

function alphabetize(word) {
  return word.split("").sort().join("").toLowerCase();
}

// P2
let dictionary = {};
function makeDictionary() {
  dictionary = {};
  for (var i = 0; i < words.length; i++) {
    let alphabatized = alphabetize(words[i]);
    if (alphabatized in dictionary) {
      dictionary[alphabatized].push(words[i])
    } else {
      dictionary[alphabatized] = [words[i]];
    }
  }
  let fiveDictionary = {};
  for (prop in dictionary) {
    if (dictionary[prop].length >= 5) {
      fiveDictionary[prop] = dictionary[prop];
    }
  }
  return fiveDictionary;
}
// P4

// Input: a word or phrase
// Output: all two word anagrams to use all the letters

let input2 = document.getElementById('input2');
let handleAnagramPhrase2 = () => {
  makeDictionary();
  let keys = Object.keys(dictionary);
  let givenPhrase = alphabetize(input2.value.split(" ").join("").toLowerCase());
  console.log(givenPhrase);
  let filteredKeys = [];
  for (let i=0; i < keys.length; i++) {
    // check to see if the word has letters that are not in the givenPhrase
    let wrongLetters = 0;
    for (let j=0; j < keys[i].length; j++) {
      if (givenPhrase.indexOf(keys[i][j]) === -1) {
        wrongLetters ++;
      }
    }
    if (wrongLetters === 0) {
      filteredKeys.push(keys[i]);
    }
}
  console.log("FilteredKeys: ", filteredKeys);
  let twoWordAnagrams = [];
  for (let i = 0; i < filteredKeys.length; i++) {
    for (let j = i + 1; j < filteredKeys.length; j++) {
      let anagramCombo = filteredKeys[i] + filteredKeys[j];
      if (anagramCombo.length == givenPhrase.length) {
        if (alphabetize(anagramCombo) === givenPhrase) {
          twoWordAnagrams.push(`${dictionary[filteredKeys[i]]} + ${dictionary[filteredKeys[j]]}`);
        }
      }
    }
  }
  console.log("twoWordAnagrams: ", twoWordAnagrams);
  return twoWordAnagrams;
}

// P5
// TODO: Encapsulate this in the previous function, possibly using a ternary to decide whether to look for combinations for three words or two

let input3 = document.getElementById('input3');
let handleAnagramPhrase3 = () => {
  makeDictionary();
  let keys = Object.keys(dictionary);
  let givenPhrase = alphabetize(input3.value.split(" ").join("").toLowerCase());
  console.log(givenPhrase);
  let filteredKeys = [];
  // filters the keys
  for (let i=0; i < keys.length; i++) {
    // check to see if the word has letters that are not in the givenPhrase
    let wrongLetters = 0;
    for (let j=0; j < keys[i].length; j++) {
      if (givenPhrase.indexOf(keys[i][j]) === -1) {
        wrongLetters ++;
      }
    }
    if (wrongLetters === 0) {
      filteredKeys.push(keys[i]);
    }
  }
  console.log(filteredKeys);
  let threeWordAnagrams = [];
  for (let i = 0; i < filteredKeys.length; i++) {
    for (let j = i + 1; j < filteredKeys.length; j++) {
      for (let k = j + 1; k < filteredKeys.length; k++) {
        let anagramCombo = filteredKeys[i] + filteredKeys[j] + filteredKeys[k];
        if (anagramCombo.length == givenPhrase.length) {
          if (alphabetize(anagramCombo) === givenPhrase) {
            threeWordAnagrams.push(`${dictionary[filteredKeys[i]]} + ${dictionary[filteredKeys[j]]} + ${dictionary[filteredKeys[k]]}`);
          }
        }

      }
    }
  }
  console.log("threeWordAnagrams: ", threeWordAnagrams);
  return threeWordAnagrams;

}
