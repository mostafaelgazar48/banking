"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ( {accounts=[]}:DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        labels: ["Bank 1", "Bank 2", "Bank 3"],
        data: [300, 500, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default DoughnutChart;
