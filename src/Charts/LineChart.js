import React from 'react';
import { Line } from "react-chartjs-2";

export default function LineChart({ data }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
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
