export interface Movie {
  id: string;
  reviews: number[];
  title: string;
  filmCompanyId: string;
  cost: number;
  releaseYear: number;
}

export interface MovieInfo {
  movieTitle: string;
  reviews: number | null;
  filmCompanyName: string;
}
