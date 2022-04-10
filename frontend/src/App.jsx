import { useEffect, useState } from "react";

//components
import Details from "./components/Details";
import Left from "./components/Left";
import Right from "./components/Right";
import SearchForm from "./components/searchForm";
//utils
import { getData } from "./utils/fetchData";
import { cityUrl, weatherUrl, ipUrl } from "./utils/urls";
import usePosition from "./utils/usePosition";

function App() {
  const [position, noPosition, setNoPosition, sidebar, setSidebar] =
    usePosition();
  const [coords, setCoords] = useState();
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [unite, setUnite] = useState("metric");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coordsOptions = coords ? coords : position;
    getData(weatherUrl, coordsOptions).then((data) => {
      setData(data);
      getData(cityUrl, coordsOptions).then((data) => {
        setCity(data.features[0].properties.city);
      });
    });
    setSidebar(false);
    setNoPosition(false);
    setLoading(false);
  }, [coords, position]);

  if (loading) {
    return (
      <div className="loading">
        {" "}
        <h1>Loading...</h1>{" "}
      </div>
    );
  }

  return (
    <div className="container">
      <SearchForm
        sidebar={sidebar}
        setSidebar={setSidebar}
        setCoords={setCoords}
        noPosition={noPosition}
        setLoading={setLoading}
      />
      {data && (
        <>
          <Left
            today={data.current}
            city={city}
            noPosition={noPosition}
            unite={unite}
            setSidebar={setSidebar}
            setCoords={setCoords}
          />
          <section className="main-details">
            <Right comingDays={data.daily} unite={unite} setUnite={setUnite} />
            <h1> Today s Heighlights </h1>
            <Details today={data.current} />
          </section>
        </>
      )}
    </div>
  );
}
export default App;
