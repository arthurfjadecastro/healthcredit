import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { RenderIf } from "../../../Utils";
import { Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TakeLoan } from "../Loan";
import { SimulateDialog } from "../Dialogs";

const images = [
  "/Images/hand_holding.png",
  "/Images/user_shield.png",
  "/Images/chart_line.png",
];

const useStyles = makeStyles({
  root: {},
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "16px",
    backgroundColor: "linear-gradient(to right, #fff, #54BBAB)",
    padding: "16px",
  },
  card: {
    width: 128,
    height: 128,
    cursor: "pointer",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  highlightedCard: {
    border: "2px solid #005CA9",
  },
  media: {
    height: "100%",
  },
  cardName: {
    color: "white",
    fontSize: 16,
    fontWeight: "regular",
    textAlign: "center",
    marginTop: 8,
  },
  disabledCard: {
    cursor: "default",
    opacity: 0.3,
    boxShadow: "none",
    "&:hover": {
      transform: "none",
    },
  },
  disabledText: {
    color: "#979797",
  },
});

function ClientFlow({ currentPage, handlePageChange }) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginottom: "8px",
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#fff" }}>
              {"Qual opção você deseja financiar?"}
            </span>{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            className={classes.cardContainer}
          >
            {images.map((image, index) => (
              <Grid item key={index}>
                <Card
                  className={`${classes.card} ${
                    index === 0 ? classes.highlightedCard : ""
                  } ${index > 0 ? classes.disabledCard : ""}`}
                >
                  <CardMedia
                    className={classes.media}
                    image={image}
                    // title={`Image ${index + 1}`}
                    onClick={index === 0 ? () => setIsOpenDialog(true) : null}
                  />
                </Card>
                <Typography
                  className={`${classes.cardName} ${
                    index > 0 ? classes.disabledText : ""
                  }`}
                >
                  {index === 0 && "Estética"}
                  {index === 1 && "Oftalmologia"}
                  {index === 2 && "Fisioterapia"}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <TakeLoan isOpen={isOpenDialog} setClose={setIsOpenDialog} /> */}
      <SimulateDialog isOpen={isOpenDialog} setClose={setIsOpenDialog} />
    </>
  );
}

export default ClientFlow;
