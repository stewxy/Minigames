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

  let arr = ["", "", "", "", "", "", "", "", ""];
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function winCondition(checkList: string[]) {
    for (let i = 0; i < winLines.length; i++) {
      if ((arr[i][0] && arr[i][1] && arr[i][2]) == "X") {
        console.log("X is the Winner");
      }
      console.log(arr[i][0], arr[i][1], arr[i][2]);
    }
  }

  function handleClick1() {
    //setValue1("X");
    if (xNext && value1 == "") {
      setValue1("X");
      setXNext(!xNext);
      arr[0] = "X";
    } else {
      if (value1 == "") {
        setValue1("O");
        setXNext(!xNext);
        arr[0] = "O";
      }
    }
  }
  function handleClick2() {
    if (xNext && value2 == "") {
      setValue2("X");
      setXNext(!xNext);
      arr[1] = "X";
    } else {
      if (value2 == "") {
        setValue2("O");
        setXNext(!xNext);
        arr[1] = "O";
      }
    }
  }
  function handleClick3() {
    if (xNext && value3 == "") {
      setValue3("X");
      setXNext(!xNext);
      arr[2] = "X";
    } else {
      if (value3 == "") {
        setValue3("O");
        setXNext(!xNext);
        arr[2] = "O";
      }
    }
  }
  function handleClick4() {
    if (xNext && value4 == "") {
      setValue4("X");
      setXNext(!xNext);
      arr[3] = "X";
    } else {
      if (value4 == "") {
        setValue4("O");
        setXNext(!xNext);
        arr[3] = "O";
      }
    }
  }
  function handleClick5() {
    if (xNext && value5 == "") {
      setValue5("X");
      setXNext(!xNext);
      arr[4] = "X";
    } else {
      if (value5 == "") {
        setValue5("O");
        setXNext(!xNext);
        arr[4] = "O";
      }
    }
  }
  function handleClick6() {
    if (xNext && value6 == "") {
      setValue6("X");
      setXNext(!xNext);
      arr[5] = "X";
    } else {
      if (value6 == "") {
        setValue6("O");
        setXNext(!xNext);
        arr[5] = "O";
      }
    }
  }
  function handleClick7() {
    if (xNext && value7 == "") {
      setValue7("X");
      setXNext(!xNext);
      arr[6] = "X";
    } else {
      if (value7 == "") {
        setValue7("O");
        setXNext(!xNext);
        arr[6] = "X";
      }
    }
  }
  function handleClick8() {
    if (xNext && value8 == "") {
      setValue8("X");
      setXNext(!xNext);
      arr[7] = "X";
    } else {
      if (value8 == "") {
        setValue8("O");
        setXNext(!xNext);
        arr[7] = "X";
      }
    }
  }
  function handleClick9() {
    if (xNext && value9 == "") {
      setValue9("X");
      setXNext(!xNext);
      arr[8] = "X";
    } else {
      if (value9 == "") {
        setValue9("O");
        setXNext(!xNext);
        arr[8] = "X";
      }
    }
  }

  return (
    <div className="container text-center">
      <div className="row row-cols-3 ">
        <div
          className="col"
          onClick={handleClick1}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value1}
        </div>
        <div
          className="col"
          onClick={handleClick2}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value2}
        </div>
        <div
          className="col"
          onClick={handleClick3}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value3}
        </div>
      </div>
      <div className="row row-cols-3 ">
        <div
          className="col"
          onClick={handleClick4}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value4}
        </div>
        <div
          className="col"
          onClick={handleClick5}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value5}
        </div>
        <div
          className="col"
          onClick={handleClick6}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value6}
        </div>
      </div>
      <div className="row row-cols-3 ">
        <div
          className="col"
          onClick={handleClick7}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value7}
        </div>
        <div
          className="col"
          onClick={handleClick8}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value8}
        </div>
        <div
          className="col"
          onClick={handleClick9}
          style={{ fontSize: 50, paddingTop: 5 }}
        >
          {value9}
        </div>
      </div>
    </div>
  );
};

export default Grid;
