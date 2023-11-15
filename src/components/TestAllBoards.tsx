import React, { useState } from "react";
import "../App.css";

function Square({ value, onSquareClick }: { value: any; onSquareClick: any }) {
  return (
    <button className="Grid" onClick={onSquareClick} disabled={false}>
      {value}
    </button>
  );
}

const TestAllBoards = () => {
  const [uSquare, setUSquare] = useState(Array(9).fill(null));
  let uSquareArray = [null, null, null, null, null, null, null, null, null];

  function calculateWinner(squares: any, uValue: any) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a] + " is the Winner" + uValue);
        uSquareArray[uValue] = squares[a];

        if (uValue == 0) {
          style0[0].style.backgroundColor = "yellow";
        }
        return squares[a], uValue;
      }
    }
    console.log(uSquareArray + " ####");
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

  function SingleBoard({ value, uValue }: { value: any; uValue: any }) {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i: number) {
      if (squares[i] != null) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
      console.log("i: " + i);
      console.log("uValue: " + uValue);
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

      if (i == 0 && uSquareArray[i] == null) {
        style0[0].style.backgroundColor = "red";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "auto";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "1";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 1 && uSquareArray[i] == null) {
        style1[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "auto";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "1";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 2 && uSquareArray[i] == null) {
        style2[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "auto";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "1";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 3 && uSquareArray[i] == null) {
        style3[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "auto";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "1";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 4 && uSquareArray[i] == null) {
        style4[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "auto";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "1";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 5 && uSquareArray[i] == null) {
        style5[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "auto";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "1";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 6 && uSquareArray[i] == null) {
        style6[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "auto";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "1";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "0.8";
      } else if (i == 7 && uSquareArray[i] == null) {
        style7[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style8[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "auto";
        style8[0].style.pointerEvents = "none";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "1";
        style8[0].style.opacity = "0.8";
      } else if (i == 8 && uSquareArray[i] == null) {
        style8[0].style.backgroundColor = "red";
        style0[0].style.backgroundColor = "blue";
        style1[0].style.backgroundColor = "blue";
        style2[0].style.backgroundColor = "blue";
        style3[0].style.backgroundColor = "blue";
        style4[0].style.backgroundColor = "blue";
        style5[0].style.backgroundColor = "blue";
        style6[0].style.backgroundColor = "blue";
        style7[0].style.backgroundColor = "blue";

        style0[0].style.pointerEvents = "none";
        style1[0].style.pointerEvents = "none";
        style2[0].style.pointerEvents = "none";
        style3[0].style.pointerEvents = "none";
        style4[0].style.pointerEvents = "none";
        style5[0].style.pointerEvents = "none";
        style6[0].style.pointerEvents = "none";
        style7[0].style.pointerEvents = "none";
        style8[0].style.pointerEvents = "auto";

        style0[0].style.opacity = "0.8";
        style1[0].style.opacity = "0.8";
        style2[0].style.opacity = "0.8";
        style3[0].style.opacity = "0.8";
        style4[0].style.opacity = "0.8";
        style5[0].style.opacity = "0.8";
        style6[0].style.opacity = "0.8";
        style7[0].style.opacity = "0.8";
        style8[0].style.opacity = "1";
      } else {
        console.log("THAT BOARD ALREADY HAS A WINNER");

        for (let i = 0; i < x.length; i++) {
          if (uSquareArray[i] == null) {
            x[i][0].style.backgroundColor = "red";
            x[i][0].style.pointerEvents = "auto";
            x[i][0].style.opacity = "1";
          }
        }
      }

      // if (calculateWinner(squares, uValue) !== null) {
      //   let x = calculateWinner(squares, uValue);
      // }
    }

    //console.log(squares);
    calculateWinner(squares, uValue);
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
            <div className="test">X</div>
            <SingleBoard value={uSquare[0]} uValue={0} />
          </div>
          <div className="u1">
            <SingleBoard value={uSquare[1]} uValue={1} />
          </div>
          <div className="u2">
            <SingleBoard value={uSquare[2]} uValue={2} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u3">
            <SingleBoard value={uSquare[3]} uValue={3} />
          </div>
          <div className="u4">
            <SingleBoard value={uSquare[4]} uValue={4} />
          </div>
          <div className="u5">
            <SingleBoard value={uSquare[5]} uValue={5} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u6">
            <SingleBoard value={uSquare[6]} uValue={6} />
          </div>
          <div className="u7">
            <SingleBoard value={uSquare[7]} uValue={7} />
          </div>
          <div className="u8">
            <SingleBoard value={uSquare[8]} uValue={8} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestAllBoards;
