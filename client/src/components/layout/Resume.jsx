import { Box, Button, List, ListItem } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import men from "../images/men.jpg";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";


export default function Resume() {
  const theme = createTheme({
    breakpoints: {
      values: {
        smobile: 0,
        mobile: 530,
        tablet: 800,
        laptop: 1024,
      },
    },
  });
  return (
    <Fragment>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#202230",
          [theme.breakpoints.down("tablet")]: {
            flexDirection: "column",
            height: "55rem",
        },
        }}
      >
        <Box>
        <Typography
            
            component="img"
            sx={{    
                width: 250,
                [theme.breakpoints.down("tablet")]: {
                    width: 270,
                },
            }}
            src={men}
            alt="Live from space album cover"
            />
            </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              textTransform: "uppercase",
              
              color: "white",
              fontSize: "2rem",
              fontWeight: "bolder",
            }}
          >
            About me
          </Typography>
          <Typography
            
                sx={{
                    fontFamily: "Josefin Sans",
                    textTransform: "capitalize",
                    color: "aliceblue",
                    width:"35rem",
                    fontSize: ".8rem",
                    textAlign:"justify",
                    lineHeight:"1.5rem",
                    marginY:"1rem",
                    [theme.breakpoints.down("laptop")]: {
                        width: "30rem",
                    },
                    [theme.breakpoints.down("mobile")]: {
                        width: "20rem",
                    },
                  }}
                  
           
          >
            i am amandeep aulakh and i am a Frontend developer. A FrontEnd
            Developer is responsible for developing new user-facing features,
            determining the structure and design of web pages, building reusable
            codes, optimizing page loading times, and using a variety of markup
            languages to create the web pages.
          </Typography>
          <Box  sx={{
            position: "relative",
            width: "30rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            color: "aliceblue",
            fontWeight: "500",
            textTransform:"uppercase",
            fontSize:".9rem",
            [theme.breakpoints.down("mobile")]: {
                width: "20rem",
            }
          }}>
            <List  >
              <ListItem>HTMl</ListItem>
              <ListItem>css</ListItem>
              <ListItem>Boostrap</ListItem>
            </List>
            <List>
              <ListItem>javascript</ListItem>
              <ListItem>react js</ListItem>

              <ListItem>material ui</ListItem>
            </List>
          </Box>
          <Box sx={{
            position: "relative",
            width: "30rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            [theme.breakpoints.down("mobile")]: {
                width: "20rem",
            },}}>
            <Button
              sx={{
                width:"10rem",
                backgroundColor: "#f3aa0d",
                border: "1px solid #f3aa0d",
                color: "aliceblue",
                [theme.breakpoints.down("mobile")]: {
                    width: "8rem",
                }
              }}
            >
              Hire me
            </Button>
            <Button
              sx={{
                width:"10rem",
                border: "1px solid aliceblue",
                color: "aliceblue",
                marginY:"1rem",
                [theme.breakpoints.down("mobile")]: {
                    width: "8rem",
                }
              }}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
