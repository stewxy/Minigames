// import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";

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
      <h1>Minigames</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </div>
  );
}

export default App;
