import React, { useState } from "react";
import Square from "./Square";
import ConfettiExplosion from "react-confetti-explosion";

const Index = () => {
  const [isXtrue, setIsXTrue] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));

  const checkWinner = () => {
    const winBoard = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
      [2, 5, 8],
    ];

    for (let [a, b, c] of winBoard) {
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleUserClick = (e) => {
    const copyState = { ...state };
    copyState[e] = isXtrue ? "X" : "O";
    setState(copyState);
    setIsXTrue(!isXtrue);
  };
  return (
    <>
      <div className="h-full w-full mx-auto my-auto flex justify-center items-center  container flex-col">
        <p className="text-3xl font-extrabold ">Welcome Tic Tac Tok Game</p>
        <div className="flex justify-center items-center  -top-16   px-4 py-4 flex-col bg-gray-200 shadow-2xl  mx-auto my-auto rounded-3xl">
          <h2 className="font-bold text-2xl py-2">
            Now {isXtrue ? "X" : "O"} turn{" "}
          </h2>
          {isWinner && (
            <p className="font-bold text-2xl py-2">
              Congratulation {!isXtrue ? "X" : "O"} Win
            </p>
          )}
          <>
            {isWinner && (
              <ConfettiExplosion duration={10000} height={"100vh"} />
            )}
            <div className="flex gap">
              <Square onClick={() => handleUserClick(0)} value={state[0]} />
              <Square onClick={() => handleUserClick(1)} value={state[1]} />
              <Square onClick={() => handleUserClick(2)} value={state[2]} />
            </div>
            <div className="flex ">
              <Square onClick={() => handleUserClick(3)} value={state[3]} />
              <Square onClick={() => handleUserClick(4)} value={state[4]} />
              <Square onClick={() => handleUserClick(5)} value={state[5]} />
            </div>
            <div className="flex ">
              <Square onClick={() => handleUserClick(6)} value={state[6]} />
              <Square onClick={() => handleUserClick(7)} value={state[7]} />
              <Square onClick={() => handleUserClick(8)} value={state[8]} />
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Index;
