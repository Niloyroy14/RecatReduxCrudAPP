import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Bar } from 'react-chartjs-2';



Chart.register(CategoryScale);

export default function BarChart({ data }) {

  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Crypto Currency Price Rate"
          },
          legend: {
            display: false
          }
        }
      }}
      height={300}
    />
  </div>
  )
}
