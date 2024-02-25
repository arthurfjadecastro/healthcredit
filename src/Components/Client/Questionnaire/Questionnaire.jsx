import React, { useState } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
} from "./Pages";
import { RenderIf } from "../Utils";
import { Grid } from "@mui/material";

const Questionnaire = ({
  page,
  handlePageChange,
  handleBack,
  state,
  dispatch,
  ETLData,
  setClose,
  response,
  showAllInstallments,
  activeStep,
}) => {
  const [activeButton, setActiveButton] = useState("PRICE");

  const [selectedOption, setSelectedOption] = useState();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch({ type: "installments", payload: option });
  };

  const handleType = () => {
    if (activeButton === "PRICE") {
      setActiveButton("SAC");
      dispatch({ type: "typeInstallments", payload: activeButton }); //Dispatch on Reducer
    } else {
      setActiveButton("PRICE");
      dispatch({ type: "typeInstallments", payload: activeButton }); 
    }
  };

  const titleInfo =
    activeButton === "PRICE"
      ? "Ideal para quem busca parcelas fixas e planejamento financeiro."
      : "Ideal para quem busca previsibilidade nas parcelas.";

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ maxWidth: 600 }}
      >
        <RenderIf predicate={page === 1}>
          <FirstPage
            activeStep={activeStep}
            handlePageChange={handlePageChange}
            currentPage={page}
            state={state}
            dispatch={dispatch}
          />
        </RenderIf>
        <RenderIf predicate={page === 2}>
          <SecondPage
            activeStep={activeStep}
            handleBack={handleBack}
            handlePageChange={handlePageChange}
            state={state}
            dispatch={dispatch}
          />
        </RenderIf>
        <RenderIf predicate={page === 3}>
          <ThirdPage
            activeStep={activeStep}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            activeButton={activeButton}
            titleInfo={titleInfo}
            handleType={handleType}
            response={response}
            ETLData={ETLData}
            handleBack={handleBack}
            state={state}
            dispatch={dispatch}
            handlePageChange={handlePageChange}
          />
        </RenderIf>
        <RenderIf predicate={page === 4}>
          <FourthPage
            activeStep={activeStep}
            showAllInstallments={showAllInstallments}
            selectedOption={selectedOption}
            setActiveButton={setActiveButton}
            activeButton={activeButton}
            ETLData={ETLData}
            handleBack={handleBack}
            state={state}
            dispatch={dispatch}
            handlePageChange={handlePageChange}
          />
        </RenderIf>
        <RenderIf predicate={page === 5}>
          <FifthPage
            activeStep={activeStep}
            selectedOption={selectedOption}
            activeButton={activeButton}
            ETLData={ETLData}
            state={state}
            page={page}
            setClose={setClose}
          />
        </RenderIf>
      </Grid>
    </>
  );
};

export default Questionnaire;
