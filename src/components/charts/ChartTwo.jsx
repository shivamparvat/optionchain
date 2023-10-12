import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const OPENINTERESTCHANGE = "Open Interest";

function ChartTwo({ data, strikes }) {
  const chartRef = useRef(null);
  const ATMIndex = data.strike?.findIndex((strike) => {
    return +strike === +data.atm;
  });

  return (
    <div className="FirstChart">
      <Bar
        ref={chartRef}
        data={{
          labels: data.strike
            ? data.strike.slice(ATMIndex - +strikes, +ATMIndex + (+strikes + 1))
            : [],
          datasets: [
            {
              label: "call",
              data: data.OpenInterestCall
                ? data.OpenInterestCall.slice(
                    ATMIndex - +strikes,
                    +ATMIndex + (+strikes + 1)
                  )
                : [],
              backgroundColor: "#00d09c",
            },
            {
              label: "put",
              data: data.OpenInterestPut
                ? data.OpenInterestPut.slice(
                    ATMIndex - +strikes,
                    +ATMIndex + (+strikes + 1)
                  )
                : [],
              backgroundColor: "#ee5a36",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: OPENINTERESTCHANGE,
            },
            annotation: {
              annotations: [
                {
                  type: "line",
                  mode: "vertical",
                  scaleID: "x",
                  value: data.atm,
                  borderColor: "red",
                  yMax: 2,
                  borderWidth: 1,
                  borderDash: [2],
                  label: {
                    content: "ATM",
                    enabled: true,
                    position: "top",
                  },
                },
              ],
            },
          },
          scales: {
            x: {
              beginAtZero: true, // Customize your x-axis scale options as needed
            },
            y: {
              beginAtZero: true, // Customize your y-axis scale options as needed
            },
          },
        }}
      />
    </div>
  );
}

export default ChartTwo;
