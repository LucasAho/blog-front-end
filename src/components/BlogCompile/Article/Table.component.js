import React from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    table: {
        minWidth: 700,
    },
    tableCell: {
        fontSize: '1.6rem',
    }
}));
const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: "1.5rem",
    },
    body: {
        fontSize: "1.2rem",

    },

}))(TableCell);

function createData(tukren, literal, interpret, phrase) {
    return { tukren, literal, interpret, phrase };
}

const rows = [
    createData(
        "yun dan'radren",
        "For the Old Stone's",
        "In the name of",
        "Preposition | Gentative Noun"),
    createData(
        "nirzlat dámis",
        "ancient chamber search command",
        "the divine search",
        "Indirect Object"),
    createData(
        "i'rohíren",
        "the facets of stone",
        "the people of stone",
        "Subject"),
    createData(
        "do'temf",
        "the Colony",
        " --- ",
        "Direct Object"),
    createData(
        "kint slamunk bodk",
        "exclusively expand(downwards)(future habitual) must",
        "must only deepen (Tukren verb 'slam' is directly used to say: digging the colony deeper)",
        "Verbal Phrase"),
    createData(
        "gin",
        "lest",
        " --- ",
        "Conjunction"),
    createData(
        "kai",
        "we",
        "---",
        "Subject-Pronoun"),
    createData(
        "do'temf",
        "the Colony", 
        " --- ",
        "Direct Object"),
    createData(
        "werz zab'slitsdag",
        "into the unknown cavern",
        "into the unknowable cavern(Tukren noun 'slitsdag' represents a chaotic entity) ",
        "Preposition | Indirect Object"),
    createData(
        "cakunk",
        "lead(a group)(future habitual)", 
        "lead",
        "Verb"),
];

export default function TranslationTable() {
    const classes = useStyles;
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <colgroup>
                        <col width="20%"/>
                        <col width="30%"/>
                        <col width="30%"/>
                        <col width="20%"/>
                    </colgroup>
                    <TableHead>
                        <TableRow >
                            <StyledTableCell align="center"><b>Tukren</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Literal Translation</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Interpretation</b> </StyledTableCell>
                            <StyledTableCell align="center"><b>Type</b> </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <StyledTableCell component="th" scope="row">{row.tukren}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.literal}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.interpret} </StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.phrase} </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}