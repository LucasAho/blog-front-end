
import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
//import ArticleInView from "./Article/Article.component"
import SidebarMenu from './Sidebar/Sidebar.component';
//import RecentArticleComponent from './Article/RecentArticle.component';
import Navbar from "./Navbar/Navbar.component";
import API from '../../utility/blogApi';
import ArticleCardComponent from './Article/ArticleCard.component';
import RecentArticle from './Article/RecentArticle.component';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            //backgroundColor: "#193469",
            maxWidth: '1280px'
        },
    },
}));

/*const parseAPI = () => {
    let resObj;
    API.getAllPosts()
        .then(res => {
            return(res.data);
            //console.log(resObj);
        })
        .catch(err => console.log(err));
}*/

export default function ArticleView(props) {
    const classes = useStyles();
    const [article, changeArticle] = useState(null);
    useEffect(()=>{
        API.getPostById(props.match.params.id)
        .then(res=> {
            changeArticle(res.data);
        })
        .catch(err => console.log(err));
    },[props.match.params.id]);
    //let artObj = parseAPI();
    //console.log(artObj);
    return (
        <Box className={classes.root} mx='auto'>
            <Navbar />
            <Grid container>
                <Grid item md={9}>
                    <RecentArticle
                        artObj={article}
                    />
                </Grid>
                <Grid item sm={3}>
                    <SidebarMenu />
                </Grid>
            </Grid>
        </Box>
    );
}