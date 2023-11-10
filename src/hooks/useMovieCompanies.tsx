import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { MovieCompanyResponseData, MovieCompany } from "../types";

export const useMovieCompanies = (): MovieCompanyResponseData => {
  const [companiesData, setCompaniesData] = useState<MovieCompany[]>([]);
  const [companiesError, setCompaniesError] = useState<string>("");
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<MovieCompany[]> = await axios.get<MovieCompany[]>(
          "https://giddy-beret-cod.cyclic.app/movieCompanies"
        );
        setCompaniesData(response.data);
      } catch (err) {
        console.log(err);
        setCompaniesError("Failed to retrieve movie companies");
      }
      setCompaniesLoading(false);
    };

    fetchData();
  }, [companiesError]);

  return { companiesData, companiesError, companiesLoading };
};
