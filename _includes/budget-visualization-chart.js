<script>{% include Chart.min.js %}</script>
<script>{% include budget-visualization.js }</script>
<div id="budget-input"></div>
<canvas id="chart" width="400" height="300"></canvas>
<script>
function getColors() {
  setsOfSix = 10;
  predefined = [ [0, 0, 255]
               , [0, 255, 0]
               , [255, 0, 0]
               , [0, 255, 255]
               , [255, 0, 255]
               , [255, 255, 0] ];
  colors = [];
  for (var ii = 1; ii <= setsOfSix; ii++) {
    predefined.forEach(function(data, index, array) {
      col1 = Math.ceil(data[0]/ii);
      col2 = Math.ceil(data[1]/ii);
      col3 = Math.ceil(data[2]/ii);
      colors.push('rgb(' + col1 + ', ' + col2 + ', ' + col3 + ')');
    });
  }

  return colors;
}

Chart.defaults.global.elements.line['fill'] = false;
var canvas = document.getElementById('chart');
var colors = getColors();

var lineChart;

var displayDiv = document.getElementById('budget-input')
var app = Elm.BudgetVisualization.embed(displayDiv);

app.ports.exportExtrapolation.subscribe(function(extrapolation) {
  extrapolation.datasets.forEach(function(data, index, array) {
    data.backgroundColor = colors[index % colors.length];
    data.borderColor = colors[index % colors.length];
    data.pointRadius = 0;
  });
  lineChart = new Chart(canvas, {
    type: 'line',
    data: extrapolation,
    options: {
      title: {
        display: true,
        text: 'Account Value Predictions'
      },
      tooltips: {
        mode: 'index'
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 20
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Dollars'
          }
        }]
      }
    }
  });
});
</script>
