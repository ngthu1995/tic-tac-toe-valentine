import React from "react";
import Cell from "./cell";

const Row = (props) =>{
    const { elements, row, tick, piecesWin } = props;
    const cells = elements.map((e, index) => (
      <Cell
        cellPerRow={elements.length}
        data={e}
        row={row}
        col={index}
        tick={(row, col) => tick(row, col)}
        piecesWin={piecesWin}
      />
    ));
    return cells;
}

export default Row;
