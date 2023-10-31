import { useRef, useState, Children } from "react";
import { easeIn, easeOut } from "polished";
import { useBoolean } from "react-use";
import { createReducer } from "@reduxjs/toolkit";
import { useMovies } from "./hooks";

// TODO: use https://giddy-beret-cod.cyclic.app/movieCompanies
const mockMovieCompanyData: any = [{ id: "1", name: "Test Productions" }];

export const App = () => {
  const { data, error, loading } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);
  const movieLength = data.length; //use ref here

  const refreshButton = (buttonText: any) => {
    if (mockMovieCompanyData) {
      return <button>{buttonText}</button>;
    } else {
      return <p>No movies loaded yet</p>;
    }
  };

  return (
    <div>
      <h2>Welcome to Movie database!</h2>
      {refreshButton("Refresh")}
      <p>Total movies displayed {movieLength}</p>
      <span>Title - Review - Film Company</span>
      <br />
      {data.map((movie: any) => (
        <span
          onClick={() => {
            setSelectedMovie(movie);
          }}
        >
          {movie.title}{" "}
          {movie.reviews
            .reduce((acc: any, i: any) => (acc + i) / movie.reviews.length, 0)
            ?.toString()
            .substring(0, 3)}{" "}
          {
            mockMovieCompanyData.find((f: any) => f.id === movie.filmCompanyId)
              ?.name
          }
          <br />
        </span>
      ))}
      <br />
      <div>
        {selectedMovie
          ? selectedMovie.title
            ? (("You have selected " + selectedMovie.title) as any)
            : "No Movie Title"
          : "No Movie Selected"}
        {selectedMovie && <p>Please leave a review below</p>}
        {selectedMovie && (
          <form onSubmit={() => {}}>
            <label>
              Review:
              <input type="text" />
            </label>
          </form>
        )}
      </div>
    </div>
  );
};
