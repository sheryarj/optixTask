import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const MovieTable = ({ movieData }: any) => {
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
          {movieData.map((row: any) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }, bgcolor: "#1h1h1h" }}
            >
              <TableCell sx={{ color: "#FFF" }} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell sx={{ color: "#FFF" }}>{row.rating}</TableCell>
              <TableCell sx={{ color: "#FFF" }}>{row.filmCompanyId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
