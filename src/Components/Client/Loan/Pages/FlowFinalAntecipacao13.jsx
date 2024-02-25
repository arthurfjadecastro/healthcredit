import React, { useState } from 'react';
import { Card, Typography, IconButton } from '@mui/material';
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { orange, blue, grey, green } from '@mui/material/colors';
import { FramePaper, FramePaperRS } from '../../../UI/Frames';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    borderRadius: 8,
    padding: 16,
    background: `linear-gradient(90deg, ${orange[500]}, ${blue[500]})`,
    color: 'white',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  icon: {
    fontSize: "3.5rem !important",
    color: "white",
    marginBottom: 16,
  },
  message: {
    marginBottom: 16,
    fontWeight: "800 !important",
    color: 'white',
  },
  button: {
    color: grey[50],
    textDecoration: "underline",
    background: "transparent",
    '&:hover': {
      background: "transparent",
    },
  },
}));

function FlowFinalAntecipacao13() {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className={classes.root}>
      <CheckCircleIcon className={classes.icon} />
      <Typography variant="h6" className={classes.message}>
        Parabéns! <br /> Sua solicitação de crédito foi aprovada.<br></br><br></br>
      </Typography>
      <Typography style={{fontSize: 14}} variant="body1">
      Acompanhe o progresso da sua solicitação de crédito no aplicativo CAIXA. <br></br><br></br>Verifique as etapas em tempo real e obtenha mais informações sobre o seu empréstimo.
      </Typography>
      <IconButton className={classes.button} onClick={handleButtonClick}>
        {isExpanded ? 'Ver menos' : 'Ver mais'}
      </IconButton>
      {isExpanded && (
        <>
            <FramePaperRS variant="googlePlay" textButton={"Android"} />
        <FramePaperRS variant="iOS" textButton={"Apple"} />
        </>
      )}
    </Card>
  );
}

export default FlowFinalAntecipacao13;
