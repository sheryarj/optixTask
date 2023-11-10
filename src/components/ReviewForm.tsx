import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { usePostReview } from "../hooks";

export const ReviewForm = ({ selectedMovie }: { selectedMovie: string }): JSX.Element => {
  const { reviewResponseData, reviewError, reviewIsLoading, submitReview } = usePostReview();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 100) {
      setError("Input cannot exceed 100 characters.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!error) {
      submitReview(inputValue);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          background: "linear-gradient(to right bottom, #101418, #101418)",
          height: "15vh",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography> You have selected:</Typography>
          <Typography> {selectedMovie}</Typography>
          <form onSubmit={handleSubmit}>
            <Typography> Please enter you review: </Typography>
            <TextField
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                border: { color: "white" },
              }}
              fullWidth
              variant="filled"
              label="Your review"
              focused={true}
              value={inputValue}
              onChange={handleInputChange}
              error={error ? true : false}
              helperText={error ? "Review must be less than 100 characters" : false}
            />
          </form>
          {reviewIsLoading && <Typography> Review is loading </Typography>}
          {reviewResponseData && <Typography> {reviewResponseData.message} </Typography>}
          {reviewError && <Typography> review was not submitted due to an error </Typography>}
        </Box>
      </Box>
    </Container>
  );
};
