import React from "react";
import "./FutureDataContainer.css";
import OneDayData from "./OneDayData/OneDayData";

const FutureDataContainer = ({ data }) => {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div></div>
      ) : (
        <div className="FutureDataContainer">
          <OneDayData data={data.daily[1]} />
          <OneDayData data={data.daily[2]} />
          <OneDayData data={data.daily[3]} />
          <OneDayData data={data.daily[4]} />
          <OneDayData data={data.daily[5]} />
          <OneDayData data={data.daily[6]} />
          <OneDayData data={data.daily[7]} />
        </div>
      )}
    </>
  );
};

export default FutureDataContainer;
