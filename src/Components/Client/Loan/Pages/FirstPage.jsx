import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
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

function FirstPage({ dispatch,state }) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(state.creditOption);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);

    // Dispatch the action with the selected option
    dispatch({ type: 'creditOption', payload: option });
  };

  return (
    <>
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOption === 'Antecipação 13'}
              onChange={() => handleCheckboxChange('Antecipação 13')}
              name="Antecipação13"
              
            />
          }
          label="Antecipação 13"
          className={classes.checkboxLabel}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOption === 'Crédito Parcelado'}
              onChange={() => handleCheckboxChange('Crédito Parcelado')}
              name="Crédito Parcelado"
              // disabled
            />
          }
          label="Crédito Parcelado"
          className={classes.checkboxLabel}
        />
      </div>
    </>
  );
}

export default FirstPage;
