import React, { useState } from 'react';
import { LoanDetails } from '../../../UI/Frames';
import CircularProgress from "@mui/material/CircularProgress";


const FullScreenLoading = (props) => {
  return (
    <CircularProgress
      style={{ position: "absolute", top: "50%", left: "50%" }}
    />
  );
};



function FourthPageByAntecipacao({ response }) {
  return (
    <>
    {response === null && <FullScreenLoading />}
    {response && <LoanDetails response={response} />}
     {/* <LoanDetails response={response}/> */}
    </>
  );
}

export default FourthPageByAntecipacao;
