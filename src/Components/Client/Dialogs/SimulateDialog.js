import React, { useEffect, useReducer, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import { Questionnaire } from "../Questionnaire";
import axios from "axios";
import { useMatchesSmartphone } from "../../Breakpoints";
import { Item } from "../Frames";
import { ButtonCEF, ExpandButton } from "../Buttons";
import {
  isCPFValid,
  isEmail,
  isNonEmptyString,
  isPhoneNumber,
} from "../Inputs/Validations/Base";
import { RenderIf } from "../Utils";
import { setRate } from "../Questionnaire/Pages/Resources/SingletonRate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initial state to user info
const initialState = {
  cpf: "",
  phoneNumber: "",
  email: "",
  monetaryValue: "",
  installments: "",
  typeInstallments: "PRICE",
};

// Manage states of user information in a more organized and modular way
const reducer = (state, action) => {
  switch (action.type) {
    case "cpf":
      return { ...state, cpf: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "monetaryValue":
      return { ...state, monetaryValue: action.payload };
    case "installments":
      return { ...state, installments: action.payload };
    case "typeInstallments":
      return { ...state, typeInstallments: action.payload };
    case "resetInstallments":
      return { ...state, installments: null };
    case "resetState":
      return initialState;
    default:
      return state;
  }
};

function SimulateDialog({ isOpen, setClose }) {
  // State that stores the request data
  const [responses, setResponses] = useState();

  // State created to store processed data
  const [ETLData, setEtlData] = useState();

  // State that iterates the simulation result by type
  const newIterableData = {};

  // Create reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create state page of Questionnaire
  const [page, setPage] = useState(1);

  // Action to reset Questionnaire
  const resetState = () => ({
    type: "resetState",
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const resetInstallments = () => ({
    type: "resetInstallments",
  });

  // Effect to Reset form
  useEffect(() => {
    setPage(1);
    dispatch(resetState());
    setShowAllInstallments(false);
    setActiveStep(0);
  }, [isOpen === false]);

  // Effect that iterates over request response
  useEffect(() => {
    if (responses !== null && responses !== undefined) {
      const newEtlData = {};

      Object.keys(responses).forEach((prazo) => {
        const resultadoSimulacao = responses[prazo].resultadoSimulacao;
        resultadoSimulacao.forEach((item) => {
          if (!newEtlData[item.tipo]) {
            newEtlData[item.tipo] = {};
          }
          newEtlData[item.tipo][prazo] = item.parcelas;
        });
      });

      setEtlData(newEtlData);
    }
  }, [responses]);

  useEffect(() => {
    setResponses(undefined);
  }, [page < 3]);

  const [showAllInstallments, setShowAllInstallments] = useState(false);

  const handleShowAllInstallments = () => {
    setShowAllInstallments(!showAllInstallments);
  };

  const [showButtons, setShowButtons] = useState(true);

  const isMobile = useMatchesSmartphone();

  const makeRequest = (prazo) => {
    const numericValue = parseInt(
      state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
      10
    );

    return axios.post(
      "https://apphackaixades.azurewebsites.net/api/Simulacao",
      {
        valorDesejado: numericValue,
        prazo: prazo,
      }
    );
  };

  // Method that makes the request when we switch from the third to the fourth page
  const handlePageChange = () => {
    if (page === 2) {
      setShowButtons(false);

      // Request to 6x
      makeRequest(6)
        .then((response) => {
          setResponses((prevResponses) => ({
            ...prevResponses,
            parcelas6: response.data,
          }));
        })
        .catch((err) => {
          console.error("Ops! Ocorreu um erro: " + err);
        });

      // Request to 12x
      makeRequest(12)
        .then((response) => {
          setResponses((prevResponses) => ({
            ...prevResponses,
            parcelas12: response.data,
          }));
        })
        .catch((err) => {
          console.error("Ops! Ocorreu um erro: " + err);
        });

      // Request to 24x
      makeRequest(24)
        .then((response) => {
          setResponses((prevResponses) => ({
            ...prevResponses,
            parcelas24: response.data,
          }));

          // Extrair o valor da taxa de juros do objeto de resposta
          const taxaJuros = response.data.taxaJuros;

          // Armazenar a taxa de juros no singleton
          setRate(taxaJuros);
        })
        .catch((err) => {
          console.error("Ops! Ocorreu um erro: " + err);
        })
        .finally(() => {
          setTimeout(() => {
            setShowButtons(true);
          }, 150);
        });
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPage(page + 1);
  };

  // Back page of Questionnaire
  const handleBack = () => {
    setPage(page - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setShowAllInstallments(false);
    dispatch(resetInstallments());
  };

  const [isValid, setIsValid] = useState("");
  const numericValue = parseInt(
    state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
    10
  );

  useEffect(() => {
    if (numericValue < 200 || numericValue > 10000) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [numericValue]);

  // Validate buttons enabled and disabled
  const isContinueButtonEnabled = {
    1: (state) =>
      (isCPFValid(state.cpf) &&
        isPhoneNumber(state.phoneNumber) &&
        isEmail(state.email)) ||
      isNonEmptyString(state),
    2: (state) => !isValid && isNonEmptyString(state.monetaryValue),
    3: (state) => state.installments,
    4: (state) => true,
    5: (state) => true,
    6: (state) => true,
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => setClose(false)}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            background: "rgb(3, 47, 76)",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setClose(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              HealthCredit
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          style={{
            display: "flex",
            height: "100%",
            padding: isMobile ? 16 : 45,
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Questionnaire
            activeStep={activeStep}
            showAllInstallments={showAllInstallments}
            setClose={setClose}
            ETLData={ETLData}
            state={state}
            handleBack={handleBack}
            handlePageChange={handlePageChange}
            page={page}
            dispatch={dispatch}
            response={responses}
          />
          <Grid
            container
            style={{ margin: 0 }}
            flexDirection={"column"}
            spacing={1}
            justifyContent={"center"}
          >
            <RenderIf predicate={page === 4}>
              <Grid item>
                <Item>
                  <ExpandButton
                    variant="text"
                    onClick={handleShowAllInstallments}
                  ></ExpandButton>
                  {/* <Button variant="outlined" onClick={handleShowAllInstallments}>
                    {showAllInstallments ? "Resumo" : "Mais informações"}
                  </Button> */}
                </Item>
              </Grid>
            </RenderIf>
            <RenderIf predicate={page > 0 && page < 6 && showButtons === true}>
              <Item>
                <ButtonCEF
                  buttonTitle={page === 5 ? "Concluir" : "Continuar"}
                  isContinueButtonEnabled={isContinueButtonEnabled[page](state)}
                  handlePageChange={
                    page <= 5 ? handlePageChange : setClose(false)
                  }
                />
              </Item>
            </RenderIf>

            <RenderIf predicate={page > 1 && page < 5 && showButtons === true}>
              <Item>
                <ButtonCEF
                  isContinueButtonEnabled={true}
                  buttonTitle={"Voltar"}
                  handlePageChange={handleBack}
                />
              </Item>
            </RenderIf>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}

export default SimulateDialog;
