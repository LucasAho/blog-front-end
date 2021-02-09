import React from 'react';
import { Grid, AppBar, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { BioTextPane, BioHeadPane, ImageSlider } from './HeaderPanes.component';
import { SliderData } from './SliderData.component';
import MenuButton from "./MenuButton.component";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '2rem'
    },
    backgroundColor: "#180D35"
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0rem'
    },
    paddingBottom: '2rem'
  },
}));

export default function HeadAppBar() {
  const classes = useStyles();
  return (
    <Box className={classes.root} px='1rem' pt='1rem' pb='2rem' mx='auto'>
        <MenuButton 
        />
        <BioHeadPane />
        <Grid container align="center">
          <Grid className={classes.grid} item md={5}>
            <BioTextPane />
          </Grid>
          <Grid className={classes.grid} item sm>
            <ImageSlider slides={SliderData}/>
          </Grid>
        </Grid>
    </Box>
  );
}