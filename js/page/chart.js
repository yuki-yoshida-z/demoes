$(function(){
  var ctx = document.getElementById("lineChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["2017年10月", "2017年11月", "2017年12月", "2018年1月", "2018年2月", "2018年3月", "2018年4月", "2018年5月", "2018年6月", "2018年7月", "2018年8月", "2018年9月"],
      datasets: [{
        label: '過去一年のZTMの月間記事投稿数',
        data: [0, 7, 2, 16, 3, 6, 3, 4, 3, 8, 5, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 24
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
  var ctx = document.getElementById("barChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      datasets: [{
        label: '2018年上半期の平均睡眠時間の月間推移',
        data: [7.44, 7.11, 7.03, 7.06, 7.24, 6.54],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 24
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
  var ctx = document.getElementById("radarChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["インフラ", "サーバーサイド", "フロントエンド", "デザイン", "要件理解力", "要件定義力", "ディレクション", "マーケティング"],
      datasets: [{
        label: 'IT人材自己評価',
        data: [3, 6, 8, 5, 9, 9, 8, 6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 24
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
  var ctx = document.getElementById("doughnutChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["要件定義", "デザインFix", "コーディング完了", "テスト・検品"],
      datasets: [{
        data: [5, 10, 8, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        labels: {
          boxWidth: 40,
          fontSize: 24
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
});
