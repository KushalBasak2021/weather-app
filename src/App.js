import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentDataContainer from "./components/CurrentDataContainer/CurrentDataContainer";
import DateContainer from "./components/DateContainer/DateContainer";
import FutureDataContainer from "./components/FutureDataContainer/FutureDataContainer";
import InputForm from "./components/InputForm/InputForm";
import PlaceContainer from "./components/PlaceContainer/PlaceContainer";

import { CirclesWithBar } from "react-loader-spinner";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    let APIKEY = "a116d42e9e962e11beec08106f967110";

    if (inputData !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${APIKEY}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let lat = data.coord.lat;
          let lon = data.coord.lon;
          return getDatafor7days(lat, lon);
        });
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getDatafor7days(lat, lon);
      });
    }

    const getDatafor7days = async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
      try {
        let res = await fetch(url);
        let data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, [inputData]);

  return (
    <div className="App">
      {Object.keys(weatherData).length === 0 ? (
        <CirclesWithBar
          height="500"
          width="100"
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      ) : (
        <>
          <div className="upper-container">
            <DateContainer data={weatherData} />
            <InputForm
              setInputData={setInputData}
              searchData={searchData}
              setSearchData={setSearchData}
            />
            <PlaceContainer data={weatherData} inputData={inputData} />
          </div>
          <div className="middle-container">
            <CurrentDataContainer data={weatherData} />
          </div>
          <div className="lower-container">
            <FutureDataContainer data={weatherData} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
