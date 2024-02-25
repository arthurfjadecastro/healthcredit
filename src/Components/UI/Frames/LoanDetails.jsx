import React from "react";
import { Paper, Grid, Typography, styled, Divider } from "@mui/material";
import { customFormatNumber, formatinteresetAmount } from "./Resources";
import { CheckCircle } from "@mui/icons-material";
import { FramePaperRS } from ".";


const Frame = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  width: 300
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


const LoanDetails = ({response
}) => {


  return (
    <>
    <Frame>
      <Grid
        justifyContent="space-between"
        container
        spacing={2}
        alignItems="center"
        style={{ width: "100%", margin: 0 }}
      >
              <CheckCircle style={{color: "green", width: 40, height: 40}} />
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
                Valor total
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
                {/* R$ 5.520,58 */}
                R$ {customFormatNumber(response?.data?.resultadoSimulacao)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="center"
                style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                Valor do desconto
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ whiteSpace: "nowrap" }}
              >
                {/* R$ 479,72 */}
                R$ {customFormatNumber(response && response?.data && response?.data?.valorDesconto)}
              </Typography>
            </Grid>
            <Grid item>
              <GrayText
                variant="body1"
                align="center"
                style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                Taxa de Juros
              </GrayText>
              <GrayText
                variant="body1"
                align="center"
                style={{ whiteSpace: "nowrap" }}
              >
                <span style={{ color: "#FF6600" }}>{(response && response?.data && response?.data?.taxaJuros * 100).toFixed(2).replace('.', ',') + '%'}</span>
                {/* R$ {formatinteresetAmount()} */}
              </GrayText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Frame>
    <br></br>
    <FramePaperRS variant="openFinance" textButton={""} />
    <Typography style={{ textAlign: "center" }} variant="body2">
      Com o <span style={{ color: '#FF6600' }}>Open Finance da CAIXA</span>, <br></br>você compartilha <br></br> seus dados de forma <br></br>segura e obtém benefícios <br></br>em produtos e serviços.
    </Typography>
    </>
  );
};

export default LoanDetails;
