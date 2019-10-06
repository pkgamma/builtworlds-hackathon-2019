(function(window, document, $, undefined) {
        "use strict";
        $(function() {

                if ($('#chartjs_line').length) {
                    var ctx = document.getElementById('chartjs_line').getContext('2d');

                    var myChart = new Chart(ctx, {
                            type: 'line',

                            data: {
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                datasets: [{
                                    label: 'Actual Performance',
                                    data: [2, 4, 8, 9, 12, 14, 16, 17, 18, 20, 22, 23, 25, 27],
                                    backgroundColor: "rgba(247, 119, 84, 0.5)",
                                    borderColor: "rgba(247, 119, 84, 1)",
                                    borderWidth: 2
                                }, {
                                    label: 'Predicted Performance',
                                    data: [3, 5, 7, 8, 9, 12, 15, 17, 19, 22, 24, 25, 27, 28],

                                    backgroundColor: "rgba(88, 75, 66, 0)",
                                    borderColor: "rgba(88, 75, 66, 1)",
                                    borderWidth: 2
                                }]

                            },
                            options: {
                                legend: {
                                    display: true,
                                    position: 'bottom',

                                    
                                },

                                
                            }
                        


                    });
            }


            if ($('#chartjs_bar').length) {
                var ctx = document.getElementById("chartjs_bar").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["CHI39", "CHI42", "PEO25", "CHI53", "PEO62", "PEO65"],
                        datasets: [{
                            label: 'Current',
                            data: [76, 77, 72, 85, 75, 72],
                           backgroundColor: "rgba(247, 119, 84, 0.5)",
                                    borderColor: "rgba(247, 119, 84, 1)",
                            borderWidth: 2
                        }, {
                            label: 'Scheduled',
                            data: [85, 83, 76, 92, 87, 82],
                           backgroundColor: "rgba(88, 75, 66, 0)",
                                    borderColor: "rgba(88, 75, 66, 1)",
                            borderWidth: 2
                        }, {
                            label: 'Projected',
                            data: [100, 100, 100, 100, 100, 100],
                           backgroundColor: "rgba(247, 119, 84, 0.0)",
                                    borderColor: "rgba(0, 173, 181, 1)",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{

                            }]
                        },
                             legend: {
                        display: true,
                        position: 'bottom',

                        
                    },

                    scales: {
                        xAxes: [{ stacked: true }],
                        yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                },
                                stacked: false
                        }]
                      }
                }

                    
                });
            }

            if ($('#chartjs_radar').length) {
                var ctx = document.getElementById("chartjs_radar");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        datasets: [{
                            label: 'Current Machine Health',
                           backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                            data: [12, 19, 3, 17, 28, 24, 7],
                            borderWidth: 2
                        }, {
                            label: 'Predicted Machine Health in 2 Weeks',
                             backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                            data: [30, 29, 5, 5, 20, 3, 10],
                            borderWidth: 2
                        }]
                    },
                    options: {
                       
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }

                });
            }


            if ($('#chartjs_polar').length) {
                var ctx = document.getElementById("chartjs_polar").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        datasets: [{
                            backgroundColor: [
                                "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750",
                                "#2ec551",
                                "#7040fa",
                                "#ff004e"
                            ],
                            data: [12, 19, 3, 17, 28, 24, 7]
                        }]
                    },
                    options: {
                        
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }
                });
            }


            if ($('#chartjs_pie').length) {
                var ctx = document.getElementById("chartjs_pie").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        datasets: [{
                            backgroundColor: [
                               "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750",
                                "#2ec551",
                                "#7040fa",
                                "#ff004e"
                            ],
                            data: [12, 19, 3, 17, 28, 24, 7]
                        }]
                    },
                    options: {
                           legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }
                });
            }


            if ($('#chartjs_doughnut').length) {
                var ctx = document.getElementById("chartjs_doughnut").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        datasets: [{
                            backgroundColor: [
                                 "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750",
                                "#2ec551",
                                "#7040fa",
                                "#ff004e"
                            ],
                            data: [12, 19, 3, 17, 28, 24, 7]
                        }]
                    },
                    options: {

                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    
                }

                });
            }


        });

})(window, document, window.jQuery);