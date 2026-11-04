//APi Key dbda25f0
// https://www.omdbapi.com/?t=clayface&y=2026&plot=full&apikey=dbda25f0

$(document).ready(function(){
function getratings() {
  var key = 'dbda25f0';
  var movie = 'clayface';
  var year = '2026';
  var url = 'https://www.omdbapi.com/?t=' + movie+ 'a&y=2026&plot=full&apikey=' + key; 

  $.getJSON(url, function(graph1) {
    console.log();
    
  } )
}
  getratings();
})
