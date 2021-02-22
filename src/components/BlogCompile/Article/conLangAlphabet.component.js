import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { borders } from '@material-ui/system';
import FirstPillarFormatted from "./../../MainCompile/imageAssets/FirstPillarFormatted.png";
import Commandments from "./../../MainCompile/imageAssets/6Commands.png";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1
    },
    headImg: {
       //borderRadius: '1rem',
        borderColor: "#180D35"
    }

}));

export default function ConLang(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root} mx="auto" px="1rem">
            <Grid container justify="center">
                <Grid item md={7} align="center">
                    <Typography variant='h2' align="center">
                        The First Pillar of the Old Stone
                    </Typography> : 
                    <Box mx="auto" align="center">
                        <Typography variant='subtitle2' align="center">
                            <i>Posted: </i> Feb/19/21 {" | "}
                            <i>by: </i>Lucas Asher {" | "}
                            <i>topic: </i> <Link>ConLangs</Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} >
                    <Box my="1rem" border={2}>
                        <img alt="Tukren Script" width="100%" src={Commandments}></img>
                    </Box>
                </Grid>
            </Grid>
            <Box pt="1rem" mx="auto" py='1rem' align="center" width="70%" mx="auto">
                <Typography variant="h6" align="center" gutterBottom>
                    <i>The first of six pillars supporting Oradren's Temple.</i>
                </Typography>
                <img alt="Tukren Script" width="100%" src={FirstPillarFormatted}></img>
            </Box>
            <Grid container spacing={4}> 
                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom align="justify">
                        IPA Tukrøn
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                        jun dan'ɹadɹøn niɹɮat da:mis i'ɹohi:ɹøn do'tømf kint ɬamunk boɟ, gin kai do'tømf wøɹz zab'ɬitsdag cakunk. 
                        <br/>
                        <b>Pronounciation Guide:</b>
                        <br/>
                        yune dan-rad-REN neer-ZLAT DAH-mees ee-ro-HI-ren do-TEMF keent slam-OONK botd, geen kai do-TEMF wearz zab-sleets-DAG ttak-OONK.
                    </Typography>
                </Grid> 
                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom align="justify">
                        English Full Translation
                    </Typography>
                    <Typography variant="body1" align="justify">
                        May the people of stone only deepen the colony in the name of the divine search, lest they lead the colony into the unknowable cavern.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}> 
                <Grid item md={4}>
                    <Typography variant="h5" align="center">
                        Tukrøn Phrase
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h5" align="center">
                        Literal Translation
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h5" align="center">
                        Interpretation
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="body1" align="justify">
                        jun dan'ɹadɹøn niɹɮat da:mis 
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                        (yune dan-rad-REN near-ZLAT DAH-mees)
                    </Typography>
                </Grid> 
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        "For the Old Stone's ancient chamber search command" 
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        "In the name of the search"
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body1" align="justify">
                        i'ɹohi:ɹøn do'tømf kint ɬamunk boɟ 
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                        (ee-ro-HI-ren do-TEMF keent slam-OONK botd)
                    </Typography>
                </Grid> 
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        "The facet of stone the colony may only expand(future habitual tense)"
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        "The people of stone may only expand upon the colony"
                    </Typography>
                </Grid> 
                <Grid item sm={4}>
                    <Typography variant="body1" align="justify">
                        gin kai do'tømf wøɹz zab'ɬitsdag cakunk
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                        (geen kai do-TEMF wearz zab-sleets-DAG ttak-OONK)
                    </Typography>
                </Grid> 
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        Translated literally as: <br/>
                        "Lest we the colony into the unknown cavern lead(future habitual tense)"
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body1" gutterBottom align="justify">
                        But a better translation might be: <br/>
                        "Lest we lead the colony into the unknowable cavern"
                    </Typography>
                </Grid> 
            </Grid>
        </Box>
    );
}