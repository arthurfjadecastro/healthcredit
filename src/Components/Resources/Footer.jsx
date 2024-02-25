import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  const phoneNumbers = [
    "4004 0 105 (Alô HEALTHCREDIT - Capitais e Regiões Metropolitanas)",
    "0800 105 0 105 (Alô HEALTHCREDIT - Demais Regiões)",
    "0800 726 0208 (Atendimento HEALTHCREDIT PERSONALITÊ)",
    "0800 726 0102 (SAC)",
    "0800 725 7475 (Ouvidoria)",
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        // background:" linear-gradient(to right, #0900A9, #54BBAB)"
        // background: "linear-gradient(to right, #5a777f, #193f52)",
      }}
    >
      <Box
        p={1}
        // style={{ background: "linear-gradient(to right, #0900A9, #54BBAB)" }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <a
            href="https://pt-br.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }}
            />
          </a>
        </Box>
        <Typography
          variant="body2"
          style={{ color: "orange", textAlign: "center", fontWeight: 800 }}
        >
          HEALTHCREDIT
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "white", textAlign: "center" }}
        >
          Entre em contato conosco:
          <a
            href="mailto:seu-email@organizacao.com"
            style={{ marginLeft: "0.5rem", color: "white" }}
          >
            <Email style={{ verticalAlign: "middle", color: "white" }} />{" "}
            atendimento@healthcredit.com.br
          </a>
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "white", textAlign: "center" }}
        >
          Telefones:
          {phoneNumbers.map((phoneNumber, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span style={{ marginLeft: "0.5rem" }}>|</span>}
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: "black",
                  fontWeight: 400,
                }}
              >
                {phoneNumber}
              </span>
            </React.Fragment>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
