import React from "react";
import "./OneDayData.css";

const OneDayData = ({ data }) => {
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
    let day = new Date(data.dt * 1000).getDay();
    return dayArr[day];
  }
  return (
    <div className="OneDayData">
      <h6>{getDay()}</h6>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>
        <span>
          {(data.temp.max - 273.15).toFixed(0)}/
          {(data.temp.min - 273.15).toFixed(0)}°C
        </span>
      </p>
      <p>
        <span>{data.weather[0].description}</span>
      </p>
    </div>
  );
};

export default OneDayData;
