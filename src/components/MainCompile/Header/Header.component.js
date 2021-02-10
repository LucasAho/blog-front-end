import React from 'react';
import { Grid, AppBar, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { BioTextPane, BioHeadPane, ImageSlider } from './Subcomponents/HeaderPanes.component';
import { SliderData } from './Subcomponents/SliderData.component';
import MenuButton from "./Subcomponents/MenuButton.component";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    padding: '1rem',
    backgroundColor: "#180D35",
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px'
    },
  },
  AppBar: {
    paddingTop: '0rem',
    padding: '2rem',
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
        <MenuButton
        />
        <BioHeadPane />
        <Grid container>
          <Grid className={classes.grid} item md={5}>
            <BioTextPane />
          </Grid>
          <Grid className={classes.grid} item md>
            <ImageSlider slides={SliderData} />
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}