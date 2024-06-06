import { useState } from "react";

export const useBoard = () => {
  const [boardState, setBoardState] = useState({
    numbercell: null,
    show: false,
  });

  const [showAnswer, setShowAnswer] = useState(false);
  const [showSpin, setShowSpin] = useState(false);

  const [overviewDialog, setOverviewDialog] = useState({ open: false });
  const handleOverviewDialog = ({ open }) => {
    setOverviewDialog({ open });
  };

  return {
    boardState,
    setBoardState,
    showAnswer,
    setShowAnswer,
    showSpin,
    setShowSpin,
    overviewDialog,
    setOverviewDialog,
    handleOverviewDialog,
  };
};
