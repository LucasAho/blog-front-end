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
        //color: "#FFFFFF"
    }
}));
const StyledTableCell = withStyles((theme) => ({
    head: {
        //backgroundColor: theme.palette.common.black,
        //color: theme.palette.common.
        fontSize: "1.5rem",
    },
    body: {
        fontSize: "1.2rem",

    },

}))(TableCell);

function createData(tukren, literal, interpret) {
    return { tukren, literal, interpret };
}

const rows = [
    createData(
        "yun dan'radren nirzlat dámis ",
        "For the Old Stone's ancient chamber search command",
        "In the name of the divine search"),
    createData(
        "i'rohíren do'temf kint slamunk botk",
        "The facet of stone the colony may only expand (future habitual tense) downward",
        "The people of stone may only expand the colony"),
    createData(
        "gin kai do'temf werz zab'slitsdag cakunk.",
        "Lest we the colony into the unknown cavern lead(future habitual tense)",
        "Lest we lead the colony into the unknowable cavern"),
];

export default function TranslationTable() {
    const classes = useStyles;
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <colgroup>
                        <col width="33%"/>
                    </colgroup>
                    <TableHead>
                        <TableRow >
                            <StyledTableCell align="center"><b>Tukren</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Literal Translation</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Interpretation</b> </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <StyledTableCell component="th" scope="row">{row.tukren}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.literal}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.interpret} </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}