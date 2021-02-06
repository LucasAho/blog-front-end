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
        textAlign: 'center'
    },
    cardSmall: {
        maxWidth: 360,
        marginBottom: "2rem",
    },
    cardMain: {
        maxWidth: 400,
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
                <Typography variant="p">
                    A mixture of politically minded essays, stories of my personal walk through life, and creative works associated with my world building and novel series
                </Typography>
            </div>
        </Box>
    );
}

export function RecentPane(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardMain} variant="outlined">
            <CardActionArea onClick={event => {
                window.location.href = props.link;
            }}>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title={props.title}
                />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descript}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={event => {
                    window.location.href = props.link;
                }}>
                    Checkout the webpage!
                </Button>
            </CardActions>
        </Card>
    );
}

export function SubPane(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardSmall} variant="outlined">
            <CardActionArea onClick={event => {
                window.location.href = props.link;
            }}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descript}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}