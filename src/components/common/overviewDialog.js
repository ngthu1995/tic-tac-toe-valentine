import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import Card from "./card";
import { recipes } from "../../constants/recipes";

const checker = (arr, target) => {
  return target.every((v) => arr.includes(v));
};

const calculatePoints = ({ playerItems = [], recipes = [] }) => {
  let points = playerItems.length;

  recipes.forEach((recipe = {}) => {
    const { ingredients, points: recipePoint } = recipe;
    const canHaveRecipe = playerItems.length
      ? checker(
          playerItems.map((item = {}) => item.id),
          ingredients
        )
      : false;
    if (canHaveRecipe) {
      console.log("🚀 ~ recipes.forEach ~ recipePoint:", recipePoint);
      points += recipePoint;
    }
  });

  return points;
};

const OverviewDialog = (props) => {
  const {
    dialogState = {},
    handleDialog,
    showAnswer,
    setShowSpin,
    setShowAnswer,
    showSpin,
    handlePlayerItems,
    player1Items,
    player2Items,
    player1,
    player2,
  } = props;
  console.log("🚀 ~ OverviewDialog ~ player1Items:", player1Items);
  return (
    <Dialog
      fullWidth
      open={dialogState.open}
      onClose={() => {
        handleDialog({ open: false });
        setShowAnswer(false);
        setShowSpin(false);
      }}
      aria-labelledby="max-width-dialog-title"
      maxWidth="md"
    >
      <DialogTitle id="max-width-dialog-title">Status</DialogTitle>
      <DialogContent style={{ height: 400 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          style={{ height: 250 }}
        >
          <Grid item sm={12} md={6} style={{ textAlign: "center" }}>
            <DialogContentText>
              <Typography variant="body1">
                {player1 || "Player 1"} - {player1Items.length} items -{" "}
                {calculatePoints({ playerItems: player1Items, recipes })} pt
              </Typography>
            </DialogContentText>
            <Grid container spacing={2}>
              {player1Items.map((item, i) => {
                const { option } = item;
                return <Grid item>{option}</Grid>;
              })}
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            style={{ height: 200, color: "black", opacity: 1, marginRight: -1 }}
          />
          <Grid item sm={12} md={6} style={{ textAlign: "center" }}>
            <DialogContentText>
              <Typography variant="body1">
                {player2 || "Player 2"} - {player2Items.length} items -{" "}
                {calculatePoints({ playerItems: player2Items, recipes })} pt
              </Typography>
            </DialogContentText>
            <Grid container spacing={2}>
              {player2Items.map((item, i) => {
                const { option } = item;
                return <Grid item>{option}</Grid>;
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {recipes.map((recipe, i) => {
            const { name, uri, ingredients } = recipe;
            const canPlayer1Have = player1Items.length
              ? checker(
                  player1Items.map((item = {}) => item.id),
                  ingredients
                )
              : false;
            const canPlayer2Have = player2Items.length
              ? checker(
                  player2Items.map((item = {}) => item.id),
                  ingredients
                )
              : false;
            return (
              <Grid item key={i} xs={12} sm={6} md={3}>
                <Card
                  name={name}
                  uri={uri}
                  ingredients={ingredients}
                  canPlayer1Have={canPlayer1Have}
                  canPlayer2Have={canPlayer2Have}
                />
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleDialog({ open: false });
            setShowAnswer(false);
            setShowSpin(false);
          }}
          style={{
            boxShadow: "none",
            backgroundColor: "#f59692",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OverviewDialog;
