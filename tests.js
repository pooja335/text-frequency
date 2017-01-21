var assert = require('assert');
var findFrequency = require('./wordFrequency');

var makeTest = function(text, counts) {
  assert.deepEqual(findFrequency(text), counts);
};

// each set of tests corresponds to a rule in wordFrequency.js

// corresponds to rule 1
makeTest('fry fries fried', [{ word: 'fry', frequency: 3 }]);
makeTest('spy spies spied', [{ word: 'spy', frequency: 3 }]);

// corresponds to rule 2
makeTest('potato potatoes', [{ word: 'potato', frequency: 2 }]);
makeTest('hero heroes', [{ word: 'hero', frequency: 2 }]);
makeTest('mass masses', [{ word: 'mass', frequency: 2 }]);
makeTest('stretch stretches', [{ word: 'stretch', frequency: 2 }]);

// corresponds to rule 3
makeTest('cat cats', [{ word: 'cat', frequency: 2 }]);
makeTest('talk talks', [{ word: 'talk', frequency: 2 }]);
makeTest('make makes', [{ word: 'make', frequency: 2 }]);

// corresponds to rules 4 and 5
makeTest('sass sassed sassing', [{ word: 'sass', frequency: 3 }]);
makeTest('mull mulled mulling', [{ word: 'mull', frequency: 3 }]);
makeTest('gaff gaffed gaffing', [{ word: 'gaff', frequency: 3 }]);
makeTest('fizz fizzed fizzing', [{ word: 'fizz', frequency: 3 }]);

// corresponds to rules 6 and 7
makeTest('pad padded padding', [{ word: 'pad', frequency: 3 }]);
makeTest('rib ribbed ribbing', [{ word: 'rib', frequency: 3 }]);
makeTest('yak yakked yakking', [{ word: 'yak', frequency: 3 }]);
makeTest('ram rammed ramming', [{ word: 'ram', frequency: 3 }]);
makeTest('stir stirred stirring', [{ word: 'stir', frequency: 3 }]);

// corresponds to rules 8 and 9
makeTest('talk talked talking', [{ word: 'talk', frequency: 3 }]);
makeTest('book booked booking', [{ word: 'book', frequency: 3 }]);
makeTest('cheat cheated cheating', [{ word: 'cheat', frequency: 3 }]);

console.log('All tests passed!');
