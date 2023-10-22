import React, { useState } from "react";
import "../App.css";

const AllBoards = () => {
  //const [click, setClicked] = useState(false);
  //const [value, setValue] = useState("");

  function SingleBoard() {
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
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
        <div className="ultimateRow">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
        <div className="ultimateRow">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
      </div>
    );
  }

  return UltimateSquare();
};

export default AllBoards;
