"use client";
import { useContext, useMemo } from "react";

import { GameState, GameStateContext } from "@/context/GameStateProvider";
import { type Coin, COINS } from "@/data/coins";

const getRandomCoin = (coinList = COINS) =>
  coinList[Math.floor(Math.random() * coinList.length)];

export const useGame = () => {
  const {
    score,
    setScore,
    answers,
    currentCoin,
    gameState,
    setAnswers,
    setCurrentCoin,
    setGameState,
    currentIncorrectCoins,
    setCurrentIncorrectCoins,
  } = useContext(GameStateContext);

  /**
   * Start the game
   */
  const start = () => {
    setGameState(GameState.Playing);
    next();
  };

  /**
   * Handle the user's guess
   * @param coin The coin that the user guessed
   */
  const guess = (coin: Coin) => {
    const correct = coin.logoSrc === currentCoin?.logoSrc;

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      { coin: currentCoin!, guessed: coin, correct },
    ]);

    return correct;
  };

  const currentOptions = useMemo(
    () =>
      [currentCoin, ...currentIncorrectCoins].sort((a, b) =>
        a!.name.localeCompare(b!.name),
      ),
    [currentCoin, currentIncorrectCoins],
  );

  const next = () => {
    // Get a random coin, the correct coin
    const randomCoin = getRandomCoin();
    setCurrentCoin(randomCoin);

    // Get 3 other coins that are incorrect
    const incorrectCoins: Coin[] = [];

    while (incorrectCoins.length < 3) {
      const coin = getRandomCoin();
      if (
        coin !== randomCoin &&
        !incorrectCoins.find((x) => x.logoSrc === coin.logoSrc)
      ) {
        incorrectCoins.push(coin);
      }
    }

    setCurrentIncorrectCoins(incorrectCoins);
  };

  const reset = () => {
    setScore(0);
    setAnswers([]);
    setCurrentCoin(undefined);
    setCurrentIncorrectCoins([]);
    setGameState(GameState.WaitingToStart);
  };

  return {
    gameState,
    score,
    currentCoin,
    currentOptions,
    start,
    guess,
    next,
    reset,
  };
};
