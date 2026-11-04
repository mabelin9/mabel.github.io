$(#graph1.0) . ready ( function () {
src="https://cdn.plot.ly/plotly-latest.min.js"

style="width:100%;max-width:700px"

const xArray = ["ClayFace", "A Quiet Place", "Obsession", "Conjuring", "Halloween"];
const yArray = [7.5, 7.5, 7.8, 7.5, 7.7];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"IMDB Horror Movie Ratings"};

Plotly.newPlot("myPlot", data, layout);  
})
