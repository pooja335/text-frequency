var rules = [
  { // if word ends with -ies or -ied, remove those 3 letters and add -y
    matcher: /\w+ie[sd]$/,
    stemmer: function(str) {
      return str.slice(0, -3) + 'y';
    }
  },
  { // if word ends with -[o, s, z, x, ch, sh]es, remove -es
    matcher: /\w+(?:[oszx]|ch|sh)es$/,
    stemmer: function(str) {
      return str.slice(0, -2);
    }
  },
  { // if word ends with -s and previous letter is not s, remove -s
    // known issue: this will cause problems for singular words ending with -s
    matcher: /\w+[^s]s$/,
    stemmer: function(str) {
      return str.slice(0, -1);
    }
  },
  { // if word ends with -ed after double consonants f, l, s, z, remove -ed
    matcher: /\w+([flsz])\1ed$/,
    stemmer: function(str) {
      return str.slice(0, -2);
    }
  },
  { // if word ends with -ing after double consonants f, l, s, z, remove -ing
    matcher: /\w+([flsz])\1ing$/,
    stemmer: function(str) {
      return str.slice(0, -3);
    }
  },
  { // if word ends with -ed after double consonants other than f, l, s, z, 
      // remove -[consonant]ed
    matcher: /\w+([^flsz])\1ed$/,
    stemmer: function(str) {
      return str.slice(0, -3);
    }
  },
  { // if word ends with -ing after double consonants other than f, l, s, z, 
      // remove -[consonant]ing
    matcher: /\w+([^flsz])\1ing$/,
    stemmer: function(str) {
      return str.slice(0, -4);
    }
  },
  { // if word ends with -ed, remove -ed
    // known issue: this will cause problems for words ending in e (skated, etc)
    matcher: /\w+ed$/,
    stemmer: function(str) {
      return str.slice(0, -2);
    }
  },
  { // if word ends with -ing, remove -ing
    // known issue: this will cause problems for words ending in e (skating, etc)
    matcher: /\w+ing$/,
    stemmer: function(str) {
      return str.slice(0, -3);
    }
  },
]

var findRoot = function(word) {
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].matcher.test(word)) {
      return rules[i].stemmer(word);
    }
  }
  return word;
};

var findFrequency = function (text) {
  text = text.toLowerCase().split('');
  var textNoPunc = text.filter(function (char) {
    return (/[\w\s]/).test(char);
  }).join('');
  var textArray = textNoPunc.split(' ');
  for (var i = 0; i < textArray.length; i++) {
    textArray[i] = findRoot(textArray[i])
  }
  console.log(textArray);
  var count = {};
  for (var ii = 0; ii < textArray.length; ii++) {
    count[textArray[ii]] = (count[textArray[ii]] || 0) + 1;
  }
  var countArray = [];
  for (var key in count) {
    countArray.push({word: key, occurrence: count[key]})
  }
  return countArray
};

var inputString = 'fry fries fried frying spy spies spied sassed mulled willed willing gaffed gaffing fizzed talked talking booked booking ribbed ribbing checking padded padding hugged hugging yakked rammed running tipped stirred ratted revved checked potatoes heroes atlases masses sasses fizzes boxes fixes sketches marshes cats talks books atlas bus sass mass truss peas'
findFrequency(inputString);

// module.exports = findFrequency;