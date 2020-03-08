import React from "react";
import "./styles.css";

import DoughnutCard from "./components/DoughnutCard";

function App() {
  const datasetA = [
    {
      label: "Tablet",
      value: 120000,
      color: "#4C9909"
    },
    {
      label: "Smartphone",
      value: 80000,
      color: "#336604"
    }
  ];
  const datasetB = [
    {
      label: "Tablet",
      value: 20000000,
      color: "#60C3DC"
    },
    {
      label: "Smartphone",
      value: 30000000,
      color: "#335464"
    }
  
  ];
  const datasetC = [
    {
      label: "Tablet",
      value: 480000000,
      color: "#EDBD43"
    },
    {
      label: "Smartphone",
      value: 120000000,
      color: "#BA4D27"
    }
   
  ];
  return (
    <div className="container">
      <DoughnutCard dataset={datasetA} name="Revenue" suffix=" €" />
      <DoughnutCard dataset={datasetB} name="Impresions" />
      <DoughnutCard dataset={datasetC} name="Visits" />
    </div>
  );
}

export default App;
