import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import API from "../../../utility/blogApi";

const styles = theme => ({
    backGround: {
        backgroundColor: "#FFFFFF"
    }
});

class RecentArticle extends Component {
    state = {
        searchNodes: "",
        title: "",
        blurb: "",
        paragraphs: []
    };
    componentDidMount() {
        this.loadArticle(this.props.articleId);

    }
    loadArticle = id => {
        API.getPostById(id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    blurb: res.data.blurb,
                    paragraphs: res.data.paragraphs
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { classes } = this.props
        return (
            <Box className={classes.backGround} mx="auto" px="1rem">
                <Typography variant='h2' align="center">
                    {this.state.title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {this.state.blurb}
                </Typography>
                {this.state.paragraphs.map(p => 
                    <div>
                    <br/>
                        <Typography variant="p" align="justify">{p}</Typography>
                    <br/>    
                    </div>
                )}
            </Box>
        )
    }
}
export default withStyles(styles, { withTheme: true })(RecentArticle);