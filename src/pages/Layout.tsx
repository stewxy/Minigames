import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ttt from "../images/ttt.png";
import uttt from "../images/uttt.png";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [linksVisible, setLinksVisible] = useState(true);
  function changeStyle() {
    setLinksVisible(false);
  }

  return (
    <>
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
              <div className="noteText">
                Note: Currently, TicTacToe only features a single-player mode
                where the player plays against an unbeatable bot. Ultimate
                TicTacToe only features a local same device mode.
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
