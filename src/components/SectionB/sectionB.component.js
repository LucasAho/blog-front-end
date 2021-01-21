import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, Button, Typography, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import placeholder from "../../imageAssets/placeholder.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    cardRoot: {
        maxWidth: 345
    },
    cardStack: {
        paddingTop: "2rem",
        margin: "3rem"
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
        height: 140,
    },
    toolbar: {
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

export default function ProjectBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h3" noWrap>
                        Projects
                    </Typography>
                </Toolbar>
                <div className={classes.root}>
                    <Grid container md={6}> {/*needs to be centered*/}
                        <Grid item>
                            <Typography className={classes.miniText} variant="p">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Lorem ipsum dolor sit amet, cons ectetuer adipsicing elit.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container md={12} className={classes.cardStack}>
                        <Grid container md={3}>
                            <Grid item>
                                <Card className={classes.cardRoot} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={placeholder}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Title
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                        <Grid container md={3}>
                            <Grid item>
                                <Card className={classes.cardRoot} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={placeholder}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Title
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                        <Grid container md={3}>
                            <Grid item>
                                <Card className={classes.cardRoot} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={placeholder}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Title
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                        <Grid container md={3}>
                            <Grid item>
                                <Card className={classes.cardRoot} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={placeholder}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Title
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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