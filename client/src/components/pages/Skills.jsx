import React from "react";
import Navbar from "../layout/Navbar";
import { Fragment } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import mui from "../images/mui.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import node from "../images/nodejs.png";
import { useTheme } from "@mui/material/styles";
import Footer from "../layout/Footer";

export default function Skills() {
  const theme = useTheme();
  const logo = {
    width: "5rem",
  };

  const logoBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15rem",
    margin: "2rem 4rem",
    height: "15rem",
    backgroundColor: "#202230",
    boxShadow: "5px 5px 10px  rgba(0, 0, 0, 0.3)",
  };
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
            width: "80%",
            flexWrap: "wrap",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
            },
          }}
        >
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={html}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={css}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={javascript}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={react}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={bootstrap}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={mui}
              alt="skills"
            ></Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={node}
              alt="skills"
            ></Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}
