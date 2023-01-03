import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const iconcss = {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  };
  return (
    <Fragment>
      <AppBar
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          color: "aliceblue",
          backgroundColor: "#202230",
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              [theme.breakpoints.down("sm")]: {
                fontSize: ".8rem",
              },
            }}
          >
            All Copyrights Reserved - 2023
          </Typography>
        </Toolbar>
        <Toolbar>
          <IconButton
            sx={{
              color: "aliceblue",
              marginRight: ".2rem",
            }}
          >
            <LinkedInIcon sx={iconcss} />
          </IconButton>
          <IconButton
            sx={{
              color: "aliceblue",
              marginRight: ".2rem",
            }}
          >
            <InstagramIcon sx={iconcss} />
          </IconButton>
          <IconButton
            sx={{
              color: "aliceblue",
              marginRight: ".2rem",
            }}
          >
            <GitHubIcon sx={iconcss}></GitHubIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
