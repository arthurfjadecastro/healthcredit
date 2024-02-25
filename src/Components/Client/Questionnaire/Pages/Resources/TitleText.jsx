import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TitleText = styled(Typography)(({ theme }) => ({
  color: "#f39191",
  height: 50,
  fontWeight: "bold !important",
  textTransform: "uppercase",
  letterSpacing: 2,
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  marginBottom: 32,
  marginTop: 32,
}));

export default TitleText;
