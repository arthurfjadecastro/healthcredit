import React from "react";
import { Paper, Grid, Typography, styled, Divider } from "@mui/material";
import { customFormatNumber, formatinteresetAmount } from "./Resources";

const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const IconWrapper = styled("div")({
  position: "relative",
  marginRight: "10px",
  display: "flex",
  alignItems: "center",
});

const TextWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const GrayText = styled(Typography)({
  fontSize: "14px",
});

const LoanDetails = ({
  numberInstallment,
  installmentAmount,
  interesetAmount,
  amortization,
}) => {
  return (
    <Frame>
      <Grid
        justifyContent="space-between"
        container
        spacing={2}
        alignItems="center"
        style={{ width: "100%", margin: 0 }}
      >
        <Grid item xs={4} style={{ paddingRight: "8px" }}>
          <TextWrapper>
            <Typography
              variant="body1"
              align="center"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
                fontSize: "16px",
              }}
            >
              {numberInstallment}ª prestação
            </Typography>
          </TextWrapper>
        </Grid>
        <Grid item xs={1}>
          <Divider
            orientation="vertical"
            style={{
              height: 50,
              width: "2px",
              backgroundColor: "#005CA9",
            }}
          />
        </Grid>
        <Grid item xs={7} style={{ marginBottom: "8px" }}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography
                variant="h6"
                align="center"
                style={{
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  color: "#005CA9",
                }}
              >
                Valor da prestação
              </Typography>
              <Typography
                variant="h5"
                align="center"
                style={{
                  whiteSpace: "nowrap",
                  color: "#FF7200",
                  fontSize: "28px",
                }}
              >
                R$ {customFormatNumber(installmentAmount)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="center"
                style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                Valor da Amortização
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ whiteSpace: "nowrap" }}
              >
                R$ {customFormatNumber(amortization)}
              </Typography>
            </Grid>
            <Grid item>
              <GrayText
                variant="body1"
                align="center"
                style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                Valor do juros
              </GrayText>
              <GrayText
                variant="body1"
                align="center"
                style={{ whiteSpace: "nowrap" }}
              >
                R$ {formatinteresetAmount(interesetAmount)}
              </GrayText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Frame>
  );
};

export default LoanDetails;
