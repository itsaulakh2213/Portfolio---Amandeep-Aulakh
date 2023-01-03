import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function Hire() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "20rem",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "80%",
          color: "aliceblue",
          backgroundColor: "#202230",
          height: "30%",
          boxShadow: "5px 5px 10px  rgba(0, 0, 0, 0.3)",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            height: "59%",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
            color: "aliceblue",
            width: "70%",
            paddingX: "2rem",
            fontSize: ".9rem",
            fontWeight: "500",
            textAlign: "justify",
            letterSpacing: "1px",
            [theme.breakpoints.down("sm")]: {},
          }}
        >
          if you want attractive, unique and resposive design so your wait is
          over{" "}
        </Typography>
        <Button
          sx={{
            width: "10rem",
            backgroundColor: "#f3aa0d",
            border: "1px solid #f3aa0d",
            height: "2.5rem",
            marginX: "2rem",
            color: "aliceblue",
            [theme.breakpoints.down("sm")]: {
              marginY: ".5rem",
              width: "70%",
            },
          }}
        >
          Hire me
        </Button>
      </Box>
    </Box>
  );
}
