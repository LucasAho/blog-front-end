import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(ipa, latin, img) {
    return { ipa, latin, img };
}

const rows = [
    createData('a', "A", "https://i.imgur.com/WEFVIM6.png"),
    createData('b', "B", "https://i.imgur.com/mQTFGMU.png"),
    createData('p', "P", "https://i.imgur.com/E2FfHq4.png"),
    createData('t', "T", "https://i.imgur.com/XEtihga.png"),
    createData('d', "D", "https://i.imgur.com/daZJDI9.png"),
    createData('c', "TT", "https://i.imgur.com/M71iHfg.png"),
    createData('ɟ', "TD", "https://i.imgur.com/XbpcsaX.png"),
];

export default function AlphabetTable() {
    const classes= useStyles;
    return(
    <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>IPA Letter</TableCell>
                    <TableCell align="right">Latinized Letter</TableCell>
                    <TableCell align="right">Tukrøn Rune</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.ipa}
                        </TableCell>
                        <TableCell align="right">{row.latin}</TableCell>
                        <TableCell align="right"><img alt="Rune" src={row.img} /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}