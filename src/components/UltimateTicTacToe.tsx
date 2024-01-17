import { useState } from "react";
import "../App.css";
import { minimax } from "./minimax";
function Square({
  id,
  value,
  onSquareClick,
}: {
  id: number;
  value: any;
  onSquareClick: any;
}) {
  return (
    <button className={"Grid" + id} onClick={onSquareClick} disabled={false}>
      {value}
    </button>
  );
}

const UltimateTicTacToe = () => {
  let gridClicked = 0;
  let xCounter = 0;
  let resetButtonElement = document.getElementsByClassName(
    "btn"
  ) as HTMLCollectionOf<HTMLElement>;

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

  let uSquareArray = [null, null, null, null, null, null, null, null, null];
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
  let ultimateSquareStyleList = [
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

  let squareWinnerStylingList = [
    getWinB0,
    getWinB1,
    getWinB2,
    getWinB3,
    getWinB4,
    getWinB5,
    getWinB6,
    getWinB7,
    getWinB8,
  ];

  let turnText = document.getElementsByClassName(
    "innerText"
  ) as HTMLCollectionOf<HTMLElement>;

  function resetBoard() {
    window.location.reload();
  }

  function setWinGridText(value: number, squares: string) {
    squareWinnerStylingList[value][0].innerHTML = squares;
    squareWinnerStylingList[value][0].style.visibility = "visible";
    if (value == gridClicked) {
      for (let i = 0; i < ultimateSquareStyleList.length; i++) {
        if (uSquareArray[i] == null) {
          ultimateSquareStyleList[i][0].style.backgroundColor = "#eb2626";
          ultimateSquareStyleList[i][0].style.pointerEvents = "auto";
          ultimateSquareStyleList[i][0].style.opacity = "1";
        }
      }
    }
  }

  function modifyGridColor(value: number) {
    if (uSquareArray[value] == null) {
      ultimateSquareStyleList[value][0].style.backgroundColor = "#eb2626";
      ultimateSquareStyleList[value][0].style.pointerEvents = "auto";
      ultimateSquareStyleList[value][0].style.opacity = "1";
      for (let j = 0; j < ultimateSquareStyleList.length; j++) {
        if (j !== value) {
          ultimateSquareStyleList[j][0].style.backgroundColor = "#393939";
          ultimateSquareStyleList[j][0].style.pointerEvents = "none";
          ultimateSquareStyleList[j][0].style.opacity = "0.7";
        }
      }
    } else {
      for (let i = 0; i < ultimateSquareStyleList.length; i++) {
        if (uSquareArray[i] == null) {
          ultimateSquareStyleList[i][0].style.backgroundColor = "#eb2626";
          ultimateSquareStyleList[i][0].style.pointerEvents = "auto";
          ultimateSquareStyleList[i][0].style.opacity = "1";
        }
      }
    }
  }

  function checkUltimateWinner() {
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        uSquareArray[a] !== "-" &&
        uSquareArray[a] &&
        uSquareArray[a] === uSquareArray[b] &&
        uSquareArray[a] === uSquareArray[c]
      ) {
        if (uSquareArray[a] == "O") {
          turnText[0].innerHTML = "The Bot Wins!";
        } else {
          turnText[0].innerHTML = uSquareArray[a] + " is the Winner!";
        }

        resetButtonElement[0].style.visibility = "visible";
        for (let i = 0; i < ultimateSquareStyleList.length; i++) {
          ultimateSquareStyleList[i][0].style.pointerEvents = "none";
          ultimateSquareStyleList[i][0].style.opacity = "0.7";
          if (i == a) {
            squareWinnerStylingList[a][0].style.backgroundColor = "#32a852";
            ultimateSquareStyleList[a][0].style.opacity = "1";
          }
          if (i == b) {
            squareWinnerStylingList[b][0].style.backgroundColor = "#32a852";
            ultimateSquareStyleList[b][0].style.opacity = "1";
          }
          if (i == c) {
            squareWinnerStylingList[c][0].style.backgroundColor = "#32a852";
            ultimateSquareStyleList[c][0].style.opacity = "1";
          }
        }
        return true;
      } else {
        if (uSquareArray.every((element) => element !== null)) {
          turnText[0].innerHTML = "Draw!";
          resetButtonElement[0].style.visibility = "visible";
          for (let i = 0; i < ultimateSquareStyleList.length; i++) {
            ultimateSquareStyleList[i][0].style.pointerEvents = "none";
            ultimateSquareStyleList[i][0].style.opacity = "0.7";
          }
          return true;
        }
      }
    }
    return false;
  }

  function calculateWinner(squares: any, uValue: number) {
    console.log(squares, uValue);
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("WINNER");
        uSquareArray[uValue] = squares[a];
        setWinGridText(uValue, squares[a]);
        ultimateSquareStyleList[uValue][0].style.backgroundColor = "#393939";
        ultimateSquareStyleList[uValue][0].style.pointerEvents = "none";
        ultimateSquareStyleList[uValue][0].style.opacity = "0.7";
        return squares[a], uValue;
      } else if (
        squares.every((val: string) => val !== null && val !== "") &&
        squares[a] !== squares[b] &&
        squares[a] !== squares[c]
      ) {
        setWinGridText(uValue, "-");
        squares[a] = "-";
        uSquareArray[uValue] = squares[a];
      }
    }
  }

  let squaresA = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];

  function SingleBoard({ uValue }: { uValue: number }) {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i: number) {
      console.log("instance");
      if (squares[i] != null) {
        return;
      }
      if (squaresA[uValue][i] !== "") {
        return;
      }

      modifyGridColor(i);
      gridClicked = i;

      const nextSquares = squares.slice();

      if (xCounter % 2 == 0) {
        ultimateSquareStyleList[i][0].style.pointerEvents = "none";
        nextSquares[i] = "X";
        squaresA[uValue][i] = "X";
        turnText[0].innerHTML = "AI's Turn";
        xCounter++;
        setSquares(nextSquares);
        //calculateWinner(squares, uValue);
        calculateWinner(squaresA[uValue], uValue);

        // setTimeout(() => {
        //   if (uSquareArray[0] !== null) {
        //     console.log("LMAO");
        //   }
        // }, 500);
        let newI = 0;
        if (checkUltimateWinner() == true) {
          return;
        }
        if (uSquareArray[i] !== null) {
          for (let j = 0; j < uSquareArray.length; j++) {
            if (uSquareArray[j] == null) {
              newI = j;
              let aiMove = minimax(squaresA[newI], 0, true);
              let aiMoveGrid = document
                .getElementById(newI + "")
                ?.getElementsByClassName(
                  "Grid" + aiMove
                ) as HTMLCollectionOf<HTMLElement>;
              if (checkUltimateWinner() == true) {
                return;
              }

              setTimeout(() => {
                aiMoveGrid[0].innerHTML = "O";
                if (checkUltimateWinner() == true) {
                  return;
                }
                turnText[0].innerHTML = "X's Turn";
                ultimateSquareStyleList[newI][0].style.pointerEvents = "auto";
                modifyGridColor(aiMove);
              }, 500);

              squaresA[newI][aiMove] = "O";
              xCounter++;
              console.log(squaresA);
              setTimeout(() => {
                calculateWinner(squaresA[newI], newI);
              }, 500);
              return;
            }
          }
        } else {
          console.log("hi");
          let aiMove = minimax(squaresA[i], 0, true);
          let aiMoveGrid = document
            .getElementById(i + "")
            ?.getElementsByClassName(
              "Grid" + aiMove
            ) as HTMLCollectionOf<HTMLElement>;

          setTimeout(() => {
            aiMoveGrid[0].innerHTML = "O";
            if (checkUltimateWinner() == true) {
              return;
            }
            turnText[0].innerHTML = "X's Turn";
            ultimateSquareStyleList[i][0].style.pointerEvents = "auto";
            modifyGridColor(aiMove);
          }, 500);

          squaresA[i][aiMove] = "O";
          xCounter++;
          console.log(squaresA[i] + "ai");
          setTimeout(() => {
            calculateWinner(squaresA[i], i);
          }, 500);
        }
      }

      // xCounter++;
      // setSquares(nextSquares);
    }

    //calculateWinner(squares, uValue);
    //calculateWinner(squaresA[uValue], uValue);
    checkUltimateWinner();

    return (
      <>
        <div className="oneBoard">
          <div className="squareRow0">
            <Square
              id={0}
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
            />
            <Square
              id={1}
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
            />
            <Square
              id={2}
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="squareRow1">
            <Square
              id={3}
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
            />
            <Square
              id={4}
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
            />
            <Square
              id={5}
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="squareRow2">
            <Square
              id={6}
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
            />
            <Square
              id={7}
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
            />
            <Square
              id={8}
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
      </>
    );
  }

  // function SingleBoard({ uValue }: { uValue: number }) {
  //   const [squares, setSquares] = useState(Array(9).fill(null));

  //   function handleClick(i: number) {
  //     modifyGridColor(i);
  //     gridClicked = i;

  //     if (squares[i] != null) {
  //       return;
  //     }
  //     const nextSquares = squares.slice();

  //     if (xCounter % 2 == 0) {
  //       nextSquares[i] = "X";
  //       squaresA[uValue][i] = "X";
  //       turnText[0].innerHTML = "AI's Turn";
  //       xCounter++;
  //       setSquares(nextSquares);
  //       // let aiMove = minimax(squaresA[i], 0, true);
  //       // console.log(xCounter);
  //       // setTimeout(() => {
  //       //   handleClick(aiMove);
  //       // }, 1000);

  //       // handleClick(aiMove);
  //       // ultimateSquareStyleList[i][0].style.pointerEvents = "none";
  //     } else {
  //       nextSquares[i] = "O";
  //       squaresA[uValue][i] = "O";
  //       turnText[0].innerHTML = "X's Turn";
  //       xCounter++;
  //       setSquares(nextSquares);
  //       // return;
  //       // ultimateSquareStyleList[i][0].style.pointerEvents = "auto";
  //     }

  //     // let aiMove = minimax(squaresA[i], 0, true);
  //     // console.log(aiMove);
  //     // handleClick(aiMove);

  //     // xCounter++;
  //     // setSquares(nextSquares);
  //   }

  //   calculateWinner(squares, uValue);
  //   checkUltimateWinner();

  //   return (
  //     <>
  //       <div className="oneBoard">
  //         <div className="squareRow">
  //           <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  //           <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  //           <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  //         </div>
  //         <div className="squareRow">
  //           <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  //           <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  //           <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  //         </div>
  //         <div className="squareRow">
  //           <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  //           <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  //           <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="fullBoard">
        <div className="ultimateRow">
          <div className="u0" id="0">
            <div className="styleWinB0"></div>
            <SingleBoard uValue={0} />
          </div>
          <div className="u1" id="1">
            <div className="styleWinB1"></div>
            <SingleBoard uValue={1} />
          </div>
          <div className="u2" id="2">
            <div className="styleWinB2"></div>
            <SingleBoard uValue={2} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u3" id="3">
            <div className="styleWinB3"></div>
            <SingleBoard uValue={3} />
          </div>
          <div className="u4" id="4">
            <div className="styleWinB4"></div>
            <SingleBoard uValue={4} />
          </div>
          <div className="u5" id="5">
            <div className="styleWinB5"></div>
            <SingleBoard uValue={5} />
          </div>
        </div>
        <div className="ultimateRow">
          <div className="u6" id="6">
            <div className="styleWinB6"></div>
            <SingleBoard uValue={6} />
          </div>
          <div className="u7" id="7">
            <div className="styleWinB7"></div>
            <SingleBoard uValue={7} />
          </div>
          <div className="u8" id="8">
            <div className="styleWinB8"></div>
            <SingleBoard uValue={8} />
          </div>
        </div>
        <div className="startText">
          <p className="innerText">X's Turn</p>
          <button type="button" className="btn btn-danger" onClick={resetBoard}>
            Reset Board
          </button>
        </div>
      </div>
    </>
  );
};
export default UltimateTicTacToe;
