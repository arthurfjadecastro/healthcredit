const customFormatNumber = (number) => {
    if (Number.isInteger(number)) {
      return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')},00`;
    }
  
    if (typeof number === 'number') {
      const parts = number.toFixed(2).split('.');
      const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const formattedDecimal = parts[1].length === 1 ? `${parts[1]}0` : parts[1];
      return `${formattedInteger},${formattedDecimal}`;
    }
  
    return number;
  };
  

  export default customFormatNumber;