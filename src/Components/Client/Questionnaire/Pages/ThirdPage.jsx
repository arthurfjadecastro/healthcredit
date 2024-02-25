import React from "react";
import { Grid } from "@mui/material";
import { TableContainerInfo, TitleText } from "./Resources";
import { ButtonGroup, Carousel } from "../../Buttons";
import Item from "../../Frames/Item";
import TooltipInfo from "../../Frames/TooltipInfo";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";
import { ProgressStepper } from "../../Dialogs/Resources";

const ThirdPage = ({
  activeStep,
  state,
  dispatch,
  ETLData = true,
  activeButton,
  handleType,
  titleInfo,
  handleOptionClick,
  selectedOption,
}) => {
  return (
    <>
      <RenderIf
        predicate={
          (ETLData && ETLData[activeButton]) === undefined ||
          (ETLData && ETLData[activeButton]) === null
        }
      >
        <FullScreenLoading />
      </RenderIf>
      <RenderIf predicate={ETLData && ETLData[activeButton]}>
        <ProgressStepper activeStep={activeStep} />
        <Grid item>
          <TitleText>
            Escolha sua{" "}
            <span style={{ color: "rgb(3, 47, 76)" }}>modalidade</span> e{" "}
            <span style={{ color: "rgb(3, 47, 76)" }}>parcelas</span> ideais
          </TitleText>
        </Grid>
        <Grid
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TooltipInfo titleInfo={titleInfo} />
        </Grid>
        <Grid item style={{ flex: 2, width: "100%" }}>
          <Item>
            <Grid item style={{ marginBottom: 0 }}>
              <ButtonGroup
                activeButton={activeButton}
                handleType={handleType}
              />
              <TableContainerInfo activeButton={activeButton} />
            </Grid>
          </Item>
        </Grid>
        <Carousel
          activeButton={activeButton}
          ETLData={ETLData}
          state={state}
          dispatch={dispatch}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      </RenderIf>
    </>
  );
};

export default ThirdPage;
