export const chartLineOptions = {
  series: [
    {
      name: "Người dùng",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 30, 50, 10, 5],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
  },
};

export const chartCircleOptions = {
  series: [90, 40],
  options: {

    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '10px',
          },
          value: {
            show: false,
          },
          total: {
            show: true,
            label: '90%',
            fontSize: '14px',
            // formatter: function (w) {
            //   return 249
            // }
          }
        }
      }
    },
    colors: ['#FF7506', '#7E7D88',],
    labels: ['Đang hoạt động', 'Ngưng hoạt động',],
  },
};
