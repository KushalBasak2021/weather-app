import React from "react";
import "./InputForm.css";

const InputForm = ({ searchData, setSearchData, setInputData }) => {
  function handleSearch() {
    setInputData(searchData);
    setSearchData("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setInputData(searchData);
      setSearchData("");
    }
  }
  return (
    <div className="input-form">
      <input
        type="text"
        placeholder="Search a place"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default InputForm;
