import "@/styles/globals.css";

import type { Metadata } from "next";

import { GameStateProvider } from "@/context/GameStateProvider";

export const metadata: Metadata = {
  title: "CoinGuesser",
  description: "Guess crypto coins and show off your knowledge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GameStateProvider>
        <body>{children}</body>
      </GameStateProvider>
    </html>
  );
}
