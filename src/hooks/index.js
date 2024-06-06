import { useState } from "react";
import { pieces } from "../constants/action.types";
import { isWinning } from "../algorithm/main";
import { valentines, news, code } from "../questions";
import { usePlayers } from "./usePlayers";
import { usePlayerItems } from "./usePlayerItems";

export const useHomePage = () => {
  const [numberCell, setNumberCell] = useState(null);
  const [arrayBoard, setArrayBoard] = useState(null);
  const [currentPiece, setCurrentPiece] = useState(pieces.X);
  const [dialogState, setDialogState] = useState({
    open: false,
    title: "",
    content: "",
    currentPiece: "X",
  });
  const [count, setCount] = useState(0);
  const [isWin, setWin] = useState(-1);
  const [piecesWin, setPiecesWin] = useState(null);
  const [haveIt, setHaveIt] = useState([]);

  const { player1Items, player2Items, handlePlayerItems } = usePlayerItems();

  const { player1, player2, handleNameChange } = usePlayers();

  const onSetNumberCell = (numberCell) => {
    setNumberCell(parseInt(numberCell));
  };

  const onInitArray = (arrayBoard) => {
    setArrayBoard(arrayBoard);
  };

  const onTick = (array_new) => {
    setArrayBoard(array_new);
  };

  const onSwitchPiece = (data) => {
    setCurrentPiece(data);
  };

  const generateUniqueRandom = (maxNr) => {
    //Generate random number
    // //Coerce to number by boxing
    let random = (Math.random() * maxNr).toFixed();
    random = Number(random);

    if (!haveIt.includes(random)) {
      setHaveIt([...haveIt, random]);
      return random;
    } else {
      if (haveIt.length <= maxNr) {
        //Recursively generate number
        return generateUniqueRandom(maxNr);
      } else {
        return null;
      }
    }
  };

  const handleDialog = ({ open, title, currentPiece }) => {
    if (open) {
      const list = [...valentines, ...news, ...code];
      const ranNum = generateUniqueRandom(list.length - 1);
      const item = typeof ranNum === "number" ? list[ranNum] : {};

      const content = item.question;
      const answer = item.answer;
      const img = item.img;
      setDialogState({ open, content, title, answer, currentPiece, img });
    } else {
      setDialogState({
        open: false,
        title: "",
        content: "",
        img: "",
      });
    }
  };
  const tick = (row, col) => {
    if (isWin === 1) {
      return;
    }

    let count_tmp = count + 1;
    setCount(count_tmp);

    // update board
    let newArray = [...arrayBoard];
    newArray[row][col] = currentPiece;
    onTick(newArray);

    // check win
    const updatedPiecesWin = isWinning(newArray, row, col, currentPiece);
    if (updatedPiecesWin.length > 0) {
      const currentPlayer = currentPiece === pieces.X ? "Player 1" : "Player 2";
      const title = `${currentPlayer}'s turn`;
      setWin(1);
      setPiecesWin(updatedPiecesWin);
      handleDialog({ open: true, title, currentPiece: currentPiece });
    } else if (count_tmp === numberCell * numberCell) {
      setWin(0);
    } else {
      // switch player
      onSwitchPiece(currentPiece === pieces.X ? pieces.O : pieces.X);
      const currentPlayer =
        currentPiece === pieces.X
          ? player1 || "Player 1"
          : player2 || "Player 2";
      const title = `${currentPlayer}'s turn`;
      handleDialog({ open: true, title, currentPiece: currentPiece });
    }
  };

  const resetMap = () => {
    onInitArray(
      Array(numberCell)
        .fill(null)
        .map(() => Array(numberCell).fill(null))
    );
    onSwitchPiece(pieces.X);
    setCount(0);
    setWin(-1);
    setPiecesWin(null);
  };

  return {
    numberCell,
    setNumberCell: (val) => {
      const result = parseInt(val);
      onSetNumberCell(result);
      onInitArray(
        Array(result)
          .fill(null)
          .map(() => Array(result).fill(null))
      );
    },
    currentPiece,
    arrayBoard,
    onSetNumberCell,
    onInitArray,
    onTick,
    onSwitchPiece,
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
    handlePlayerItems,
  };
};
