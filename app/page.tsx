"use client";

import { useMemo } from "react";

import { Playing } from "@/components/Playing";
import { WaitingToStart } from "@/components/WaitingToStart";
import { GameState } from "@/context/GameStateProvider";
import { useGame } from "@/hooks/useGameState";

export default function Home() {
  const { gameState } = useGame();

  const gameMemo = useMemo(() => {
    switch (gameState) {
      case GameState.WaitingToStart:
        return <WaitingToStart />;
      case GameState.Playing:
        return <Playing />;
      default:
        return null;
    }
  }, [gameState]);

  return (
    <main className="flex flex-col min-h-screen items-center gap-2 justify-center">
      {gameMemo}
    </main>
  );
}
