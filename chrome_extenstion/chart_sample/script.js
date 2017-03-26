$(document).ready(function() {   // Load the function after DOM ready.

    var htmlElements ='<div id="chartOuterDiv"><canvas id="chartDiv" width="600" height="100"></canvas></div>'    //now set the src to absolute path.
    $("#watch-header").before(htmlElements);     //Insert MailGet icon into top-right corner of Gmail home.

    var canvas = document.getElementById("chartDiv");
    var ctx = canvas.getContext("2d");
    window.myLine = new Chart(ctx, config);

    console.log('click1')
    canvas.onclick = function(e) {
        console.log('click')
        var tmp = window.myLine.getElementsAtEvent(e);
        console.log(tmp)
    };
});

var config = {
    type: 'line',
    data: {
        labels: ["00:00:01","00:00:02","00:00:03","00:00:04","00:00:05","00:00:06"],
        datasets: [{
            label: "My First dataset",
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [
                5,
                100,
                200,
                34,
                600,
                6
            ],
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        title: {
            display: false
        },
        legend: {
            display: false
        },


        responsive: true,
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};