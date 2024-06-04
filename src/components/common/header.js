import React from "react";
import { TextField, Grid } from "@material-ui/core";
import textLogo from '../../img/text_logo.png'
import heartLogo from '../../img/heart.png'
import xLogo from '../../img/x.png'

const Header = (props) => {
  const {handleNameChange, player1, player2, handleOverviewDialog} = props
    return (
      <Grid container justifyContent="space-evenly" spacing={4}>
        <Grid item  container md={4} alignItems="center" justifyContent="flex-end" spacing={2}>
          <Grid item >
          <img src={xLogo} style={{maxWidth: 30}} alt="x"/>
          </Grid>
          <Grid item >
        <TextField id="standard-required " label="Player 1" value={player1} onChange={(e) => handleNameChange(e)('player1')}/>
          </Grid>
        </Grid>
        <Grid item md={4}>
        <img src={textLogo} alt="logo" style={{maxWidth: 200, display: 'block', margin: 'auto'}} onClick={() => handleOverviewDialog({open: true})}/>
        </Grid>
        <Grid item container md={4} alignItems="center" spacing={2}>
          <Grid item>
            <img src={heartLogo} style={{maxWidth: 30}} alt="heart"/>
          </Grid>
          <Grid item>
          <TextField  id="standard-required1" label="Player 2" value={player2} onChange={(e) => handleNameChange(e)('player2')}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }

export default Header;
