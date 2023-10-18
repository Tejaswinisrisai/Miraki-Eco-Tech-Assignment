import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateCustomerAcquisitionData = () => {
  const channels = [
    "Online",
    "Offline",
    "Referral",
    "Social Media",
    "Email Marketing",
  ];
  const data = channels.map(() => Math.floor(Math.random() * 200) + 50);

  return {
    labels: channels,
    datasets: [
      {
        // label: "Customer Acquisition by Channel",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const LC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      //   title: {
      //     display: true,
      //     text: "Customer Acquisition by Channel",
      //   },
    },
  };

  const data = generateCustomerAcquisitionData();

  return <Pie options={options} data={data} />;
};

export default LC;
