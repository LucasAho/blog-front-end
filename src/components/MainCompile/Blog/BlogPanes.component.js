import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardActions, CardMedia, CardContent, CardActionArea, } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    //HeadPane Classes
    headText: {
        textAlign: 'center',
    },
    headerDiv: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    subDiv: {
        paddingBottom: '1rem',
    },
    
    //RecentCard Classes
    cardMain: {
        maxWidth: 450,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '550'
        },
    },
    media: {
        height: 280,
    },

    //SmallCard Classes
    cardSmall: {
        maxWidth: 450,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '550px'
        },
        marginBottom: "2rem",
    },
}));

export function HeadPane() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerDiv}>
                <Typography className={classes.headText} variant="h3" noWrap>
                    Blog
                </Typography>
            </div>

            <div align="center" className={classes.subDiv}>
                <Typography variant="p">
                    A mixture of politically minded essays, stories of my personal walk through life, and creative works associated with my world building and novel series
                </Typography>
            </div>
        </div>
    );
}

export function RecentPostPane(props) {
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
                <Link to="/blog">
                    Checkout the full blog!
                </Link>
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
                    <Typography gutterBottom>
                        {props.date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.descript}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}