import React from "react";
import { Typography, Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./tooltipInfo.css";

const TextWithInfo = ({ text, tooltipText }) => {
  return (
    <IconButton disableFocusRipple disableTouchRipple aria-label="info">
      <Typography>{text}</Typography>
    </IconButton>
  );
};

const TooltipInfo = ({ titleInfo }) => {
  return (
    <>
      <TextWithInfo text="Resumo das parcelas" tooltipText={titleInfo} />
    </>
  );
};

export default TooltipInfo;
