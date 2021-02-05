import React from 'react';
import { Grid, AppBar, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RightHeaderPane, LeftHeaderPane, ToolbarPane } from './HeaderPanes.component';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    maxWidth: '960px'
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
    <Box className={classes.root} mx='auto'>
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
    </Box>
  );
}