import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Scroll from 'react-scroll'


const useStyles = makeStyles((theme) => createStyles({
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    menu: {
        opacity: '90%',
        //color: "#000000",
    },
    // menuItem: {
    //     opacity: '90%',
    //     backgroundColor: "#000000",
    //     color: "#FFFFFF"
    // }
}));

const MenuButton = () => {
    const scroller = Scroll.scroller;

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (id) => {
        setAnchorEl(null);
        scroller.scrollTo(id, {
            duration: 500,
            smooth: true,
        });
    };

    return (
        <div>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className={classes.menuItem} onClick={()=>{
                    handleClose('home')
                }}>
                    Home
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={()=>{
                    handleClose('portfolio')
                }}>
                    Portfolio
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={()=>{
                    handleClose('blog')
                }}>
                    Blog
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={()=>{
                    handleClose('podcast')
                }}>
                    Podcast
                </MenuItem>
            </Menu>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
        </div>
    );
}
export default MenuButton;