import { useState } from "react";

export const usePlayerItems = () => {
  const [player1Items, setPlayer1Items] = useState([]);
  const [player2Items, setPlayer2Items] = useState([]);

  const handlePlayerItems = ({ player, item }) => {
    const fn = player === "player1" ? setPlayer1Items : setPlayer2Items;
    const items = player === "player1" ? player1Items : player2Items;

    fn([...items, item]);
  };

  return {
    player1Items,
    player2Items,
    handlePlayerItems,
  };
};
