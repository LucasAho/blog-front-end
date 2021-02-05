import React from 'react';
import { Grid, Button, IconButton, Typography, AppBar, Toolbar, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RightHeaderPane, LeftHeaderPane, ToolbarPane } from './HeaderPanes.component';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    minHeight: 128,
    alignItems: 'flexstart',
    paddingTop: '1rem',
    paddingBottom: '3rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  grid: {
    marginLeft: '1rem',
    marginRight: '1rem',
    paddingBottom: '2rem'
  },
}));

export default function HeadAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary' className={classes.AppBar}>

        <ToolbarPane />

        <Grid container >
          <Grid className={classes.grid} item md={5}>
            <LeftHeaderPane />
          </Grid>
          <Grid className={classes.grid} item md>
            <RightHeaderPane />
          </Grid>
        </Grid>

      </AppBar>
    </div>
  );
}