import React, { Component } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import API from '../../../utility/blogApi';
import { Link } from 'react-router-dom';

const styles = theme => ({
    backGround: {
        //backgroundColor: "#1180D3"
    }
});

class SidebarMenu extends Component {
    state = {
        searchNodes: "",
        apiObj: []
    };
    componentDidMount() {
        API.getAllPosts()
        .then(res => {
            this.sortData(res.data);  
        });
    }
    sortData = (apiObj) => {
        let tempApiObj = [];
        apiObj.map(article => {
            tempApiObj.push(article);
        });
        if (tempApiObj.length === apiObj.length) {
            this.setState({
                apiObj: tempApiObj
            });
        } 
    }

    render () {
        const { classes } = this.props
        return (
            <Box className={classes.backGround}>
                <Grid container direction='column'>
                    <Typography variant="h5">
                        Recent Articles
                    </Typography>
                    {this.state.apiObj.map((obj, i) => 
                        <Grid item key={i}>
                            <Link to={"/blog/" + obj._id }>
                                {obj.title}
                            </Link>
                        </Grid>
                    )}
                    <Link to={"/blog/conlang"}>
                        First Pillar of the Old Stone
                    </Link>
                </Grid>
            </Box>
    )}
}
export default withStyles(styles, { withTheme: true })(SidebarMenu);