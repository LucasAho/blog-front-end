import React, { Component } from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    backGround: {
        backgroundColor: "#FFF"
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class ArticleCard extends Component {
    state = {
        searchNodes: ""
    };
    render() {
        const { classes } = this.props
        return (
            <Box className={classes.backGround}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={this.props.image}
                            title={this.props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.blurb}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ArticleCard);