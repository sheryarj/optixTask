import { useState } from "react";
import { useMovies, useMovieCompanies } from "./hooks";
import { MovieInfo } from "./types";
import { MovieTable, ReviewForm, LoadingPage, ErrorPage } from "./components";
import { calculateAverage } from "./helpers";

export const App = () => {
  const { companiesData, companiesError, companiesLoading } = useMovieCompanies();
  const { data, error, loading } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const movieLength = data.length;

  const movieData: MovieInfo[] = data.reduce((result, movie) => {
    const company = companiesData.find((c) => c.id === movie.filmCompanyId);
    result.push({
      movieTitle: movie.title,
      reviews: calculateAverage(movie.reviews),
      filmCompanyName: company ? company.name : "Unknown Company",
    });
    return result;
  }, [] as MovieInfo[]);

  if (loading || companiesLoading) {
    return <LoadingPage />;
  }

  if (error || companiesError) {
    return <ErrorPage error={error ? error : companiesError} />;
  }

  const refreshButton = (buttonText: any) => {
    if (companiesData) {
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
      <MovieTable
        movieData={movieData}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <br />
      {selectedMovie && <ReviewForm selectedMovie={selectedMovie.movieTitle} />}
    </div>
  );
};
