import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,

  styled,

} from "@mui/material";
import { RenderIf } from "../../../Utils";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "8px",
  boxShadow: theme.shadows[2],
  backgroundColor: "#ffffff",
  width: 331,
  margin: "0 auto",
  marginTop: 16,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledTable = styled(Table)({
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed",
});

const StyledTableCell = styled(TableCell)({
  padding: "12px",
  border: "none",
  color: "#333",
  fontSize: 10,
  textAlign: "left",
  width: "50%",
});

const StyledBoldTableCell = styled(StyledTableCell)({
  fontWeight: "bold",
});

const SACTable = () => {
  return (
    <>
      <StyledTableRow>
        <StyledBoldTableCell>Modelo</StyledBoldTableCell>
        <StyledBoldTableCell>BELEZA CERTA</StyledBoldTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Amortização</StyledTableCell>
        <StyledTableCell>Amortização constante</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Parcelas</StyledTableCell>
        <StyledTableCell>
          Parcelas iniciais mais altas e redução progressiva
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Benefícios</StyledTableCell>
        <StyledTableCell>Menor custo total de financiamento</StyledTableCell>
      </StyledTableRow>
    </>
  );
};

const PRICETable = () => {
  return (
    <>
      <StyledTableRow>
        <StyledBoldTableCell>Modelo</StyledBoldTableCell>
        <StyledBoldTableCell>FLEX PRICE</StyledBoldTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Amortização</StyledTableCell>
        <StyledTableCell>Amortização gradual</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Parcelas</StyledTableCell>
        <StyledTableCell>Parcelas constantes ao longo do tempo</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Benefícios</StyledTableCell>
        <StyledTableCell>Maior previsibilidade das parcelas</StyledTableCell>
      </StyledTableRow>
    </>
  );
};

const TableContainerInfo = ({ activeButton }) => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <TableBody>
          <RenderIf predicate={activeButton === "PRICE"}>
            <PRICETable />
          </RenderIf>
          <RenderIf predicate={activeButton === "SAC"}>
            <SACTable />
          </RenderIf>
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default TableContainerInfo;
