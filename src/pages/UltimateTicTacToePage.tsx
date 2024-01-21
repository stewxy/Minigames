import React from "react";
import UltimateTicTacToe from "../components/UltimateTicTacToe";
import "../App.css";

const UltimateTicTacToePage = () => {
  return (
    <>
      <div className="main">
        <a href={"/"}>Back to Home</a>
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
};

export default UltimateTicTacToePage;
