document.addEventListener("DOMContentLoaded", function() {
    // var barChartCtx = document.getElementById("bar-chart").getContext("2d");
    var lineChartCtx = document.getElementById("line-chart").getContext("2d");
    var pieChartCtx = document.getElementById("pie-chart").getContext("2d");
    var barChartYoteStoreCtx = document.getElementById("chart-yotestore").getContext("2d");
    var barChartYoteNewsCtx = document.getElementById("chart-yotenews").getContext("2d");
    var barChartYotePhotoCtx = document.getElementById("chart-yotephoto").getContext("2d");
    var lineChartJogosCtx = document.getElementById("line-chart-jogos").getContext("2d");
    var barChartYoteDragonCtx = document.getElementById("chart-yotedragon").getContext("2d");
    var barChartYoteQueenCtx = document.getElementById("chart-yotequeen").getContext("2d");
    var lineChartEventosCtx = document.getElementById("line-chart-eventos").getContext("2d");
    var barChartYoteGamesCtx = document.getElementById("chart-yotegames").getContext("2d");


    var barChartYoteStoreData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };

      var barChartYoteNewsData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };

      var barChartYotePhotoData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };

      var barChartYoteDragonData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };

      var barChartYoteQueenData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };

      var barChartYoteGamesData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Vendas",
            data: [150, 300, 200, 450, 400, 350],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      };
  
    var lineChartData = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Receitas",
          data: [1000, 1200, 900, 1500, 1300, 1100],
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        }
      ]
    };

    var lineChartJogosData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Receitas",
            data: [1000, 1200, 900, 1500, 1300, 1100],
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          }
        ]
      };

      var lineChartEventosData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
          {
            label: "Receitas",
            data: [1000, 1200, 900, 1500, 1300, 1100],
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          }
        ]
      };
  
    var pieChartData = {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          data: [30, 20, 15, 35],
          backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(75, 192, 192, 0.7)"]
        }
      ]
    };
  

    var barChartYoteStoreOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var barChartYoteNewsOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var barChartYotePhotoOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var barChartYoteDragonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var barChartYoteQueenOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var barChartYoteGamesOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
    var lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    var lineChartJogosOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      var lineChartEventosOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
    var pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
  

    new Chart(barChartYoteStoreCtx, {
        type: "bar",
        data: barChartYoteStoreData,
        options: barChartYoteStoreOptions
      });

      new Chart(barChartYoteNewsCtx, {
        type: "bar",
        data: barChartYoteNewsData,
        options: barChartYoteNewsOptions
      });

      new Chart(barChartYotePhotoCtx, {
        type: "bar",
        data: barChartYotePhotoData,
        options: barChartYotePhotoOptions
      });

      new Chart(barChartYoteDragonCtx, {
        type: "bar",
        data: barChartYoteDragonData,
        options: barChartYoteDragonOptions
      });

      new Chart(barChartYoteQueenCtx, {
        type: "bar",
        data: barChartYoteQueenData,
        options: barChartYoteQueenOptions
      });

      new Chart(barChartYoteGamesCtx, {
        type: "bar",
        data: barChartYoteGamesData,
        options: barChartYoteGamesOptions
      });
  
    new Chart(lineChartCtx, {
      type: "line",
      data: lineChartData,
      options: lineChartOptions
    });

    new Chart(lineChartJogosCtx, {
        type: "line",
        data: lineChartJogosData,
        options: lineChartJogosOptions
      });

      new Chart(lineChartEventosCtx, {
        type: "line",
        data: lineChartEventosData,
        options: lineChartEventosOptions
      });
  
    new Chart(pieChartCtx, {
      type: "pie",
      data: pieChartData,
      options: pieChartOptions
    });
  });
  