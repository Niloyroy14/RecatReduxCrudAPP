import React from 'react';
import { useState,useEffect } from "react";
import { Data } from '../Utilities/Data';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';



export default function Chart() {

    const [chartData, setChartData] = useState({});

    const baseUrl = `https://api.coinranking.com/v2`;
    const apiKey = 'coinranking6f030312738de1a713f839a9c0e62841b68b4cab69d1faf1';


    useEffect(() => {
        const fetchCoins = async () => {
          await fetch(`${baseUrl}/coins/?limit=10`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((json) => {
                  console.log(json.data);
                  setChartData(json.data)
                });
              }
            }).catch((error) => {
              console.log(error);
            });
        };
        fetchCoins()
      }, [baseUrl, apiKey]);


//samle data from util function
//   const data={
//         labels: Data.map((data) => data.year), 
//         datasets: [
//           {
//             label: "Users Gained ",
//             data: Data.map((data) => data.userGain),
//             backgroundColor: [
//               "rgba(75,192,192,1)",
//               "#50AF95",
//               "#f3ba2f",
//               "#2a71d0"
//             ],
//             borderColor: "black",
//             borderWidth: 2
//           }
//         ]
//       };

const data = {
    labels: chartData?.coins?.map(x => x.name),
    datasets: [{
      label: `${chartData?.coins?.length} Coins Available`,
      data: chartData?.coins?.map(x => x.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
        <BarChart data={data} />
        <PieChart data={data} />
        <LineChart data={data} />
        <DoughnutChart data={data}/>
    </div>
  )
}
