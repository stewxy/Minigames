import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import AllBoards from "./components/AllBoards";
import UltimateTicTacToe from "./components/UltimateTicTacToe";
import UltimateTicTacToePage from "./pages/UltimateTicTacToePage";
import TicTacToePage from "./pages/TicTacToePage";

import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="UltimateTicTacToePage"
            element={<UltimateTicTacToePage />}
          />
          <Route path="TicTacToePage" element={<TicTacToePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
