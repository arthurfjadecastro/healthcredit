import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const FullScreenLoading = (props) => {
  return (
    <CircularProgress
      style={{ position: "absolute", top: "50%", left: "50%" }}
    />
  );
};

export default FullScreenLoading;
