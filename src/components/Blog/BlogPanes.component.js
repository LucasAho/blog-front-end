import React from 'react';
import { Box, Typography, Card, CardActions, CardMedia, CardContent, CardActionArea, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    title: {
        textAlign: 'center',
    },
    divA: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    blogSubText: {
        paddingBottom: '1rem',
    },
    miniText: {
        textAlign: 'center',
    },
    cardSmall: {
        maxWidth: 360,
        marginBottom: "2rem",
    },
    cardMain: {
        maxWidth: 400,
        marginRight: '1rem',
        marginLeft: '1rem'
    },
    media: {
        height: 280,
    },
}));

export function HeadPane() {
    const classes = useStyles();
    return (
        <Box >
            <div className={classes.divA}>
                <Typography className={classes.title} variant="h3" noWrap>
                    Blog
                </Typography>
            </div>

            <div className={classes.blogSubText}>
                <Typography className={classes.miniText} variant="p">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Lorem ipsum dolor sit amet, cons ectetuer adipsicing elit.
                </Typography>
            </div>
        </Box>
    );
}

export function RecentPane() {
    const classes = useStyles();
    return (
        <Card className={classes.cardMain} variant="outlined">
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={""}
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

    );
}

export function SubPane(props) {
    const classes = useStyles();
    return (
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
        </Card>
    );
}