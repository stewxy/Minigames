import React from "react";
import "../App.css";
import { useState } from "react";

const Grid = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");

  const [xNext, setXNext] = useState(true);

  function handleClick1() {
    //setValue1("X");
    if (xNext) {
      setValue1("X");
    } else {
      setValue1("O");
    }
    setXNext(!xNext);
  }
  function handleClick2() {
    if (xNext) {
      setValue2("X");
    } else {
      setValue2("O");
    }
    setXNext(!xNext);
  }
  function handleClick3() {
    if (xNext) {
      setValue3("X");
    } else {
      setValue3("O");
    }
    setXNext(!xNext);
  }
  function handleClick4() {
    if (xNext) {
      setValue4("X");
    } else {
      setValue4("O");
    }
    setXNext(!xNext);
  }
  function handleClick5() {
    if (xNext) {
      setValue5("X");
    } else {
      setValue5("O");
    }
    setXNext(!xNext);
  }
  function handleClick6() {
    if (xNext) {
      setValue6("X");
    } else {
      setValue6("O");
    }
    setXNext(!xNext);
  }
  function handleClick7() {
    if (xNext) {
      setValue7("X");
    } else {
      setValue7("O");
    }
    setXNext(!xNext);
  }
  function handleClick8() {
    if (xNext) {
      setValue8("X");
    } else {
      setValue8("O");
    }
    setXNext(!xNext);
  }
  function handleClick9() {
    if (xNext) {
      setValue9("X");
    } else {
      setValue9("O");
    }
    setXNext(!xNext);
  }

  return (
    <div className="container text-center">
      <div className="row row-cols-3 ">
        <div className="col" onClick={handleClick1}>
          {value1}
        </div>
        <div className="col" onClick={handleClick2}>
          {value2}
        </div>
        <div className="col" onClick={handleClick3}>
          {value3}
        </div>
      </div>
      <div className="row row-cols-3 ">
        <div className="col" onClick={handleClick4}>
          {value4}
        </div>
        <div className="col" onClick={handleClick5}>
          {value5}
        </div>
        <div className="col" onClick={handleClick6}>
          {value6}
        </div>
      </div>
      <div className="row row-cols-3 ">
        <div className="col" onClick={handleClick7}>
          {value7}
        </div>
        <div className="col" onClick={handleClick8}>
          {value8}
        </div>
        <div className="col" onClick={handleClick9}>
          {value9}
        </div>
      </div>
    </div>
  );
};

export default Grid;
