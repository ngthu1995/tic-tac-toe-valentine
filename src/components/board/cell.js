import React, {useState} from "react";
import { pieces } from "../../constants/action.types";
import loveLogo from "../../img/heart.png"
import xLogo from "../../img/x.png"

const Cell =(props) => {
    const { data, row, col, tick, piecesWin, cellPerRow } = props;
    const class_css_o = "not-focusable btn btn-default btnO btn-piece"
    const class_css_x = "not-focusable btn btn-default btnX btn-piece"
    const class_css_normal = "not-focusable btn btn-default btn-piece"
  
    let my_class_css =
      data === pieces.O
        ? class_css_o
        : data === pieces.X
        ? class_css_x
        : class_css_normal;
    if (piecesWin != null) {
      for (var i = 0; i < piecesWin.length; i++) {
        // console.log('winning?',{data, row, col, tick, piecesWin })
        if (piecesWin[i][0] === row && piecesWin[i][1] === col){
          my_class_css = my_class_css.concat(" btn-win");}
      }
    }
    const num = (col)+ 1+ cellPerRow*row
    const val = data === 'X' ? xLogo : loveLogo
    return (
      <button
        className={my_class_css}
        onClick={() => {
          if (data === null) tick(row, col);
        }}
        style={{ borderRadius: 0}}
      >
        {data? <img src={val} style={{width: 40, height: 40}}/> : <span style={{opacity: data ? 1 : 0.4}}>{num}</span>}
      </button>
    );
}
export default Cell;
