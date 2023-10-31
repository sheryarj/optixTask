import axios from "axios";
import { useState } from "react";
import { ResponseData } from "../types";

export const usePostReview = () => {
  const [reviewResponseData, setData] = useState<ResponseData>();
  const [reviewError, setError] = useState<string>("");
  const [reviewIsLoading, setIsLoading] = useState(false);

  const submitReview = async (message: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://giddy-beret-cod.cyclic.app/submitReview",
        {
          review: message,
        }
      );

      setData(response.data);
    } catch (err) {
      setError("We could not submit your review");
    }
    setIsLoading(false);
  };

  return { reviewResponseData, reviewError, reviewIsLoading, submitReview };
};
