$(function () {
  $('#upload').click(function() {
    $('#fileInput').click();
  })

  $('#fileInput').change(function() {
    $('form').submit();
  })

  $('form').submit(function() {
    var file = $('#fileInput')[0].files[0];
    var fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1)
    if (fileExtension === 'txt' || fileExtension === file.name) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = function(evt) {
        $('#results').empty().append(evt.target.result);
        //OR SHOULD I USE .html() or .text() instead??
      }
      reader.onerror = function (evt) {
        $('#results').empty().append('An error occurred. Please try again');
      }
    } else {
      $('#results').empty().append('Please make sure your file is a text file');
    }
    return false;
  })




})

