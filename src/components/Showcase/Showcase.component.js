import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, Button, Typography, CardMedia, CardContent, Box } from '@material-ui/core';
import stockSki from "../../imageAssets/stockSki.jpg";
import stockDnD from "../../imageAssets/stockDnD.jpg";
import stockFriends from "../../imageAssets/stockFriends.jpg";
import stockTrivia from "../../imageAssets/stockTrivia.jpg";

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
        marginBottom: '1.25rem'
    },
    miniText: {
        textAlign: 'center',
        display: 'block',
    },
    media: {
        height: 300,
        width: 200
    },
    titleDiv: {
        alignItems: 'flexstart',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    },
    sectionDesktop: {
        display: 'flex',
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
            <Box className={classes.appBar} color="secondary">
                <div className={classes.titleDiv}>
                    <Typography className={classes.title} variant="h3" noWrap>
                        Portfolio
                    </Typography>
                </div>
                <Box className={classes.subTextDiv} mx='auto'>
                    <Typography className={classes.miniText} variant="p">
                        A showcase of skills cultivated in full stack web development. The following apps display knowledge of creating MERN stacks, building out RESTful APIs, utilizating encryption libraries, and competency in visual design.
                    </Typography>
                </Box>
                <Grid container md={12} spacing={2} flexWrap="nowrap" justify='center' className={classes.cardStack}>
                    <Grid item align='center'>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardActionArea onClick={event => {
                                window.location.href = "https://lucasaho.github.io/Project1/";
                            }}>
                                <CardMedia
                                    className={classes.media}
                                    image={stockSki}
                                    title="Ski & Board Report"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="darkSecondary" component="h2">
                                        Ski & Board Report
                                    </Typography>
                                    <Typography variant="body2" color="darkSecondary" component="p">
                                        Find out the latest information about your favorite Colorado ski resort. 
                                    </Typography>
                                </CardContent>  
                            </CardActionArea>
                            <Button size="small" color="dark" onClick={event => {
                                window.location.href = "https://github.com/LucasAho/Project1";
                            }}>
                                Checkout the Code
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item align='center'>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardActionArea onClick={event => {
                                window.location.href = "https://hidden-savannah-88913.herokuapp.com/";
                            }}>
                                <CardMedia
                                    className={classes.media}
                                    image={stockDnD}
                                    title="DnD Manager"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        DnD Tool
                                    </Typography>
                                    <Typography variant="body2" color="darkSecondary" component="p">
                                        New to DnD? Tools, tricks, and data storage for Dungeon Masters and players. 
                                    </Typography>
                                </CardContent>
                                <Button size="small" color="dark" onClick={event => {
                                    window.location.href = "https://github.com/LucasAho/Project-2";
                                }}>
                                    Checkout the Code
                                </Button>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item align='center'>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardActionArea onClick={event => {
                                window.location.href = "https://quiet-gorge-84311.herokuapp.com/";
                            }}>
                                <CardMedia
                                    className={classes.media}
                                    image={stockFriends}
                                    title="Friend Finder"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="darkSecondary" component="h2">
                                        Friend Finder
                                    </Typography>
                                    <Typography variant="body2" color="darkSecondary" component="p">
                                        Are you more similar to me, my ex girlfriend, or Baby Yoda? (Yes, we all hope it's Baby Yoda.)
                                    </Typography>
                                </CardContent>
                                <Button size="small" color="dark" onClick={event => {
                                window.location.href = "https://github.com/LucasAho/crispy-guacamole";
                                }}>
                                    Checkout the Code
                                </Button>
                                
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                    <Grid item align='center'>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardActionArea onClick={event => {
                                window.location.href = "https://lucasaho.github.io/TriviaGame/";
                            }}>
                                <CardMedia
                                    className={classes.media}
                                    image={stockTrivia}
                                    title="Animal Trivia"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Trivia Game
                                    </Typography>
                                    <Typography variant="body2" color="dark" component="p">
                                        Snow leopards, guinea pigs, octopi...oh my! Think you know animals? Let's find out!
                                    </Typography>
                                </CardContent>
                                <Button size="small" color="dark" onClick={event => {
                                    window.location.href = "https://github.com/LucasAho/TriviaGame";
                                }}>
                                    Checkout the Code
                                </Button>
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}