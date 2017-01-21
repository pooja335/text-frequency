'use strict';

if (typeof(require) !== 'undefined') {
  var _ = require('underscore');
}

var rules = [
  { // if word ends with -ies or -ied, remove those 3 letters and add -y
    matcher: /\w+ie[sd]$/,
    stemmer: (str) => str.slice(0, -3) + 'y'
  },
  { // if word ends with -[o, s, z, x, ch, sh]es, remove -es
    matcher: /\w+(?:[oszx]|ch|sh)es$/,
    stemmer: (str) => str.slice(0, -2)
  },
  { // if word ends with -s and previous letter is not s, remove -s
    // known issue: this will cause problems for singular words ending with -s
    matcher: /\w+[^s]s$/,
    stemmer: (str) => str.slice(0, -1)
  },
  { // if word ends with -ed after double consonants f, l, s, z, remove -ed
    matcher: /\w+([flsz])\1ed$/,
    stemmer: (str) => str.slice(0, -2)
  },
  { // if word ends with -ing after double consonants f, l, s, z, remove -ing
    matcher: /\w+([flsz])\1ing$/,
    stemmer: (str) => str.slice(0, -3)
  },
  { // if word ends with -ed after double consonants other than f, l, s, z, 
    // remove -[consonant]ed
    matcher: /\w+([^flsz])\1ed$/,
    stemmer: (str) => str.slice(0, -3)
  },
  { // if word ends with -ing after double consonants other than f, l, s, z, 
    // remove -[consonant]ing
    matcher: /\w+([^flsz])\1ing$/,
    stemmer: (str) => str.slice(0, -4)
  },
  { // if word ends with -ed, remove -ed
    // known issue: this will cause problems for words ending in e (skated, etc)
    matcher: /\w+ed$/,
    stemmer: (str) => str.slice(0, -2)
  },
  { // if word ends with -ing, remove -ing
    // known issue: this will cause problems for words ending in e (skating, etc)
    matcher: /\w+ing$/,
    stemmer: (str) => str.slice(0, -3)
  },
];

// finds the root of each word according to the rules above
function findRoot(word) {
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].matcher.test(word)) {
      return rules[i].stemmer(word);
    }
  }
  return word;
}

// finds the frequency of each word in the text file and returns the top 25
function findFrequency(text) {
  var textArray = text.toLowerCase()
                      .replace(/[^\w\s]|_/g, '')
                      .trim()
                      .split(/\s+/);
  var count = {};
  for (var i = 0; i < textArray.length; i++) {
    var root = findRoot(textArray[i]);
    count[root] = (count[root] || 0) + 1;
  }
  var countArray = _.map(count, function(frequency, word) {
    return { word: word, frequency: frequency };
  });
  countArray = _.sortBy(countArray, 'frequency');
  return countArray.reverse().slice(0, 25);
}

if (typeof(module) !== 'undefined') {
  module.exports = findFrequency;
} else if (typeof(window) !== 'undefined') {
  window.findFrequency = findFrequency;
}