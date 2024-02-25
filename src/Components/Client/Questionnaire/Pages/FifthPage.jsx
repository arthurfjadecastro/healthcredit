import React, { useEffect, useState } from "react";
import { Monetary } from "../../Inputs";
import { Grid, Paper, styled } from "@mui/material";
import { TitleText } from "./Resources";
import { ButtonCEF, ButtonWhatsApp } from "../../Buttons";
import { Frame, FramePaper } from "../../Frames";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import { ProgressStepper } from "../../Dialogs/Resources";
import { getRate } from "./Resources/SingletonRate";

const FifthPage = ({
  activeStep,
  ETLData,
  state,
  activeButton,
  selectedOption,
}) => {
  const parcelasKey = `parcelas${selectedOption}`;
  const firstInstallment = ETLData[activeButton]?.[parcelasKey]?.[0];
  const lastInstallment =
    ETLData[activeButton]?.[parcelasKey]?.[selectedOption - 1] || {};
  const rate = getRate();

  return (
    <>
      <ProgressStepper activeStep={activeStep} />
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TitleText>
          Pronto! <br></br>Contratação feita com
          <span style={{ color: "rgb(3, 47, 76)" }}> sucesso</span>
        </TitleText>
      </Grid>
      <Grid
        item
        style={{
          flex: 2,
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Frame
          rate={rate}
          installments={state.installments}
          lastInstallment={ETLData && lastInstallment.valorPrestacao}
          valueFirstInitialInstallment={
            ETLData[activeButton] ? firstInstallment.valorPrestacao : null
          }
          initialInstallment={ETLData && firstInstallment.numero}
          value={state.monetaryValue}
        />
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            margin: 16,
            fontWeight: "bold",
            lineHeight: "1.5",
          }}
        >
          Acesse o aplicativo para fazer <br />
          <span style={{ color: "#FF6600" }}>seu financiamento </span>
          ou <span style={{ color: "#FF6600" }}> fale com um gerente </span>
        </p>

        <FramePaper variant="googlePlay" textButton={"Android"} />
        <FramePaper variant="iOS" textButton={"Apple"} />

        <FramePaper variant="whatsapp" textButton={"Contato"} />
        {/* <FramePaper
          variant="openFinance"
          textButton={"Open Finance"}
        /> */}
      </Grid>
    </>
  );
};

export default FifthPage;
