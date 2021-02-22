import React, { useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
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
        height: 200,
        padding: '1rem',
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

function RecentPostPane(props) {
    const classes = useStyles();
    const history = useHistory();

    const routeNew = (id) => history.push("/blog/" + id);
    return (
        <Card className={classes.cardMain} variant="outlined">
            <CardActionArea onClick={() => routeNew(props.link)}>
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
                <Link className={classes.button} to={"/blog/60340ddb95cb383ea4723058"}>
                    Checkout the Blog!
                </Link>
            </CardActions>
        </Card>
    );
}
export default withRouter(RecentPostPane);
export function SubPane(props) {
    const classes = useStyles();
    const history = useHistory();
    const routeNew = (id) => history.push("/blog/" + id);
    return (
        <Card className={classes.cardSmall} variant="outlined">
            <CardActionArea onClick={() => routeNew(props.link)}>
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