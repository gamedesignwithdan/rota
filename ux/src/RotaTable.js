import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function buildRows(rota) {
    const weekDays = Object.keys(rota.week1);
    console.log(weekDays);

    const week1Array = weekDays.map(day => {
        return (
            <StyledTableRow
                key={day + 1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell component="th" scope="row">{day}</StyledTableCell>
                <StyledTableCell align="right">
                    {new Date(rota.week1[day].date).toGMTString()}
                </StyledTableCell>
                <StyledTableCell align="right">{rota.week1[day].morning}</StyledTableCell>
                <StyledTableCell align="right">{rota.week1[day].afternoon}</StyledTableCell>
            </StyledTableRow>
        )
    })

    const week2Array = weekDays.map(day => {
        return (
            <StyledTableRow
                key={day + 2}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell component="th" scope="row">{day}</StyledTableCell>
                <StyledTableCell align="right">
                    {new Date(rota.week2[day].date).toGMTString()}
                </StyledTableCell>
                <StyledTableCell align="right">{rota.week2[day].morning}</StyledTableCell>
                <StyledTableCell align="right">{rota.week2[day].afternoon}</StyledTableCell>
            </StyledTableRow>
        )
    });

    return [...week1Array, week2Array];
}

export function RotaTable(props) {
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Day</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Morning</StyledTableCell>
                        <StyledTableCell align="right">Afternoon</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {buildRows(props.rota)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
