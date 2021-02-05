import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    titleDiv: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    cardRoot: {
        maxWidth: 200,
        padding: '1rem',
        paddingTop: '0'
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
        width: 250
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

/*
https://lucasaho.github.io/Project1/
https://github.com/LucasAho/Project1
https://hidden-savannah-88913.herokuapp.com/
https://github.com/LucasAho/Project-2
https://quiet-gorge-84311.herokuapp.com/
https://github.com/LucasAho/crispy-guacamole
https://lucasaho.github.io/TriviaGame/
https://github.com/LucasAho/TriviaGame
*/

export function CardPane(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot} variant="outlined">
        <CardActionArea onClick={event => {
            window.location.href = "https://lucasaho.github.io/Project1/";
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
            window.location.href = "https://github.com/LucasAho/Project1";
        }}>
            Checkout the Code
        </Button>
    </Card>
    );
}