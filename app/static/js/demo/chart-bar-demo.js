var data_ligne2 = [];

var jsonData = '[' +
  '{"nb of week" : 38, "formation" : "CDA", "Q1": 3.5, "Q2": 3.5, "Q3": 3.5, "Q4": 3.5, "Q5":  3.5, "Q6":  3.5},' +
  '{"nb of week" : 39, "formation" : "CDA", "Q1": 4.5, "Q2": 4.5, "Q3": 4.5, "Q4": 4.5, "Q5":  4.5, "Q6":  3.5},' +
  '{"nb of week" : 40, "formation" : "CDA", "Q1": 2.5, "Q2": 2.5, "Q3": 2.5, "Q4": 2.5, "Q5":  2.5, "Q6":  3.5},' +
  '{"nb of week" : 41, "formation" : "CDA", "Q1": 3.5, "Q2": 3.5, "Q3": 3.5, "Q4": 3.5, "Q5":  3.5, "Q6":  3.5},' +
  '{"nb of week" : 42, "formation" : "CDA", "Q1": 4.5, "Q2": 4.5, "Q3": 4.5, "Q4": 4.5, "Q5":  4.5, "Q6":  4.5},' +
  '{"nb of week" : 43, "formation" : "CDA", "Q1": 1.5, "Q2": 1.5, "Q3": 1.5, "Q4": 1.5, "Q5":  1.5, "Q6":  1.5}]';

// Request ajax
// function getData() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(this.responseText);
//       data_ligne2 = [5,4,3,2,1,5]
//       myBarChart.data.datasets[0].data = data_ligne2;
//       myBarChart.update();
//       console.log('success');
    
//       // for(var i=0; i<len; i++) {
//       //   let result = "id: " + data[i].id + ", title: " + data[i].title;
//       // }
//     }
//   };
//   xhttp.open("GET", "http://localhost:8888/stats/F1/weekly", true);
//   xhttp.send();
// }

function getData(nbWeek) {
    console.log(nbWeek);
    var dataPerWeek = JSON.parse(jsonData);
    var found = false;
    for (var i=0; i < dataPerWeek.length; i++){
        if (dataPerWeek[i]["nb of week"] == nbWeek) {
            data_ligne2 = Object.values(dataPerWeek[i])
            data_ligne2.splice(0, 2);
            found = true;
        }
    }
    if (!found) {
        data_ligne2 = [0,0,0,0,0,0];
    }
    myBarChart.data.datasets[0].data = data_ligne2;
    myBarChart.update();
    console.log('success');
}



// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

var labelData = [["Comment évaluez-vous les méthodes pédagogique", " et d'animation proposées cette semaine ? "], 
["Comment évaluez-vous votre progression", " pendant cette semaine ?"],
["Comment évaluez-vous l'organisation matérielle "," de la formation (rythme, planning, horaire) ? "], 
["Comment évaluez-vous les moyens pédagogiques", " mis à disposition (supports, documentation, ...) ?"], 
"Comment évaluez-vous les échanges dans votre groupe ? ", 
"Comment évaluez-vous la satisfaction de vos attentes personnelles ?"];
// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    // labels: ["Comment évaluez-vous les méthodes pédagogique et d'animation proposées cette semaine ? ", "Comment évaluez-vous votre progression pendant cette semaine ?", "YelComment évaluez-vous l'organisation matérielle de la formation (rythme, planning, horaire) ? ", 'Comment évaluez-vous les moyens pédagogiques mis à disposition (supports, documentation, ...) ?', "Comment évaluez-vous les échanges dans votre groupe ? ", "Comment évaluez-vous la satisfaction de vos attentes personnelles ?"],
    // labels: [["Comment évaluez-vous les méthodes pédagogique", "et d'animation proposées cette semaine ? "], 
    //           ["Comment évaluez-vous votre progression", "pendant cette semaine ?"],
    //           ["YelComment évaluez-vous l'organisation matérielle ","de la formation (rythme, planning, horaire) ? "], 
    //           ['Comment évaluez-vous les moyens pédagogiques', "mis à disposition (supports, documentation, ...) ?"], 
    //           "Comment évaluez-vous les échanges dans votre groupe ? ", 
    //           "Comment évaluez-vous la satisfaction de vos attentes personnelles ?"],
    labels: labelData,
    datasets: [{
      label: "Moyen",
      backgroundColor: ["#e74a3b", "#f6c23e", "#4e73df", "#36b9cc","#1cc88a", "#cc66ff"],
      hoverBackgroundColor: '#b3b3b3',
      borderColor: "#4e73df",
      data: [4,4,3,2,1,5]
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
  //   plugins: [{
  //     beforeInit: function (chart) {
  //         chart.data.labels.forEach(function (value, index, array) {
  //             var a = [];
  //             a.push(value.slice(0, 5));
  //             var i = 1;
  //             while(value.length > (i * 5)){
  //                 a.push(value.slice(i * 5, (i + 1) * 5));
  //                 i++;
  //             }
  //             array[index] = a;
  //         })
  //     }
  // }],
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          color: '#b3b3b3',
          zeroLineColor: '#b3b3b3',
          borderDash: [2],
          zeroLineBorderDash: [2],
          display: true,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
          autoSkip: false,
            min: 0,                        // 最小値
            max: 5,                       // 最大値
            stepSize: 1,                   // 軸間隔
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        
        // ticks: {
          
          // min: 0,
          // max: 5,
          // maxTicksLimit: 5,
          // padding: 10,
          // Include a dollar sign in the ticks
          // callback: function(value, index, values) {
          //   return '$' + number_format(value);
          // }
        // },
        gridLines: {
          display: false,
          // color: "rgb(234, 236, 244)",
          // zeroLineColor: "rgb(234, 236, 244)",
          // drawBorder: false,
          // borderDash: [2],
          // zeroLineBorderDash: [2]
        },
        ticks: {
          autoSkip: false
        },
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
window.addEventListener('DOMContentLoaded', getData(thisWeek));
