import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  progressRoot: {
    width: "100% !important",
  },
});

function ProgressStepper({ page, handleNext, activeStep }) {
  const classes = useStyles();
  const steps = ["Dados pessoais", "Valor", "Parcelas", "Resumo", "Conclusão"];

  return (
    <div style={{ width: "100%" }}>
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={activeStep}
        classes={{
          progress: classes.progressRoot,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              fontSize: 14,
              fontWeight: activeStep === index ? "bold" : "normal",
              color: activeStep === index ? "rgb(3, 47, 76)" : "inherit",
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressStepper;
