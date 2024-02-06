const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
              label: 'Monthly Sales',
              data: [65,59, 80, 81, 56],
              borderWidth: 1,
              backgroundColor: ['black', 'red', 'orange', 'pink', 'blue']
            }],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            
            plugins: {
                title: {
                  display: true,
                  text: 'Monthly Sales Data'
                }
              }
              
        }

        });