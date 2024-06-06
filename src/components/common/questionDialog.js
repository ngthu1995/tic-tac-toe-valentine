import React from "react";
import {
  Collapse,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import Wheel from "./wheel";

const QuestionDialog = (props) => {
  const {
    dialogState = {},
    handleDialog,
    showAnswer,
    setShowSpin,
    setShowAnswer,
    showSpin,
    handlePlayerItems,
  } = props;
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
      <DialogTitle id="max-width-dialog-title">{dialogState.title}</DialogTitle>
      <DialogContent>
        <ListItem button onClick={() => setShowAnswer(!showAnswer)}>
          <ListItemText primary={dialogState.content} />
        </ListItem>
        {dialogState.img && (
          <img
            src={dialogState.img}
            alt="question"
            style={{ minWidth: 500, paddingLeft: 16, paddingRight: 16 }}
          />
        )}
        <ListItem
          button
          onClick={() => setShowSpin(!showSpin)}
          style={{ overflow: "auto" }}
        >
          <Collapse in={showAnswer} timeout="auto" unmountOnExit>
            {(dialogState.answer || []).map((text, i) => {
              return <ListItemText component="div" key={i} primary={text} />;
            })}
          </Collapse>
        </ListItem>
        <ListItem style={{ justifyContent: "center" }}>
          <Collapse in={showSpin} timeout="auto" unmountOnExit>
            <Wheel
              handlePlayerItems={handlePlayerItems}
              currentPiece={dialogState.currentPiece}
            />
          </Collapse>
        </ListItem>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleDialog({ open: false });
            setShowAnswer(false);
            setShowSpin(false);
          }}
          variant="contained"
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

export default QuestionDialog;
