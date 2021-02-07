import React, { useState } from 'react';
import { Button, Typography, Box, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SliderData } from "./SliderData.component";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles((theme) => createStyles({
    subText: {
        textAlign: 'justified',
    },
    mainText: {
        textAlign: 'left',
    },
    headerButton: {
        marginTop: '1rem',
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flexstart',
        paddingBottom: '1rem',
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    leftDiv: {
        padding: '1rem'
    },
    slider: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    media: {
        width: '100%',
        borderRadius: 10
        
    },
}));

export function ToolbarPane() {
    const classes = useStyles();
    return (
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
    );
}

export function LeftHeaderPane() {
    const classes = useStyles();
    return (
        <div className={classes.leftDiv}>
            <Typography className={classes.subText} variant="p">
                Author, rock climber, and full stack web developer
            </Typography>
            <Typography className={classes.mainText} variant="h4">
                Welcome to my page, idk if an about me goes here?
            </Typography>
            <Button className={classes.headerButton} variant="contained">Button</Button>
        </div>
    );
}

export const ImageSlider = ({ slides }) => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const length = slides.length;

   
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    setTimeout(
        () => nextSlide(), 
        5000
    );
    if(!Array.isArray(slides) || slides.length <=0) {
        return null;
    }

    return (
        //This component will work to cycle image carousel
        <Box className={classes.slider}>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            
                            <img alt='Carousel' className={classes.media} src={slide.image}/>
                        )}
                    </div>
                );
            })}
        </Box>
    );
}