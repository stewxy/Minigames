import React from "react";
import "../App.css";

const Grid = () => {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="container text-center">
      <div className="row row-cols-3 ">
        <div className="col" onClick={handleClick}>
          Column
        </div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
      <div className="row row-cols-3 ">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
      <div className="row row-cols-3 ">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
};

export default Grid;
