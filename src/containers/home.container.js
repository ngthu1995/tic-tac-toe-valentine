import React from "react";

import Home from "../components/home";
import {useHomePage} from "../hooks"
import { useStyles } from '../styles';

const HomeContainer = (props) => {
  const {
    currentPiece,
    arrayBoard,
    onSetNumberCell,
    onInitArray,
    tick,
    isWin,
    piecesWin,
    resetMap,
    handleDialog,
    dialogState,
    player1,
    player2,
    handleNameChange,
    player1Items,
    player2Items,
    handlePlayerItems
  } = useHomePage();

  const classes = useStyles()

  return (
    <Home
      setNumberCell={(val) => {
        const result = parseInt(val);
        onSetNumberCell(result);
        onInitArray(
          Array(result)
            .fill(null)
            .map(() => Array(result).fill(null))
        );
      }}
      arrayBoard={arrayBoard}
      tick={(row, col) => tick(row, col)}
      currentPiece={currentPiece}
      isWin={isWin}
      piecesWin={piecesWin}
      handleDialog={handleDialog}
      dialogState={dialogState}
      resetMap={() => resetMap()}
      player1={player1}
      player2={player2}
      handleNameChange={handleNameChange}
      player1Items={player1Items}
      player2Items={player2Items}
      handlePlayerItems={handlePlayerItems}
      classes={classes}
    />
  );
};

export default HomeContainer;
