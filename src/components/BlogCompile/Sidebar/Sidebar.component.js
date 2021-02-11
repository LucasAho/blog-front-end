import React, { Component } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    backGround: {
        backgroundColor: "#1180D3"
    }
});

class SidebarMenu extends Component {
    state = {
        searchNodes: ""
    };
    render () {
        const { classes } = this.props
        return (
            <Box className={classes.backGround}>
                <Grid container direction='column'>
                    
                </Grid>
            </Box>
    )}
}
export default withStyles(styles, { withTheme: true })(SidebarMenu);