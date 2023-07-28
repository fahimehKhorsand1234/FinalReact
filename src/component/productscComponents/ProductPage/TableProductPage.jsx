import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GradeIcon from "@mui/icons-material/Grade";
import sofa1 from "../../imges/sofa1.png";
import flower from "../../imges/flower.png";
import sofa2 from "../../imges/sofa2.png";
import flower2 from "../../imges/flower2.png";
import SliderTable from "../ProductPage/SliderTable";

function createData(name, Price, Review, AvAbility, ID) {
  return { name, Price, Review, AvAbility, ID };
}

const rows = [
  createData(
    <div className="flex flex-row gap-2">
      <div>
        <img src={sofa1} alt="" className="imgtable rounded rounded-lg" />
      </div>
      <div>Frozen yoghurt</div>
    </div>,
    159,
    <div className="flex flex-row">
      <GradeIcon />
      <GradeIcon />
      <GradeIcon />
    </div>,
    <SliderTable degre="25" className="m-0" />,
    4.0
  ),
  createData(
    <div className="flex flex-row gap-2">
      <div>
        <img src={sofa2} alt="" className="imgtable rounded rounded-lg" />
      </div>
      <div>Ice cream sandwich</div>
    </div>,
    237,
    <div className="flex flex-row">
      <GradeIcon />
    </div>,
    <SliderTable degre="45" />,
    4.3
  ),
  createData(
    <div className="flex flex-row gap-2">
      <div>
        <img src={flower} alt="" className="imgtable rounded rounded-lg" />
      </div>
      <div>Eclair</div>
    </div>,
    262,
    <div className="flex flex-row">
      <GradeIcon />
      <GradeIcon />
      <GradeIcon />
    </div>,
    <SliderTable degre="55" />,
    6.0
  ),
  createData(
    <div className="flex flex-row gap-2">
      <div>
        <img src={flower2} alt="" className="imgtable rounded rounded-lg" />
      </div>
      <div>upcake</div>
    </div>,
    305,
    <div className="flex flex-row">
      <GradeIcon />
      <GradeIcon />
    </div>,
    <SliderTable degre="65" />,
    4.3
  ),
];
//BasicTable Mui
export default function EnhancedTable() {
  return (
    <TableContainer
      sx={{
        boxShadow:'none',
        maxWidth: "100%",
        "& .MuiTableCell-sizeMedium": {
          width: "fit-content",
        },
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650,border:'none' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">Review&nbsp;($)</TableCell>
            <TableCell align="left">AvAbility</TableCell>
            <TableCell align="left">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="left">{row.Price}</TableCell>
              <TableCell align="left">{row.Review}</TableCell>
              <TableCell align="left">{row.AvAbility}</TableCell>
              <TableCell align="left">{row.ID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
