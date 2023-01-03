import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const theme = useTheme();
  const [stateOpen, setStateOpen] = useState(false);
  const boxContainer = {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
  const BtnCss = {
    marginX: "1rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      paddingY: ".2rem",
      marginY: ".2rem",
      color: "aliceblue",
    },
  };

  return (
    <Fragment>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#202230",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              fontFamily: "Josefin Sans",
              fontSize: "1.2rem",
              textDecoration: "none",
              fontWeight: "700",
              letterSpacing: ".1rem",
              color: "aliceblue",
            }}
          >
            Amandeep Aulakh
          </Typography>
          <Box sx={boxContainer}>
            <Button sx={BtnCss} color="inherit" component={NavLink} to="/">
              Home
            </Button>
            <Button
              sx={BtnCss}
              color="inherit"
              component={NavLink}
              to="/portfolio"
            >
              Portfolio
            </Button>
            <Button
              sx={BtnCss}
              color="inherit"
              component={NavLink}
              to="/skills"
            >
              Skills
            </Button>
            <Button
              sx={BtnCss}
              color="inherit"
              component={NavLink}
              to="/contact"
            >
              Contact
            </Button>
          </Box>
          <IconButton
            onClick={() => setStateOpen(true)}
            sx={{
              display: "flex",
              color: "inherit",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={stateOpen}
            onClose={() => setStateOpen(false)}
          >
            <Box
              sx={{
                width: "15rem",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#23263A",
                paddingTop: ".5rem",
                [theme.breakpoints.down("sm")]: {
                  width: "10rem",
                },
              }}
            >
              <Button sx={BtnCss} color="inherit" component={NavLink} to="/">
                Home
              </Button>
              <Button sx={BtnCss} component={NavLink} to="/portfolio">
                Portfolio
              </Button>
              <Button
                sx={BtnCss}
                color="inherit"
                component={NavLink}
                to="/skills"
              >
                Skills
              </Button>
              <Button
                sx={BtnCss}
                color="inherit"
                component={NavLink}
                to="/contact"
              >
                Contact
              </Button>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
