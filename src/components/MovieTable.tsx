import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

export const MovieTable = ({ movieData }: any) => {
  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const HeaderCell = ({ title }: any) => {
    return <TableCell sx={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>{title}</TableCell>;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor: "#1E1E1E", color: "#FFF" }}>
        <TableHead>
          <TableRow>
            <HeaderCell title="Movie Title" />
            <HeaderCell title=" Review Score" />
            <HeaderCell title="Film Company" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }, color: "#FFF" }}
            >
              <TableCell sx={{ color: "#FFF" }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#FFF" }}>
                <Rating sx={{ color: "#E24780" }} readOnly name="simple-controlled" value={3} />
              </TableCell>
              <TableCell sx={{ color: "#FFF" }}>{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
