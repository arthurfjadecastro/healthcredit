import React from "react";
import { Monetary } from "../../Inputs";
import { Grid } from "@mui/material";
import { TitleText } from "./Resources";
import Item from "../../Frames/Item";
import { ProgressStepper } from "../../Dialogs/Resources";

const SecondPage = ({
  state,
  dispatch,
  handlePageChange,
  handleBack,
  activeStep,
}) => {
  return (
    <>
      <ProgressStepper activeStep={activeStep} />
      <Grid item>
        <TitleText>
          Informe a{" "}
          <span style={{ color: "rgb(3, 47, 76)" }}>quantia desejada</span>
        </TitleText>
      </Grid>
      <Grid item style={{ flex: 2, width: "100%" }}>
        <Item>
          <Monetary
            value={state.monetaryValue}
            onChange={(event) =>
              dispatch({ type: "monetaryValue", payload: event.target.value })
            }
          />
        </Item>
      </Grid>
    </>
  );
};

export default SecondPage;
