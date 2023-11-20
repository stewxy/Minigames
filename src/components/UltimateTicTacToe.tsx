import React, { useState } from "react";
import "../App.css";
import { render } from "react-dom";
import App from "../App";

function Square({ value, onSquareClick }: { value: any; onSquareClick: any }) {
  return (
    <button className="Grid" onClick={onSquareClick} disabled={false}>
      {value}
    </button>
  );
}

const UltimateTicTacToe = () => {
  let temp = 0;

  function resetBoard() {
    window.location.reload();
  }

  let xCounter = 0;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [uSquare, setUSquare] = useState(Array(9).fill(null));
  let uSquareArray = [null, null, null, null, null, null, null, null, null];
  const [alertVisible, setAlertVisibility] = useState(false);
  const [winPopup, setWinPopup] = useState("");
  let [
    getWinB0,
    getWinB1,
    getWinB2,
    getWinB3,
    getWinB4,
    getWinB5,
    getWinB6,
    getWinB7,
    getWinB8,
  ] = [
    document.getElementsByClassName(
      "styleWinB0"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB1"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB2"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB3"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB4"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB5"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB6"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB7"
    ) as HTMLCollectionOf<HTMLElement>,
    document.getElementsByClassName(
      "styleWinB8"
    ) as HTMLCollectionOf<HTMLElement>,
  ];

  function checkUltimateWinner() {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        uSquareArray[a] &&
        uSquareArray[a] === uSquareArray[b] &&
        uSquareArray[a] === uSquareArray[c]
      ) {
        setWinPopup(uSquareArray[a] + " is the");
        setAlertVisibility(true);
        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";
      } else {
        if (uSquareArray.every((element) => element !== null)) {
          setWinPopup("There is no");
          setAlertVisibility(true);
          style0[0].style.pointerEvents = "none";
          style1[0].style.pointerEvents = "none";
          style2[0].style.pointerEvents = "none";
          style3[0].style.pointerEvents = "none";
          style4[0].style.pointerEvents = "none";
          style5[0].style.pointerEvents = "none";
          style6[0].style.pointerEvents = "none";
          style7[0].style.pointerEvents = "none";
          style8[0].style.pointerEvents = "none";
        }
      }
    }
  }

  function calculateWinner(squares: any, uValue: any) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        uSquareArray[uValue] = squares[a];

        if (uValue == 0) {
          getWinB0[0].innerHTML = squares[a];
        }
        if (uValue == 1) {
          getWinB1[0].innerHTML = squares[a];
        }
        if (uValue == 2) {
          getWinB2[0].innerHTML = squares[a];
        }
        if (uValue == 3) {
          getWinB3[0].innerHTML = squares[a];
        }
        if (uValue == 4) {
          getWinB4[0].innerHTML = squares[a];
        }
        if (uValue == 5) {
          getWinB5[0].innerHTML = squares[a];
        }
        if (uValue == 6) {
          getWinB6[0].innerHTML = squares[a];
        }
        if (uValue == 7) {
          getWinB7[0].innerHTML = squares[a];
        }
        if (uValue == 8) {
          getWinB8[0].innerHTML = squares[a];
        }
        if (uValue == temp) {
          for (let j = 0; j < x.length; j++) {
            if (uSquareArray[j] == null) {
              x[j][0].style.backgroundColor = "red";
              x[j][0].style.pointerEvents = "auto";
              x[j][0].style.opacity = "1";
            }
          }
        }
        x[uValue][0].style.backgroundColor = "white";
        x[uValue][0].style.pointerEvents = "none";
        x[uValue][0].style.opacity = "0.8";
        return squares[a], uValue;
      }
    }
  }
  let [style0, style1, style2, style3, style4, style5, style6, style7, style8] =
    [
      document.getElementsByClassName("u0") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u1") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u2") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u3") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u4") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u5") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u6") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u7") as HTMLCollectionOf<HTMLElement>,
      document.getElementsByClassName("u8") as HTMLCollectionOf<HTMLElement>,
    ];
  let x = [
    style0,
    style1,
    style2,
    style3,
    style4,
    style5,
    style6,
    style7,
    style8,
  ];

  function SingleBoard({ value, uValue }: { value: any; uValue: any }) {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xNext, setXNext] = "X";

    function handleClick(i: number) {
      temp = i;
      if (squares[i] != null) {
        return;
      }
      const nextSquares = squares.slice();
      // if (xIsNext) {
      //   nextSquares[i] = "X";
      // } else {
      //   nextSquares[i] = "O";
      // }

      if (xCounter % 2 == 0) {
        nextSquares[i] = "X";
        (
          document.getElementsByClassName(
            "innerText"
          ) as HTMLCollectionOf<HTMLElement>
        )[0].innerHTML = "O's Turn";
      } else {
        nextSquares[i] = "O";
        (
          document.getElementsByClassName(
            "innerText"
          ) as HTMLCollectionOf<HTMLElement>
        )[0].innerHTML = "X's Turn";
      }
      xCounter++;
      setSquares(nextSquares);
      setXIsNext(!xIsNext);

      if (uSquareArray[i] == null) {
        modifyGridColor(i);
      } else {
        for (let i = 0; i < x.length; i++) {
          if (uSquareArray[i] == null) {
            x[i][0].style.backgroundColor = "red";
            x[i][0].style.pointerEvents = "auto";
            x[i][0].style.opacity = "1";
          }
        }
      }
    }

    function modifyGridColor(i: number) {
      x[i][0].style.backgroundColor = "red";
      x[i][0].style.pointerEvents = "auto";
      x[i][0].style.opacity = "1";
      for (let j = 0; j < x.length; j++) {
        if (j !== i) {
          x[j][0].style.backgroundColor = "white";
          x[j][0].style.pointerEvents = "none";
          x[j][0].style.opacity = "0.8";
        }
      }
    }

    calculateWinner(squares, uValue);
    checkUltimateWinner();
    return (
      <>
        <div className="oneBoard">
          <div className="squareRow">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="squareRow">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="squareRow">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fullBoard">
        <div className="ultimateRow">
          <div className="u0">
            <div className="styleWinB0"></div>
            <SingleBoard value={uSquare[0]} uValue={0} />
          </div>
          <div className="u1">
            <div className="styleWinB1"></div>
            <SingleBoard value={uSquare[1]} uValue={1} />
          </div>
          <div className="u2">
            <div className="styleWinB2"></div>
            <SingleBoard value={uSquare[2]} uValue={2} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u3">
            <div className="styleWinB3"></div>
            <SingleBoard value={uSquare[3]} uValue={3} />
          </div>
          <div className="u4">
            <div className="styleWinB4"></div>
            <SingleBoard value={uSquare[4]} uValue={4} />
          </div>
          <div className="u5">
            <div className="styleWinB5"></div>
            <SingleBoard value={uSquare[5]} uValue={5} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u6">
            <div className="styleWinB6"></div>
            <SingleBoard value={uSquare[6]} uValue={6} />
          </div>
          <div className="u7">
            <div className="styleWinB7"></div>
            <SingleBoard value={uSquare[7]} uValue={7} />
          </div>
          <div className="u8">
            <div className="styleWinB8"></div>
            <SingleBoard value={uSquare[8]} uValue={8} />
          </div>
        </div>
        <div className="startText">
          {!alertVisible && <p className="innerText">X's Turn</p>}
          {alertVisible && (
            <button onClick={resetBoard}>
              {winPopup + " Winner! (Reset Board)"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UltimateTicTacToe;
