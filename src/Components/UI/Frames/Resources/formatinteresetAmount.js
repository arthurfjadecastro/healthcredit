const formatinteresetAmount = (number) => {
    if (Number.isInteger(number)) {
      return `${number},00`;
    }
  
    if (typeof number === 'number') {
      const formattedNumber = number.toFixed(2).replace('.', ',');
      return formattedNumber;
    }
  
    return number;
  };

  export default formatinteresetAmount;