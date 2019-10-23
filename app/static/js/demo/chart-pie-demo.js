// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var ctx2 = document.getElementById("mySecondPieChart");

let idName_1 = "number-percentage_1";
let idName_2 = "number-percentage_2";


var labelsOne = ["Tx de formulaire remplis", "Tx de formulaire non remplis"];
var labelsTwo = ["Tx de formulaire bien remplis", "Tx de formulaire mal remplis"];

var colorOne = "#4e73df";
var colorTwo = "#1cc88a";


var myPieChart = createPieChart(ctx, [50,50], labelsOne, colorOne);
var mySecondPieChart = createPieChart(ctx2, [50, 50], labelsTwo, colorTwo);

// window.onload function
window.addEventListener('DOMContentLoaded', updateAll());

var urlPieChart = 'http://localhost:8888/stats/1';
var urlSecondPieChart = 'http://localhost:8888/stats/2';

var urlTest = 'https://jsonplaceholder.typicode.com/todos';

function updateAll() {
  // call ajax and update chart
  getData(urlPieChart, myPieChart);
  getData(urlSecondPieChart, mySecondPieChart);
} 



function getData(url, chart) {
  var data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // data = JSON.parse(this.responseText);
      data = 0.25;
      updatePieChart(chart, data, idName_1);
      updatePieChart(chart, data, idName_2);

    }
    else {
      data = 0.25;
      updatePieChart(chart, data, idName_1);
      updatePieChart(chart, data, idName_2);
    }    
  };
  xhttp.open("GET", url, true);
  //xhttp.open("GET", urlTest, true);
  xhttp.send();
}


function updatePieChart(chart, data, idName) {
      let numberPercentage = data * 100;
      let rest = 100 - numberPercentage;
      let data_pie = [numberPercentage, rest]
      chart.data.datasets[0].data = data_pie;
      chart.update();

      //percentage in the circle
      // document.getElementById("number-percentage").innerHTML=`<p>${numberPercentage}%</p>`
      document.getElementById(idName).innerHTML=`<p>${numberPercentage}%</p>`
}

function createPieChart(id, data_chart, label_chart, color) {
  return new Chart(id, {
    type: 'pie',
    data: {
      labels: label_chart,
      datasets: [{
        data: data_chart,
        backgroundColor: [color,"rgba(0,0,0,0)"],
        hoverBackgroundColor: ['#2c9faf', "rgba(0,0,0,0)"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: true,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
}

