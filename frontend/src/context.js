import { createContext, useEffect, useState } from "react";

export const context = createContext();

export default function GlobaleContext({ children }) {
  const [clientCoords, setClientCoords] = useState({});
  const [position, setPosition] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [coords, setCoords] = useState({});

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
    setPosition(false);
    setSidebar(true);
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
