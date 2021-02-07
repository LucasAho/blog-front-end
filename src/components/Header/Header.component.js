import React from 'react';
import { Grid, AppBar, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { BioTextPane, BioHeadPane, ImageSlider } from './HeaderPanes.component';
import { SliderData } from './SliderData.component';
import MenuButton from "./MenuButton.component";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    padding: '1rem',
    backgroundColor: "#180D35"
  },
  AppBar: {
    minHeight: 128,
    alignItems: 'flexstart',
    paddingBottom: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  grid: {
    paddingBottom: '2rem'
  },
}));

export default function HeadAppBar() {
  const classes = useStyles();
  
  return (
    <Box className={classes.root} mx='auto'>
      
      <AppBar position="static" className={classes.AppBar}>
      ` <MenuButton/>
        <BioHeadPane />
        <Grid container >
          <Grid className={classes.grid} item md={5}>
            <BioTextPane />
          </Grid>
          <Grid className={classes.grid} item md>
            <ImageSlider slides={SliderData}/>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}