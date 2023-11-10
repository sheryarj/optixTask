interface Movie {
  movieTitle: string;
  reviews: number;
  filmCompanyName: string;
}

export const sortMovies = (movieList: Movie[], sortOrder: "asc" | "desc" = "asc"): Movie[] => {
  const direction = sortOrder === "asc" ? 1 : -1;
  return [...movieList].sort((a, b) => direction * (a.reviews - b.reviews));
};
