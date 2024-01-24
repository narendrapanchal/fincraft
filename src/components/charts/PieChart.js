import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "../../styles/dashboard.css";
const PieChart = ({ missionData, total }) => {
  const missionRef = useRef(null);
  const companyRef = useRef(null);
  const [companyNames, setCompanyNames] = useState([]);
  const [companyColors, setCompanyColors] = useState([]);
  const [successNames, setSuccessNames] = useState([]);
  const [successColors, setSuccessColors] = useState([]);

  const successful = missionData.filter(
    (ele) => ele.successful === true
  ).length;
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const companyData = missionData.reduce((acc, ele) => {
    if (acc[ele.company] != null) {
      acc[ele.company] += 1;
    } else {
      acc[ele.company] = 1;
    }
    return acc;
  }, {});
  useEffect(() => {
    {
      const xValues = [
        `Successful Missions ${((successful * 100) / total).toFixed(0)} %`,
        `Unsuccessful Missions ${
          100 - ((successful * 100) / total).toFixed(0)
        }%`,
      ];
      const barColors = ["#A8DF8E", "#D04848"];
      const yValues = [successful, total - successful];
      const ctx = missionRef.current.getContext("2d");
      missionRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: [],
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
        },
      });
      setSuccessNames(xValues);
      setSuccessColors(barColors);
    }
  }, []);
  useEffect(() => {
    {
      const xValues = Object.keys(companyData).map(
        (ele) => `${ele} ${((companyData[ele] * 100) / total).toFixed(2)}%`
      );
      setCompanyNames(xValues);
      let barColors = [];
      barColors = xValues.map((ele) => {
        let color;
        do {
          color = getRandomColor();
        } while (barColors.includes(color));
        return color;
      });
      setCompanyColors(barColors);
      const yValues = Object.values(companyData);
      const ctx = companyRef.current.getContext("2d");
      companyRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: [],
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
          options: {
            cutoutPercentage: 80,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                display: false,
              },
            },
            tooltips: {
              enabled: false,
            },
          },
        },
      });
    }
  }, []);
  const chartLabel = (colors, labels) => {
    return (
      <div>
        {colors.map((color, index) => (
          <div className="label">
            <div style={{ background: color }} className="back-box"></div>{" "}
            <div>{labels[index]}</div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="pie-chart">
        <div>
          <h2>Data based on success</h2>
          <div>
            {chartLabel(successColors, successNames)}
            <canvas
              ref={missionRef}
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            ></canvas>
          </div>
        </div>
        <div>
          <h2>Data based on Company</h2>

          <div>
            {chartLabel(companyColors, companyNames)}
            <canvas
              ref={companyRef}
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
