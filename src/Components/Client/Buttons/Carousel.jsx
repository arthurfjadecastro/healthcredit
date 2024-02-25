import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { customFormatNumber } from "../Frames/Resources";

const Carousel = ({
  state,
  handleOptionClick,
  ETLData,
  activeButton,
}) => {


  const renderOptions = () => {
    const options = [6, 12, 24];

    return options.map((option) => {
      const parcelas = ETLData && ETLData[activeButton] && ETLData[activeButton][`parcelas${option}`];

      return (
        <Grid key={option} style={{ maxWidth: 370 }} item>
          <Button
            variant={state.installments === option ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleOptionClick(option)}
            sx={{
              borderRadius: "16px",
              fontWeight: "bold",
              width: "100%",
              height: "100px",
              padding: "16px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                state.installments === option ? "#005CA9" : "transparent",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "#FF6600" }}>{state.monetaryValue}</span> em{" "}
              {option}x
            </Typography>
            {parcelas && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" style={{ fontSize: "12px" }}>
                  Valor da 1ª prestação:{" "}
                  <span style={{ color: "#FF6600", fontWeight: "bold" }}>
                    R$ {customFormatNumber(parcelas[0].valorPrestacao)}
                  </span>
                </Typography>
                <Typography variant="body2" style={{ fontSize: "12px" }}>
                  Valor da última prestação:{" "}
                  <span style={{ color: "#FF6600", fontWeight: "bold" }}>
                    R$ {customFormatNumber(parcelas[parcelas.length - 1].valorPrestacao)}
                  </span>
                </Typography>
              </div>
            )}
          </Button>
        </Grid>
      );
    });
  };

  return (
    <div className="carousel">
      <h2 style={{ fontSize: 18, textAlign: "center" }}>
        Selecione as parcelas disponíveis:
      </h2>
      <Grid container spacing={2} justifyContent="center">
        {renderOptions()}
      </Grid>
    </div>
  );
};

export default Carousel;
