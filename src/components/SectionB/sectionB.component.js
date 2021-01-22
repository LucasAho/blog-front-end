import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, Button, Typography, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import placeholder from "../../imageAssets/placeholder.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        paddingBottom: '2rem'
    },
    cardRoot: {
        maxWidth: 250,
        marginLeft: "1rem",
        marginRight: "1rem",
    },
    cardStack: {
        paddingTop: "1rem",
        marginLeft: "3rem",
        marginRight: "3rem",
    },
    title: {
        //width: '100%',
        textAlign: 'center',
    },
    subTextDiv: {
        //textAlign: 'center'\
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
    titleDiv: {
        alignItems: 'flexstart',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
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
            <AppBar className={classes.appBar} position="static" color="secondary">
                <div className={classes.titleDiv}>
                    <Typography className={classes.title} variant="h3" noWrap>
                        Projects
                    </Typography>
                </div>
                <div className={classes.subTextDiv}>
                    <Typography className={classes.miniText} variant="p">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Lorem ipsum dolor sit amet, cons ectetuer adipsicing elit.
                    </Typography>
                </div>
                <Grid container md={12} alignItem='center' className={classes.cardStack}>
                    <Grid container md={3} spacing={2} >
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
                                            <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
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
            </AppBar>
        </div>
    )
}