import React, { useState } from "react";
import { Button, lighten, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  backgroundColor: lighten("#005CA9", 0.1),
  textTransform: "capitalize",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#004D91",
  },
}));

const ExpandButton = ({ onClick,variant}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    onClick()
  };

  return (
    <StyledButton variant={"outlined"} onClick={handleToggle}>
      {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      <span style={{ marginLeft: "8px" }}>
        {isActive ? "Ver menos" : "Ver mais"}
      </span>
    </StyledButton>
  );
};

export default ExpandButton;
