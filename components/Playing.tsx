"use client";
import Image from "next/image";

import { Coin } from "@/data/coins";
import { useGame } from "@/hooks/useGameState";

export const Playing = () => {
  const { score, guess, currentOptions, currentCoin, next, reset } = useGame();

  const handleGuess = (coin: Coin) => {
    guess(coin);
    next();
  };

  return (
    <div className="flex flex-col w-full justify-center gap-8 text-center items-center">
      <h1 className="text-8xl my-0">{score}</h1>
      <Image
        src={currentCoin!.logoSrc}
        title="Don't cheat!"
        alt="crypto logo"
        width={200}
        height={200}
        className="ring-8 rounded-full shadow-2xl"
      />
      <div className="grid grid-cols-2 gap-4 w-full">
        {currentOptions.map((coin, i) => (
          <button
            key={coin?.logoSrc}
            className={"answer " + (i % 2 === 0 ? "ml-auto" : "mr-right")}
            onClick={() => handleGuess(coin!)}
          >
            <span className="max-w-[200px] truncate">{coin!.name}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="bg-red-700 opacity-50 hover:opacity-100"
          onClick={() => confirm("You will lose your progress!") && reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
