import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../../styles/dashboard.css"
const PieChart = ({successful,total}) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const xValues = [`Successful Missions ${(successful*100/total).toFixed(0)} %`,`Unsuccessful Missions ${(100-(successful*100/total).toFixed(0))}%`];
    const barColors = ["#A8DF8E","#D04848"];
    const yValues = [successful,total-successful];
    const ctx = chartRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues,
        }],
      }
    });
  }, []);

  return (
    <div className="pie-chart">
      <h2>A space mission monitoring
      </h2>
      <canvas ref={chartRef} style={{ maxWidth: '300px', maxHeight: '300px' }}></canvas>
    </div>
  );
};

export default PieChart;
