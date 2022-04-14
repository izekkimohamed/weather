import { createContext, useEffect, useState } from "react";

export const context = createContext();

export default function GlobaleContext({ children }) {
  const [clientCoords, setClientCoords] = useState({});
  const [position, setPosition] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [coords, setCoords] = useState({});

  const fetchData = async () => {
    const request = await fetch(
      `https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`,
    );
    const json = await request.json();
    setCoords({
      lat: json.loc.split(",")[0],
      lon: json.loc.split(",")[1],
    });
    setSidebar(false);
  };

  const onChange = (position) => {
    setPosition(true);
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    setClientCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    setSidebar(false);
  };

  const onError = () => {
    fetchData();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  const values = {
    position,
    setPosition,
    sidebar,
    setSidebar,
    coords,
    setCoords,
    clientCoords,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
}
