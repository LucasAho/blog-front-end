import React, { Component, useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import API from "../../../utility/blogApi";

const styles = theme => ({
    backGround: {
        backgroundColor: "#FFFFFF"
    }
});

class RecentArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchNodes: "",
            title: "",
            blurb: "",
            date: "",
            image: "",
            paragraphs: []
        }
    }
    componentDidUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.refreshArticle();
        }
    }
    
    refreshArticle = () => {
        this.setState({
            title: this.props.artObj.title,
            blurb: this.props.artObj.blurb,
            date: this.props.artObj.dateWritten,
            image: this.props.artObj.image,
            genre: this.props.artObj.genre,
            paragraphs: this.props.artObj.paragraphs
        });
    }



    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.backGround} mx="auto" px="1rem">
                <Grid container>
                    <Grid item sm={8} align="center">
                        <Typography variant='h2' align="center">
                            {this.state.title}
                        </Typography>
                        <Box mx="auto" align="center">
                                <Typography variant='subtitle2' align="center">
                                    <i>Posted: </i> {this.state.date + " | "}
                                    <i>by: </i>Lucas Asher {" | "}
                                    <i>topic: </i> <Link>{this.state.genre}</Link>
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box my="auto">
                            <img alt="Dynamic" width="100%" src={this.state.image}></img>
                        </Box>
                    </Grid>
                </Grid>
                <Box pt="1rem" align="center" width="70%" mx="auto">
                    <Typography variant="subtitle1" align="center">
                        {this.state.blurb}
                    </Typography>
                </Box>        

                    {this.state.paragraphs.map((p, i) =>
                        <Box my='1rem' key={i}>
                            <Typography variant="body1" align="justify">{p}</Typography>
                        </Box>
                    )}
            </Box>
        )
    }
}
export default withStyles(styles, { withTheme: true })(RecentArticle);
