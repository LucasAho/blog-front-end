import React, { Component, useState, useRef } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Typography, Box, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => createStyles({
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    menu: {
        opacity: '90%',
        backgroundColor: ""
    }
}));

const MenuButton = (props) => {
    const classes = useStyles();
    const ref = React.createRef();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleClose = (ref) => {
        setAnchorEl(null);
        ref.current.scrollIntoView({ behavior: 'smooth' });
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
                <MenuItem onClick={() => {
                    handleClose();
                    handleClick();
                }}>Bio</MenuItem>
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
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