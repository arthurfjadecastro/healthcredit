const handleKeyPress =
  (prop, keys = [13]) =>
  (event) => {
    if (keys.filter((key) => key === event.charCode).length >= 1)
      prop(event.charCode, event);
  };

export default handleKeyPress;
