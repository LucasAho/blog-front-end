import React, { Component, useState, useRef } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Typography, Box, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Scroll from 'react-scroll'


const useStyles = makeStyles((theme) => createStyles({
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    menu: {
        opacity: '90%',
        backgroundColor: ""
    }
}));

const MenuButton = () => {
    var scroller = Scroll.scroller;
   
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (id) => {
        setAnchorEl(null);
        scroller.scrollTo(id, {
            duration: 100,
            //delay: 100,
            smooth: true,
            //containerId: 'blog',
            //offset: 50, // Scrolls to element + 50 pixels down the page
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
                <MenuItem onClick={()=>{
                    handleClose('home')
                }}>
                    Home
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('portfolio')
                }}>
                    Portfolio
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('blog')
                }}>
                    Blog
                </MenuItem>
                <MenuItem onClick={()=>{
                    handleClose('podcast')
                }}>
                    Podcast
                </MenuItem>
                {/*
                
                </MenuItem>
                <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >
                    <MenuItem onClick={handleClose}>
                        Portfolio
                    </MenuItem>
                </ScrollLink>
                <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >
                    <MenuItem onClick={handleClose}>
                        Blog
                    </MenuItem>
                </ScrollLink>
                <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    
                >
                    <MenuItem onClick={handleClose}>
                        Podcast
                    </MenuItem>
                </ScrollLink>
    */}
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