import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    gap: '8px',
  },
  checkboxLabel: {
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
    '& .MuiCheckbox-root': {
      color: '#FF6600',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover:not(.Mui-disabled)': {
        backgroundColor: 'transparent',
      },
    },
    '&.disabled': {
      '& .MuiTypography-root': {
        color: 'grey',
      },
      '& .MuiCheckbox-root': {
        color: 'grey',
        pointerEvents: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

function SecondPage({dispatch,state}) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(state.agreementOption);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);

    // Dispatch the action with the selected option
    dispatch({ type: 'agreementOption', payload: option });
  };


  
  
  return (
    <>
    {/* <RenderIf predicate={creditOption === "Crédito Parcelado"}> */}
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
                checked={selectedOption ? selectedOption.includes('aposentado') : false}
                onChange={() => handleCheckboxChange('aposentado')}
                name="aposentado"
            />
          }
          label="Aposentado do INSS"
          className={classes.checkboxLabel}
        />
        <FormControlLabel
          control={
            <Checkbox
  checked={selectedOption ? selectedOption.includes('outrosOrgaos') : false}
  onChange={() => handleCheckboxChange('outrosOrgaos')}
  name="outrosOrgaos"
/>

          }
          label="Conveniado com outros órgãos"
          className={classes.checkboxLabel}
        />
        <FormControlLabel
          control={
            <Checkbox
  checked={selectedOption ? selectedOption.includes('nenhum') : false}
  onChange={() => handleCheckboxChange('nenhum')}
  name="nenhum"
/>

          }
          label="Nenhum Convênio"
          className={classes.checkboxLabel}
        />
      </div>
      {/* </RenderIf> */}
      {/* <RenderIf predicate={creditOption === "Antecipação 13"}>
        
      </RenderIf> */}
    </>
    
  );
}

export default SecondPage;
