$(document).ready(function() {
  console.log("test");


  $.ajax({
    type: 'GET',
    url: 'https://en.wikipedia.org/w/api.php?action=render&titles=Cat&prop=revisions&rvprop=content&format=json',
    success: function(data) {

    }
  });


});
