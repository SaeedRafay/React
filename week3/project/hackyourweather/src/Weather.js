import React, { useState, useEffect } from "react";
// import cities from "./city-weather.json";
import CityWeather from "./CityWeather";
import SearchWeather from "./SearchWeather";
import "./Weather.css";

function Weather() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBtn, setSearchBtn] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setLoading(false);
    setError(false);
    setErrMsg("");
    if (searchBtn !== "") {
      setLoading(true);
      async function weatherData() {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
          );
          const data = await res.json();
          const status = res.status;
          if (status === 200) {
            setCities((cities) => {
              if (cities.some((o) => o.name === data.name)) {
                setError(true);
                setErrMsg("City Already Exists");
                return [...cities];
              } else {
                return [data, ...cities];
              }
            });
            setSearchTerm("");
          }
          if (status === 404) {
            setError(true);
            setErrMsg(`City "${searchBtn}" Not Found`);
          }
        } catch (err) {
          setError(true);
          setErrMsg(err.message);
        }

        setLoading(false);
      }

      weatherData();
    }
  }, [searchBtn]);

  return (
    <div className="Weather">
      <SearchWeather
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchBtn={setSearchBtn}
      />

      {isLoading && <p>Loading...</p>}

      {hasError && <p>Error: {errMsg}</p>}

      {cities.length === 0 && <p>Begin weather search by name of a city or place</p>}

      {cities.length > 0 &&
        cities.map((city, index) => <CityWeather key={index} city={city} cities={cities} setCities={setCities} />)}
    </div>
  );
}

export default Weather;
