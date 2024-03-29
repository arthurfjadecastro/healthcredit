import React, { useState } from "react";
import { Footer, Navbar } from "../Resources";
import { Grid } from "@mui/material";
import ClientFlow from "./ClientFlow/ClientFlow";

function Client() {
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPage(page + 1);
  };

  return (
    <>
      <Navbar login={false} logout={true} />
      <Grid
        container
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #118d97, #032f4c)",
        }}
      >
        <Grid style={{ display: "flex" }} item xs={6}>
          <ClientFlow handlePageChange={handlePageChange} currentPage={page} />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            backgroundImage: `url(${"/Images/back_three.png"})`,
            backgroundSize: "intehirt",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Client;
