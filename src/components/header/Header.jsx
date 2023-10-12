import React from "react";
import "./header.css";
import { convertTo12HourFormat } from "../../utils/util";

function Header({ atm, time, optionData, logOut }) {
  const lastUpdate = new Date(time);
  return (
    <header className="header">
      <div></div>
      <ul>
        <li className="Strick">Strike {atm}</li>
        <li>
          {time && (
            <>
              {optionData.live && "Last Update "}
              {convertTo12HourFormat(
                `${lastUpdate.getHours()}:${
                  lastUpdate.getMinutes() < 10
                    ? `0${lastUpdate.getMinutes()}`
                    : lastUpdate.getMinutes()
                }`
              )}
            </>
          )}
        </li>
        <li>
          <div
            className={
              optionData.live
                ? "statusContainer live"
                : "statusContainer offline"
            }
          >
            <div
              className={optionData.live ? "status live" : "status offline"}
            ></div>
            <span className="live text">Live</span>
          </div>
        </li>
        <li
          onClick={() => {
            logOut(false)
            localStorage.removeItem("SHA1");
          }}
          style={{ cursor: "pointer" }}
        >
          Logout
        </li>
      </ul>
    </header>
  );
}

export default Header;
