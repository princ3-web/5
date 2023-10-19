import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Navbar = () => {

  const items = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Our Instructors", link: "/instructors" },
    { title: "Classes", link: "/classes" },
    { title: "Location", link: "/location" },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "120px",
        boxSizing: "border-box",
        px: "4rem",
      }}
    >
      <Box>
        <Typography color={grey[100]} variant="h4">
          Lotus Heart Yoga
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {items.map((item) => (
          <Link to={item.link} style={{color:"unset", textDecoration:"none"}}>
            <Typography color={grey[100]} sx={{ mx: "0.5rem", cursor: "pointer" }}>
              {item}
            </Typography>
          </Link>
        ))}
        <Button
          sx={{
            backgroundColor: grey[500],
            borderRadius: 0,
            textTransform: "none",
            ml: "2rem",
            px: "2.25rem",
            py: "1.25rem",
            fontSize: "16px",
            ":hover": {
              bgcolor: grey[600],
            },
          }}
          variant="contained"
          color="success"
        >
          Book a class
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
