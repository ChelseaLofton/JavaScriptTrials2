'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  let words = phrase.split(" ");
  
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i]
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
} 
  return wordCounts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
