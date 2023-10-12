import React from "react";
import { Range } from "react-range";
import { calculateTime } from "../../utils/calculateTime";

import "./options.css";
function Options({ setData, optionData }) {
  return (
    <div className="options">
      <div className="live container">
        <div>
          <span className="live text">Live</span>
        </div>
        <input checked={optionData.live} type="checkbox" />
        <div
          onClick={() => {
            setData((pre) => ({ ...pre, live: !pre.live }));
          }}
          className="checkmark"
        ></div>
      </div>
      <div className="date">
        <input
          type="date"
          value={optionData.value}
          onChange={(e) => setData((pre) => ({ ...pre, date: e.target.value }))}
          name="date"
          id="date"
        />
        <span className="date text">Date</span>
      </div>
      <div className="timeRange">
        <Range
          step={1}
          min={1}
          max={75}
          values={[optionData.time]}
          onChange={(values) => setData((pre) => ({ ...pre, time: values }))}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "400px",
                backgroundColor: "#ccc",
              }}
              className="range"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#0c2e42",
                borderRadius: "20px",
              }}
            />
          )}
        />
        <div>{calculateTime(+optionData.time * 5)}</div>
      </div>
      <div>
        <input
          type="number"
          placeholder="strike"
          value={optionData.strikes}
          onChange={(e) =>
            setData((pre) => ({ ...pre, strikes: +e.target.value }))
          }
          className="stikeInput"
        />
      </div>
    </div>
  );
}

export default Options;
