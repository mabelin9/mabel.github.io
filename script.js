Apikey dbda25f0


$(document).ready(function(){
function getratings() {
  var key = 'dbda25f0';
  var movie = 'clayface';
  var year = '2026';
  var url = 'https://www.omdbapi.com/?t=' + movie + '&y=' + year+ '&plot=full&apikey=' + key; 

  $.getJSON(url, function(graph1) {
    console.log();
    
  } )
}
  getratings();
})
