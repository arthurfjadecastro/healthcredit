import React from "react";
import { Button, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  width: 312,
  height: 48,
  background: "#F39200",
  boxShadow:
    "0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: 20,
  color: "white",
  "&:disabled": {
    backgroundColor: "white",
  },
  "&:hover": {
    backgroundColor: orange[800],
  },
}));

const BackButton = ({ handleClick, textButton }) => {
  return (
    <React.Fragment>
      <ColorButton onClick={handleClick}>{textButton}</ColorButton>
    </React.Fragment>
  );
};

export default BackButton;
