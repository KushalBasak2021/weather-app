import React from "react";
import "./CurrentDataContainer.css";

const CurrentDataContainer = ({ data }) => {
  function getDay() {
    let dayArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date();
    let day = dayArr[date.getDay()];
    return day;
  }
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div></div>
      ) : (
        <div className="CurrentDataContainer">
          <div className="upper">
            <div className="left">
              <div className="date-temp">
                <h6>{getDay()}</h6>
                <h6>{(data.current.temp - 273.15).toFixed(2)}°C</h6>
              </div>
              <p>
                Day:
                <span>{(data.daily[0].temp.day - 273.15).toFixed(2)}°C</span>
              </p>
              <p>
                Night:
                <span>{(data.daily[0].temp.night - 273.15).toFixed(2)}°C</span>
              </p>
            </div>
            <div className="right">
              <img
                src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`}
                alt=""
              />
            </div>
          </div>
          <div className="lower">
            <div className="humidity">
              <h6>Humidity</h6>
              <p>{data.current.humidity}%</p>
            </div>
            <div className="sunrise">
              <h6>Wind Speed</h6>
              <p>{data.current.wind_speed} km/h</p>
            </div>
            <div className="sunset">
              <h6>Description</h6>
              <p>{data.current.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentDataContainer;
