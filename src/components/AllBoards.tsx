import React, { useState } from "react";
import "../App.css";

const [click, setClicked] = useState(false);

interface Props {
  value: String;
}

function Square({ value }: Props) {
  return <button className="Grid">{value}</button>;
}

function SingleBoard() {
  return (
    <div className="oneBoard">
      <div className="squareRow">
        <Square value={"1"} />
        <Square value={"2"} />
        <Square value={"3"} />
      </div>
      <div className="squareRow">
        <Square value={"4"} />
        <Square value={"5"} />
        <Square value={"6"} />
      </div>
      <div className="squareRow">
        <Square value={"7"} />
        <Square value={"8"} />
        <Square value={"9"} />
      </div>
    </div>
  );
}

function UltimateSquare() {
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

function handleClick() {}

const AllBoards = () => {
  return UltimateSquare();
};

export default AllBoards;
