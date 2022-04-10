import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [noPosition, setNoPosition] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const onChange = (position) => {
    setPosition({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  };

  const onError = () => {
    setNoPosition(true);
    setSidebar(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  return [position, noPosition, setNoPosition, sidebar, setSidebar];
};

export default usePosition;
