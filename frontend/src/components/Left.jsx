import { useContext } from "react";

import { AiOutlineCompass } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { formatDate } from "../utils/formatDate";
import { getUnite } from "../utils/getUnite";
import { Main } from "../styles/AppStyles";
import { context } from "../context";
//TODO: add a button to change the unit
function Left({ today, city, unite }) {
  const { setSidebar, position, clientCoords, setCoords } = useContext(context);

  const getPosition = () => setCoords(clientCoords);

  return (
    <Main>
      <div className="header">
        <div className="search">
          <button
            className="open-btn"
            id="open"
            onClick={() => setSidebar(true)}>
            Search for places
          </button>
          {position && (
            <button className="search-btn" onClick={getPosition}>
              <AiOutlineCompass />
            </button>
          )}
        </div>
        <div className="img">
          <img
            src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`}
            alt="img"
          />
        </div>
      </div>
      <div className="temp">
        <h3 className="temp__main">
          {getUnite(unite, Math.floor(today.temp))}
        </h3>
        <div className="temp__details">
          <h4>{today.weather[0].main}</h4>
        </div>
        <div className="temp__city">
          <p>{formatDate(today.dt)}</p>
          <div>
            <IoLocationSharp />
            <p>{city}</p>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Left;
