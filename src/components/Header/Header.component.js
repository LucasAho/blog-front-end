import React from 'react';
import { Grid, AppBar, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { LeftHeaderPane, ToolbarPane, ImageSlider } from './HeaderPanes.component';
import { SliderData } from './SliderData.component';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    padding: '1rem',
    backgroundColor: "#180D35"
  },
  AppBar: {
    minHeight: 750,
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
      <AppBar position="static" className={classes.AppBar}>

        <ToolbarPane />

        <Grid container >
          <Grid className={classes.grid} item md={5}>
            <LeftHeaderPane />
          </Grid>
          <Grid className={classes.grid} item md>
            <ImageSlider slides={SliderData}/>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}