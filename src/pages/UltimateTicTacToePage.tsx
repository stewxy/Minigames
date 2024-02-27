import UltimateTicTacToe from "../components/UltimateTicTacToe";
import "../App.css";
import { Link } from "react-router-dom";

const UltimateTicTacToePage = () => {
  return (
    <>
      <div className="main">
        <Link to="/">
          <button className="backButton">Back</button>
        </Link>

        <div className="htmlUTicTacToe">
          <h1 className="utttHeading">Ultimate TicTacToe</h1>
          <UltimateTicTacToe></UltimateTicTacToe>
          <div className="howToPlaySectUTTT">
            How To Play <br />
            <div className="howToPlayInfoUTTT">
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
              <br /> <br />
              <div className="noteText">
                Note: Players can currently only verse against other players on
                the same device.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTicTacToePage;
