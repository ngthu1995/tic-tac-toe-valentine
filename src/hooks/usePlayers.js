import { useState } from "react";

export const usePlayers = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleNameChange = (e) => (type) => {
    if (type === "player1") {
      setPlayer1(e.target.value);
    } else if (type === "player2") {
      setPlayer2(e.target.value);
    }
  };
  return {
    player1,
    player2,
    handleNameChange,
  };
};
