import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { useTheme } from "@mui/material/styles";
import main from "../images/main.jpeg";
import web from "../images/web.png";
import web2 from "../images/web2.jpeg";

export default function Portfolio() {
  const theme = useTheme();
  const logo = {
    width: "10rem",
  };

  const type = {
    fontFamily: "Josefin Sans",
    textTransform: "capitalize",
    fontWeight: "900",
    letterSpacing: ".1rem",
    fontSize: "1.5rem",
    marginTop: "1rem",
    color: "#202230",
  };

  const logoBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "16rem",
    margin: "2rem 4rem",
    height: "24rem",
    backgroundColor: "aliceblue",
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
            width: "90%",
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
              src={web}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={web2}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={main}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={main}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={main}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
          <Box sx={logoBox}>
            <Typography
              sx={logo}
              component="img"
              src={main}
              alt="skills"
            ></Typography>
            <Typography sx={type}>Demo Website</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}
