import React from "react";
import Navbar from "../layout/Navbar";
import { Fragment } from "react";
import { Box, CardMedia } from "@mui/material";
import main from "../images/main1.png";
import { Typography } from "@mui/material";
import "./Home.css";
import { createTheme } from "@mui/material/styles";
import Resume from "../layout/Resume";
import Service from "../layout/Service";
import Footer from "../layout/Footer";

export default function Home() {
  const theme = createTheme({
    breakpoints: {
      values: {
        smobile: 0,
        mobile: 470,
        tablet: 700,
        laptop: 1024,
      },
    },
  });
  return (
    <Fragment>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginY: "2rem",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "90%",
            marginTop: "3rem",
            [theme.breakpoints.down("tablet")]: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="title">
              <div>I Am</div>
              <ul className="title-ul">
                <li className="title-li">Amandeep Aulakh</li>
                <li className="title-li">Frontend developer</li>
              </ul>
            </div>
            <Typography
              component="p"
              sx={{
                color: "white",
                width: "21rem",
                fontSize: ".8rem",
                textAlign: "justify",
                fontFamily: "Josefin Sans",
                textTransform: "capitalize",
                [theme.breakpoints.down("laptop")]: {
                  width: "18rem",
                  fontSize: ".7rem",
                },
                [theme.breakpoints.down("tablet")]: {
                  width: "23rem",
                  fontSize: "1rem",
                },
                [theme.breakpoints.down("mobile")]: {
                  width: "15rem",
                  fontSize: ".8rem",
                },
              }}
            >
              i am create resposive, attractive web design and single page
              application according to your need
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: 500,
              [theme.breakpoints.down("laptop")]: {
                width: 350,
              },
              [theme.breakpoints.down("tablet")]: {
                width: 380,
              },
              [theme.breakpoints.down("mobile")]: {
                width: 270,
              },
            }}
            image={main}
            alt="Live from space album cover"
          />
        </Box>
      </Box>
      <Resume />
      <Service />
      <Footer />
    </Fragment>
  );
}
