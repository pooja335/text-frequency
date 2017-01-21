'use strict';

$(function() {
  $('#upload').click(function() {
    $('#fileInput').val('').click();
  })

  // when a file is updated, either shows the results table or an appropriate error message
  $('#fileInput').change(function() {
    var file = $('#fileInput')[0].files[0];
    var fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1);
    if (fileExtension === 'txt' || fileExtension === file.name) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = function(evt) {
        $('.content').removeClass('error').addClass('results');
        var countArray = findFrequency(evt.target.result);
        displayTable(countArray);
      };
      reader.onerror = function() {
        $('.content').removeClass('results').addClass('error');
        $('#error').text('An error occurred. Please try again');
      };
    } else {
      $('.content').removeClass('results').addClass('error');
      $('#error').text('Please make sure your file is a text file');
    }
    return false;
  });
});

// displays the table with the frequency of each word
function displayTable(countArray) {
  var $resultsBody = $('#results-body');
  $resultsBody.empty();
  _.each(countArray, function(wordFrequency) {
    $resultsBody.append(
      '<tr><td>' + wordFrequency.word + '</td><td>' + wordFrequency.frequency + '</td></tr>'
    );
  });
}
