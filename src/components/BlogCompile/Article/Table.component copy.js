import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(ipa, latin, img) {
    return { ipa, latin, img };
}

const rows = [
    createData('a', "A", "https://i.imgur.com/WEFVIM6.png"),
    createData('b', "B", "https://i.imgur.com/mQTFGMU.png"),
    createData('d', "D", "https://i.imgur.com/daZJDI9.png"),
    createData('ɟ', "TD", "https://i.imgur.com/XbpcsaX.png"),
    createData('h', "H", "https://i.imgur.com/CtIn6Ys.png"),
    createData('f', "F", "https://i.imgur.com/R72DjvV.png"),
    createData('k', "K", "https://i.imgur.com/DwPJgcX.png"),
    createData('ɢ', "G", "https://i.imgur.com/1V2WGNR.png"),
    createData('ø', "E", "https://i.imgur.com/IEWOddI.png"),
    createData('i', "I", "https://i.imgur.com/uBHMb1g.png"),
    createData('m', "M", "https://i.imgur.com/dQGuM8E.png"),
    createData('n', "N", "https://i.imgur.com/1VMpm3I.png"),
    createData('q', "Q", "https://i.imgur.com/rr5l589.png"),
    createData('p', "P", "https://i.imgur.com/E2FfHq4.png"),
    createData('o', "O", "https://i.imgur.com/AkRGGYi.png"),
    createData('s', "S", "https://i.imgur.com/fcofoRo.png"),
    createData('ɬ', "SL", "https://i.imgur.com/61Tsjh1.png"),
    createData('t', "T", "https://i.imgur.com/XEtihga.png"),
    createData('c', "TT", "https://i.imgur.com/M71iHfg.png"),
    createData('u', "U", "https://i.imgur.com/ASfoF5G.png"),
    createData('z', "Z", "https://i.imgur.com/IEWOddI.png"),
    createData('ɮ', "ZL", "https://i.imgur.com/uXFWTys.png"),
    createData('ɹ', "R", "https://i.imgur.com/Z4cDrqh.png"),
    createData('j', "Y", "https://i.imgur.com/pK6vO0v.png"),
    createData('w', "W", "https://i.imgur.com/H9iglPW.png"),
    createData('ai', "AI", "https://i.imgur.com/7msso8S.png"),
    createData('au', "AU", "https://i.imgur.com/2I8gkMW.png"),
    createData('iø', "IE", "https://i.imgur.com/7RlvcZZ.png"),
    createData('øi', "EI", "https://i.imgur.com/ceXkuHU.png"),
].sort((a, b) => (a.ipa < b.ipa ? -1 : 1));

const useStyles2 = makeStyles({
    table: {
        //minWidth: 500,
    },
});

export default function AlphabetTableWPages() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.ipa}>
                            <TableCell  style={{ width: 160 }} >
                                <b>{row.ipa}</b>
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <b>{row.latin}</b>
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <img alt="Rune"   width="30%" src={row.img} />
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}