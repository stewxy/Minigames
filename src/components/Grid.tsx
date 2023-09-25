import React from "react";
import "../App.css";
import { useState } from "react";

let arr = ["", "", "", "", "", "", "", "", ""];

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

  const [winPopup, setWinPopup] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);

  let start = "X";
  if (xNext) {
    start = "X";
  } else {
    start = "O";
  }

  function resetBoard() {
    setValue1(""),
      setValue2(""),
      setValue3(""),
      setValue4(""),
      setValue5(""),
      setValue6(""),
      setValue7(""),
      setValue8(""),
      setValue9("");
    arr = ["", "", "", "", "", "", "", "", ""];
    setAlertVisibility(false);
  }

  function winCondition(checkList: string[]) {
    for (let i = 0; i < winLines.length; i++) {
      if (
        arr[winLines[i][0]] == "X" &&
        arr[winLines[i][1]] == "X" &&
        arr[winLines[i][2]] == "X"
      ) {
        setWinPopup("X is the");
        setAlertVisibility(true);
        setXNext(true);
      }
      if (
        arr[winLines[i][0]] == "O" &&
        arr[winLines[i][1]] == "O" &&
        arr[winLines[i][2]] == "O"
      ) {
        setWinPopup("O is the");
        setAlertVisibility(true);
        setXNext(false);
      }
      if (
        arr[0] != "" &&
        arr[1] != "" &&
        arr[2] != "" &&
        arr[3] != "" &&
        arr[4] != "" &&
        arr[5] != "" &&
        arr[6] != "" &&
        arr[7] != "" &&
        arr[8] != ""
      ) {
        setWinPopup("NO");
        setAlertVisibility(true);
      }
    }
  }

  function handleClick1() {
    if (xNext && value1 == "" && alertVisible == false) {
      setValue1("X");
      setXNext(!xNext);
      arr[0] = "X";
    } else {
      if (value1 == "" && alertVisible == false) {
        setValue1("O");
        setXNext(!xNext);
        arr[0] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick2() {
    if (xNext && value2 == "" && alertVisible == false) {
      setValue2("X");
      setXNext(!xNext);
      arr[1] = "X";
    } else {
      if (value2 == "" && alertVisible == false) {
        setValue2("O");
        setXNext(!xNext);
        arr[1] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick3() {
    if (xNext && value3 == "" && alertVisible == false) {
      setValue3("X");
      setXNext(!xNext);
      arr[2] = "X";
    } else {
      if (value3 == "" && alertVisible == false) {
        setValue3("O");
        setXNext(!xNext);
        arr[2] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick4() {
    if (xNext && value4 == "" && alertVisible == false) {
      setValue4("X");
      setXNext(!xNext);
      arr[3] = "X";
    } else {
      if (value4 == "" && alertVisible == false) {
        setValue4("O");
        setXNext(!xNext);
        arr[3] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick5() {
    if (xNext && value5 == "" && alertVisible == false) {
      setValue5("X");
      setXNext(!xNext);
      arr[4] = "X";
    } else {
      if (value5 == "" && alertVisible == false) {
        setValue5("O");
        setXNext(!xNext);
        arr[4] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick6() {
    if (xNext && value6 == "" && alertVisible == false) {
      setValue6("X");
      setXNext(!xNext);
      arr[5] = "X";
    } else {
      if (value6 == "" && alertVisible == false) {
        setValue6("O");
        setXNext(!xNext);
        arr[5] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick7() {
    if (xNext && value7 == "" && alertVisible == false) {
      setValue7("X");
      setXNext(!xNext);
      arr[6] = "X";
    } else {
      if (value7 == "" && alertVisible == false) {
        setValue7("O");
        setXNext(!xNext);
        arr[6] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick8() {
    if (xNext && value8 == "" && alertVisible == false) {
      setValue8("X");
      setXNext(!xNext);
      arr[7] = "X";
    } else {
      if (value8 == "" && alertVisible == false) {
        setValue8("O");
        setXNext(!xNext);
        arr[7] = "O";
      }
    }
    winCondition(arr);
  }
  function handleClick9() {
    if (xNext && value9 == "" && alertVisible == false) {
      setValue9("X");
      setXNext(!xNext);
      arr[8] = "X";
    } else {
      if (value9 == "" && alertVisible == false) {
        setValue9("O");
        setXNext(!xNext);
        arr[8] = "O";
      }
    }
    winCondition(arr);
  }

  return (
    <div className="tictactoecont">
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
      <br></br>
      <div className="resetButtonCont">
        {!alertVisible && <p>{start}'s Turn</p>}
        {alertVisible && (
          <button onClick={resetBoard}>
            {winPopup + " Winner! (Reset Board)"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Grid;
