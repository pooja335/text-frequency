$(function () {
  $('#upload').click(function() {
    $('#fileInput').click();
  })

  $('#fileInput').change(function() {
    $('form').submit();
  })

  $('form').submit(function() {
    console.log('here');
    var file = $('#fileInput')[0].files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function(evt) {
        $('#results').append(evt.target.result);
      }
      reader.onerror = function (evt) {
        $('#results').append("error reading file");
      }
    }
    return false;
  })




})

