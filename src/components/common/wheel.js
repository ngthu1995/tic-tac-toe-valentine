import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

export const data = [
  { option: "Steak", id: 0 },
  { option: "Mussel", id: 1 },
  { option: "Fish", id: 2 },
  { option: "Broccoli", id: 3 },
  { option: "Cheese", id: 4 },
  { option: "Egg", id: 5 },
  { option: "Sugar", id: 6 },
  { option: "Heavy Cream", id: 7 },
  { option: "Milk", id: 8 },
  { option: "Rice", id: 9 },
  { option: "Flour", id: 11 },
  { option: "Oil", id: 12 },
  { option: "Tomato", id: 13 },
  { option: "Pork", id: 14 },
  { option: "Strawberry", id: 15 },
  { option: "Potatoes", id: 16 },
  { option: "Pasta", id: 17 },
  { option: "Mushroom", id: 18 },
  { option: "Shrimp", id: 19 },
  { option: "Chocolate", id: 20 },
  { option: "Garlic", id: 21 },
  { option: "Butter", id: 22 },
];
const Roulette = ({ currentPiece, handlePlayerItems }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      const foundItem = data[newPrizeNumber];
      handlePlayerItems({
        player: currentPiece === "X" ? "player1" : "player2",
        item: foundItem,
      });
    }
  };

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#fddda2"]}
          outerBorderWidth={[9]}
          innerBorderColor={["#fddda2"]}
          innerBorderWidth={[30]}
          radiusLineColor={["transparent"]}
          radiusLineWidth={[2]}
          textColors={["#f5f5f5", "#38383a"]}
          textDistance={70}
          fontSize={[15]}
          backgroundColors={[
            "#38393b",
            "#dbd5d5",
            "#f36e65",
            "#ffffff",
            "#f59692",
            "#fbd4d7",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
          Spin
        </button>
      </div>
      <br />
    </>
  );
};

export default Roulette;
