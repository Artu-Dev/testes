const ctxpie = document.getElementById('pieChart');
const pieChart = new Chart(ctxpie, {
    type: 'doughnut',
    data: {
        labels: ['Detro do prazo', 'Fora do prazo', 'Não entregues'],
        datasets: [{
            label: 'Quantidade',
            data: [92, 3, 0],
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: [
            'rgb(72, 168, 168)',
            'rgba(0,0,0,0)'
            ],
            rotation: 520,
            cutout: 85
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
const ctxbar = document.getElementById('barChart');
const barchart = new Chart(ctxbar, {
    data: {
        datasets: [{
            type: 'bar',
            label:'Tempo de espera no pátio',
            data: [50, 80, 40, 15],
            backgroundColor: '#335b86',
            barThickness: 90,
            barPercentage: 1.0,
            categoryPercentage: 0.5,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 3
        }, {
            type: 'bar',
            label:'Tempo de carregamento',
            data: [20, 40, 60, 20],
            backgroundColor: '#48a8a8',
            barThickness: 90,
            barPercentage: 1.0,
            categoryPercentage: 0.5,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 3
        }],
        labels: ['FEV 31 - MAR 6',"MAR 7 - MAR 13","MAR 14 - MAR 20", "MAR 21 - MAR 27"],
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                },
            }
        },
        layout: {
            padding: {
                left: 25,
                right: 25,
                top: 10,
                bottom: 10
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Ánalise da carga',
                color: '#335b86',
                align: 'start',
                font: {
                    size: 30,
                    family: ['Oswald', 'sans-serif'],
                },
                padding: {}
            },
            subtitle: {
                display: true,
                text: '(data x minuto)',
                padding: {
                    bottom: 30
                },
                color: '#335b86',
                align: 'start',
                font: {
                    size: 20,
                    family: ['Oswald', 'sans-serif'],
                }
            },
            legend: {
                position: 'bottom'
            }
        },
    }
});

const ctxbar2 = document.getElementById('barChart2');
const barchart2 = new Chart(ctxbar2, {
    type: 'bar',
    data: {
        labels: ['TOTAL'],
        datasets: [
        {
            label: 'Tempo de espera no patio',
            data:[174],
            backgroundColor: '#335b86',
        },
        {
            label: 'Tempo de carregamento',
            data: [140],
            backgroundColor: 'rgb(72, 168, 168)',
        },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        layout: {
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                },
                position: 'right',
                ticks: {
                    display: false,
                }
            }
        }
    }
});