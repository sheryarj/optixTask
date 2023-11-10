import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { sortMovies } from "../helpers";
import Switch from "@mui/material/Switch";
import { MovieInfo } from "../types";

export const MovieTable = ({
  movieData,
  selectedMovie,
  setSelectedMovie,
}: {
  movieData: MovieInfo | any;
  selectedMovie: MovieInfo;
  setSelectedMovie: any;
}): JSX.Element => {
  const [sortType, setSortType] = useState(true);
  const [sortedData, setSortedData] = useState(sortMovies(movieData, "desc"));

  const HeaderCell = ({ title }: { title: string }) => {
    return <TableCell sx={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>{title}</TableCell>;
  };

  return (
    <Container>
      Ascending order
      <Switch
        onChange={() => {
          setSortType(!sortType);
          setSortedData(sortMovies(movieData, sortType ? "asc" : "desc"));
        }}
      />
      descending order
      <TableContainer component={Paper} sx={{ borderRadius: "15px", bgcolor: "#1E1E1E" }}>
        <Table sx={{ minWidth: 650, bgcolor: "#1E1E1E", color: "#FFF" }}>
          <TableHead>
            <TableRow>
              <HeaderCell title="Movie Title" />
              <HeaderCell title=" Review Score" />
              <HeaderCell title="Film Company" />
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row: any) => (
              <TableRow
                onClick={() => {
                  setSelectedMovie(row);
                }}
                key={row.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: selectedMovie?.movieTitle === row.movieTitle ? "#101418" : "#1h1h1h",
                }}
              >
                <TableCell sx={{ color: "#FFF" }} component="th" scope="row">
                  {row.movieTitle}
                </TableCell>
                <TableCell sx={{ color: "#FFF" }}>{row.reviews}</TableCell>
                <TableCell sx={{ color: "#FFF" }}>{row.filmCompanyName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
