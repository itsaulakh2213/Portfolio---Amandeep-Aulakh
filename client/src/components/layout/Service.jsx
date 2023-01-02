import { Box, Typography } from "@mui/material";
import React from "react";

export default function Service() {
  const BoxTitle = {
    fontFamily: "Josefin Sans",
    textTransform: "uppercase",
    color: "aliceblue",
    fontSize: "1rem",
    fontWeight: "bolder",
    marginY: "1rem",
    textShadow :"0px 0px 10px  rgba(0, 0, 0, 0.4)",
  };
  const boxSelf = {
    display: "flex",
    width: "15rem",
    flexDirection: "column",
    alignItems: "center",
    height: "15rem",
    margin: "1rem",
    backgroundColor: "#202230",
    border:"none",
    borderRadius: "0.3rem",
    
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        marginY:"3rem",
        paddingY: "3rem",
        flexWrap: "wrap",
        color: "aliceblue",
      }}
    >
      <Box
        sx={boxSelf}
      >
        <Typography sx={BoxTitle}>UI UX designer</Typography>
        <Typography
          sx={{
            width: "12rem",
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
            color: "aliceblue",
            fontSize: ".6rem",
            textAlign: "justify",
            lineHeight: "1rem",
           
            
          }}
        >
          UI UX designers create the user interface for an app, website, or
          other interactive media. Their work includes collaborating with
          product managers and engineers to gather requirements from users
          before designing ideas that can be communicated using storyboards.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "15rem",
          flexDirection: "column",
          alignItems: "center",
          height: "15rem",
          margin: "1rem",
          backgroundColor: "#f3aa0d ",
          border:"none",
          borderRadius: "0.3rem",
          boxShadow:"1px 0px 10px  rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography sx={BoxTitle}>Frontend Developer</Typography>
        <Typography
          sx={{
            width: "12rem",
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
            color: "aliceblue",
            fontSize: ".6rem",
            textAlign: "justify",
            lineHeight: "1rem",
            
          }}
        >
          A Front-End Developer is responsible for developing new user-facing
          features, determining the structure and design of web pages, building
          reusable codes, optimizing page loading times, and using a variety of
          markup languages to create the web pages.
        </Typography>
      </Box>
      <Box
        sx={boxSelf}
      >
        <Typography sx={BoxTitle}>Web designer</Typography>
        <Typography
          sx={{
            width: "12rem",
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
            color: "aliceblue",
            fontSize: ".6rem",
            textAlign: "justify",
            lineHeight: "1rem",
          }}
        >
          A web designer is responsible for creating the design and layout of a
          website or web pages. It and can mean working on a brand new website
          or updating an already existing site.
        </Typography>
      </Box>
    </Box>
  );
}
