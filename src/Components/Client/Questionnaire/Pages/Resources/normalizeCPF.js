const normalizeCPF = (cpf) => {
  if (typeof cpf !== "string") return cpf;
  return [...cpf].filter((character) => /\d/.test(character)).join();
};

export default normalizeCPF;
