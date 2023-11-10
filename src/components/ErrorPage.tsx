import React from "react";

export const ErrorPage = ({ error }: { error: String }): JSX.Element => {
  return <div>error: {error}</div>;
};
