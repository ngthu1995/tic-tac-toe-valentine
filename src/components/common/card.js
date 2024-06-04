import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data as foodData } from "../common/wheel";

import xLogo from "../../img/x.png";
import heartLogo from "../../img/heart.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const { name, uri, ingredients, canPlayer1Have, canPlayer2Have } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="body1" component="p">
            {name}
          </Typography>
        }
        titleTypographyProps={{ align: "center" }}
      />
      <CardMedia className={classes.media} image={uri} title="Paella dish" />
      <CardActions disableSpacing>
        {canPlayer1Have && (
          <IconButton aria-label="add to favorites">
            <img src={xLogo} style={{ maxWidth: 20 }} alt="x" />
          </IconButton>
        )}
        {canPlayer2Have && (
          <IconButton aria-label="share">
            <img src={heartLogo} style={{ maxWidth: 25 }} alt="heart" />
          </IconButton>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            {ingredients.map((item, i) => {
              const foundItem = foodData.find((val) => val.id === item);
              return <Grid item>{foundItem.option}</Grid>;
            })}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
