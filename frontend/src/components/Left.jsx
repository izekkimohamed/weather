import { AiOutlineCompass } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import usePosition from "../utils/usePosition";

import { formatDate } from "../utils/formatDate";
import { getUnite } from "../utils/getUnite";

function Left({ today, city, unite, noPosition, setSidebar, setCoords }) {
  const [position] = usePosition();

  const getPosition = () => setCoords(position);

  return (
    <div className="main">
      <div className="header">
        <div className="search">
          <button
            className="open-btn"
            id="open"
            onClick={() => setSidebar(true)}>
            Search for places
          </button>
          {noPosition === false && (
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
    </div>
  );
}

export default Left;
