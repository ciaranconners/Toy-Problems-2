// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

//toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"
//toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"


// OUTPUT: a string
// INPUT: an underscore or dash delimited string
// CONSTRAINTS: it seems that first char of input determines case of OUTPUT
// EDGE CASES: empty string, non-string input, a non-delimited string

// examples:

// 'the-stealth-warrior'

// first char is lowercase, this will remain so (set a boolean to determine if first char to be capitalized)
// we split the string into an array, on dashes/underscores
// each word after the first gets capitalized

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function toCamelCase(string) {
  if (!string.length) {
    return string;
  }
  let firstCharUpperCase = string[0].toUpperCase() === string[0], words;
  if (string.includes('-') && !string.includes('_')) {
    words = string.split('-');
  } else if (string.includes('_') && !string.includes('-')) {
    words = string.split('_');
  }
  if (firstCharUpperCase) {
    words[0][0].toUpperCase();
  }
  for (let i = 1; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join('');
}

