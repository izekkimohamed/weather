import React from "react";
import { FiNavigation } from "react-icons/fi";
import { Footer, Heighlights } from "../styles/AppStyles";
import { getDirection } from "../utils/getDirection";

function Details({ today }) {
  const { humidity, visibility, wind_deg, wind_speed, pressure } = today;
  return (
    <>
      <Heighlights wind_deg={wind_deg} percent={humidity}>
        <div className="heighlights-wrapper">
          <p>Wind status</p>
          <h2>
            {wind_speed}
            <span>mps</span>{" "}
          </h2>
          <div className="wind">
            <div className="wind-icon" style={{ "--deg": `${wind_deg}deg` }}>
              <FiNavigation />
            </div>{" "}
            <span>{getDirection(wind_deg)}</span>
          </div>
        </div>
        <div className="heighlights-wrapper ">
          <p>Humidity</p>
          <h2>
            {humidity}
            <span>%</span>{" "}
          </h2>
          <div className="humidity">
            <div className="progress-nums">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div
              className="progress-bar"
              style={{ "--percent": `${humidity}%` }}></div>
          </div>
        </div>
        <div className="heighlights-wrapper">
          <p>Visibility</p>
          <h2>
            {(visibility / 1000).toFixed()}
            <span>KMs</span>{" "}
          </h2>
        </div>
        <div className="heighlights-wrapper">
          <p>Air Pressure</p>
          <h2>
            {pressure}
            <span>hPa</span>{" "}
          </h2>
        </div>
      </Heighlights>
      <Footer>created by mohamed IZEKKI - devChallenges.io</Footer>
    </>
  );
}

export default Details;
