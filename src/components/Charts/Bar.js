import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateSolarPanelSalesData = () => {
  const statuses = ["Completed", "In Progress", "Pending", "Cancelled"];
  const data = statuses.map(() => Math.floor(Math.random() * 100));

  return {
    labels: statuses,
    datasets: [
      {
        // label: "Solar Panel Sales",
        data,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const BC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },

      //   title: {
      //     display: true,
      //     text: "Solar Panel Sales Status",
      //   },
    },
  };

  //   const options = {
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: "top",
  //       },
  //       datalabels: {
  //         formatter: (value, ctx) => {
  //           return value;
  //         },
  //         color: "#fff",
  //         display: "auto", // Display the value by default
  //       },
  //     },
  //   };

  const data = generateSolarPanelSalesData();

  return <Doughnut options={options} data={data} />;
};

export default BC;
