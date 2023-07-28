import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material';
import { Toolbar } from '@mui/material';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData(<div className='flex flex-row gap-4'><div className='text-gray-500 '>us</div><div>United States</div></div>,2500 , 214000,40.22 ),
  createData(<div className='flex flex-row gap-4'><div className='text-gray-500 '>us</div><div>United States</div></div>, 237, 9.0, 37),
  createData(<div className='flex flex-row gap-4'><div className='text-gray-500 '>us</div><div>United States</div></div>, 262, 16.0, 24 ),
  createData(<div className='flex flex-row gap-4'><div className='text-gray-500 '>us</div><div>United States</div></div>, 305, 3.7, 67),
];

export default function TableDashboard() {
  return (
    <TableContainer component={Paper} sx={{borderRadius:5}}>
    
      <Table sx={{Width: 650 , }} aria-label="simple table">
      
        <TableHead>
        
          <TableRow>
            <TableCell>COUNTRY:</TableCell>
            <TableCell align="right">SALES:</TableCell>
            <TableCell align="right">VALU:</TableCell>
            <TableCell align="right">BOUNCE:</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
    </TableContainer>
  );
}
