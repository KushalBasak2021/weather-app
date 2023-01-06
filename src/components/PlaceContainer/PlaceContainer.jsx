import React from "react";
import "./PlaceContainer.css";

const PlaceContainer = ({ data, inputData }) => {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div></div>
      ) : (
        <div className="place-container">
          {inputData && (
            <p>
              {data.timezone.split("/")[0]}/
              {inputData.charAt(0).toUpperCase() + inputData.slice(1)}
            </p>
          )}
          <h6>
            {data.lat.toFixed(3)}N - {data.lon.toFixed(3)}E
          </h6>
        </div>
      )}
    </>
  );
};

export default PlaceContainer;
