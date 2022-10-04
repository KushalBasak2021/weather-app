import React from "react";
import "./DateContainer.css";

const DateContainer = ({ data }) => {
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
    let dt = data.daily[0].dt;
    let date = new Date(dt * 1000);
    let day = dayArr[date.getDay()];
    return day;
  }

  function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let AMPM = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour % 12 : hour;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    return `${hour}:${minute}  ${AMPM}`;
  }

  function getDateMonth() {
    let monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    date = date < 10 ? `0${date}` : date;
    return `${date} ${monthArr[month]}`;
  }
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div></div>
      ) : (
        <div className="date-container">
          <p>{getTime()}</p>
          <h6>
            {getDay()},{getDateMonth()}
          </h6>
        </div>
      )}
    </>
  );
};

export default DateContainer;
