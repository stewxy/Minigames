import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ttt from "../images/ttt.png";
import uttt from "../images/uttt.png";

const Layout = () => {
  const [linksVisible, setLinksVisible] = useState(true);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UltimateTicTacToePage">Ultimate TicTacToe</Link>
          </li>
          <li>
            <Link to="/TicTacToePage">TicTacToe</Link>
          </li>
        </ul>
      </nav>
      <div className="selectionContainer">
        <a href={"/TicTacToePage"}>
          <div className="tttImageContainer">
            <img className="tttStyle" src={ttt} alt="ttt" />
            <div className="tttText">TicTacToe</div>
          </div>
        </a>
        <a href={"/UltimateTicTacToePage"}>
          <div className="utttImageContainer">
            <img className="utttStyle" src={uttt} alt="uttt"></img>
            <div className="utttText">Ultimate TicTacToe</div>
          </div>
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
