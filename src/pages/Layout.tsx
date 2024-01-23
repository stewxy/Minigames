import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ttt from "../images/ttt.png";
import uttt from "../images/uttt.png";
let temp = true;

const Layout = () => {
  const [linksVisible, setLinksVisible] = useState(true);
  function changeStyle() {
    setLinksVisible(false);
    // let x = document.getElementsByClassName(
    //   "selectionContainer"
    // ) as HTMLCollectionOf<HTMLElement>;
    // x[0].style.visibility = "hidden";
    // x[0].style.height = "0px";
    // console.log("x");
  }

  // function changeStyle() {
  //   temp = false;
  //   setLinksVisible(false);
  //   if (linksVisible == false) {
  //   }
  // }
  // console.log(temp, linksVisible);

  return (
    <>
      {/* {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )} */}
      {linksVisible && (
        <div className="main">
          <div className="selectionContainer">
            <Link to="/TicTacToePage">
              <div className="tttImageContainer" onClick={() => changeStyle()}>
                <img className="tttStyle" src={ttt} alt="ttt" />
                <div className="tttText">TicTacToe</div>
              </div>
            </Link>
            <Link to="/UltimateTicTacToePage">
              <div className="utttImageContainer" onClick={() => changeStyle()}>
                <img className="utttStyle" src={uttt} alt="uttt"></img>
                <div className="utttText">Ultimate TicTacToe</div>
              </div>
            </Link>
            <div className="layoutInfoSect">
              Note: Currently, TicTacToe only features a single-player mode
              where the player plays against a bot. Ultimate TicTacToe only
              features a local same device mode.{" "}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
