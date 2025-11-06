"use client";
import { use, useEffect, useState } from "react";
import Cell from "./components/cell";

const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go , setGo] = useState("circle");
  const [winningMessage, setwinningMessage] = useState("");
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle")
      const crossWins = combo.every((cell) => cells[cell] === "cross")
      
      if (circleWins) {
        setwinningMessage('Circle Wins!')
      } else if (crossWins) {
        setwinningMessage('Cross Wins!')        
      }
    })
  },[cells])
  
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setwinningMessage("Draw!");
    }
  }, [cells, winningMessage]);

  const handleReset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setwinningMessage("");
  };

  return (
    <main className="container">
      <div className="game-board">
        {cells.map((cell, index) => (
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage} />
        ))}
      </div>
      <div className="game-status">
        {winningMessage ? winningMessage : `It's now ${go}'s turn!`}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </main>
  );
}