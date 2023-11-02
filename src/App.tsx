// import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import AllBoards from "./components/AllBoards";
import TestAllBoards from "./components/testAllBoards";

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
    <div>
      {/* <Navbar></Navbar> 
      <h1 className="mainHeading">Minigames</h1>*/}
      <h1 className="mainHeading">TicTacToe</h1>

      <Grid></Grid>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      {/* <Button color="primary" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button> */}

      {/* <AllBoards></AllBoards> */}
      <TestAllBoards></TestAllBoards>
    </div>
  );
}

export default App;
