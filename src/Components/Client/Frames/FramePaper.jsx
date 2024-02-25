import React from "react";
import { Paper,  styled } from "@mui/material";
import ButtonRS from "../Buttons/ButtonRS";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  minWidth: 230,
  maxWidth: 100,
  marginBottom: 16,
}));

const CustomFrame = ({ textButton, variant }) => {
  return (
    <Frame>
      <ButtonRS variant={variant} textButton={textButton} />
    </Frame>
  );
};

export default CustomFrame;
