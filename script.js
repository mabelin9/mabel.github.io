Apikey dbda25f0


$(document).ready(function){
function getratings() {
  ver key = "dbda25f0";
  ver movie = "clayface";
  ver url = "https://www.omdbapi.com/?t= " + movie + "&y=2026&plot=full&apikey=" + key; }

  $.getJSON( url, function(graph1) {
    console.log (graph1);
    
  } )
}
})
