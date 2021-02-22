import React, { useState } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { SliderData } from "./SliderData.component";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    //Header Classes
    root: {
        
    },
    //Text Classes
    bioDiv: {
        padding: '1rem'
    },
    bioText: {
        paddingTop: '1rem',
        //color: "#EBE5F9",
    },
    
    //ImageSlider Classes
    slider: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '2.5rem',
    },
    media: {
        maxWidth: "90%",
        borderRadius: 10
    },
}));

export function BioTextPane() {
    const classes = useStyles();
    return (
        <div className={classes.bioDiv}>
            <Typography className={classes.bioText} align="left" variant="body1">
                Hello! I am a full stack web developer located out of Colorado. I work my absolute hardest towards every goal, both in my personal and professional lives.
            </Typography>
            <Typography className={classes.bioText} align="left" variant="body1">
                When I'm not honing my programming abilities, I love rock climbing and hiking.
                I have also spent the last two years worldbuilding: writing three constructed languages, drafting my manuscript, and sculpting a universe.
            </Typography>
            <Typography className={classes.bioText} align="left" variant="body1">
                This webpage navigates from my programming experience to my creative endeavors; it will be regularly updated as I expand my horizons.
            </Typography>
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
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <Box align="center" >
            <div className={classes.slider}>
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img alt='Carousel' className={classes.media} src={slide.image} />
                            )}
                        </div>
                    );
                })}
            </div>
        </Box>
    );
}