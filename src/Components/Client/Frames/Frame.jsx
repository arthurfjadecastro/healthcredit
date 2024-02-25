import React from "react";
import "./frame.css";
import { customFormatNumber } from "./Resources";

const Frame = ({
  value,
  valueFirstInitialInstallment,
  lastInstallment,
  installments,
  rate
}) => {
  console.log(rate)
  return (
    <div className="frame">
      <h2 className="title">Valor Total Solicitado </h2>
      <div className="text-container">
        <p className="value">{value},00</p>
        <p className="installment">
          1ª prestação:{" "}
          <span style={{ color: "#FF6600" }}>
            R$ {customFormatNumber(valueFirstInitialInstallment)}
          </span>
        </p>
        <p className="last-installment">
          Última prestação:{" "}
          <span style={{ color: "#FF6600" }}>R$ {customFormatNumber(lastInstallment)} </span>
        </p>
        <p className="installments">
          Taxa de Juros: <span style={{ color: "#FF6600" }}>{(rate * 100).toFixed(2).replace('.', ',') + '%'}</span>
        </p>
        <p className="installments">
          Parcelas: <span style={{ color: "#FF6600" }}>{installments}x </span>{" "}
        
        </p>
      </div>
    </div>
  );
};

export default Frame;
