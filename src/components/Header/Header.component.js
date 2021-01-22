import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge, Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FirstPage from "../../imageAssets/FirstPage.jpg";
import placeholder from "../../imageAssets/placeholder.png";

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
    paddingBottom: '1rem'
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
    marginLeft: '2rem',
    marginRight: '2rem',
    paddingLeft: '2rem',
    paddingBottom: '2rem'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    display: 'none',
    marginBottom: '1rem',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  miniText: {
    marginLeft: theme.spacing(2),
    textAlign: 'justified',
    width: '75%'
  },
  miniTextA: {
    marginBottom: '1rem',
    textAlign: 'left',
    marginLeft: '1rem',
  },
  headerButton: {
    marginLeft: '1rem',
  },
  imageGrid: {
    marginLeft: '1rem'
  },


  /*unused classes
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
     */
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function HeadAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            </IconButton>
          </div>
        </Toolbar>

        <Grid container spacing={2} className={classes.grid}>
          <Grid container md={4} spacing={4}>
            <Grid item>
              <Typography className={classes.miniTextA} variant="p">
                There are many variations of passages of Lorem Ipsum available
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.miniText} variant="h4">
                High Converting Landing Page Lorem Ipsum
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.headerButton} variant="contained">Button</Button>
            </Grid>
          </Grid>

          <Grid container md={6} spacing={2} className={classes.imageGrid}>
            <Grid item>
              <img alt='Carousel' src={placeholder} width='125%'></img>
            </Grid>
          </Grid>
        </Grid>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}