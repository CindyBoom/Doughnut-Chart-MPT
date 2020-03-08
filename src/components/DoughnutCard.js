import React from "react";

import Doughnut from "./Doughnut";
import Format from "react-number-format";

function DoughnutCard({ dataset = [], name, suffix = "" }) {
  const total = dataset.reduce((x, y) => x + y.value, 0);

  return (
    <div className="card-container">
      <div className="doughnut-container">
        <Doughnut dataset={dataset} />
        <div className="absolute">
          <h1>{name}</h1>
          <h2>
            <Format
              value={total}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              suffix={suffix}
            />
          </h2>
        </div>
      </div>
      <footer>
        {dataset.map((x, i) => (
          <div className="data">
            <p key={i} style={{ color: x.color }}>
              {x.label}
            </p>
            <p>
              <span className="percentage">{(x.value * 100) / total}%</span>
              <span className="current-value">
                <Format
                  value={x.value}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix={suffix}
                />
              </span>
            </p>
          </div>
        ))}
      </footer>
    </div>
  );
}

export default DoughnutCard;
