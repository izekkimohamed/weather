import { useState } from "react";

//components
import Details from "./components/Details";
import Left from "./components/Left";
import Right from "./components/Right";
import SearchForm from "./components/searchForm";

//utils

import { cityUrl, weatherUrl } from "./utils/urls";
import useFetch from "./utils/fetchData";

import { Container, Loading, MoreDetails } from "./styles/AppStyles";
import "./app.css";

function App() {
  const [unite, setUnite] = useState("metric");
  const { data: weatherData, isLoading } = useFetch(weatherUrl);
  const { data: city, isLoading: isLoadingCity } = useFetch(cityUrl);

  if (isLoading || isLoadingCity)
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  return (
    <>
      {/* <GlobalStyles /> */}
      <Container>
        <SearchForm />
        {weatherData && city && (
          <>
            <Left
              today={weatherData.current}
              city={city.features[0].properties.city}
              unite={unite}
            />
            <MoreDetails>
              <Right
                comingDays={weatherData.daily}
                unite={unite}
                setUnite={setUnite}
              />
              <h1> Today s Heighlights </h1>
              <Details today={weatherData.current} />
            </MoreDetails>
          </>
        )}
      </Container>
    </>
  );
}
export default App;
