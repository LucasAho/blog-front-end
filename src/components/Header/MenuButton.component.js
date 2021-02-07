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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (ref) => {
        setAnchorEl(null);
        props.handleClickCB(ref);
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
                <MenuItem onClick={()=>{
                    handleClose('bioRef');
                }}>
                    Bio
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('portRef');
                }}>
                    Portfolio
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('blogRef');
                }}>
                    Blog
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('podRef');
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