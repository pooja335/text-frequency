var assert = require('assert');
var findFrequency = require('./textFrequency');


var inputString = 'fry fries fried frying spy spies spied sassed mulled willed willing gaffed gaffing fizzed talked talking booked booking ribbed ribbing checking padded padding hugged hugging yakked rammed running tipped stirred ratted revved checked potatoes heroes atlases masses sasses fizzes boxes fixes sketches marshes cats talks books atlas bus sass mass truss peas'
findFrequency(inputString);

var makeTest = function(text, counts) {
  assert.deepEqual(findFrequency(text), counts);
}

// words that add an -es to pluralize
makeTest('potato potatoes', { potato: 2 });
makeTest('hero heroes', { hero: 2 });
makeTest('mass masses', { mass: 2 });

// double consonant at end in the case of -ed or -ing
// keep 2nd letter
makeTest('sass sasses sassed sassing', { sass: 4 });
makeTest('mull mulls mulled mulling', { mull: 4 });
makeTest('gaff gaffs gaffed gaffing', { gaff: 4 });
makeTest('fizz fizzes fizzed fizzing', { fizz: 4 });
// remove 2nd letter
makeTest('pad pads padded padding', { pad: 4 });
makeTest('rib ribs ribbed ribbing', { rib: 4 });
makeTest('yak yaks yakked yakking', { yak: 4 });
makeTest('ram rams rammed ramming', { ram: 4 });
makeTest('stir stirs stirred stirring', { stir: 4 });

// // words that add only -d (vs -ed) for past tense
// makeTest('love loves loved loving', { love: 4 });
// makeTest('rate rates rated rating', { rate: 4 });

// words ending in [consonant]-y
makeTest('fry fries fried frying', { fry: 4 });
makeTest('spy spies spied spying', { spy: 4 });

// normal
makeTest('talk talks talked talking', { talk: 4 });
makeTest('book books booked booking', { book: 4 });


makeTest('box boxes boxed boxing', { box: 4 });
makeTest('sketch sketches sketched sketching', { sketch: 4 });

console.log('All tests passed!')




var file = document.getElementById("fileForUpload").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            document.getElementById("fileContents").innerHTML = evt.target.result;
        }
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        }
    }