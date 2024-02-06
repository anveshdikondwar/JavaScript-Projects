const ctx = document.getElementById('realTimeChart').getContext('2d');
        const initialData = {
            labels: [],
            datasets: [{
                label: 'Value',
                data: [],
                borderColor: "red",
                borderWidth: 1,
                fill: false,
            }],
        };

        const chartConfig = {
            type: 'line',
            data: initialData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
                animation: false,
            },
        };

       let chart = new Chart(ctx, chartConfig);

        function addData() {
            const newData = Math.random() * 100;
            chart.data.labels.push(chart.data.labels.length);
            chart.data.datasets[0].data.push(newData);
            chart.update();
        }

        setInterval(addData, 1000);