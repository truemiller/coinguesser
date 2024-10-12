"use client";
import { useGame } from "@/hooks/useGameState";

export const WaitingToStart = () => {
  const { start: handleStart } = useGame();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>CoinGuesser!</h1>
      <button
        className="mb-[50%] text-xl bg-green-500 p-3 px-5"
        onClick={handleStart}
      >
        Start playing!
      </button>
    </div>
  );
};
