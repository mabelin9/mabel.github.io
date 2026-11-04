Apikey dbda25f0


$(document).ready(function(){
function getratings() {
  var key = "dbda25f0";
  var movie = "clayface";
  var url = "https://www.omdbapi.com/?t=" + movie + "&y=2026&plot=full&apikey=" + key; }

  $.getJSON( url, function(graph1) {
    console.log (graph1);
    
  } )
}
})
