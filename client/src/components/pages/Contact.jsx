import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Hire from "../layout/Hire";
import Navbar from "../layout/Navbar";
import Resume from "../layout/Resume";
import Footer from "./../layout/Footer";

export default function Contact() {
  const text = {
    letterSpacing: ".1rem",
    fontFamily: "Josefin Sans",
    marginY: ".5rem",
    marginX: "3.5rem",
  };
  return (
    <Fragment>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          color: "aliceblue",
          width: "100%",
          marginTop: "3rem",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            textTransform: "uppercase",
            fontWeight: "bolder",
            letterSpacing: ".1rem",
            fontSize: "1.5rem",
            color: "#f3aa0d",
            marginLeft: "3rem",
            marginY: ".5rem",
          }}
        >
          Parsonal Details
        </Typography>
        <Typography sx={text}>name : Amandeep Aulakh</Typography>
        <Typography sx={text}>Email : amandeepaulakh00000@gmail.com</Typography>
        <Typography sx={text}>Contact Number : 99913301118 </Typography>
      </Box>
      <Resume />
      <Hire />
      <Footer />
    </Fragment>
  );
}
