import React from 'react';
import { Grid, Button, IconButton, Typography, AppBar, Toolbar, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RightHeaderPane, LeftHeaderPane } from './HeaderPanes.component';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flexstart',
    paddingBottom: '1rem',
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
  title: {
    width: '100%',
    textAlign: 'center',
  },
  headerButton: {
    marginLeft: '1rem',
  },
}));

export default function HeadAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary' className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h3" noWrap>
            Lucas Asher
          </Typography>
        </Toolbar>

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