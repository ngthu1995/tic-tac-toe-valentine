/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles";
import Link from "@material-ui/core/Link";
import Header from "./common/header";
import Row from "./board/row";
import {
  TextField,
  Container,
  CssBaseline,
  Collapse,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { useHomePage } from "../hooks";
import { useBoard } from "../hooks/useBoard";
import QuestionDialog from "./common/questionDialog";
import OverviewDialog from "./common/overviewDialog";
import xLogo from "../img/x.png";
import heartLogo from "../img/heart.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = (props) => {
  const classes = useStyles();

  const {
    currentPiece,
    arrayBoard,
    setNumberCell,
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
  } = useHomePage();

  const {
    boardState,
    setBoardState,
    showAnswer,
    setShowAnswer,
    showSpin,
    setShowSpin,
    overviewDialog,
    setOverviewDialog,
    handleOverviewDialog,
  } = useBoard();

  return (
    <React.Fragment>
      <main className={classes.root}>
        <CssBaseline />
        <AppBar
          position="relative"
          color="transparent"
          style={{ backgroundColor: "#fbd4d7" }}
        >
          <Toolbar>
            <Header
              player1={player1}
              player2={player2}
              handleNameChange={handleNameChange}
              handleOverviewDialog={handleOverviewDialog}
            />
          </Toolbar>
        </AppBar>
        <div className={classes.heroContent}>
          <Container component="main" maxWidth="xlg" sx={{ mb: 4 }}>
            {arrayBoard === null ? (
              <>
                <div className="input-custom d-flex align-items-center justify-content-center">
                  <TextField
                    type="number"
                    required
                    label={"Board Size (5-20)"}
                    onChange={(event) => {
                      setBoardState({
                        ...boardState,
                        numbercell: event.target.value,
                      });
                    }}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        if (
                          boardState.numbercell === null ||
                          (!Number.isInteger(boardState.numbercell) &&
                            (parseInt(boardState.numbercell) < 5 ||
                              parseInt(boardState.numbercell) > 20))
                        ) {
                          alert("Invalid data!");
                          return;
                        }
                        setNumberCell(boardState.numbercell);
                      }
                    }}
                  />
                </div>
              </>
            ) : (
              <Grid container direction="column" alignContent="center">
                <Grid item>
                  <p>
                    ACTIVE:
                    <img
                      src={currentPiece === "X" ? xLogo : heartLogo}
                      style={{ maxWidth: 30, margin: 10 }}
                      alt="active"
                    />
                  </p>
                  <p>
                    {" "}
                    Result :{" "}
                    {isWin === 1 ? (
                      <span>{currentPiece} WINS</span>
                    ) : isWin === 0 ? (
                      <span>DRAW</span>
                    ) : null}
                  </p>
                  <button onClick={() => resetMap()} className="btn btn-info">
                    Reset
                  </button>
                </Grid>
                <Grid
                  item
                  style={{
                    border: "0.5px black solid",
                    borderRadius: 5,
                    backgroundColor: "white",
                  }}
                >
                  {arrayBoard.map((e, index) => {
                    return (
                      <div key={index}>
                        <Row
                          elements={e}
                          tick={(row, col) => tick(row, col)}
                          row={index}
                          piecesWin={piecesWin}
                        />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            )}
          </Container>
          <QuestionDialog
            dialogState={dialogState}
            handleDialog={handleDialog}
            showAnswer={showAnswer}
            setShowSpin={setShowSpin}
            setShowAnswer={setShowAnswer}
            showSpin={showSpin}
            handlePlayerItems={handlePlayerItems}
          />
          <OverviewDialog
            dialogState={overviewDialog}
            handleDialog={handleOverviewDialog}
            player1Items={player1Items}
            player2Items={player2Items}
            showAnswer={showAnswer}
            setShowSpin={setShowSpin}
            setShowAnswer={setShowAnswer}
            showSpin={showSpin}
            handlePlayerItems={handlePlayerItems}
            player1={player1}
            player2={player2}
          />
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Tic-tac-toe
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          2024
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Home;
