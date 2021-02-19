import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    //Header Classes
    root: {
        
    },
    headText: {
        paddingBottom: '1rem',
        paddingTop: '1rem'
        //color: "#EBE5F9"
    },
}));
export default function HeaderReusable(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container justify="center">
                <Grid item sm={12}>
                    <Typography align="center" className={classes.headText} variant="h3">
                        {props.headText}
                    </Typography>
                </Grid>
                <Grid item sm={9} align="center">
                    <Typography align="center" variant={props.variant}>
                        {props.subText}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}