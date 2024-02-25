import React, { useEffect, useReducer, useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Questionnaire from "./Questionnaire";
import { isNonEmptyString } from "../../UI/Inputs/Validations/Base";
import useCreateAntecipacao from "../../../Network/useCreateAntecipacao";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initial state to user info
const initialState = {
  creditOption: "",
  agreementOption: "",
  monetaryValue: "",
  codigo: 102,
  numericValue: "",
};

// Manage states of user information in a more organized and modular way
const reducer = (state, action) => {
  switch (action.type) {
    case "creditOption":
      return { ...state, creditOption: action.payload };
    case "agreementOption":
      return { ...state, agreementOption: action.payload };
    case "monetaryValue":
      return { ...state, monetaryValue: action.payload };
    case "resetState":
      return initialState;
    case "numericValue":
      return { ...state, numericValue: action.payload };
    default:
      return state;
  }
};

function TakeLoan({ isOpen, setClose }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create state page of Questionnaire
  const [page, setPage] = useState(1);
  const [postAntecipacao, [response, error]] = useCreateAntecipacao({
    valorDesejado: state.numericValue,
    codigo: state.codigo,
  });

  // Action to reset Questionnaire
  const resetState = () => ({
    type: "resetState",
  });

  // Effect to Reset form
  useEffect(() => {
    setPage(1);
    dispatch(resetState());
    // setActiveStep(0);
  }, [isOpen === false]);

  const handleCreateAntecipacao13 = async (e) => {
    // e.preventDeafult()
    await postAntecipacao();
  };

  // Method that makes the request when we switch from the third to the fourth page
  const handlePageChange = () => {
    setPage(page + 1);
    if (page === 2 && state.creditOption === "Antecipação 13") {
      handleCreateAntecipacao13();
    }
    if (page === 4 && state.creditOption === "Antecipação 13") {
      setClose(false);
    }
  };

  //   Back page of Questionnaire
  const handleBack = () => {
    setPage(page - 1);
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // setShowAllInstallments(false);
    // dispatch(resetInstallments());
  };

  const [isValid, setIsValid] = useState("");
  const numericValue = parseInt(
    state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
    10
  );

  useEffect(() => {
    if (numericValue < 200 || numericValue > 100000) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    dispatch({ type: "numericValue", payload: numericValue });
  }, [numericValue]);

  // Validate buttons enabled and disabled
  const isContinueButtonEnabled = {
    1: (state) => isNonEmptyString(state.creditOption),
    2: (state) =>
      !isValid &&
      state.creditOption === "Antecipação 13" &&
      isNonEmptyString(state.monetaryValue)
        ? true
        : isNonEmptyString(state.agreementOption),
    3: (state) => !isValid && isNonEmptyString(state.monetaryValue),
    4: (state) => true,
    5: (state) => true,
  };
  console.log("response");
  console.log(response);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setClose(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#005CA9" }}>
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
              Health Credit
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            width: 500,
            padding: 16,
            justifyContent: "center",
            alignContent: "center",
            background: "linear-gradient(to right, #FFF, #D0E0E3)",
          }}
        >
          <Questionnaire
            response={response}
            handleBack={handleBack}
            state={state}
            page={page}
            handlePageChange={handlePageChange}
            isContinueButtonEnabled={isContinueButtonEnabled}
            dispatch={dispatch}
          />
          <Grid
            container
            style={{ margin: 0 }}
            flexDirection={"column"}
            spacing={1}
            justifyContent={"center"}
          ></Grid>
        </Box>
      </Dialog>
    </div>
  );
}

export default TakeLoan;
