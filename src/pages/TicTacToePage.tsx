import React, { useEffect } from "react";
import TicTacToe from "../components/TicTacToe";
import TicTacToeAI from "../components/TicTacToeAI";
import "../App.css";

const TicTacToePage = () => {
  return (
    <>
      <div className="main">
        <a href="/">
          <button className="backButton">Back</button>
        </a>
        <div className="htmlUTicTacToe">
          <h1 className="mainHeading">TicTacToe</h1>
          <TicTacToeAI></TicTacToeAI>
          <div className="howToPlaySect">
            How To Play <br />
            <p className="howToPlayInfo">
              X starts. X and O players take turns selecting a grid to place
              their respective symbol on the board. The first player to place 3
              of their symbols in a row, vertically, horizontally or diagonally
              wins. <br />
              Note: Players can currently only verse an unbeatable AI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToePage;
