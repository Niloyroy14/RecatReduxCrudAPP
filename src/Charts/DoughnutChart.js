import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';


export default function DoughnutChart({ data }) {
  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Doughnut Chart</h2>
    <Doughnut
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
    />
  </div>
  )
}
