import React from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import "./chart.css";

function Chartlayout({ data=[], strikes = 10 }) {
  // console.log(data)
  return (
    <div>
      <ChartOne data={data}  strikes={strikes}/>
      <ChartTwo data={data} strikes={strikes} />
    </div>
  );
}

export default Chartlayout;
