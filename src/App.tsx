// import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import Navbar from "./components/Navbar";
import TicTacToe from "./components/TicTacToe";
import AllBoards from "./components/AllBoards";
import UltimateTicTacToe from "./components/UltimateTicTacToe";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  //};
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    <>
      <div className="main">
        {/* <Navbar></Navbar> 
      <h1 className="mainHeading">Minigames</h1>*/}

        {/* <TicTacToe></TicTacToe> */}

        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        {/* <Button color="primary" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button> */}

        {/* <AllBoards></AllBoards> */}
        <div className="htmlUTicTacToe">
          <h1 className="mainHeading">Ultimate TicTacToe</h1>
          <UltimateTicTacToe></UltimateTicTacToe>
          <div className="howToPlaySect">
            How To Play <br />
            <p className="howToPlayInfo">
              X starts. Each Ultimate TicTacToe grid contains a regular game of
              TicTacToe. For the first action, every grid is available. When a
              player selects a grid, the following player must make their next
              move on the board corresponding to the grid that the previous
              player selected. If a player selects a grid that corresponds to a
              board that already has a winner, then the following player can
              make their next move on any board that doesn't have a winner. To
              win the game, a player must win 3 "regular" TicTacToe games that
              line up vertically, horizontally or diagonally (like regular
              TicTacToe).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
