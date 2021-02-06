import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Paper, Grid, Tabs, Tab, Typography } from '@material-ui/core';
import { } from './FooterPanes.component'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '960px',
        padding: '1rem',
        backgroundColor: "#180D35"
    },
    crText: {
        textColor: "#FFFFFF",
        textAlign: 'center',
    }
}));

export default function BlogBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className={classes.root} mx='auto'>
            
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Contact Me" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
                <Grid container>
                    <Grid item>
                        <Typography align='center' className={"crText"} variant="caption">
                            ©Copyright. All rights reserved
                        </Typography>
                    </Grid>
                </Grid>
                
            
        </Box>
    );
}