import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, Button, Typography, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import placeholder from "../../imageAssets/placeholder.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    cardMain: {
        maxWidth: 640
    },
    cardSmall: {
        maxWidth: 360,
    },
    cardStack: {
        paddingTop: "1rem",
        marginLeft: "3rem",
        marginRight: "3rem",
    },
    title: {
        width: '100%',
        textAlign: 'center',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    miniText: {
        textAlign: 'center',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    media: {
        height: 280,
    },
    divA: {
        minHeight: 128,
        alignItems: 'flexstart',
        paddingTop: theme.spacing(1),
    },
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

export default function BlogBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <div className={classes.divA}>
                    <Typography className={classes.title} variant="h3" noWrap>
                        Blog
                    </Typography>
                </div>
                <div className={classes.root}>
                    <Grid container md={6}> {/*needs to be centered*/}
                        <Grid item>
                            <Typography className={classes.miniText} variant="p">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Lorem ipsum dolor sit amet, cons ectetuer adipsicing elit.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container md={12} className={classes.cardStack}>
                        <Grid container md={6}>
                            <Grid item>
                                <Card className={classes.cardMain} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={placeholder}
                                            title="Against the Grain"
                                        />
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>
                                                January 20th, 2020
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Going against the grain, AngelPad kills its demo
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.
                                                Lorem ipsum dolor sit amet, cons ectetuer adipsicing elit, sed diam nonummy nibh euismod tincidunt.
                                                There are many variations of passsages of Lorem Ipsum abailable, but the majority have suffered alteration in form.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Read Full
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container md={6} direction="column">
                            <Grid item>
                                <Card className={classes.cardSmall} variant="outlined">
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>
                                                January 19th, 2020
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                News Title of Lorem Ipsum
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. 
                                                Lorem upsum dolor sit amet, cons ectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={classes.cardSmall} variant="outlined">
                                    <CardActionArea>
                                        <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                                January 18th, 2020
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lorem Ipsum Title of News
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lorem upsum dolor sit amet, cons ectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.
                                                Lorem upsum dolor sit amet, cons ectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </AppBar>
        </div>
    )
}