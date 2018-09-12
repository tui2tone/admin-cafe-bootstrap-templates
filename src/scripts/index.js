import '../styles/index.scss';

$(document).ready(function() {

    // Navbar Toogle
    $(".navbar-toggler").click(function() {
        $("body").toggleClass("collapsed");
    });
    
    const ShadowLineElement = Chart.elements.Line.extend({
        draw () {
          const { ctx } = this._chart
      
          const originalStroke = ctx.stroke
      
          ctx.stroke = function () {
            ctx.save()
            ctx.shadowColor = '#8BC34A66'
            ctx.shadowBlur = 50
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 20
            originalStroke.apply(this, arguments)
            ctx.restore()
          }
          
          Chart.elements.Line.prototype.draw.apply(this, arguments)
          
          ctx.stroke = originalStroke;
        }
      })
      
      Chart.defaults.ShadowLine = Chart.defaults.line
      Chart.controllers.ShadowLine = Chart.controllers.line.extend({
        datasetElementType: ShadowLineElement
      })

    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'ShadowLine',
        data: {
            labels: ["10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00","12:10"],
            datasets: [{
                label: '',
                radius: 0,
                pointBorderWidth: 0,
                pointBorderColor: '#FFF',
                pointBackgroundColor: '#8BC34A',
                pointHoverRadius: 10,
                pointHoverBorderColor: '#FFF',
                pointHoverBackgroundColor: '#FFF',
                data: [4210 ,8010 ,5210 ,9750 ,12005 ,15035 ,16042 ,18251 ,28640 ,46000],
                backgroundColor: [
                    '#0d67b3CC'
                ],
                borderColor: [
                    '#0d67b3CC'
                ],
                borderWidth: 0
            }]
        },
        options: {
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: -10,
                    bottom: -10
                }
            },
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        max: 50000,
                        stepSize: 10000,
                        beginAtZero:true,
                        fontColor: '#AAA',
                        display: false
                    },
                    gridLines: {
                        drawBorder: false,
                        color: "#F9F9F9"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "#F9F9F9"
                    },
                    ticks: {
                        fontColor: '#AAA',
                        display: false,
                        padding: 0
                    }
                }]
            }
        }
    });

    const ctx2 = document.getElementById("chart1").getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["10:40", "10:50", "11:00", "11:10", "11:20"],
            datasets: [{
                label: '',
                radius: 0,
                pointBackgroundColor: '#8BC34A',
                pointHoverRadius: 10,
                pointHoverBorderColor: '#8BC34A',
                pointHoverBackgroundColor: '#FFF',
                data: [4210 ,8010 ,5210 ,9750 ,12005],
                backgroundColor: [
                    '#8BC34A33'
                ],
                borderColor: [
                    '#8BC34A33'
                ],
                borderWidth: 3
            }]
        },
        options: {
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: 0,
                    bottom: -10
                }
            },
            bezierCurve: false,
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        max: 15000,
                        stepSize: 5000,
                        beginAtZero:true,
                        fontColor: '#AAA',
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "#EEE"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "#EEE"
                    },
                    ticks: {
                        fontColor: '#AAA',
                        display: false,
                        padding: 0
                    }
                }]
            }
        }
    });

    const ctx3 = document.getElementById("chart2").getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ["10:40", "10:50", "11:00", "11:10", "11:20"],
            datasets: [{
                label: '',
                radius: 0,
                pointBackgroundColor: '#8BC34A',
                pointHoverRadius: 10,
                pointHoverBorderColor: '#8BC34A',
                pointHoverBackgroundColor: '#FFF',
                data: [4210 ,8010 ,5210 ,9750 ,12005],
                backgroundColor: [
                    '#8BC34A00'
                ],
                borderColor: [
                    '#8BC34A'
                ],
                borderWidth: 3
            }]
        },
        options: {
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: 0,
                    bottom: -10
                }
            },
            bezierCurve: false,
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        max: 15000,
                        stepSize: 5000,
                        beginAtZero:true,
                        fontColor: '#AAA',
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "#EEE"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "#EEE"
                    },
                    ticks: {
                        fontColor: '#AAA',
                        display: false,
                        padding: 0
                    }
                }]
            }
        }
    });
});