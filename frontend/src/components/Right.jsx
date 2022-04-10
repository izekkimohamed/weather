import React from "react";
import { formatDate } from "../utils/formatDate";
import { getUnite } from "../utils/getUnite";

function Right({ comingDays, unite, setUnite }) {
  return (
    <>
      <div className="degrees">
        <button onClick={() => setUnite("metric")}>&#8451;</button>
        <button onClick={() => setUnite("imperial")}>&#8457;</button>
      </div>
      <div className="week-days">
        {comingDays &&
          comingDays.slice(1, 7).map((day, i) => (
            <div className="day" key={i}>
              <div className="date">
                <p>{formatDate(day.dt)}</p>
              </div>
              <div className="img-wrapper">
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                  alt=""
                />
              </div>
              <div className="day-temp">
                <p>{getUnite(unite, Math.floor(day.temp.min))}</p>
                <p>{getUnite(unite, Math.floor(day.temp.max))}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Right;
