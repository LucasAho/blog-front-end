import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { borders } from '@material-ui/system';
import FirstPillarFormatted from "./../../MainCompile/imageAssets/FirstPillarFormatted.png";
import Commandments from "./../../MainCompile/imageAssets/6Commands.png";
import TranslationTable from './Table.component';

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
            <Box pt="2rem" mx="auto" pb='1rem' align="center" width="100%"> 
                <Typography variant="body1" align="left" paragraph>
                    The religion celebrated across all known Rohíren colonies is broken into many sects, each separate colony celebrating the same god by various means. 
                    The only absolute in these globe-spanning variants is their unbroken adherence to the 6 Pillars, a set of standards that the Rohíren kings and commonfolk alike 
                    must follow, as one in our world might follow the 10 commandments or eightfold path. <br/> It is only by this faith that the colonies maintain uninterrupted progress towards their united goal: 
                    uncovering the mythic chamber of the Old Stone and initiating a golden age for their species.
                    While this is most likely mere superstition, these rules do provide an undeniable boon towards maintaining the colony's stability in their confined environments.
                </Typography>
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
                        yun dan'radren nirzlat dámis i'rohíren do'temf kint slamunk botk, gin kai do'temf werz zab'slitsdag cakunk. 
                        <br/>
                        <b>Pronounciation Guide:</b>
                        <br/>
                        yune dan-rad-REN neer-ZLAT DAH-mees ee-ro-HI-ren do-TEMF keent slam-OONK botk, geen kai do-TEMF wearz zab-sleets-DAG cak-OONK.
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
            <Grid container spacing={4}> 
                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom align="justify">
                        Translation Breakdown
                    </Typography>
                </Grid>
            </Grid>
            <TranslationTable/>
        </Box>
    );
}