import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { MovieData, Movie } from "../types";

export const useMovies = (): MovieData => {
  const [data, setData] = useState<Movie[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Movie[]> = await axios.get<Movie[]>(
          "https://giddy-beret-cod.cyclic.app/movies"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError("Failed to retrieve movies");
      }
      setLoading(false);
    };

    fetchData();
  }, [error]);

  return { data, error, loading };
};
