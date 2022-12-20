const ctx1= document.getElementById('barChart');
const ctx2= document.getElementById('bubbleChart');
const ctx3= document.getElementById('barChart');
const ctx4= document.getElementById('barChart');
const ctx5= document.getElementById('barChart');
const ctx6= document.getElementById('barChart');

const chart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
        datasets: [{
            tension: 0.3,
            fill: 'origin',
            label: 'Clientes',
            backgroundColor: [
                'rgba(41, 128, 185, 0.8)',
                'rgba(52, 73, 94, 0.8)',
            ],
            borderColor: [
                'rgba(41, 128, 185)',
                'rgba(52, 73, 94)',
            ],
            data: [5, 10, 5, 2, 20, 30, 45],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                left: 20,
                rigth: 20,
                top: 20,
                bottom: 20
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            },
            title: {
                display: true,
                text: 'Clientes na semana',
                font: {
                    size: 20
                },
                padding: {
                    top: 10,
                    bottom: 20
                }
            },
            tooltip: {
                enabled: true,
                intersect: true,
                backgroundColor: 'rgba(21, 128, 185, 0.8)'
            }
        },
        scales: {
            x: {
                position: 'top',
                grid: {
                    display: false,
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true,
                },
                border: {
                    display: false
                }
            }
        }
    }
});


const bubbleChart = new Chart(ctx2, {
    type: 'bubble',
    data: {
        labels: ["seg","ter","qua","qui","sex"],
        datasets: [{
            hoverRadius: 10,
            hoverBackgroundColor: 'rgb(255, 50, 180)',
            label: "teste",
            backgroundColor: [
                'rgba(25, 98, 85, 0.8)',
                'rgba(63, 64, 98, 0.8)'],
            borderColor: [
                'rgb(25, 98, 85)',
                'rgb(63, 64, 98)'],
            data: [{
                x: 20,
                y:30,
                r:15
            }, {
                x: 40,
                y:12,
                r:10
            }, {
                x: 1,
                y: 5,
                r: 25
            }],
            borderWidth: 1,
        }, {
            label: "foda",
            backgroundColor: 'rgba(40, 54, 220)',
            borderColor: 'rgba(40, 54, 220)',
            data: [{
                x: 11,
                y: 8,
                r: 8
            }, {
                x: 32,
                y: 22,
                r: 18
            }]
        }],
    },
    options: {
        layout: {
            padding: {
                left: 20,
                rigth: 20,
                top: 20,
                bottom: 20,
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Bostas',
                font: {
                    size: 20,
                },
                padding: {
                    bottom: 20
                }
            },
            legend: {
                position: 'bottom'
            }
        }
    }

});

/*const rosquinhaChart = 

const lineChart =

const pieChart = 

const polarareaChart = 

const radarChart = 

const scatterChart = */

const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    chart.data.datasets[0].data[sizeData] = Math.random() * 100
    chart.data.labels[sizeData] = `New Data ${sizeData + 1}`
    chart.update('none')
}
const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update('none')
}