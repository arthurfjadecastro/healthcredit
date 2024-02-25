const formatMoney = (value, min = 0, max = 10000) => {
  if (typeof value !== "string") {
    throw new Error(`The value to be formatted must be of type string`);
  }

  if ([...value].filter((character) => /^\d$/.test(character)).length === 0) {
    return "";
  }

  const limited = (() => {
    const number = parseInt(
      [...value].filter((character) => /^\d$/.test(character)).join("")
    );
    if (number < min) return `${min}`;
    if (number > max) return `${max}`;
    return value;
  })();

  return [...limited]
    .filter((character) => /^\d$/.test(character)) // Filter numbers
    .join("") // Convert back to a string
    .replace(/^0*$/, "") // If the number is composed only of numbers then delete it
    .replace(/^0+([0-9]+)$/, "$1") // Remove leading zeros
    .replace(/^(\d{1,3})(\d{3})(\d{3})$/, "R$ $1.$2.$3") // Format the number like ###.###
    .replace(/^(\d{1,3})(\d{3})$/, "R$ $1.$2") // Format the number like ###.###
    .replace(/^(\d{1,3})$/, "R$ $1") // Format the number like ###
    .replace(/^(\d)$/, "R$ 0$1"); // Format the number like 0#%
};

const resetCursor = (inputRef) => {
  if (inputRef.current === null) return;
  if (inputRef.current.selectionStart === inputRef.current.selectionEnd) {
    inputRef.current.setSelectionRange(
      inputRef.current.value.length,
      inputRef.current.value.length
    );
  }
};

const createPercentageFormatter = (min, max) => {
  const format = (value) => formatMoney(value, min, max);
  format.resetCursor = resetCursor;
  return format;
};

export default createPercentageFormatter;
