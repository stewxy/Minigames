import React from "react";
import "../App.css";
import { useState } from "react";

const Grid = () => {
  let test = 1;
  const [value, setValue] = useState("");

  function handleClick() {
    console.log("Clicked");
    //setValue("X");
    test += 1;
    if (test % 2 != 0) {
      setValue("X");
    } else {
      setValue("O");
    }
  }

  return (
    <div className="container text-center">
      <div className="row row-cols-3 ">
        <div className="col" onClick={handleClick}>
          {value}
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
