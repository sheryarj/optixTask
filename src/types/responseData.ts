import { Movie, MovieCompany } from ".";

export interface MovieResponseData {
  data: Movie[];
  error: String;
  loading: boolean;
}

export interface MovieCompanyResponseData {
  companiesData: MovieCompany[];
  companiesError: String;
  companiesLoading: boolean;
}

export interface ResponseData {
  message: string;
}
