import { Movie } from "./Movie";

export interface MovieData {
  data: Movie[];
  error: String;
  loading: boolean;
}
