import React, { useState } from 'react';
import { Button, Typography, Box, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SliderData } from "./SliderData.component";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles((theme) => createStyles({
    mainText: {
        paddingTop: '1.5rem',
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
            <Typography align="center" variant="subtitle2">
                Author, rock climber, and full stack web developer
            </Typography>
            <Typography className={classes.mainText} align="left" variant="body1">
                Hello! I am a full stack web developer located out of Colorado. I work my absolute hardest towards every goal, both in my personal and professional life.
                <br/>
                When I'm not honing my programming abilities, I love rock climbing and hiking. 
                I have also spent the last two years worldbuilding: writing three constructed languages, drafting my manuscript, and sculpting a universe. 
                <br/>
                This webpage navigates from my programming experience to my creative endeavors, and will be regularly updated as I expand my horizons.
            </Typography>
            {/* useless button?
            <Button className={classes.headerButton} variant="contained">Button</Button>
            */}
        </div>
    );
}

export const ImageSlider = ({ slides }) => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const length = slides.length;

    setTimeout(
        () => setCurrent(current === length - 1 ? 0 : current + 1), 
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