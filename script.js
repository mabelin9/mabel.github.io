$(#graph1)
$(#graph1)src="https://cdn.plot.ly/plotly-latest.min.js"

$(#graph1)style="width:100%;max-width:700px"

$(#graph1)const xArray = ["ClayFace", "A Quiet Place", "Obsession", "Conjuring", "Halloween"];
$(#graph1)const yArray = [7.5, 7.5, 7.8, 7.5, 7.7];

$(#graph1)const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

$(#graph1)const layout = {title:"IMDB Horror Movie Ratings"};

$(#graph1)Plotly.newPlot("myPlot", data, layout); 
