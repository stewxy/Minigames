import React from "react";
import TicTacToe from "../components/TicTacToe";
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
          <TicTacToe></TicTacToe>
          <div className="howToPlaySect">
            How To Play <br />
            <p className="howToPlayInfo">Placeholder.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToePage;
