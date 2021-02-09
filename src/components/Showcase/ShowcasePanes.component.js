import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    titleDiv: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },

    title: {
        textAlign: 'center',
    },
    subTextDiv: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    media: {
        height: 300,
        width: '100%'
    },
    cardRoot: {
        maxWidth: 200,
        padding: '1rem',
        paddingTop: '0',
    },
}));

export function HeadPane() {
    const classes = useStyles();
    return (
        <Box>
            <div className={classes.titleDiv}>
                <Typography className={classes.title} variant="h3" noWrap>
                    Portfolio
                </Typography>
            </div>

            <div className={classes.subTextDiv}>
                <Typography variant="p">
                    A showcase of skills cultivated in full stack web development. The following apps display knowledge of creating MERN stacks, building out RESTful APIs, utilizating encryption libraries, and competency in visual design.
                </Typography>
            </div>
        </Box>
    );
}

export function CardPane(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot} color="darkPrimary" variant="outlined">
            <CardActionArea onClick={event => {
                window.location.href = props.link;
            }}>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="darkSecondary" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="darkSecondary" component="p">
                        {props.descript}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button size="small" color="dark" onClick={event => {
                window.location.href = props.buttonLink;
            }}>
                Checkout the Code
        </Button>
        </Card>
    );
}