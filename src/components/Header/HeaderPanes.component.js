import React, { useState } from 'react';
import { Typography, Toolbar, Grid } from '@material-ui/core';
import { SliderData } from "./SliderData.component";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    //Header Classes
    root: {
        flexGrow: 1,
        alignItems: 'flexstart',
        paddingBottom: '1rem',
    },
    headText: {
        paddingBottom: '1rem'
    },

    //Text Classes
    bioDiv: {
        padding: '1rem'
    },
    bioText: {
        paddingTop: '1rem',
    },
    
    //ImageSlider Classes
    slider: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: '2rem'
    },
    media: {
        width: '100%',
        borderRadius: 10
    }
}));

export function BioHeadPane() {
    const classes = useStyles();
    return (
        <Toolbar className={classes.root}>
            <Grid container>
                <Grid item md={12}>
                    <Typography align="center" className={classes.headText} variant="h3">
                        Lucas Asher
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography align="center" variant="h6">
                        Author, rock climber, and full stack web developer
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export function BioTextPane() {
    const classes = useStyles();
    return (
        <div className={classes.bioDiv}>
            <Typography className={classes.bioText} align="left" variant="body1">
                Hello! I am a full stack web developer located out of Colorado. I work my absolute hardest towards every goal, both in my personal and professional life.
                <br />
                <br />
                When I'm not honing my programming abilities, I love rock climbing and hiking.
                I have also spent the last two years worldbuilding: writing three constructed languages, drafting my manuscript, and sculpting a universe.
                <br />
                <br />
                This webpage navigates from my programming experience to my creative endeavors, and will be regularly updated as I expand my horizons.
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
    );
}