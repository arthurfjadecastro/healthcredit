import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./buttonGroup.css";

export default function DisableElevation({ activeButton, handleType }) {
  const handleClick = (type) => {
    handleType(type);
  };

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button
        className={activeButton === "PRICE" ? "active2" : "disable"}
        onClick={() => handleClick("PRICE")}
      >
        Estético FlexPrice
      </Button>
      <Button
        className={activeButton === "SAC" ? "active2" : "disable"}
        onClick={() => handleClick("SAC")}
      >
        Beleza Certa
      </Button>
    </ButtonGroup>
  );
}
