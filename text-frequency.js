$(function() {

	$('#results').click(function() {
    find_frequency();
  });

});

var find_frequency = function() {
  var text = $('#text').val();
  var textarray = text.split(' '); // punctuation and capitalization
  find_root(textarray);
  console.log(textarray);
  var count = {};
  for (var ii = 0; ii < textarray.length; ii++) {
    count[textarray[ii]] = (count[textarray[ii]] || 0) + 1;
  }
  console.log(count);
};

var find_root = function(textarray) {
  var ing_end = /\b(\w{3,}ing)\b/ig;
  var ed_end = /\b(\w{3,}ed)\b/ig;
  var sliced_words = [];
  for (var ii = 0; ii < textarray.length; ii++) {
    if (ing_end.test(textarray[ii])) {
      textarray[ii] = textarray[ii].slice(0, -3);
    }
    if (ed_end.test(textarray[ii])) {
      textarray[ii] = textarray[ii].slice(0, -2);
    }
  }
  
};