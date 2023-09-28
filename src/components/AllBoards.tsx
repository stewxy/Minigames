import React from "react";

interface Props {
  value: String;
}

function Square({ value }: Props) {
  return <button className="Grid">{value}</button>;
}

function SingleBoard() {
  return (
    <>
      <div className="GridRow">
        <Square value={"1"} />
        <Square value={"2"} />
        <Square value={"3"} />
      </div>
      <div className="GridRow">
        <Square value={"4"} />
        <Square value={"5"} />
        <Square value={"6"} />
      </div>
      <div className="GridRow">
        <Square value={"7"} />
        <Square value={"8"} />
        <Square value={"9"} />
      </div>
    </>
  );
}

function UltimateSquare() {
  return (
    <>
      <div className="UltimateRow">
        <SingleBoard />
        <SingleBoard />
        <SingleBoard />
      </div>
      <div className="UltimateRow">
        <SingleBoard />
        <SingleBoard />
        <SingleBoard />
      </div>
      <div className="UltimateRow">
        <SingleBoard />
        <SingleBoard />
        <SingleBoard />
      </div>
    </>
  );
}

const AllBoards = () => {
  return <div>{UltimateSquare()}</div>;
};

export default AllBoards;
