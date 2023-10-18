import React, { useState } from "react";
import "../App.css";

const AllBoards = () => {
  //const [click, setClicked] = useState(false);
  const [value, setValue] = useState("");
  const [square, setSquare] = useState(Array(9).fill(null));
  function handleClick2(i: number) {}

  function Square({
    value,
    onSquareClick,
  }: {
    value: any;
    onSquareClick: any;
  }) {
    function handleClick() {
      setValue("X");
      console.log(square);
    }

    return (
      <button className="Grid" onClick={handleClick}>
        {value}
      </button>
    );
  }

  function SingleBoard() {
    return (
      <div className="oneBoard">
        <div className="squareRow">
          <Square value={square[0]} onSquareClick={() => handleClick2(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick2(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick2(2)} />
        </div>
        <div className="squareRow">
          <Square value={square[3]} onSquareClick={() => handleClick2(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick2(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick2(5)} />
        </div>
        <div className="squareRow">
          <Square value={square[6]} onSquareClick={() => handleClick2(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick2(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick2(8)} />
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
