import React, { useState } from "react";
import "../App.css";

const AllBoards = () => {
  //const [click, setClicked] = useState(false);
  //const [value, setValue] = useState("");

  function SingleBoard({ uValue }: { uValue: any }) {
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
    }

    function Square({
      value,
      onSquareClick,
    }: {
      value: any;
      onSquareClick: any;
    }) {
      return (
        <button className="Grid" onClick={onSquareClick}>
          {value}
        </button>
      );
    }
    //console.log(squares);
    return (
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
    );
  }

  function UltimateSquare() {
    const [uSquare, setUSquare] = useState(Array(9).fill(null));
    return (
      <div className="fullBoard">
        <div className="ultimateRow">
          <div className="u0">
            <SingleBoard uValue={0} />
          </div>
          <div className="u1">
            <SingleBoard uValue={1} />
          </div>
          <div className="u2">
            <SingleBoard uValue={2} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u3">
            <SingleBoard uValue={3} />
          </div>
          <div className="u4">
            <SingleBoard uValue={4} />
          </div>
          <div className="u5">
            <SingleBoard uValue={5} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u6">
            <SingleBoard uValue={6} />
          </div>
          <div className="u7">
            <SingleBoard uValue={7} />
          </div>
          <div className="u8">
            <SingleBoard uValue={8} />
          </div>
        </div>
      </div>
    );
  }

  return UltimateSquare();
};

export default AllBoards;
