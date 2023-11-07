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
  //const [click, setClicked] = useState(false);
  //const [value, setValue] = useState("");
  // const [active0, setActive0] = useState(false);
  // const [active1, setActive1] = useState(false);
  // const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState(false);
  // const [active4, setActive4] = useState(false);
  // const [active5, setActive5] = useState(false);
  // const [active6, setActive6] = useState(false);
  // const [active7, setActive7] = useState(false);
  // const [active8, setActive8] = useState(false);

  // let style0 = document.getElementsByClassName(
  //   "u0"
  // ) as HTMLCollectionOf<HTMLElement>;

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

  //console.log(x);

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

      if (i == 0) {
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
      }
      if (i == 1) {
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
      }
      if (i == 2) {
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
      }
      if (i == 3) {
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
      }
      if (i == 4) {
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
      }
      if (i == 5) {
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
      }
      if (i == 6) {
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
      }
      if (i == 7) {
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
      }
      if (i == 8) {
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
      }
    }

    //console.log(squares);
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
  //function UltimateBoard(){}
  const [uSquare, setUSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div className="fullBoard">
        <div className="ultimateRow">
          <div
            className="u0"
            //style={{ backgroundColor: active0 ? "green" : "blue" }}
          >
            <SingleBoard uValue={0} />
          </div>
          <div
            className="u1"
            //style={{ backgroundColor: active1 ? "green" : "blue" }}
          >
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
    </>
  );
};

export default TestAllBoards;
