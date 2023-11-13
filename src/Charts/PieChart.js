import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function PieChart({data}) {
  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
    <Pie
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Crypto Currency Price Rate"
          }
        }
      }}
    />
  </div>
  )
}
