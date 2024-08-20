"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

import { Coin } from "@/data/coins";

export enum GameState {
  WaitingToStart,
  Playing,
  Finished,
}

export const GameStateContext = createContext<{
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  answers: Answer[];
  setAnswers: Dispatch<SetStateAction<Answer[]>>;
  currentCoin: Coin | undefined;
  setCurrentCoin: Dispatch<SetStateAction<Coin | undefined>>;
  currentIncorrectCoins: Coin[];
  setCurrentIncorrectCoins: Dispatch<SetStateAction<Coin[]>>;
}>({
  gameState: GameState.WaitingToStart,
  setGameState: () => {},
  score: 0,
  setScore: () => {},
  answers: [],
  setAnswers: () => {},
  currentCoin: undefined,
  setCurrentCoin: () => {},
  currentIncorrectCoins: [],
  setCurrentIncorrectCoins: () => {},
});

export type Answer = {
  coin: Coin;
  guessed: Coin;
  correct: boolean;
};

export const GameStateProvider = ({ children }: PropsWithChildren) => {
  const [gameState, setGameState] = useState(GameState.WaitingToStart);

  // In game
  const [score, setScore] = useState(0);
  const [currentCoin, setCurrentCoin] = useState<Coin>();
  const [currentIncorrectCoins, setCurrentIncorrectCoins] = useState<Coin[]>(
    [],
  );
  const [answers, setAnswers] = useState<Answer[]>([]);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        score,
        setScore,
        currentCoin,
        setCurrentCoin,
        answers,
        setAnswers,
        currentIncorrectCoins,
        setCurrentIncorrectCoins,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
