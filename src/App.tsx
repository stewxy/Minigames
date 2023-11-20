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
        </div>
      </div>
    </>
  );
}
export default App;
