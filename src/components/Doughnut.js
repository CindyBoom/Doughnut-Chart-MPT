import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";

function Doughnut({ dataset = [], max }) {
  const canvasRef = useRef(null);

  useEffect(function() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    new Chart(context, {
      type: "doughnut",
      data: {
        labels: dataset.map(x => x.label),
        datasets: [
          {
            data: dataset.map(x => x.value),
            backgroundColor: dataset.map(x => x.color)
          }
        ]
      },
      options: {
        cutoutPercentage: 90,
        legend: {
          display: false
        },
        responsive: false
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Doughnut;
